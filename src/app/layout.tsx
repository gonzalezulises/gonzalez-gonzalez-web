import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const BASE_URL = "https://gonzalez-gonzalez-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "González & González | Contadores & Auditores en Panamá",
    template: "%s | González & González Contadores & Auditores",
  },
  description:
    "Servicios profesionales de contabilidad, auditoría financiera y asesoría fiscal en Ciudad de Panamá. Contadores Públicos Autorizados. Bethania, Miraflores.",
  keywords: [
    "contadores Panamá",
    "auditores Panamá",
    "contabilidad Panamá",
    "auditoría financiera",
    "asesoría fiscal Panamá",
    "DGI Panamá",
    "CPA Panamá",
    "González y González contadores",
    "contadores Bethania",
    "servicios contables Ciudad de Panamá",
    "trámites DGI E-TAX",
    "nóminas CSS Panamá",
  ],
  authors: [{ name: "González & González Contadores & Auditores" }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: BASE_URL,
    siteName: "González & González Contadores & Auditores",
    title: "González & González | Contadores & Auditores en Panamá",
    description:
      "Servicios profesionales de contabilidad, auditoría financiera y asesoría fiscal. Contadores Públicos Autorizados en Ciudad de Panamá.",
  },
  twitter: {
    card: "summary_large_image",
    title: "González & González | Contadores & Auditores",
    description:
      "Servicios profesionales de contabilidad, auditoría y asesoría fiscal en Panamá.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {/* Skip navigation for accessibility */}
        <a href="#main-content" className="skip-nav">
          Ir al contenido principal
        </a>
        <LocalBusinessJsonLd />
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
