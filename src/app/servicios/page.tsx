import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ShieldCheck,
  Calculator,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios profesionales de contabilidad, auditoría financiera, asesoría fiscal, trámites ante la DGI, nóminas y consultoría empresarial en Panamá.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  ShieldCheck,
  Calculator,
  FileText,
  Users,
  TrendingUp,
};

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-3">
              Nuestros Servicios
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Soluciones contables y financieras a su medida
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Brindamos servicios profesionales respaldados por la normativa
              vigente y los más altos estándares de calidad. Cada solución se
              adapta a las necesidades específicas de su negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon card */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-28 h-28 rounded-2xl bg-primary/10 text-primary">
                      {Icon && <Icon className="h-14 w-14" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                      <span className="w-8 h-px bg-secondary" />
                      Servicio {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                    >
                      Solicitar este servicio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ¿No encuentra el servicio que necesita?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Contáctenos y con gusto evaluaremos cómo podemos ayudarle con sus
            necesidades contables y financieras.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-colors"
          >
            Contáctenos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
