import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm text-white/90 mb-8">
            <ShieldCheck className="h-4 w-4" />
            Contadores Públicos Autorizados en Panamá
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Su aliado en{" "}
            <span className="text-secondary-light">contabilidad</span> y{" "}
            <span className="text-secondary-light">auditoría</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            En González &amp; González brindamos servicios profesionales de
            contabilidad, auditoría financiera y asesoría fiscal. Su tranquilidad
            financiera es nuestra prioridad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Solicitar Consulta
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 text-white px-8 py-4 text-base font-medium transition-all hover:bg-white/10"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C360 0 720 0 1080 30C1260 45 1440 60 1440 60H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
