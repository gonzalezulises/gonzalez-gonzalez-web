"use server";

import { z } from "zod";
import { Resend } from "resend";

// HTML escape to prevent XSS in emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Strict validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nombre muy corto")
    .max(100, "Nombre muy largo")
    .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ\s.\-']+$/, "Nombre contiene caracteres inválidos"),
  email: z.string().email("Email inválido").max(254),
  phone: z
    .string()
    .min(7, "Teléfono muy corto")
    .max(20, "Teléfono muy largo")
    .regex(/^[+\d\s\-()]+$/, "Formato de teléfono inválido"),
  service: z.enum([
    "contabilidad",
    "auditoria",
    "asesoria-fiscal",
    "tramites-dgi",
    "nominas",
    "consultoria",
    "otro",
  ]),
  message: z.string().min(10, "Mensaje muy corto").max(2000, "Mensaje muy largo"),
});

type ActionState = {
  success: boolean;
  error?: string;
};

// Simple in-memory rate limiting (per server instance)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = submissions.get(ip) ?? [];
  const recent = times.filter((t) => now - t < RATE_LIMIT_WINDOW);
  submissions.set(ip, recent);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function sendContactEmail(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Rate limiting
  const ip = "server"; // In production, extract from headers
  if (isRateLimited(ip)) {
    return { success: false, error: "Demasiados envíos. Espere un momento e intente de nuevo." };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { success: false, error: "Por favor complete todos los campos correctamente." };
  }

  const { name, email, phone, service, message } = parsed.data;

  // Sanitize all values for HTML output
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    service: escapeHtml(service),
    message: escapeHtml(message).replace(/\n/g, "<br>"),
  };

  // Dev mode fallback
  if (!process.env.RESEND_API_KEY) {
    console.log("[DEV] Contact form received from:", safe.name, safe.email);
    return { success: true };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `González & González Web <${process.env.RESEND_FROM || "onboarding@resend.dev"}>`,
      to: process.env.CONTACT_EMAIL || "info@gonzalezygonzalez.com",
      replyTo: email,
      subject: `Nuevo contacto: ${safe.name} - ${safe.service}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#4E2B15;border-bottom:2px solid #8B5A2C;padding-bottom:8px;">
            Nuevo mensaje de contacto
          </h2>
          <table style="border-collapse:collapse;width:100%;margin:16px 0;">
            <tr style="background:#f9f7f5;"><td style="padding:10px;font-weight:bold;width:120px;">Nombre:</td><td style="padding:10px;">${safe.name}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;">Email:</td><td style="padding:10px;">${safe.email}</td></tr>
            <tr style="background:#f9f7f5;"><td style="padding:10px;font-weight:bold;">Teléfono:</td><td style="padding:10px;">${safe.phone}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;">Servicio:</td><td style="padding:10px;">${safe.service}</td></tr>
          </table>
          <h3 style="color:#4E2B15;">Mensaje:</h3>
          <p style="background:#f9f7f5;padding:16px;border-radius:8px;line-height:1.6;">${safe.message}</p>
          <hr style="border:none;border-top:1px solid #E8E0D8;margin:24px 0;" />
          <p style="font-size:12px;color:#6B7280;">Enviado desde gonzalez-gonzalez-web.vercel.app</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("[Contact Form Error]", error instanceof Error ? error.message : error);
    return { success: false, error: "Error al enviar el mensaje. Intente nuevamente." };
  }
}
