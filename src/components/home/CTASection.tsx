'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="py-24 gradient-cta text-white relative overflow-hidden">
      {/* Fondos animados */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-16 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-16 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Agenda la evaluación de tu bebé o de tu familiar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl mb-10 text-primary-50"
          >
            Te atendemos a domicilio en Lima o en nuestra sede de {empresaInfo.distrito}. Escríbenos y coordinamos el
            mejor horario para tu familia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/citas"
              className="bg-white text-primary-700 hover:bg-primary-50 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 text-lg shadow-lg"
            >
              <Calendar size={22} />
              Reservar Cita
            </Link>
            <a
              href={empresaInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 text-lg shadow-lg"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
            <a
              href={`tel:${empresaInfo.telefonoTel}`}
              className="border-2 border-white/80 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg"
            >
              <Phone size={22} />
              {empresaInfo.telefonoDisplay}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
