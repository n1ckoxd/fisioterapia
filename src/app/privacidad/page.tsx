import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { empresaInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Clínica de Fisioterapia',
  description: 'Política de privacidad y protección de datos de nuestra clínica de fisioterapia.',
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="pt-24 pb-8 bg-neutral-50 border-b border-neutral-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Privacidad', href: '/privacidad' }
            ]} 
          />
          <h1 className="text-4xl font-bold text-neutral-900 mt-6 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-neutral-600">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-neutral prose-lg lg:prose-xl text-neutral-700">
        <p>
          En <strong>{empresaInfo.nombre}</strong> nos tomamos muy en serio la privacidad y protección 
          de los datos personales de nuestros pacientes. Esta política explica cómo recopilamos, usamos 
          y protegemos su información.
        </p>

        <h2>1. Responsable del Tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos es {empresaInfo.nombre}, con dirección en {empresaInfo.direccion}. 
          Puede contactarnos a través del correo electrónico {empresaInfo.email} o al teléfono {empresaInfo.telefono}.
        </p>

        <h2>2. Datos Recogidos</h2>
        <p>
          Para prestar nuestros servicios de fisioterapia, recogemos los siguientes datos:
        </p>
        <ul>
          <li>Datos identificativos: nombre, apellidos, DNI, fecha de nacimiento.</li>
          <li>Datos de contacto: dirección, teléfono, correo electrónico.</li>
          <li>Datos de salud: historial clínico, diagnósticos previos, tratamientos actuales, estilo de vida.</li>
        </ul>
        <p>
          Los datos de salud están sujetos a un nivel de protección especial y solo serán recogidos con su 
          consentimiento explícito previo a la consulta.
        </p>

        <h2>3. Finalidad del Tratamiento</h2>
        <p>
          Utilizamos sus datos personales para las siguientes finalidades:
        </p>
        <ul>
          <li>Prestación de servicios de fisioterapia y seguimiento de tratamientos.</li>
          <li>Gestión administrativa de citas y facturación.</li>
          <li>Envío de recordatorios de citas e información relevante sobre su tratamiento.</li>
          <li>Cumplimiento de obligaciones legales aplicables a clínicas de salud.</li>
        </ul>

        <h2>4. Base Legal</h2>
        <p>
          La base legal para el tratamiento de sus datos es la ejecución del contrato de prestación de servicios 
          (cuando acude a consulta) y su consentimiento explícito para el tratamiento de datos de salud y envíos de comunicaciones.
        </p>

        <h2>5. Derechos del Usuario</h2>
        <p>
          Como interesado, tiene derecho a:
        </p>
        <ul>
          <li>Acceder a sus datos personales.</li>
          <li>Solicitar su rectificación si son inexactos.</li>
          <li>Solicitar su supresión cuando ya no sean necesarios para los fines que fueron recogidos.</li>
          <li>Oponerse al tratamiento o solicitar su limitación.</li>
          <li>Solicitar la portabilidad de sus datos.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede enviar un escrito al correo electrónico {empresaInfo.email} adjuntando 
          copia de su documento de identidad.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para 
          medir el tráfico web. Puede configurar su navegador para rechazar su uso.
        </p>

        <h2>7. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de privacidad para adaptarla a novedades 
          legislativas o jurisprudenciales, así como a prácticas de la industria. Le recomendamos revisar 
          esta página periódicamente.
        </p>
      </div>
    </main>
  );
}
