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
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Soluciones contables integrales
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Ofrecemos una gama completa de servicios profesionales para
              empresas y personas en Panamá.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  href={`/servicios#${service.id}`}
                  key={service.id}
                  className="reveal group gradient-border relative rounded-2xl bg-surface p-8 card-lift border border-border"
                >
                  {/* Number watermark */}
                  <span className="absolute top-6 right-6 font-serif text-5xl font-bold text-primary/[0.04] group-hover:text-primary/[0.08] transition-colors select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6 group-hover:from-primary group-hover:to-primary-light group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="h-7 w-7" />}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Conocer más
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-14">
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary/5 border border-primary/10 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Ver todos los servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
