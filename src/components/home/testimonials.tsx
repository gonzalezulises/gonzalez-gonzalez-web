import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const TESTIMONIALS = [
  {
    quote:
      "González & González ha sido fundamental para el orden financiero de nuestra empresa. Su asesoría fiscal nos ha permitido tomar mejores decisiones.",
    author: "Representante",
    company: "South Cargo Corp, S.A.",
    initials: "SC",
  },
  {
    quote:
      "Profesionales comprometidos y puntuales en la entrega de reportes. Recomendados para cualquier empresa que necesite servicios contables confiables.",
    author: "Representante",
    company: "Prozess Group, S.A.",
    initials: "PG",
  },
  {
    quote:
      "Excelente servicio de auditoría. Nos ayudaron a identificar áreas de mejora y a fortalecer nuestros controles internos.",
    author: "Representante",
    company: "Constructora Colpan, S.A.",
    initials: "CC",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.015] to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-muted text-lg">
              Empresas que confían en nuestros servicios profesionales.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="reveal gradient-border group relative rounded-2xl bg-surface border border-border p-8 card-lift"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-secondary/20 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-8 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
