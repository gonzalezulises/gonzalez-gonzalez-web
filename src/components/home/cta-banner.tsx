import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-primary to-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          ¿Listo para poner sus finanzas en orden?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Solicite una consulta sin compromiso. Nuestro equipo de contadores
          públicos autorizados está listo para atenderle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Solicitar Consulta
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 text-white px-8 py-4 text-base font-medium transition-all hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
