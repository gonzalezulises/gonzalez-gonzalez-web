import { Award, UserCheck, Scale, Zap } from "lucide-react";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  UserCheck,
  Scale,
  Zap,
};

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-primary/[0.03]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              ¿Por qué elegirnos?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Confianza y profesionalismo en cada servicio
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              En González &amp; González nos distinguimos por ofrecer un servicio
              contable y de auditoría con los más altos estándares profesionales.
              Nuestro compromiso es ser el aliado financiero que su empresa
              necesita.
            </p>

            {/* Stats inline */}
            <div className="flex gap-8">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted">Clientes activos</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">CPA</p>
                <p className="text-sm text-muted">Autorizados</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted">Compromiso</p>
              </div>
            </div>
          </div>

          {/* Right side - cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_US.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-surface border border-border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-4">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
