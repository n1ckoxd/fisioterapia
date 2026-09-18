import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  Sparkles,
  Heart,
  Home,
  Building2,
  Video,
  Award,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { equipo } from '@/lib/data';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return equipo.map((miembro) => ({
    slug: miembro.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const miembro = equipo.find((m) => m.slug === slug);

  if (!miembro) {
    return { title: 'Especialista no encontrado | FisioSphere' };
  }

  return {
    title: `${miembro.nombre} - ${miembro.cargo} | FisioSphere Lima`,
    description: `${miembro.nombre}, ${miembro.cargo} en FisioSphere Lima. ${miembro.descripcion} Atención a domicilio VIP y en consultorios acondicionados.`,
    openGraph: {
      title: `${miembro.nombre} | FisioSphere`,
      description: miembro.descripcion,
      images: miembro.foto ? [miembro.foto] : [],
    },
  };
}

export default async function EspecialistaPage({ params }: Props) {
  const { slug } = await params;
  const miembro = equipo.find((m) => m.slug === slug);

  if (!miembro) {
    notFound();
  }

  // Colegas del equipo
  const otrosEspecialistas = equipo.filter((m) => m.slug !== slug);

  // Estilos según el tema del especialista
  const themeStyles = {
    rosa: {
      heroBg: 'bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50',
      badgeBg: 'bg-pink-100 text-pink-800 border-pink-200',
      primaryBtn: 'bg-pink-600 hover:bg-pink-700 text-white',
      accentColor: 'text-pink-600',
      tagBg: 'bg-pink-50 text-pink-700 border-pink-200',
      cardBorder: 'border-pink-200',
      patternIcon: '👶',
      quoteBg: 'bg-pink-50/80 border-pink-400 text-pink-900',
    },
    verde: {
      heroBg: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      primaryBtn: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      accentColor: 'text-emerald-600',
      tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      cardBorder: 'border-emerald-200',
      patternIcon: '🚶',
      quoteBg: 'bg-emerald-50/80 border-emerald-400 text-emerald-900',
    },
    violeta: {
      heroBg: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50',
      badgeBg: 'bg-violet-100 text-violet-800 border-violet-200',
      primaryBtn: 'bg-violet-600 hover:bg-violet-700 text-white',
      accentColor: 'text-violet-600',
      tagBg: 'bg-violet-50 text-violet-700 border-violet-200',
      cardBorder: 'border-violet-200',
      patternIcon: '🧠',
      quoteBg: 'bg-violet-50/80 border-violet-400 text-violet-900',
    },
  }[miembro.colorTema];

  const whatsappMensaje = encodeURIComponent(
    `Hola ${miembro.nombre}, me comunico desde la web de FisioSphere. Quisiera coordinar una cita / evaluación.`
  );
  const whatsappUrl = `https://wa.me/51950332639?text=${whatsappMensaje}`;

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Nosotros', href: '/nosotros' },
          { label: miembro.nombre, href: `/nosotros/${miembro.slug}` },
        ]}
      />

      {/* Hero del Especialista con Fondo Ilustrado */}
      <section className={`py-14 sm:py-20 ${themeStyles.heroBg} relative overflow-hidden border-b border-neutral-200`}>
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-10 left-10 text-6xl opacity-15 select-none pointer-events-none">
          {themeStyles.patternIcon}
        </div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-15 select-none pointer-events-none">
          ✨
        </div>
        <div className="absolute top-1/2 right-1/4 text-5xl opacity-10 select-none pointer-events-none">
          💖
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ChevronLeft size={18} /> Volver al equipo
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Oficial del Especialista */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {miembro.foto ? (
                  <Image
                    src={miembro.foto}
                    alt={miembro.nombre}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 text-5xl font-bold">
                    {miembro.nombre.slice(0, 2)}
                  </div>
                )}

                {/* Badge de Modalidades sobre la foto */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {miembro.modalidades?.map((mod) => (
                    <span
                      key={mod}
                      className="bg-white/95 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Datos y Presentación */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border shadow-sm mx-auto lg:mx-0 ${themeStyles.badgeBg}">
                <Sparkles size={14} />
                <span>{miembro.tituloProfesional}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
                {miembro.nombre}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-neutral-700">
                {miembro.cargo}
              </p>

              {miembro.frase && (
                <div className={`p-4 rounded-2xl border-l-4 italic font-semibold text-sm sm:text-base ${themeStyles.quoteBg}`}>
                  &ldquo;{miembro.frase}&rdquo;
                </div>
              )}

              <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                {miembro.enfoqueLargo}
              </p>

              {/* Botón WhatsApp de Acción Inmediata */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle size={22} />
                  Agendar Cita con {miembro.nombre.split(' ')[1] || miembro.nombre}
                </a>
                <Link
                  href="/citas"
                  className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Calendar size={20} />
                  Pedir Informes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de Contenido Detallado */}
      <div className="container mx-auto px-4 max-w-6xl mt-16 space-y-16">
        {/* Grid de Áreas de Tratamiento y Por Qué Elegirme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tarjeta 1: Áreas de Tratamiento */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
                <Award size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  ¿En qué puedo ayudarte?
                </h2>
                <p className="text-xs text-neutral-500">
                  Principales motivos de consulta y atención
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {miembro.areasTratamiento.map((area, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                  <CheckCircle2 size={20} className={`${themeStyles.accentColor} shrink-0 mt-0.5`} />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta 2: Por qué elegir mi atención */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
                <Heart size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  Mi Compromiso Terapéutico
                </h2>
                <p className="text-xs text-neutral-500">
                  Enfoque humano y basado en evidencia
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {miembro.razonesParaElegir.map((razon, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                  <CheckCircle2 size={20} className="text-primary-600 shrink-0 mt-0.5" />
                  <span>{razon}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modalidades de Atención Explicadas */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-1">
              Flexibilidad y Comodidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
              ¿Cómo realizamos tus sesiones?
            </h2>
            <p className="text-neutral-600 text-sm">
              Pensado especialmente para evitar el estrés del traslado a niños y personas mayores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                <Home size={28} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">A Domicilio VIP</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Asisto directamente a tu hogar con camilla y todos los materiales terapéuticos. Máxima puntualidad y cero tráfico para tu familia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                <Building2 size={28} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">En Sede (Consultorios)</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Espacios modernos, seguros y equipados en puntos céntricos de Lima para quienes prefieren una sesión en clínica previa coordinación.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                <Video size={28} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Online / Seguimiento</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Orientación psicológica a padres, pautas de crianza y seguimiento continuo de ejercicios desde la comodidad de tu pantalla.
              </p>
            </div>
          </div>
        </div>

        {/* Banner CTA directo con el Especialista */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            ¿Quieres agendar una sesión con {miembro.nombre}?
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Escríbenos al WhatsApp y coordinaremos el día, la hora y la modalidad (a domicilio o en sede) que mejor se adapte a ti.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle size={24} />
            Escribir por WhatsApp a {miembro.nombre.split(' ')[1] || miembro.nombre}
          </a>
        </div>

        {/* Conoce a los otros especialistas */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Otros Especialistas del Equipo FisioSphere
            </h3>
            <p className="text-neutral-500 text-sm">
              Atención multidisciplinaria para todas las etapas de la vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otrosEspecialistas.map((colega) => (
              <Link
                key={colega.slug}
                href={`/nosotros/${colega.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 p-6 flex items-center gap-5 card-hover transition-all group"
              >
                <div className="relative w-20 h-24 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                  {colega.foto ? (
                    <Image
                      src={colega.foto}
                      alt={colega.nombre}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 font-bold">
                      {colega.nombre.slice(0, 2)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg group-hover:text-primary-600 transition-colors">
                    {colega.nombre}
                  </h4>
                  <p className="text-xs text-neutral-500 mb-2 line-clamp-1">
                    {colega.cargo}
                  </p>
                  <span className="text-xs font-bold text-primary-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ver perfil completo <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
