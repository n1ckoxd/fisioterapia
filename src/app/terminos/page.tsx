import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { empresaInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Clínica de Fisioterapia',
  description: 'Términos y condiciones de uso de nuestros servicios y sitio web.',
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="pt-24 pb-8 bg-neutral-50 border-b border-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Términos y Condiciones', href: '/terminos' }
            ]} 
          />
          <h1 className="text-4xl font-bold text-neutral-900 mt-6 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-neutral-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-neutral prose-lg lg:prose-xl text-neutral-700">
        <p>
          Al acceder y utilizar el sitio web de <strong>{empresaInfo.nombre}</strong> y nuestros servicios 
          de fisioterapia, usted acepta cumplir con los siguientes términos y condiciones.
        </p>

        <h2>1. Objeto</h2>
        <p>
          Estos términos regulan el uso de nuestro sitio web, la reserva de citas y la prestación 
          de servicios de fisioterapia, osteopatía y rehabilitación en nuestras instalaciones.
        </p>

        <h2>2. Condiciones de Uso</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado del sitio web y a no emplearlo para incurrir 
          en actividades ilícitas o contrarias a la buena fe. Toda la información proporcionada al momento 
          de agendar una cita debe ser veraz y actualizada.
        </p>

        <h2>3. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, 
          es propiedad de {empresaInfo.nombre} o de sus proveedores de contenido y está protegido por las 
          leyes de propiedad intelectual. No se permite su reproducción sin autorización previa y por escrito.
        </p>

        <h2>4. Reserva de Citas</h2>
        <p>
          Las citas pueden reservarse a través de nuestro sitio web, por teléfono o vía WhatsApp. La reserva 
          está sujeta a la disponibilidad de nuestros fisioterapeutas. En caso de requerir un pago o anticipo, 
          se le informará durante el proceso de reserva.
        </p>

        <h2>5. Política de Cancelación</h2>
        <p>
          Valoramos el tiempo de nuestros profesionales y de otros pacientes. Si necesita cancelar o reprogramar 
          su cita, le pedimos que nos avise con un mínimo de <strong>24 horas de antelación</strong>.
        </p>
        <ul>
          <li>Cancelaciones con más de 24 horas: Sin cargo.</li>
          <li>Cancelaciones con menos de 24 horas: Podría aplicarse un recargo del 50% del valor de la sesión.</li>
          <li>No presentación sin previo aviso: Se cobrará el 100% del valor de la sesión o se descontará del bono contratado.</li>
        </ul>

        <h2>6. Limitación de Responsabilidad</h2>
        <p>
          Nuestros tratamientos son aplicados por fisioterapeutas colegiados. Sin embargo, los resultados pueden 
          variar dependiendo del estado previo de cada paciente y de su seguimiento de las pautas recomendadas en casa. 
          {empresaInfo.nombre} no se hace responsable de complicaciones derivadas de información médica ocultada o 
          falseada por el paciente durante la anamnesis.
        </p>

        <h2>7. Legislación Aplicable</h2>
        <p>
          Los presentes términos y condiciones se rigen por la legislación vigente del país donde está ubicada 
          la clínica. Cualquier controversia será sometida a los tribunales competentes de dicha jurisdicción.
        </p>
        
        <p className="mt-8 font-semibold">
          Si tiene alguna duda sobre estos términos, por favor contáctenos en {empresaInfo.email}.
        </p>
      </div>
    </main>
  );
}
