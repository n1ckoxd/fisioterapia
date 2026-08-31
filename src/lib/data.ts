/* ===== DATA: Servicios de la clínica ===== */

export interface Servicio {
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionLarga: string;
  icono: string;
  beneficios: string[];
  tratamiento: string;
  duracion: string;
  precio?: string;
  faqs: { pregunta: string; respuesta: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const servicios: Servicio[] = [
  {
    slug: "fisioterapia-deportiva",
    nombre: "Fisioterapia Deportiva",
    descripcionCorta: "Recuperación y prevención de lesiones deportivas con técnicas especializadas para atletas de todos los niveles.",
    descripcionLarga: "La fisioterapia deportiva está enfocada en la prevención, diagnóstico y tratamiento de lesiones relacionadas con la actividad física y el deporte. Nuestros fisioterapeutas especializados utilizan técnicas avanzadas para acelerar la recuperación y optimizar el rendimiento deportivo. Trabajamos con atletas profesionales y aficionados, adaptando cada tratamiento a las necesidades específicas de cada deporte y cada paciente.",
    icono: "Dumbbell",
    beneficios: [
      "Recuperación acelerada de lesiones deportivas",
      "Prevención de futuras lesiones",
      "Mejora del rendimiento deportivo",
      "Tratamientos personalizados según tu deporte",
      "Readaptación deportiva progresiva",
      "Reducción del tiempo de baja deportiva"
    ],
    tratamiento: "El tratamiento comienza con una evaluación biomecánica completa. Utilizamos técnicas como terapia manual, electroterapia, vendaje neuromuscular, ejercicios específicos y readaptación deportiva. Diseñamos un plan personalizado que incluye trabajo en clínica y pautas para casa.",
    duracion: "Las sesiones duran entre 45 y 60 minutos. El número de sesiones depende de la lesión, generalmente entre 8 y 15 sesiones.",
    faqs: [
      { pregunta: "¿Puedo seguir entrenando durante el tratamiento?", respuesta: "Dependiendo de la lesión, adaptaremos tu entrenamiento para que puedas mantener tu forma física sin agravar la lesión. Te daremos pautas específicas." },
      { pregunta: "¿Cuánto tarda la recuperación de una lesión deportiva?", respuesta: "El tiempo de recuperación varía según el tipo y gravedad de la lesión. En general, las lesiones musculares leves se recuperan en 2-4 semanas, mientras que las más graves pueden requerir 2-3 meses." },
      { pregunta: "¿Trabajáis con equipos deportivos?", respuesta: "Sí, colaboramos con varios equipos deportivos locales y ofrecemos programas de prevención y tratamiento grupal." }
    ],
    metaTitle: "Fisioterapia Deportiva | Clínica FisioSphere - Recuperación de Lesiones",
    metaDescription: "Servicio especializado de fisioterapia deportiva. Recuperación de lesiones, prevención y mejora del rendimiento deportivo con técnicas avanzadas. Pide tu cita."
  },
  {
    slug: "rehabilitacion",
    nombre: "Rehabilitación",
    descripcionCorta: "Programas completos de rehabilitación para recuperar tu movilidad y calidad de vida tras lesiones o cirugías.",
    descripcionLarga: "Nuestro servicio de rehabilitación está diseñado para ayudarte a recuperar la funcionalidad completa después de una lesión, cirugía o enfermedad. Utilizamos un enfoque integral que combina diferentes técnicas de fisioterapia para lograr una recuperación óptima. Cada programa se adapta a tus necesidades, objetivos y ritmo de recuperación.",
    icono: "HeartPulse",
    beneficios: [
      "Recuperación funcional completa",
      "Programas personalizados de rehabilitación",
      "Seguimiento continuo del progreso",
      "Reducción del dolor y la inflamación",
      "Restauración de la movilidad articular",
      "Fortalecimiento muscular progresivo"
    ],
    tratamiento: "Realizamos una valoración inicial exhaustiva para establecer los objetivos de rehabilitación. El tratamiento incluye movilización articular, fortalecimiento muscular progresivo, reeducación propioceptiva y ejercicio terapéutico adaptado.",
    duracion: "Las sesiones tienen una duración de 45-60 minutos. El programa completo puede durar entre 4 semanas y 6 meses según la patología.",
    faqs: [
      { pregunta: "¿Cuándo debo empezar la rehabilitación después de una cirugía?", respuesta: "Lo ideal es comenzar lo antes posible, generalmente entre 24-72 horas después de la cirugía, siempre siguiendo las indicaciones del cirujano." },
      { pregunta: "¿Necesito una prescripción médica?", respuesta: "No es necesaria una prescripción médica para acudir a fisioterapia, aunque si tienes un informe médico nos ayudará a personalizar mejor tu tratamiento." },
      { pregunta: "¿Cuántas sesiones necesitaré?", respuesta: "El número de sesiones varía según cada caso. Tras la valoración inicial, te daremos una estimación del número de sesiones recomendadas." }
    ],
    metaTitle: "Rehabilitación Física | Clínica FisioSphere - Recupera tu Movilidad",
    metaDescription: "Servicio de rehabilitación personalizada. Recupera tu movilidad y calidad de vida tras lesiones o cirugías. Programas adaptados a tus necesidades. Consulta ahora."
  },
  {
    slug: "dolor-lumbar",
    nombre: "Dolor Lumbar",
    descripcionCorta: "Tratamiento especializado para el dolor de espalda baja. Alivia tu dolor lumbar con técnicas manuales y ejercicio terapéutico.",
    descripcionLarga: "El dolor lumbar es una de las dolencias más comunes que afecta al 80% de la población en algún momento de su vida. En nuestra clínica, abordamos el dolor lumbar desde un enfoque multidisciplinar, identificando la causa raíz del problema y no solo tratando los síntomas. Utilizamos técnicas de terapia manual, ejercicio terapéutico, educación al paciente y neurodinámica para conseguir resultados duraderos.",
    icono: "Spine",
    beneficios: [
      "Alivio efectivo del dolor lumbar",
      "Identificación de la causa raíz",
      "Prevención de recaídas",
      "Mejora de la postura",
      "Fortalecimiento de la musculatura estabilizadora",
      "Educación para el autocuidado"
    ],
    tratamiento: "Comenzamos con una evaluación postural y funcional completa. El tratamiento combina terapia manual, movilización vertebral, ejercicios de estabilización lumbar, neurodinámica y educación en higiene postural. Te enseñamos ejercicios para hacer en casa.",
    duracion: "Sesiones de 45 minutos. Normalmente se necesitan entre 6 y 12 sesiones para resolver un episodio de dolor lumbar.",
    faqs: [
      { pregunta: "¿El dolor lumbar se puede curar definitivamente?", respuesta: "En la mayoría de los casos, sí. Con un tratamiento adecuado y la incorporación de hábitos saludables, el dolor lumbar se puede resolver y prevenir futuras recaídas." },
      { pregunta: "¿Debo hacer reposo si me duele la espalda?", respuesta: "No, el reposo prolongado suele empeorar el dolor lumbar. Lo recomendable es mantenerse activo con actividad adaptada y seguir las pautas de tu fisioterapeuta." },
      { pregunta: "¿Puedo ir al gimnasio con dolor lumbar?", respuesta: "Sí, pero es importante adaptar los ejercicios. Te daremos pautas específicas para que puedas entrenar de forma segura." }
    ],
    metaTitle: "Tratamiento Dolor Lumbar | Clínica FisioSphere - Alivio del Dolor de Espalda",
    metaDescription: "Especialistas en dolor lumbar. Tratamiento integral con terapia manual y ejercicio terapéutico. Identifica la causa y elimina el dolor. Reserva tu cita hoy."
  },
  {
    slug: "dolor-cervical",
    nombre: "Dolor Cervical",
    descripcionCorta: "Tratamiento eficaz para dolor de cuello, tortícolis y cervicalgias. Recupera tu movilidad cervical sin dolor.",
    descripcionLarga: "El dolor cervical afecta a millones de personas y puede ser causado por malas posturas, estrés, uso prolongado de dispositivos electrónicos o lesiones. Nuestro equipo especializado en patología cervical utiliza técnicas manuales avanzadas, ejercicio terapéutico específico y educación postural para resolver tu dolor cervical de forma efectiva y duradera.",
    icono: "Stethoscope",
    beneficios: [
      "Eliminación del dolor cervical",
      "Recuperación de la movilidad del cuello",
      "Tratamiento de cefaleas tensionales asociadas",
      "Corrección postural",
      "Reducción de la tensión muscular",
      "Prevención de episodios futuros"
    ],
    tratamiento: "El tratamiento incluye una evaluación cervical detallada, terapia manual específica, movilización articular cervical, técnicas de tejidos blandos, neurodinámica del miembro superior y un programa de ejercicios para fortalecer la musculatura cervical profunda.",
    duracion: "Sesiones de 45 minutos. La mayoría de pacientes experimentan mejoría significativa en 4-8 sesiones.",
    faqs: [
      { pregunta: "¿El dolor cervical puede causar mareos?", respuesta: "Sí, el dolor cervical puede causar mareos de origen cervicogénico. Nuestros fisioterapeutas están formados para identificar y tratar esta condición." },
      { pregunta: "¿Las almohadas influyen en el dolor cervical?", respuesta: "Sí, la almohada adecuada es importante. Te asesoraremos sobre la mejor opción según tu postura al dormir." },
      { pregunta: "¿Debo dejar de usar el ordenador?", respuesta: "No, pero es importante mantener una ergonomía correcta. Te enseñaremos la postura ideal y pausas activas para prevenir el dolor." }
    ],
    metaTitle: "Tratamiento Dolor Cervical | Clínica FisioSphere - Alivio de Cervicalgias",
    metaDescription: "Especialistas en dolor cervical y tortícolis. Técnicas manuales avanzadas y ejercicio terapéutico. Recupera la movilidad de tu cuello. Pide cita ahora."
  },
  {
    slug: "puncion-seca",
    nombre: "Punción Seca",
    descripcionCorta: "Tratamiento invasivo mínimo para eliminar puntos gatillo miofasciales y aliviar el dolor muscular crónico.",
    descripcionLarga: "La punción seca es una técnica invasiva mínima altamente efectiva para el tratamiento de los puntos gatillo miofasciales. Consiste en la inserción de una aguja de acupuntura en el punto gatillo del músculo para desactivarlo y reducir el dolor. Es una técnica segura realizada por fisioterapeutas especializados y con formación específica en esta técnica.",
    icono: "Syringe",
    beneficios: [
      "Alivio rápido del dolor muscular",
      "Desactivación de puntos gatillo",
      "Mejora de la movilidad",
      "Reducción de la tensión muscular",
      "Complemento ideal a la terapia manual",
      "Resultados desde la primera sesión"
    ],
    tratamiento: "Tras localizar los puntos gatillo mediante palpación, se inserta una aguja fina en el punto gatillo para provocar una respuesta de espasmo local que desactiva el punto. Se complementa con estiramientos y terapia manual.",
    duracion: "Las sesiones de punción seca duran entre 30 y 45 minutos. Normalmente se necesitan entre 3 y 6 sesiones.",
    faqs: [
      { pregunta: "¿La punción seca duele?", respuesta: "Puedes sentir una pequeña molestia al insertar la aguja, similar a un pinchazo. La respuesta de espasmo local puede ser incómoda pero breve. La mayoría de pacientes toleran bien la técnica." },
      { pregunta: "¿Es lo mismo que acupuntura?", respuesta: "No, aunque se utilizan agujas similares, la punción seca se basa en la anatomía y fisiología occidental, mientras que la acupuntura se basa en la medicina tradicional china." },
      { pregunta: "¿Tiene efectos secundarios?", respuesta: "Los efectos secundarios son leves y temporales: dolor local post-punción durante 24-48 horas y ocasionalmente un pequeño hematoma." }
    ],
    metaTitle: "Punción Seca | Clínica FisioSphere - Tratamiento de Puntos Gatillo",
    metaDescription: "Punción seca profesional para eliminar puntos gatillo y dolor muscular. Técnica segura y efectiva con resultados desde la primera sesión. Reserva tu cita."
  },
  {
    slug: "masoterapia",
    nombre: "Masoterapia",
    descripcionCorta: "Masaje terapéutico profesional para aliviar tensiones, contracturas y mejorar tu bienestar general.",
    descripcionLarga: "La masoterapia o masaje terapéutico es un conjunto de técnicas manuales aplicadas sobre los tejidos blandos con fines terapéuticos. A diferencia del masaje relajante, la masoterapia tiene objetivos terapéuticos específicos como reducir contracturas, mejorar la circulación, aliviar el dolor y restaurar la función muscular. Nuestros fisioterapeutas aplican diferentes técnicas según las necesidades de cada paciente.",
    icono: "Hand",
    beneficios: [
      "Alivio de contracturas musculares",
      "Reducción del estrés y la ansiedad",
      "Mejora de la circulación sanguínea",
      "Aumento de la flexibilidad muscular",
      "Reducción del dolor crónico",
      "Mejora del descanso nocturno"
    ],
    tratamiento: "Aplicamos diferentes técnicas de masaje terapéutico: amasamiento, fricción profunda, presiones, estiramientos pasivos y técnicas neuromusculares. Todo adaptado a tu patología y objetivos.",
    duracion: "Las sesiones duran entre 30 y 60 minutos según la zona a tratar.",
    faqs: [
      { pregunta: "¿Con qué frecuencia debo recibir masoterapia?", respuesta: "Para problemas agudos, se recomiendan 2-3 sesiones semanales. Para mantenimiento, 1 sesión semanal o quincenal es suficiente." },
      { pregunta: "¿El masaje terapéutico es doloroso?", respuesta: "Puede generar cierta molestia en las zonas más contracturadas, pero siempre dentro de la tolerancia del paciente. Nunca debe ser insoportable." },
      { pregunta: "¿Puedo recibir masoterapia si tengo una lesión aguda?", respuesta: "Depende del tipo de lesión. Tu fisioterapeuta evaluará si la masoterapia es indicada o si hay que esperar." }
    ],
    metaTitle: "Masoterapia | Clínica FisioSphere - Masaje Terapéutico Profesional",
    metaDescription: "Masoterapia profesional para aliviar contracturas, tensiones y dolor muscular. Masaje terapéutico personalizado con fisioterapeutas especializados. Pide cita."
  },
  {
    slug: "electroterapia",
    nombre: "Electroterapia",
    descripcionCorta: "Tecnología avanzada con corrientes eléctricas terapéuticas para acelerar la recuperación y aliviar el dolor.",
    descripcionLarga: "La electroterapia utiliza corrientes eléctricas con fines terapéuticos. Es una herramienta complementaria muy eficaz en fisioterapia que permite reducir el dolor, disminuir la inflamación, estimular la musculatura y acelerar la regeneración de los tejidos. Contamos con equipos de última generación que nos permiten aplicar diferentes tipos de corrientes según la patología.",
    icono: "Zap",
    beneficios: [
      "Reducción efectiva del dolor",
      "Disminución de la inflamación",
      "Estimulación de la regeneración tisular",
      "Fortalecimiento muscular",
      "Tratamiento no invasivo",
      "Complemento ideal a la terapia manual"
    ],
    tratamiento: "Utilizamos diferentes modalidades de electroterapia: TENS (alivio del dolor), EMS (estimulación muscular), ultrasonidos, corrientes interferenciales y microondas. La selección depende del diagnóstico y los objetivos del tratamiento.",
    duracion: "Las sesiones de electroterapia duran entre 20 y 30 minutos, generalmente combinadas con otras técnicas de fisioterapia.",
    faqs: [
      { pregunta: "¿La electroterapia tiene contraindicaciones?", respuesta: "Sí, está contraindicada en pacientes con marcapasos, epilepsia, sobre zonas tumorales, embarazo en zona abdominal y sobre heridas abiertas." },
      { pregunta: "¿Se siente dolor durante la electroterapia?", respuesta: "No, la sensación es de hormigueo o vibración. La intensidad se ajusta siempre a la tolerancia del paciente." },
      { pregunta: "¿Cuántas sesiones de electroterapia necesito?", respuesta: "Normalmente se recomiendan entre 8 y 12 sesiones, dependiendo de la patología y la evolución." }
    ],
    metaTitle: "Electroterapia | Clínica FisioSphere - Tecnología Avanzada en Rehabilitación",
    metaDescription: "Electroterapia avanzada para aliviar el dolor y acelerar la recuperación. TENS, ultrasonidos y estimulación muscular con equipos de última generación."
  },
  {
    slug: "terapia-manual",
    nombre: "Terapia Manual",
    descripcionCorta: "Técnicas manuales especializadas para movilizar articulaciones, tratar tejidos blandos y restaurar la función.",
    descripcionLarga: "La terapia manual es la base de la fisioterapia y engloba un conjunto de técnicas especializadas realizadas con las manos del fisioterapeuta. Incluye movilización articular, manipulación, técnicas de tejidos blandos, estiramientos y movilización neural. Nuestros fisioterapeutas cuentan con formación avanzada en terapia manual ortopédica para ofrecerte el mejor tratamiento posible.",
    icono: "HandMetal",
    beneficios: [
      "Restauración de la movilidad articular",
      "Reducción del dolor",
      "Liberación de restricciones de movimiento",
      "Mejora de la función muscular",
      "Tratamiento integral y personalizado",
      "Sin efectos secundarios"
    ],
    tratamiento: "El tratamiento incluye una evaluación exhaustiva del sistema neuromusculoesquelético. Aplicamos técnicas de movilización y manipulación articular, liberación miofascial, técnicas neurodinámicas y movilización del sistema nervioso.",
    duracion: "Las sesiones de terapia manual duran 45-60 minutos. El número de sesiones varía entre 6 y 15 según la patología.",
    faqs: [
      { pregunta: "¿La terapia manual es lo mismo que un masaje?", respuesta: "No, la terapia manual es mucho más amplia e incluye técnicas articulares, neurales y de tejidos blandos específicas. Requiere un diagnóstico previo y se aplica con objetivos terapéuticos concretos." },
      { pregunta: "¿Puede sonar algo durante la manipulación?", respuesta: "Sí, es normal escuchar un chasquido articular durante algunas técnicas de manipulación. Es un fenómeno fisiológico normal y no indica daño." },
      { pregunta: "¿Es segura la terapia manual?", respuesta: "Sí, cuando es realizada por un fisioterapeuta cualificado. Realizamos una evaluación previa para descartar cualquier contraindicación." }
    ],
    metaTitle: "Terapia Manual | Clínica FisioSphere - Fisioterapia Manual Ortopédica",
    metaDescription: "Terapia manual ortopédica especializada. Movilización articular, liberación miofascial y técnicas avanzadas para restaurar tu movilidad. Consulta ahora."
  },
  {
    slug: "rehabilitacion-postoperatoria",
    nombre: "Rehabilitación Postoperatoria",
    descripcionCorta: "Recuperación óptima después de cirugías ortopédicas con programas de rehabilitación basados en evidencia.",
    descripcionLarga: "La rehabilitación postoperatoria es fundamental para garantizar una recuperación completa tras una intervención quirúrgica. Nuestros programas están diseñados siguiendo los protocolos más actualizados y basados en la evidencia científica. Trabajamos en coordinación con los cirujanos para ofrecer una recuperación segura y eficaz, respetando los tiempos biológicos de curación.",
    icono: "Stethoscope",
    beneficios: [
      "Recuperación completa post-cirugía",
      "Protocolos basados en evidencia",
      "Coordinación con el equipo quirúrgico",
      "Prevención de complicaciones",
      "Recuperación de la funcionalidad",
      "Seguimiento individualizado"
    ],
    tratamiento: "Seguimos protocolos específicos para cada tipo de cirugía (prótesis de rodilla, cadera, reparación de ligamentos, artroscopias, etc.). El tratamiento progresa desde la fase aguda hasta la fase de readaptación funcional y vuelta a la actividad.",
    duracion: "La rehabilitación postoperatoria puede durar entre 1 y 6 meses según el tipo de cirugía. Las sesiones son de 45-60 minutos, inicialmente 3 veces por semana.",
    faqs: [
      { pregunta: "¿Cuándo puedo empezar la rehabilitación después de operarme?", respuesta: "Generalmente se inicia entre las 24 y 72 horas posteriores a la cirugía, siguiendo las indicaciones del cirujano. En algunos casos, iniciamos ejercicios incluso antes de la operación (prehabilitación)." },
      { pregunta: "¿Cuánto tiempo tardaré en recuperarme?", respuesta: "Depende del tipo de cirugía y de factores individuales. Una artroscopia puede requerir 6-8 semanas, mientras que una prótesis de rodilla puede necesitar 3-6 meses." },
      { pregunta: "¿La rehabilitación postoperatoria es dolorosa?", respuesta: "Puede haber molestias, especialmente al principio, pero trabajamos siempre dentro de la tolerancia del paciente. El dolor se gestiona con diferentes técnicas." }
    ],
    metaTitle: "Rehabilitación Postoperatoria | Clínica FisioSphere - Recuperación tras Cirugía",
    metaDescription: "Rehabilitación postoperatoria especializada. Recuperación óptima tras cirugías de rodilla, cadera, hombro y columna. Protocolos basados en evidencia. Pide cita."
  },
  {
    slug: "ejercicio-terapeutico",
    nombre: "Ejercicio Terapéutico",
    descripcionCorta: "Programas de ejercicio personalizado con supervisión profesional para prevenir y tratar lesiones musculoesqueléticas.",
    descripcionLarga: "El ejercicio terapéutico es una de las herramientas más potentes y con mayor evidencia científica en fisioterapia. Consiste en la prescripción de ejercicios específicos, dosificados y supervisados por un fisioterapeuta para prevenir, tratar y rehabilitar lesiones musculoesqueléticas. Nuestros programas son completamente individualizados y adaptados a tu condición, objetivos y nivel de actividad.",
    icono: "Activity",
    beneficios: [
      "Máxima evidencia científica",
      "Programas 100% personalizados",
      "Prevención de lesiones",
      "Mejora de la fuerza y estabilidad",
      "Autonomía del paciente",
      "Resultados a largo plazo"
    ],
    tratamiento: "Tras una evaluación funcional completa, diseñamos un programa de ejercicios específico. Incluye ejercicios de fuerza, estabilización, flexibilidad, control motor y propiocepción. Supervisamos la ejecución y ajustamos la progresión.",
    duracion: "Las sesiones de ejercicio terapéutico duran entre 45 y 60 minutos. Se recomienda un mínimo de 2-3 sesiones semanales durante 8-12 semanas.",
    faqs: [
      { pregunta: "¿Es lo mismo que ir al gimnasio?", respuesta: "No, el ejercicio terapéutico está prescrito por un fisioterapeuta basándose en tu diagnóstico y necesidades específicas. Los ejercicios, dosis y progresión son completamente individualizados." },
      { pregunta: "¿Puedo hacer los ejercicios en casa?", respuesta: "Sí, además de las sesiones supervisadas, te proporcionamos un programa de ejercicios para realizar en casa con vídeos explicativos." },
      { pregunta: "¿El ejercicio terapéutico es para todas las edades?", respuesta: "Sí, adaptamos los ejercicios a cada persona independientemente de su edad o condición física. Desde niños hasta personas mayores." }
    ],
    metaTitle: "Ejercicio Terapéutico | Clínica FisioSphere - Programas Personalizados",
    metaDescription: "Ejercicio terapéutico supervisado por fisioterapeutas. Programas personalizados para prevenir y tratar lesiones. Basado en evidencia científica. Reserva tu cita."
  },
  {
    slug: "fisioterapia-pediatrica",
    nombre: "Fisioterapia Pediátrica",
    descripcionCorta: "Atención especializada para el desarrollo psicomotor, tratamiento de patologías infantiles y estimulación temprana.",
    descripcionLarga: "La fisioterapia pediátrica se enfoca en el tratamiento y cuidado de bebés, niños y adolescentes con alteraciones en su desarrollo motor o condiciones neurológicas, ortopédicas y respiratorias. A través del juego y técnicas especializadas, ayudamos a los más pequeños a alcanzar su máximo potencial funcional, promoviendo su independencia y mejorando su calidad de vida y la de sus familias.",
    icono: "Baby",
    beneficios: [
      "Mejora del desarrollo psicomotor",
      "Tratamiento de alteraciones posturales",
      "Atención temprana y estimulación",
      "Rehabilitación neurológica infantil",
      "Fisioterapia respiratoria para niños",
      "Acompañamiento a las familias"
    ],
    tratamiento: "El tratamiento se realiza siempre a través del juego para asegurar la colaboración y motivación del niño. Utilizamos técnicas de neurodesarrollo, terapia manual adaptada, ejercicios terapéuticos lúdicos y proporcionamos pautas esenciales para que los padres continúen el trabajo en casa.",
    duracion: "Las sesiones duran entre 30 y 45 minutos, adaptándonos siempre al ritmo, la tolerancia y el estado de ánimo del niño.",
    faqs: [
      { pregunta: "¿A qué edad puede empezar un niño la fisioterapia?", respuesta: "Desde los primeros días de vida. La intervención temprana es fundamental, especialmente en bebés prematuros o con riesgo de alteraciones en el desarrollo." },
      { pregunta: "¿Los padres pueden estar presentes en la sesión?", respuesta: "No solo pueden, sino que es muy recomendable. Es fundamental que los padres aprendan las pautas y ejercicios para continuar el estímulo en casa." },
      { pregunta: "¿Tratan problemas respiratorios como bronquiolitis?", respuesta: "Sí, la fisioterapia respiratoria pediátrica es muy efectiva para ayudar a los niños a eliminar secreciones y mejorar su función respiratoria." }
    ],
    metaTitle: "Fisioterapia Pediátrica | Clínica FisioSphere - Especialistas en Niños",
    metaDescription: "Fisioterapia especializada para bebés y niños. Estimulación temprana, neurodesarrollo y fisioterapia respiratoria infantil. Pide tu cita."
  },
  {
    slug: "psicologia-infantil",
    nombre: "Psicología Infantil",
    descripcionCorta: "Acompañamiento psicológico especializado para niños y adolescentes, enfocado en su bienestar emocional y conductual.",
    descripcionLarga: "Nuestro servicio de psicología infantil ofrece un espacio seguro y acogedor donde los niños y adolescentes pueden expresar sus emociones y superar dificultades. Abordamos problemas de conducta, ansiedad infantil, miedos, dificultades de aprendizaje, TDHA y problemas de adaptación. Trabajamos de la mano con los padres para brindarles herramientas de crianza positiva y asegurar un desarrollo emocional sano de sus hijos.",
    icono: "Brain",
    beneficios: [
      "Gestión emocional para niños",
      "Mejora de problemas de conducta",
      "Tratamiento de ansiedad y miedos",
      "Apoyo en dificultades de aprendizaje",
      "Orientación a padres",
      "Fomento de la autoestima infantil"
    ],
    tratamiento: "Utilizamos la terapia de juego, técnicas cognitivo-conductuales adaptadas a la edad y terapias expresivas. El tratamiento incluye sesiones individuales con el niño y sesiones periódicas de orientación y seguimiento con los padres.",
    duracion: "Las sesiones tienen una duración de 45 a 50 minutos. La frecuencia suele ser semanal inicialmente, espaciándose según la evolución.",
    faqs: [
      { pregunta: "¿Cómo sé si mi hijo necesita un psicólogo?", respuesta: "Si observas cambios drásticos de comportamiento, miedos intensos, tristeza prolongada, dificultades en el colegio o problemas para relacionarse, es recomendable realizar una valoración." },
      { pregunta: "¿Qué hacen en la primera cita?", respuesta: "La primera sesión suele ser solo con los padres para recoger información detallada sobre el desarrollo del niño, el motivo de consulta y la dinámica familiar." },
      { pregunta: "¿La terapia infantil es solo jugar?", respuesta: "El juego es el lenguaje natural del niño y la herramienta principal que utilizamos para evaluar e intervenir, pero cada juego tiene un propósito terapéutico específico." }
    ],
    metaTitle: "Psicología Infantil | Clínica FisioSphere - Bienestar Emocional para Niños",
    metaDescription: "Psicólogos especialistas en niños y adolescentes. Tratamiento de ansiedad, conducta, miedos y aprendizaje. Orientación familiar. Reserva ahora."
  },
  {
    slug: "fisioterapia-geriatrica",
    nombre: "Fisioterapia Geriátrica",
    descripcionCorta: "Tratamientos diseñados para adultos mayores, enfocados en mantener la movilidad, prevenir caídas y aliviar dolores articulares.",
    descripcionLarga: "La fisioterapia geriátrica está especializada en las necesidades del adulto mayor. Con el paso de los años, es común experimentar pérdida de masa muscular, rigidez articular y problemas de equilibrio. Nuestro objetivo es promover un envejecimiento activo, aliviar dolores crónicos como la artrosis, mejorar la movilidad y el equilibrio para prevenir caídas, permitiendo a nuestros mayores mantener su independencia y disfrutar de una excelente calidad de vida.",
    icono: "PersonStanding",
    beneficios: [
      "Alivio del dolor articular (artrosis/artritis)",
      "Prevención de caídas y mejora del equilibrio",
      "Aumento de la fuerza y masa muscular",
      "Mantenimiento de la independencia",
      "Mejora de la marcha y movilidad",
      "Recuperación tras hospitalizaciones"
    ],
    tratamiento: "El tratamiento es suave, progresivo y adaptado a la condición de cada paciente. Combina terapia manual suave para aliviar dolores, ejercicios específicos de fortalecimiento, entrenamiento del equilibrio, reeducación de la marcha y pautas de ergonomía.",
    duracion: "Sesiones de 45 minutos. Recomendamos un abordaje continuo de 1 a 2 sesiones semanales como mantenimiento preventivo.",
    faqs: [
      { pregunta: "¿Es adecuado si mi familiar tiene osteoporosis?", respuesta: "Absolutamente. El ejercicio terapéutico controlado es uno de los mejores tratamientos para mantener la densidad ósea y prevenir fracturas." },
      { pregunta: "¿Tratan a pacientes con Alzheimer o demencia?", respuesta: "Sí, adaptamos nuestras terapias para pacientes con deterioro cognitivo, enfocándonos en estímulos motores y rutinas que les ayuden a mantener su funcionalidad." },
      { pregunta: "¿Ayuda para el dolor de artrosis?", respuesta: "Sí, la fisioterapia no cura la artrosis pero es altamente efectiva para reducir el dolor, la inflamación y mejorar la movilidad de las articulaciones afectadas." }
    ],
    metaTitle: "Fisioterapia Geriátrica | Clínica FisioSphere - Calidad de Vida para Mayores",
    metaDescription: "Fisioterapia para adultos mayores. Tratamiento de artrosis, prevención de caídas y mantenimiento de la movilidad. Envejecimiento activo y sin dolor."
  }
];

/* ===== DATA: Testimonios ===== */
export interface Testimonio {
  id: number;
  nombre: string;
  edad: number;
  servicio: string;
  texto: string;
  estrellas: number;
  fecha: string;
}

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "María García López",
    edad: 42,
    servicio: "Dolor Lumbar",
    texto: "Llevaba años sufriendo dolor lumbar crónico. Después de solo 8 sesiones, mi dolor ha desaparecido por completo. El equipo de FisioSphere es increíblemente profesional y cercano. Me enseñaron ejercicios que hago en casa y ya no he vuelto a tener problemas.",
    estrellas: 5,
    fecha: "2024-11-15"
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez Martín",
    edad: 35,
    servicio: "Fisioterapia Deportiva",
    texto: "Me lesioné el ligamento cruzado jugando al fútbol. La rehabilitación en FisioSphere fue excelente. En 4 meses estaba de vuelta en el campo. El seguimiento personalizado y la profesionalidad del equipo marcaron la diferencia.",
    estrellas: 5,
    fecha: "2024-10-22"
  },
  {
    id: 3,
    nombre: "Ana Martínez Sánchez",
    edad: 55,
    servicio: "Rehabilitación Postoperatoria",
    texto: "Después de mi operación de prótesis de rodilla, la rehabilitación en esta clínica fue fundamental. Los fisioterapeutas son muy profesionales y el trato es excelente. Ahora camino sin dolor y he recuperado toda mi movilidad.",
    estrellas: 5,
    fecha: "2024-09-18"
  },
  {
    id: 4,
    nombre: "David López Fernández",
    edad: 28,
    servicio: "Punción Seca",
    texto: "Tenía contracturas cervicales que me causaban dolores de cabeza constantes. Con las sesiones de punción seca y terapia manual, el alivio fue casi inmediato. Llevo 3 meses sin dolores de cabeza. ¡Totalmente recomendable!",
    estrellas: 5,
    fecha: "2024-08-10"
  },
  {
    id: 5,
    nombre: "Laura Sánchez Pérez",
    edad: 38,
    servicio: "Ejercicio Terapéutico",
    texto: "El programa de ejercicio terapéutico ha cambiado mi vida. Tenía problemas de espalda recurrentes y gracias a los ejercicios personalizados que me diseñaron, llevo más de 6 meses sin episodios de dolor. El equipo es fantástico.",
    estrellas: 5,
    fecha: "2024-07-05"
  },
  {
    id: 6,
    nombre: "Roberto Jiménez Ruiz",
    edad: 48,
    servicio: "Terapia Manual",
    texto: "La terapia manual que recibí en FisioSphere fue excepcional. Tenía una rigidez de hombro que me impedía levantar el brazo. En 10 sesiones recuperé toda la movilidad. Profesionalismo y calidez humana en cada visita.",
    estrellas: 5,
    fecha: "2024-06-20"
  },
  {
    id: 7,
    nombre: "Carmen Villanueva",
    edad: 34,
    servicio: "Psicología Infantil",
    texto: "Llevamos a nuestro hijo de 8 años con la Lic. Laura porque tenía mucha ansiedad escolar. El cambio ha sido maravilloso. La terapia basada en juegos le encantó y a nosotros nos dieron herramientas de crianza invaluables. ¡Totalmente recomendada!",
    estrellas: 5,
    fecha: "2024-12-10"
  },
  {
    id: 8,
    nombre: "Javier Mendoza",
    edad: 68,
    servicio: "Fisioterapia Geriátrica",
    texto: "Los dolores por artrosis en las rodillas no me dejaban ni salir a comprar. Gracias a las sesiones de fisioterapia geriátrica he recuperado mucha movilidad y confianza al caminar. El trato de los doctores es inmejorable con nosotros los mayores.",
    estrellas: 5,
    fecha: "2024-11-28"
  }
];

