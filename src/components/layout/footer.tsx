import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold text-white">
                {BUSINESS.name}
              </h3>
              <p className="text-sm tracking-[0.15em] text-white/60 uppercase">
                {BUSINESS.tagline}
              </p>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Servicios profesionales de contabilidad, auditoría y asesoría
              fiscal en Panamá. Contadores Públicos Autorizados.
            </p>
            <p className="text-xs text-white/40 mt-4">
              RUC: {BUSINESS.ruc} DV {BUSINESS.dv}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
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
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 4).map((service) => (
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

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin className="h-5 w-5 text-secondary-light shrink-0 mt-0.5" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone className="h-5 w-5 text-secondary-light shrink-0" />
                <span>{BUSINESS.phone}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail className="h-5 w-5 text-secondary-light shrink-0" />
                <span>{BUSINESS.email}</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock className="h-5 w-5 text-secondary-light shrink-0" />
                <div>
                  <p>{BUSINESS.schedule.weekdays}</p>
                  <p>{BUSINESS.schedule.saturday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {BUSINESS.fullName}. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            Ciudad de Panamá, Panamá
          </p>
        </div>
      </div>
    </footer>
  );
}
