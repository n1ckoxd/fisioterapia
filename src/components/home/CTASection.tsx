'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Phone } from 'lucide-react';
import { empresaInfo } from '@/lib/data';

export default function CTASection() {
  return (
    <section className="py-24 gradient-cta text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/30 rounded-full mix-blend-overlay filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            ¿Listo para sentirte mejor?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl mb-10 text-primary-50"
          >
            No dejes que el dolor limite tu vida. Agenda tu cita hoy mismo y comienza tu camino hacia una recuperación total.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/citas" className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg">
              <Calendar size={24} />
              Reservar Cita
            </Link>
            <a href={`tel:${empresaInfo.telefono}`} className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg">
              <Phone size={24} />
              Llámanos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
