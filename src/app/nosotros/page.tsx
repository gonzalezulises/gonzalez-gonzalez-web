import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Building2,
  Scale,
  Handshake,
  Lightbulb,
} from "lucide-react";
import { BUSINESS, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca a González & González Contadores & Auditores. Nuestra historia, misión, visión y equipo de contadores públicos autorizados en Panamá.",
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
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary-light mb-3">
              Sobre Nosotros
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
              Profesionales de confianza a su servicio
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Somos un despacho de contadores públicos autorizados comprometidos
              con la excelencia profesional y el crecimiento de nuestros
              clientes.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Logo Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-20 w-20 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    {BUSINESS.name}
                  </h3>
                  <p className="text-sm tracking-[0.15em] text-secondary uppercase">
                    {BUSINESS.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
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
                  que nos permiten ofrecer reportes precisos y oportunos a
                  cada uno de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-primary/[0.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-2xl bg-surface border border-border p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Misión
              </h3>
              <p className="text-muted leading-relaxed">
                Ofrecer servicios profesionales de contabilidad, auditoría y
                asesoría fiscal de la más alta calidad, contribuyendo al
                crecimiento y estabilidad financiera de nuestros clientes, con
                apego a las normas internacionales y la legislación panameña.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-surface border border-border p-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Visión
              </h3>
              <p className="text-muted leading-relaxed">
                Ser reconocidos como el despacho contable de referencia en
                Panamá, distinguido por la excelencia de nuestros servicios, la
                integridad de nuestros profesionales y el impacto positivo en el
                éxito financiero de las empresas que atendemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Lo que nos define
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            ¿Desea trabajar con nosotros?
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Estamos listos para ser el aliado contable que su empresa necesita.
            Contáctenos para una consulta personalizada.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-8 py-4 text-base font-semibold hover:bg-primary-light transition-colors"
          >
            Contactar
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
