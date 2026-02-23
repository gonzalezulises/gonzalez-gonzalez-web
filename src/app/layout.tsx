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
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const BASE_URL = "https://gonzalez-gonzalez-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "González & González | Contadores & Auditores",
    template: "%s | González & González",
  },
  description:
    "Servicios profesionales de contabilidad, auditoría y asesoría fiscal en Panamá. Bethania, Miraflores, Ciudad de Panamá.",
  keywords: [
    "contadores Panamá",
    "auditores Panamá",
    "contabilidad",
    "auditoría financiera",
    "asesoría fiscal",
    "DGI Panamá",
    "CPA Panamá",
    "González y González",
    "contadores Bethania",
    "servicios contables Panamá",
  ],
  authors: [{ name: "González & González Contadores & Auditores" }],
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
        <LocalBusinessJsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
