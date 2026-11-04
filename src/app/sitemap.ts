import type { MetadataRoute } from "next";
import { servicios, equipo, empresaInfo } from "@/lib/data";
import { articulos, imagenArticulo } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = empresaInfo.url;
  const ahora = new Date();
  const img = (ruta: string) => `${baseUrl}${ruta}`;

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: ahora, changeFrequency: "weekly", priority: 1, images: [img("/3.png"), img("/1.png")] },
    { url: `${baseUrl}/servicios`, lastModified: ahora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/citas`, lastModified: ahora, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: ahora, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: ahora, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nosotros`, lastModified: ahora, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/preguntas-frecuentes`, lastModified: ahora, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonios`, lastModified: ahora, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacidad`, lastModified: ahora, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terminos`, lastModified: ahora, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Servicios: las especialidades principales tienen más prioridad
  const servicePages: MetadataRoute.Sitemap = servicios.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio.slug}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: servicio.slug === "fisioterapia-bebes-estimulacion-temprana" ? 0.95 : servicio.imagen ? 0.85 : 0.7,
    ...(servicio.imagen ? { images: [img(servicio.imagen)] } : {}),
  }));

  // Especialistas
  const equipoPages: MetadataRoute.Sitemap = equipo.map((miembro) => ({
    url: `${baseUrl}/nosotros/${miembro.slug}`,
    lastModified: ahora,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(miembro.foto ? { images: [img(miembro.foto)] } : {}),
  }));

  // Artículos del blog
  const blogPages: MetadataRoute.Sitemap = articulos.map((articulo) => ({
    url: `${baseUrl}/blog/${articulo.slug}`,
    lastModified: new Date(`${articulo.fecha}T12:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [img(imagenArticulo(articulo))],
  }));

  return [...staticPages, ...servicePages, ...equipoPages, ...blogPages];
}
