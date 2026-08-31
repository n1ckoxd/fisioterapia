import { empresaInfo } from '@/lib/data';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "name": empresaInfo.nombreCompleto,
    "image": `${empresaInfo.url}/logo.png`, // Ajusta la URL del logo según sea necesario
    "@id": empresaInfo.url,
    "url": empresaInfo.url,
    "telephone": empresaInfo.telefono,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": empresaInfo.direccion,
      "addressLocality": empresaInfo.ciudad,
      "postalCode": empresaInfo.cp,
      "addressCountry": "ES"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      empresaInfo.redesSociales?.instagram,
      empresaInfo.redesSociales?.facebook,
      empresaInfo.redesSociales?.linkedin,
      empresaInfo.redesSociales?.youtube
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { pregunta: string; respuesta: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
