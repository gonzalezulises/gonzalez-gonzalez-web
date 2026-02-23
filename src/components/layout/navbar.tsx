"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-2"
          : "py-3"
      )}
    >
      <nav
        aria-label="Navegación principal"
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 rounded-none sm:rounded-2xl",
          scrolled
            ? "glass shadow-lg shadow-primary/[0.04] sm:mx-4 lg:mx-auto"
            : "bg-transparent"
        )}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-primary leading-tight group-hover:text-primary-light transition-colors">
                {BUSINESS.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-secondary/70 uppercase">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                  pathname === link.href
                    ? "text-primary bg-primary/[0.06]"
                    : "text-muted hover:text-primary hover:bg-primary/[0.04]"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="group ml-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-light hover:shadow-md hover:shadow-primary/20"
            >
              Contáctenos
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/5 transition-colors"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          id="mobile-nav"
          role="region"
          aria-label="Menú de navegación móvil"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            mobileOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="border-t border-border/50 pt-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-medium transition-all",
                  pathname === link.href
                    ? "bg-primary/[0.06] text-primary"
                    : "text-muted hover:bg-primary/[0.04] hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white"
              >
                Contáctenos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
