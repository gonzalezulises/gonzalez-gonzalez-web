import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CtaBanner() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl grain">
            {/* Animated gradient bg */}
            <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-primary via-primary-light to-secondary" />

            {/* Floating orbs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                ¿Listo para poner sus <br className="hidden sm:block" />
                finanzas en orden?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
                Solicite una consulta sin compromiso. Nuestro equipo de
                contadores públicos autorizados está listo para atenderle.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-8 py-4 text-base font-semibold transition-all hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Solicitar Consulta
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20me%20interesa%20agendar%20una%20consulta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 glass-dark text-white px-8 py-4 text-base font-medium transition-all hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
