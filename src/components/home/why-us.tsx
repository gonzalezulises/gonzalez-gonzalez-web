import { Award, UserCheck, Scale, Zap } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  UserCheck,
  Scale,
  Zap,
};

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - text */}
          <ScrollReveal>
            <div>
              <div className="section-line mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Confianza y profesionalismo en{" "}
                <span className="text-gradient bg-clip-text" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(135deg, #8B5A2C, #B8860B)" }}>
                  cada servicio
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-10">
                En González &amp; González nos distinguimos por ofrecer un
                servicio contable y de auditoría con los más altos estándares
                profesionales. Nuestro compromiso es ser el aliado financiero
                que su empresa necesita.
              </p>

              {/* Stats row */}
              <div className="flex gap-10">
                {[
                  { value: "12+", label: "Clientes" },
                  { value: "CPA", label: "Autorizados" },
                  { value: "100%", label: "Compromiso" },
                ].map((s, i) => (
                  <div key={i} className="relative">
                    <p className="font-serif text-4xl font-bold text-primary">
                      {s.value}
                    </p>
                    <p className="text-sm text-muted mt-1">{s.label}</p>
                    {i < 2 && (
                      <div className="absolute top-0 -right-5 h-full w-px bg-border hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - cards */}
          <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={i}
                    className="reveal gradient-border rounded-2xl bg-surface p-6 card-lift border border-border"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary mb-4">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-[15px]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
