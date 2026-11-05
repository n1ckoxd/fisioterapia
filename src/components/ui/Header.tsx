'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/fisioterapia-bebes-estimulacion-temprana', label: 'Bebés 0-12 m' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/contacto', label: 'Contacto' },
];

// El enlace activo es el que coincide con más precisión con la ruta actual
// (así /servicios/x marca "Servicios", pero la página de bebés marca "Bebés").
function enlaceActivo(pathname: string) {
  return links
    .filter((l) => pathname === l.href || (l.href !== '/' && pathname.startsWith(`${l.href}/`)))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const activo = enlaceActivo(pathname);
  const lastY = useRef(0);

  // Sombra al hacer scroll; se oculta al bajar y reaparece al subir.
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        setIsScrolled(y > 20);
        if (y <= 160) setIsHidden(false);
        else if (delta > 6) setIsHidden(true);
        else if (delta < -6) setIsHidden(false);
        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú móvil al cambiar de página.
  const [rutaAnterior, setRutaAnterior] = useState(pathname);
  if (rutaAnterior !== pathname) {
    setRutaAnterior(pathname);
    setIsMobileMenuOpen(false);
  }

  // Con el menú móvil abierto: bloquear el scroll del fondo y cerrar con Escape.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMobileMenuOpen]);

  const oculto = isHidden && !isMobileMenuOpen;

  return (
    <motion.header
      initial={false}
      animate={{ y: oculto ? '-110%' : '0%' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ viewTransitionName: 'site-header' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        isScrolled ? 'glass-strong shadow-md py-1.5' : 'bg-white/95 backdrop-blur-md shadow-sm py-2.5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo (redirige al inicio) */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 transition-transform hover:scale-[1.02] rounded-lg p-1"
            aria-label="FisioSphere Centro Integral - Ir al inicio"
          >
            <Image
              src="/logo-fisiosphere.png"
              alt="FisioSphere Centro Integral - Fisioterapia en Lima"
              width={180}
              height={50}
              loading="eager"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Navegación de escritorio con indicador animado */}
          <nav aria-label="Principal" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => {
              const isActive = activo === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-2.5 xl:px-3 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors hover:text-primary-600 ${
                    isActive ? 'text-primary-600 font-semibold' : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-activo"
                      className="absolute left-2.5 right-2.5 xl:left-3 xl:right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-purple-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block shrink-0">
            <Link href="/citas" className="btn-primary flex items-center gap-2 whitespace-nowrap">
              <Calendar className="w-4 h-4" />
              <span>Reservar Cita</span>
            </Link>
          </div>

          {/* Botón del menú móvil */}
          <button
            className="lg:hidden p-2 -mr-2 text-neutral-700 hover:text-primary-600 rounded-lg"
            onClick={() => setIsMobileMenuOpen((abierto) => !abierto)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-movil"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'cerrar' : 'abrir'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Navegación móvil con entrada y salida animadas */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="fondo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-full h-screen bg-slate-950/30 backdrop-blur-[2px]"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              key="panel"
              id="menu-movil"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden absolute top-full left-3 right-3 mt-2 origin-top rounded-2xl bg-white shadow-2xl border border-neutral-200 overflow-hidden"
            >
              <motion.nav
                aria-label="Menú móvil"
                className="flex flex-col p-3"
                initial="oculto"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              >
                {links.map((link) => {
                  const isActive = activo === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      variants={{ oculto: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive ? 'bg-primary-50 text-primary-700' : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={{ oculto: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-100"
                >
                  <Link
                    href="/citas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary justify-center px-4"
                  >
                    <Calendar className="w-4 h-4" />
                    Reservar
                  </Link>
                  <a
                    href={empresaInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp justify-center px-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
