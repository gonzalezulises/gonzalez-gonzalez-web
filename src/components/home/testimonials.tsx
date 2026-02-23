import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TESTIMONIALS = [
  {
    quote:
      "González & González ha sido fundamental para el orden financiero de nuestra empresa. Su asesoría fiscal nos ha permitido tomar mejores decisiones.",
    author: "Representante",
    company: "South Cargo Corp, S.A.",
  },
  {
    quote:
      "Profesionales comprometidos y puntuales en la entrega de reportes. Recomendados para cualquier empresa que necesite servicios contables confiables.",
    author: "Representante",
    company: "Prozess Group, S.A.",
  },
  {
    quote:
      "Excelente servicio de auditoría. Nos ayudaron a identificar áreas de mejora y a fortalecer nuestros controles internos.",
    author: "Representante",
    company: "Constructora Colpan, S.A.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Testimonios
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Lo que dicen nuestros clientes
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="reveal relative rounded-2xl bg-surface border border-border p-8"
              >
                <Quote className="h-8 w-8 text-secondary/30 mb-4" />
                <p className="text-muted leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
