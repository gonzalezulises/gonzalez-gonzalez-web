import { BUSINESS, SERVICES } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: BUSINESS.fullName,
    description:
      "Servicios profesionales de contabilidad, auditoría financiera y asesoría fiscal en Ciudad de Panamá.",
    url: "https://gonzalez-gonzalez-web.vercel.app",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.district,
      addressCountry: "PA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.0,
      longitude: -79.52,
    },
    openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Panamá",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Contables",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
