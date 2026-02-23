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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  ShieldCheck,
  Calculator,
  FileText,
  Users,
  TrendingUp,
};

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Soluciones contables integrales
          </h2>
          <p className="text-muted leading-relaxed">
            Ofrecemos una gama completa de servicios profesionales para empresas
            y personas en Panamá.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-surface border border-border p-8 transition-all hover:shadow-lg hover:border-secondary/30 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {Icon && <Icon className="h-7 w-7" />}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
