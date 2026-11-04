import type { MetadataRoute } from "next";
import { empresaInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: empresaInfo.nombreCompleto,
    short_name: empresaInfo.nombre,
    description: "Fisioterapia a domicilio en Lima para bebés, niños y adultos mayores.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C026D3",
    lang: "es-PE",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
