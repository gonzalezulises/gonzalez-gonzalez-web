import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 pt-24">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl font-bold text-primary/10 mb-2">404</p>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6">
          <Search className="h-8 w-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
          Página no encontrada
        </h1>
        <p className="text-muted mb-8">
          La página que busca no existe o fue movida. Utilice los enlaces a continuación para navegar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            Volver a inicio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/5 text-primary border border-primary/10 px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
