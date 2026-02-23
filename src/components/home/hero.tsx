import Link from "next/link";
import { ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";
import { BUSINESS, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-primary via-primary-light to-secondary" />

      {/* Floating accent orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-32 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-white/5 blur-2xl animate-pulse-glow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm text-white/90 mb-8 border border-white/10">
              <ShieldCheck className="h-4 w-4 text-secondary-light" />
              <span>Contadores Públicos Autorizados</span>
              <span className="h-1 w-1 rounded-full bg-secondary-light" />
              <span className="text-white/60">Panamá</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Su aliado en{" "}
              <span className="text-gradient bg-clip-text" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(135deg, #d4a574, #B8860B, #A67C52)" }}>
                contabilidad
              </span>{" "}
              y{" "}
              <span className="text-gradient bg-clip-text" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(135deg, #d4a574, #B8860B, #A67C52)" }}>
                auditoría
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Brindamos servicios profesionales de contabilidad, auditoría
              financiera y asesoría fiscal. Su tranquilidad financiera es
              nuestra prioridad.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-primary px-8 py-4 text-base font-semibold transition-all hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Solicitar Consulta
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20me%20interesa%20conocer%20sus%20servicios%20contables.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 glass-dark text-white px-8 py-4 text-base font-medium transition-all hover:bg-white/10 hover:border-white/30"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 text-white/50 text-sm">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-primary bg-gradient-to-br from-secondary-light to-secondary flex items-center justify-center text-[10px] font-bold text-white"
                  >
                    {["SC", "PG", "CC", "PP"][i]}
                  </div>
                ))}
              </div>
              <span>Empresas confían en nosotros</span>
            </div>
          </div>

          {/* Right — Bento stats grid */}
          <div className="lg:col-span-2 hidden lg:grid grid-cols-2 gap-3">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`glass-dark rounded-2xl border border-white/10 p-6 ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <p className="font-serif text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 80V40C240 10 480 0 720 10C960 20 1200 50 1440 40V80H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
