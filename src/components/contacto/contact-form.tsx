"use client";

import { useActionState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { sendContactEmail } from "@/app/contacto/action";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
  });

  if (state.success) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center animate-fade-in">
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
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Nombre completo
          </label>
          <input id="name" name="name" type="text" required minLength={2} placeholder="Su nombre" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="su@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Teléfono
          </label>
          <input id="phone" name="phone" type="tel" required minLength={7} placeholder="+507 0000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
            Servicio de interés
          </label>
          <select id="service" name="service" required className={inputClass}>
            <option value="">Seleccione un servicio</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder="Describa brevemente cómo podemos ayudarle..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
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
