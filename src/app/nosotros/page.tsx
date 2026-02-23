import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  ArrowRight,
  Building2,
  Scale,
  Handshake,
  Lightbulb,
  Heart,
} from "lucide-react";
import { BUSINESS, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca a González & González Contadores & Auditores. Nuestra historia, misión, visión y equipo de contadores públicos autorizados en Panamá.",
  alternates: { canonical: "https://gonzalez-gonzalez-web.vercel.app/nosotros" },
  keywords: ["sobre nosotros", "equipo contadores", "misión visión", "CPA Panamá", "historia despacho contable"],
  openGraph: {
    title: "Nosotros | González & González Contadores & Auditores",
    description: "Historia, misión, visión y valores de González & González. Contadores Públicos Autorizados en Ciudad de Panamá.",
    url: "https://gonzalez-gonzalez-web.vercel.app/nosotros",
    type: "website",
    locale: "es_PA",
  },
};

const VALUES = [
  {
    icon: Scale,
    title: "Integridad",
    description:
      "Actuamos con ética y transparencia en cada servicio que prestamos.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description:
      "Nos dedicamos a cumplir y superar las expectativas de cada cliente.",
  },
  {
    icon: Lightbulb,
    title: "Excelencia",
    description:
      "Buscamos la mejora continua en nuestros procesos y servicios.",
  },
  {
    icon: Heart,
    title: "Servicio",
    description:
      "Ponemos las necesidades de nuestros clientes en el centro de todo.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden grain pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-primary via-primary-light to-secondary" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/10 px-4 py-2 text-sm text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-light" />
              Sobre Nosotros
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Profesionales de confianza{" "}
              <span className="text-secondary-light">a su servicio</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Somos un despacho de contadores públicos autorizados comprometidos
              con la excelencia profesional y el crecimiento de nuestros clientes.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60V30C360 0 720 0 1080 30C1260 45 1440 60 1440 60H0Z" fill="var(--background)" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left - Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06] border border-border flex items-center justify-center overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-secondary/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative text-center">
                  <Building2 className="h-20 w-20 text-primary/30 mx-auto mb-4" />
                  <h3 className="font-serif text-3xl font-bold text-primary">
                    {BUSINESS.name}
                  </h3>
                  <p className="text-sm tracking-[0.2em] text-secondary/60 uppercase mt-1">
                    {BUSINESS.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <div className="section-line mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-5 text-muted text-lg leading-relaxed">
                <p>
                  González &amp; González Contadores &amp; Auditores nace de la
                  visión de brindar servicios contables y de auditoría con los
                  más altos estándares profesionales en la República de Panamá.
                </p>
                <p>
                  Desde nuestras oficinas en Bethania, Miraflores, atendemos a
                  empresas de diversos sectores: transporte, construcción,
                  tecnología, comercio y servicios, entre otros.
                </p>
                <p>
                  Nuestro enfoque se basa en la atención personalizada, el
                  cumplimiento normativo y el uso de herramientas tecnológicas
                  que nos permiten ofrecer reportes precisos y oportunos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-border rounded-3xl bg-surface border border-border p-10 sm:p-12 card-lift">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Misión
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                Ofrecer servicios profesionales de contabilidad, auditoría y
                asesoría fiscal de la más alta calidad, contribuyendo al
                crecimiento y estabilidad financiera de nuestros clientes, con
                apego a las normas internacionales y la legislación panameña.
              </p>
            </div>

            <div className="gradient-border rounded-3xl bg-surface border border-border p-10 sm:p-12 card-lift">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 text-secondary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Visión
              </h3>
              <p className="text-muted leading-relaxed text-lg">
                Ser reconocidos como el despacho contable de referencia en
                Panamá, distinguido por la excelencia de nuestros servicios, la
                integridad de nuestros profesionales y el impacto positivo en
                el éxito financiero de las empresas que atendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="gradient-border text-center rounded-2xl bg-surface border border-border p-8 card-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-5">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative overflow-hidden grain">
        <div className="absolute inset-0 animated-gradient bg-gradient-to-r from-primary to-secondary" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ¿Desea trabajar con nosotros?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            Estamos listos para ser el aliado contable que su empresa necesita.
          </p>
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Contactar
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