/* ===== DATA: FAQs generales ===== */
export interface FAQ {
  pregunta: string;
  respuesta: string;
}

export const faqsGenerales: FAQ[] = [
  {
    pregunta: "¿Necesito cita previa?",
    respuesta: "Sí, trabajamos con cita previa para garantizar la atención personalizada de cada paciente. Puedes reservar tu cita a través de nuestra web, por teléfono o por WhatsApp."
  },
  {
    pregunta: "¿Cuánto dura una sesión de fisioterapia?",
    respuesta: "Nuestras sesiones tienen una duración de entre 45 y 60 minutos, dependiendo del tratamiento. La primera visita suele durar algo más porque incluye la valoración inicial completa."
  },
  {
    pregunta: "¿Cuánto cuesta una sesión?",
    respuesta: "El precio de la sesión varía según el tratamiento. Puedes consultar nuestras tarifas contactándonos por teléfono o WhatsApp. Ofrecemos bonos de sesiones con descuento."
  },
  {
    pregunta: "¿Trabajáis con seguros médicos?",
    respuesta: "Sí, trabajamos con las principales compañías de seguros médicos. Consulta con nosotros si tu seguro tiene cobertura de fisioterapia."
  },
  {
    pregunta: "¿Necesito prescripción médica para ir al fisioterapeuta?",
    respuesta: "No es necesaria una prescripción médica para acudir a fisioterapia. Los fisioterapeutas somos profesionales sanitarios con capacidad de diagnóstico y tratamiento autónomo."
  },
  {
    pregunta: "¿Cuántas sesiones necesitaré?",
    respuesta: "El número de sesiones depende de cada caso particular. En la primera valoración, te daremos una estimación del número de sesiones recomendadas y los objetivos de tratamiento."
  },
  {
    pregunta: "¿Ofrecéis fisioterapia a domicilio?",
    respuesta: "Sí, ofrecemos servicio de fisioterapia a domicilio para pacientes que no pueden desplazarse a la clínica. Consulta disponibilidad y tarifas."
  },
  {
    pregunta: "¿Qué debo llevar a mi primera cita?",
    respuesta: "Te recomendamos traer ropa cómoda, los informes médicos que tengas (radiografías, resonancias, etc.) y una lista de los medicamentos que estés tomando."
  }
];

