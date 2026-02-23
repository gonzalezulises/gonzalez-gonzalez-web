import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 shimmer-bar" />

      <div className="bg-primary text-white relative">
        {/* Subtle orb */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-16 mb-16 border-b border-white/10">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                ¿Listo para empezar?
              </h3>
              <p className="text-white/50 mt-1">
                Hablemos sobre las necesidades de su empresa.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contacto"
                className="rounded-xl bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-all"
              >
                Contáctenos
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <h3 className="font-serif text-xl font-bold text-white">
                  {BUSINESS.name}
                </h3>
                <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase mt-0.5">
                  {BUSINESS.tagline}
                </p>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Servicios profesionales de contabilidad, auditoría y asesoría
                fiscal en Panamá.
              </p>
              <p className="text-xs text-white/25 mt-4">
                RUC: {BUSINESS.ruc} DV {BUSINESS.dv}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
                Navegación
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
                Servicios
              </h4>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/servicios#${service.id}`}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
                Contacto
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-secondary-light/70 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{BUSINESS.address.full}</span>
                </li>
                <li>
                  <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors">
                    <Phone className="h-4 w-4 text-secondary-light/70 shrink-0" />
                    <span>{BUSINESS.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="flex gap-3 text-sm text-white/60 hover:text-white transition-colors">
                    <Mail className="h-4 w-4 text-secondary-light/70 shrink-0" />
                    <span>{BUSINESS.email}</span>
                  </a>
                </li>
                <li className="flex gap-3 text-sm text-white/60">
                  <Clock className="h-4 w-4 text-secondary-light/70 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <p>{BUSINESS.schedule.weekdays}</p>
                    <p>{BUSINESS.schedule.saturday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} {BUSINESS.fullName}. Todos los
              derechos reservados.
            </p>
            <p className="text-xs text-white/30">
              Ciudad de Panamá, Panamá
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
