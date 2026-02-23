"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingrese un email válido"),
  phone: z.string().min(7, "Ingrese un número de teléfono válido"),
  service: z.string().min(1, "Seleccione un servicio"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // TODO: Integrate with Resend or other email service
    console.log("Form data:", data);
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          Mensaje enviado
        </h3>
        <p className="text-muted">
          Gracias por contactarnos. Le responderemos a la brevedad posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Nombre completo
          </label>
          <input
            id="name"
            type="text"
            placeholder="Su nombre"
            {...register("name")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="su@email.com"
            {...register("email")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+507 0000-0000"
            {...register("phone")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Servicio de interés
          </label>
          <select
            id="service"
            {...register("service")}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          >
            <option value="">Seleccione un servicio</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="otro">Otro</option>
          </select>
          {errors.service && (
            <p className="text-xs text-red-600 mt-1">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describa brevemente cómo podemos ayudarle..."
          {...register("message")}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
}
