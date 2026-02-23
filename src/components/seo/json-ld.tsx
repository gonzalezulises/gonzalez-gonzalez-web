import { BUSINESS, SERVICES } from "@/lib/constants";

const BASE_URL = "https://gonzalez-gonzalez-web.vercel.app";

export function LocalBusinessJsonLd() {
  const schemas = [
    // AccountingService
    {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      "@id": `${BASE_URL}/#business`,
      name: BUSINESS.fullName,
      description:
        "Servicios profesionales de contabilidad, auditoría financiera y asesoría fiscal en Ciudad de Panamá.",
      url: BASE_URL,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      image: `${BASE_URL}/og-image.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.district,
        addressCountry: "PA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.005,
        longitude: -79.52,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "13:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: {
        "@type": "Country",
        name: "Panamá",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios Contables y de Auditoría",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.shortDescription,
            provider: { "@id": `${BASE_URL}/#business` },
          },
        })),
      },
      sameAs: [
        `https://wa.me/${BUSINESS.whatsapp}`,
      ],
    },
    // Organization
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BUSINESS.fullName,
      url: BASE_URL,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressCountry: "PA",
      },
    },
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${BASE_URL}/servicios` },
        { "@type": "ListItem", position: 3, name: "Nosotros", item: `${BASE_URL}/nosotros` },
        { "@type": "ListItem", position: 4, name: "Contacto", item: `${BASE_URL}/contacto` },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
