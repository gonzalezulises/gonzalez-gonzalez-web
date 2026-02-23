"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[App Error]", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-500 mb-6">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
          Algo salió mal
        </h1>
        <p className="text-muted mb-8">
          Disculpe las molestias. Por favor intente nuevamente o regrese a la página de inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Intentar nuevamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/5 text-primary border border-primary/10 px-6 py-3 text-sm font-semibold hover:bg-primary/10 transition-colors"
          >
            <Home className="h-4 w-4" />
            Ir a inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
