"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-primary leading-tight">
                {BUSINESS.name}
              </span>
              <span className="text-xs tracking-[0.2em] text-secondary uppercase">
                {BUSINESS.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              <Phone className="h-4 w-4" />
              Contáctenos
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-primary/5 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
              >
                <Phone className="h-4 w-4" />
                Contáctenos
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
