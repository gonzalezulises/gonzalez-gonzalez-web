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
      <section className="relative overflow-hidden grain pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-primary via-primary-light to-secondary" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/10 px-4 py-2 text-sm text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-light" />
              Nuestros Servicios
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Soluciones contables y financieras{" "}
              <span className="text-secondary-light">a su medida</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Brindamos servicios profesionales respaldados por la normativa
              vigente y los más altos estándares de calidad.
            </p>
          </div>
        </div>
        {/* Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1440 60 1440 60H0Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center scroll-mt-28 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon card */}
                  <div className="flex-shrink-0">
                    <div className="relative flex items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                      {Icon && <Icon className="h-14 w-14" />}
                      <span className="absolute -top-3 -right-3 font-serif text-6xl font-bold text-primary/[0.06] select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="section-line mb-4" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <Link
                      href="/contacto"
                      className="group inline-flex items-center gap-2 rounded-xl bg-primary/5 border border-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Solicitar este servicio
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl grain">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10" />
            <div className="relative px-8 py-14 sm:px-16 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                ¿No encuentra el servicio que necesita?
              </h2>
              <p className="text-muted mb-8 max-w-xl mx-auto">
                Contáctenos y con gusto evaluaremos cómo podemos ayudarle con
                sus necesidades contables y financieras.
              </p>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Contáctenos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
