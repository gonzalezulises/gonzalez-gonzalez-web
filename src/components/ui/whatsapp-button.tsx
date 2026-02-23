"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20me%20interesa%20conocer%20sus%20servicios%20contables.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      )}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      <span className="relative flex items-center gap-2 px-5 py-3.5">
        <MessageCircle className="h-5 w-5" fill="currentColor" />
        <span className="hidden sm:inline text-sm font-semibold">¿Necesita ayuda?</span>
      </span>
    </a>
  );
}
