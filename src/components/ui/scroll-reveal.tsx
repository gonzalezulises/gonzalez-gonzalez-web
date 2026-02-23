"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({ children, className, stagger }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Add visible to the container and all .reveal children
            entry.target.classList.add("visible");
            entry.target.querySelectorAll(".reveal").forEach((child) => {
              child.classList.add("visible");
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", stagger && "reveal-stagger", className)}
    >
      {children}
    </div>
  );
}
