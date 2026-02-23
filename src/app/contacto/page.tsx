import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/contacto/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para servicios de contabilidad, auditoría y asesoría fiscal en Panamá. Bethania, Miraflores, Ciudad de Panamá. WhatsApp +507 6288-8162.",
  alternates: { canonical: "https://gonzalez-gonzalez-web.vercel.app/contacto" },
  keywords: ["contacto contadores", "teléfono", "WhatsApp", "email", "Bethania", "Miraflores", "cita contable"],
  openGraph: {
    title: "Contacto | González & González Contadores & Auditores",
    description: "Contáctenos para una consulta. Calle Ottawa, PH Pasarela, Miraflores, Bethania. WhatsApp +507 6288-8162.",
    url: "https://gonzalez-gonzalez-web.vercel.app/contacto",
    type: "website",
    locale: "es_PA",
  },
};

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Dirección",
    content: (
      <>
        {BUSINESS.address.street}
        <br />
        {BUSINESS.address.neighborhood}, {BUSINESS.address.district}
        <br />
        {BUSINESS.address.city}, {BUSINESS.address.country}
      </>
    ),
    href: undefined,
  },
  {
    icon: Phone,
    label: "Teléfono",
    content: BUSINESS.phone,
    href: `tel:${BUSINESS.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    content: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    content: "Escríbanos por WhatsApp",
    href: `https://wa.me/${BUSINESS.whatsapp}`,
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden grain pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-primary via-primary-light to-secondary" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/10 px-4 py-2 text-sm text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-light" />
              Contacto
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hablemos de sus{" "}
              <span className="text-secondary-light">necesidades</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Complete el formulario o utilice nuestros datos de contacto. Le
              responderemos a la brevedad posible.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1440 60 1440 60H0Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="section-line mb-6" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Envíenos un mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {CONTACT_INFO.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith("http") ? "_blank" as const : undefined,
                        rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {};
                  return (
                    <Wrapper
                      key={i}
                      {...wrapperProps}
                      className="gradient-border flex gap-4 rounded-2xl bg-surface border border-border p-5 card-lift"
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted leading-relaxed mt-0.5">
                          {item.content}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Schedule */}
              <div className="gradient-border rounded-2xl bg-surface border border-border p-5">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Horario
                    </p>
                    <div className="text-sm text-muted space-y-1 mt-0.5">
                      <p>{BUSINESS.schedule.weekdays}</p>
                      <p>{BUSINESS.schedule.saturday}</p>
                      <p>{BUSINESS.schedule.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/[0.04] to-secondary/[0.04] border border-border overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="h-10 w-10 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-foreground">
                      {BUSINESS.address.neighborhood},{" "}
                      {BUSINESS.address.district}
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
