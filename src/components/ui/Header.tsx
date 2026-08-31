'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonios', label: 'Testimonios' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            FisioSphere
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    isActive ? 'text-primary-600 font-semibold' : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/citas" className="btn-primary flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Reservar Cita</span>
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <button
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navegación Móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 shadow-lg border-t border-neutral-200">
          <nav className="flex flex-col py-4 px-4 space-y-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-600' : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/citas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary flex items-center justify-center space-x-2 mx-4 mt-4"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar Cita</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