/* ===== DATA: Equipo ===== */
export interface MiembroEquipo {
  nombre: string;
  cargo: string;
  descripcion: string;
  especialidades: string[];
}

export const equipo: MiembroEquipo[] = [
  {
    nombre: "Dr. Alejandro Ruiz",
    cargo: "Director y Fisioterapeuta",
    descripcion: "Con más de 15 años de experiencia en fisioterapia. Especialista en terapia manual ortopédica y fisioterapia pediátrica. Formado en las mejores universidades y enfocado en el desarrollo psicomotor infantil.",
    especialidades: ["Fisioterapia Pediátrica", "Terapia Manual Ortopédica", "Rehabilitación"]
  },
  {
    nombre: "Dra. Sofía Martínez",
    cargo: "Fisioterapeuta Senior",
    descripcion: "Especialista en fisioterapia geriátrica y dolor crónico. Apasionada por ayudar a los adultos mayores a recuperar su movilidad, independencia y calidad de vida a través de tratamientos especializados.",
    especialidades: ["Fisioterapia Geriátrica", "Dolor Crónico", "Ejercicio Terapéutico"]
  },
  {
    nombre: "Lic. Laura Gómez",
    cargo: "Psicóloga Infantil",
    descripcion: "Profesional en psicología clínica con especialización en atención infantil. Experta en evaluación, diagnóstico y tratamiento de dificultades emocionales, conductuales y de aprendizaje en niños y adolescentes.",
    especialidades: ["Psicología Infantil", "Terapia Conductual", "Desarrollo Emocional"]
  }
];

/* ===== DATA: Info de la empresa ===== */
export const empresaInfo = {
  nombre: "FisioSphere",
  nombreCompleto: "Clínica de Fisioterapia FisioSphere",
  eslogan: "Tu bienestar, nuestra prioridad",
  telefono: "+51 987 654 321",
  telefonoDisplay: "987 654 321",
  email: "info@fisiosphere.pe",
  direccion: "Av. Javier Prado Este 1234, San Isidro",
  ciudad: "Lima",
  cp: "15036",
  pais: "Perú",
  horario: "Lunes a Viernes: 8:00 - 21:00 | Sábados: 9:00 - 14:00",
  whatsapp: "51987654321",
  whatsappLink: "https://wa.me/51987654321?text=Hola%2C%20me%20gustaría%20pedir%20una%20cita",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjUiTiAzwrA0MicxMy43Ilc!5e0!3m2!1ses!2ses!4v1",
  redesSociales: {
    instagram: "https://instagram.com/fisiosphere.peru",
    facebook: "https://facebook.com/fisiosphere",
    linkedin: "https://linkedin.com/company/fisiosphere",
    youtube: "https://youtube.com/@fisiosphere"
  },
  url: "https://www.fisiosphere.pe"
};
