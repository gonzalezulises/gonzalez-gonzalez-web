import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/contacto/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para servicios de contabilidad, auditoría y asesoría fiscal en Panamá. Bethania, Miraflores, Ciudad de Panamá.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-3">
              Contacto
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Hablemos de sus necesidades
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Complete el formulario o utilice nuestros datos de contacto.
              Le responderemos a la brevedad posible.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Envíenos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Información de contacto
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Dirección</p>
                      <p className="text-sm text-muted leading-relaxed">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.neighborhood}, {BUSINESS.address.district}
                        <br />
                        {BUSINESS.address.city}, {BUSINESS.address.country}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Teléfono</p>
                      <a
                        href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Email</p>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Horario</p>
                      <div className="text-sm text-muted space-y-1">
                        <p>{BUSINESS.schedule.weekdays}</p>
                        <p>{BUSINESS.schedule.saturday}</p>
                        <p>{BUSINESS.schedule.sunday}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-primary/5 border border-border overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="text-sm font-semibold text-foreground">
                      {BUSINESS.address.neighborhood}, {BUSINESS.address.district}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {BUSINESS.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
