import { MapPin, Baby, HeartHandshake, Brain, PersonStanding } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

const destacados = [
  { icon: Baby, texto: 'Desarrollo motor 0 a 12 meses' },
  { icon: Brain, texto: 'Neurológica pediátrica 0 a 14 años' },
  { icon: HeartHandshake, texto: 'PCI y autismo' },
  { icon: Baby, texto: 'Displasia de cadera' },
  { icon: HeartHandshake, texto: 'Fisioterapia a domicilio' },
  { icon: PersonStanding, texto: 'Adulto mayor' },
  { icon: Brain, texto: 'Psicología infantil' },
];

// Franja en movimiento continuo con especialidades y distritos atendidos.
export default function CoberturaMarquee() {
  const items = [
    ...destacados.map((d) => ({ icon: d.icon, texto: d.texto })),
    ...empresaInfo.distritosCobertura.map((d) => ({ icon: MapPin, texto: d })),
  ];

  return (
    <div className="relative bg-gradient-to-r from-primary-600 via-purple-600 to-teal-500 text-white py-3 overflow-hidden marquee-mask">
      <div className="marquee-track flex w-max gap-8">
        {[0, 1].map((copia) => (
          <ul key={copia} aria-hidden={copia === 1} className="flex shrink-0 gap-8 items-center">
            {items.map((item) => (
              <li key={item.texto} className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
                <item.icon className="w-4 h-4 opacity-80" />
                {item.texto}
                <span className="ml-6 opacity-50">•</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
