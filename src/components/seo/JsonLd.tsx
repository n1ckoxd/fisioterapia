import { empresaInfo, servicios, type Servicio, type MiembroEquipo } from '@/lib/data';

const LOGO_URL = `${empresaInfo.url}/logo-fisiosphere.png`;

// Perfiles oficiales que se muestran en el sitio.
const PERFILES_SOCIALES = [
  empresaInfo.redesSociales.instagram,
  empresaInfo.redesSociales.facebook,
  empresaInfo.redesSociales.tiktok,
];

// WebSite + Organization en todas las páginas: ayuda a Google a mostrar
// el nombre del sitio en los resultados y a vincularlo con sus redes.
export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${empresaInfo.url}/#website`,
        "url": empresaInfo.url,
        "name": empresaInfo.nombre,
        "alternateName": [empresaInfo.nombreCompleto, "FisioSphere Perú"],
        "inLanguage": "es-PE",
        "publisher": { "@id": `${empresaInfo.url}/#organizacion` },
      },
      {
        "@type": "Organization",
        "@id": `${empresaInfo.url}/#organizacion`,
        "name": empresaInfo.nombreCompleto,
        "alternateName": empresaInfo.nombre,
        "url": empresaInfo.url,
        "logo": { "@type": "ImageObject", "url": LOGO_URL },
        "sameAs": PERFILES_SOCIALES,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": empresaInfo.telefono,
          "contactType": "customer service",
          "areaServed": "PE",
          "availableLanguage": "Spanish",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physiotherapy"],
    "name": empresaInfo.nombreCompleto,
    "alternateName": empresaInfo.nombre,
    "description":
      "Fisioterapia a domicilio en Lima: desarrollo motor y atención temprana para bebés de 0 a 12 meses, fisioterapia neurológica pediátrica para niños de 0 a 14 años (PCI, autismo, displasia de cadera), adulto mayor y psicología clínica infantil.",
    "image": [`${empresaInfo.url}/3.png`, `${empresaInfo.url}/1.png`],
    "logo": LOGO_URL,
    "@id": `${empresaInfo.url}/#clinica`,
    "url": empresaInfo.url,
    "telephone": empresaInfo.telefono,
    "email": empresaInfo.email,
    "priceRange": "$$",
    "currenciesAccepted": "PEN",
    "medicalSpecialty": ["Physiotherapy", "Pediatric", "Geriatric", "Neurologic", "Psychiatric"],
    "availableService": servicios.map((s) => ({
      "@type": "MedicalTherapy",
      "name": s.nombre,
      "url": `${empresaInfo.url}/servicios/${s.slug}`,
    })),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": empresaInfo.calle,
      "addressLocality": empresaInfo.distrito,
      "addressRegion": empresaInfo.region,
      "postalCode": empresaInfo.cp,
      "addressCountry": "PE"
    },
    "hasMap": empresaInfo.googleMapsLink,
    "areaServed": empresaInfo.distritosCobertura.map((d) => ({
      "@type": "AdministrativeArea",
      "name": `${d}, Lima`,
    })),
    "parentOrganization": { "@id": `${empresaInfo.url}/#organizacion` },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": PERFILES_SOCIALES
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

function personaEquipo(miembro: MiembroEquipo) {
  return {
    "@type": "Person",
    "@id": `${empresaInfo.url}/nosotros/${miembro.slug}#persona`,
    "name": miembro.nombre,
    "jobTitle": miembro.tituloProfesional,
    "url": `${empresaInfo.url}/nosotros/${miembro.slug}`,
    ...(miembro.foto ? { "image": `${empresaInfo.url}${miembro.foto}` } : {}),
  };
}

export function PersonSchema({ miembro }: { miembro: MiembroEquipo }) {
  const schema = {
    "@context": "https://schema.org",
    ...personaEquipo(miembro),
    "description": miembro.descripcion,
    "knowsAbout": miembro.especialidades,
    "worksFor": { "@id": `${empresaInfo.url}/#clinica` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  article,
  revisor,
}: {
  article: {
    titulo: string;
    descripcion: string;
    fecha: string;
    autor: string;
    slug: string;
    imagen?: string;
  };
  revisor?: MiembroEquipo;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.titulo,
    "description": article.descripcion,
    "datePublished": article.fecha,
    "dateModified": article.fecha,
    "author": {
      "@type": "Organization",
      "name": article.autor,
      "url": empresaInfo.url,
    },
    "image": article.imagen ? `${empresaInfo.url}${article.imagen}` : `${empresaInfo.url}/opengraph-image.png`,
    "inLanguage": "es-PE",
    "publisher": {
      "@type": "Organization",
      "name": empresaInfo.nombreCompleto,
      "url": empresaInfo.url,
      "logo": {
        "@type": "ImageObject",
        "url": LOGO_URL,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${empresaInfo.url}/blog/${article.slug}`,
      ...(revisor ? { "reviewedBy": personaEquipo(revisor) } : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ servicio }: { servicio: Servicio }) {
  const url = `${empresaInfo.url}/servicios/${servicio.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#pagina`,
    "url": url,
    "name": servicio.metaTitle,
    "description": servicio.metaDescription,
    "inLanguage": "es-PE",
    ...(servicio.condiciones
      ? { "about": servicio.condiciones.map((c) => ({ "@type": "MedicalCondition", "name": c })) }
      : {}),
    "mainEntity": {
      "@type": "MedicalTherapy",
      "name": servicio.nombre,
      "description": servicio.descripcionCorta,
      ...(servicio.imagen ? { "image": `${empresaInfo.url}${servicio.imagen}` } : {}),
      "provider": { "@id": `${empresaInfo.url}/#clinica` },
      "areaServed": { "@type": "City", "name": "Lima" },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
