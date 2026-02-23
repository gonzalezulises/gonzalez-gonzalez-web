"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  service: z.string().min(1),
  message: z.string().min(10),
});

type ActionState = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
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

  // If no Resend API key, log and succeed (dev mode)
  if (!process.env.RESEND_API_KEY) {
    console.log("[DEV] Contact form submission:", { name, email, phone, service, message });
    return { success: true };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "González & González Web <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@gonzalezygonzalez.com",
      replyTo: email,
      subject: `Nuevo contacto: ${name} - ${service}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="padding:8px;font-weight:bold;">Nombre:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Teléfono:</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Servicio:</td><td style="padding:8px;">${service}</td></tr>
        </table>
        <h3>Mensaje:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Error al enviar el mensaje. Intente nuevamente." };
  }
}
