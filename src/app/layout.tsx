import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "González & González | Contadores & Auditores",
    template: "%s | González & González",
  },
  description:
    "Servicios profesionales de contabilidad, auditoría y asesoría fiscal en Panamá. Bethania, Miraflores, Ciudad de Panamá.",
  keywords: [
    "contadores",
    "auditores",
    "contabilidad",
    "auditoría",
    "asesoría fiscal",
    "Panamá",
    "DGI",
    "CPA",
  ],
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
