/* ===== DATA: Blog Articles ===== */

export interface Articulo {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  autor: string;
  fecha: string;
  categoria: string;
  tiempoLectura: string;
  tags: string[];
  publicado: boolean;
}

export const categoriasBlog = [
  "Dolor lumbar",
  "Rodilla",
  "Espalda",
  "Cuello",
  "Hombro",
  "Ejercicio",
  "Lesiones deportivas",
  "Consejos",
  "Noticias",
  "Psicopedagogía",
];

export const articulos: Articulo[] = [
  {
    id: 1,
    slug: "ejercicios-para-dolor-lumbar",
    titulo: "10 Ejercicios Efectivos para Aliviar el Dolor Lumbar",
    descripcion:
      "Descubre los mejores ejercicios para aliviar y prevenir el dolor lumbar. Guía completa con instrucciones paso a paso avalada por fisioterapeutas.",
    contenido: `## ¿Por qué aparece el dolor lumbar?

El dolor lumbar es una de las dolencias más frecuentes en la población adulta. Afecta al **80% de las personas** en algún momento de su vida y es la principal causa de discapacidad laboral en el mundo.

Las causas más comunes incluyen:
- Sedentarismo y falta de actividad física
- Malas posturas mantenidas
- Debilidad de la musculatura estabilizadora
- Sobrecarga mecánica
- Estrés y factores psicosociales

## Ejercicios recomendados

### 1. Puente de glúteos

El puente de glúteos es uno de los ejercicios más efectivos para fortalecer la musculatura posterior y estabilizar la columna lumbar.

**Cómo realizarlo:**
1. Túmbate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo
2. Contrae los glúteos y eleva la pelvis hasta formar una línea recta
3. Mantén la posición 5 segundos
4. Baja lentamente
5. Repite 10-15 veces, 3 series

### 2. Bird-dog (Cuadrupedia alternante)

Este ejercicio mejora la estabilidad del core y la coordinación.

**Cómo realizarlo:**
1. Colócate en posición de cuadrupedia (a cuatro patas)
2. Extiende el brazo derecho y la pierna izquierda simultáneamente
3. Mantén 5 segundos manteniendo la espalda recta
4. Vuelve a la posición inicial
5. Repite con el otro lado. 10 repeticiones por lado, 3 series

### 3. Plancha frontal

La plancha fortalece toda la musculatura del core, fundamental para proteger la columna.

**Cómo realizarlo:**
1. Apóyate sobre antebrazos y puntas de los pies
2. Mantén el cuerpo en línea recta, sin elevar ni hundir la pelvis
3. Mantén 20-30 segundos
4. Descansa y repite 3-5 veces

### 4. Estiramiento del piramidal

El músculo piramidal contracturado puede causar dolor lumbar y ciático.

**Cómo realizarlo:**
1. Túmbate boca arriba
2. Cruza la pierna derecha sobre la izquierda
3. Agarra la pierna izquierda por detrás del muslo
4. Tira suavemente hacia el pecho
5. Mantén 30 segundos. Repite 3 veces por lado

### 5. Cat-Cow (Gato-vaca)

Este ejercicio mejora la movilidad de toda la columna vertebral.

**Cómo realizarlo:**
1. En posición de cuadrupedia
2. Arquea la espalda hacia arriba (gato) mientras exhalas
3. Hunde la espalda hacia abajo (vaca) mientras inhalas
4. Realiza el movimiento de forma fluida
5. Repite 10-15 veces

### 6. Estiramiento de isquiotibiales

Los isquiotibiales acortados pueden contribuir al dolor lumbar.

**Cómo realizarlo:**
1. Túmbate boca arriba
2. Eleva una pierna con la rodilla estirada
3. Utiliza una toalla o cinta para ayudarte
4. Mantén 30 segundos
5. Repite 3 veces por pierna

### 7. Rotaciones de tronco

Mejoran la movilidad rotacional de la columna.

**Cómo realizarlo:**
1. Túmbate boca arriba con las rodillas flexionadas
2. Deja caer ambas rodillas hacia un lado
3. Mantén los hombros en el suelo
4. Mantén 15-20 segundos por lado
5. Repite 5 veces por lado

### 8. Dead bug

Excelente para activar el core de forma segura.

**Cómo realizarlo:**
1. Túmbate boca arriba con brazos extendidos al techo y rodillas a 90°
2. Baja el brazo derecho y la pierna izquierda simultáneamente
3. Mantén la espalda baja pegada al suelo
4. Vuelve y repite con el otro lado
5. 10 repeticiones por lado, 3 series

### 9. Sentadilla con pared

Fortalece cuádriceps y glúteos con apoyo.

**Cómo realizarlo:**
1. Apoya la espalda en una pared
2. Baja hasta que las rodillas formen 90°
3. Mantén 20-30 segundos
4. Repite 5 veces

### 10. Caminata

Caminar es uno de los mejores ejercicios para el dolor lumbar. Se recomienda caminar **30 minutos al día** a paso moderado.

## ¿Cuándo hacer los ejercicios?

Lo ideal es realizarlos **diariamente**, preferiblemente por la mañana o al final del día. Comienza con pocas repeticiones e incrementa progresivamente.

## ¿Cuándo debo consultar a un profesional?

Consulta con un fisioterapeuta si:
- El dolor persiste más de 2 semanas
- Se irradia hacia la pierna
- Hay debilidad o adormecimiento
- El dolor es muy intenso
- Hay pérdida de control de esfínteres (urgencia médica)

## Conclusión

El ejercicio terapéutico es la herramienta más efectiva para tratar y prevenir el dolor lumbar. Sin embargo, cada persona es diferente y los ejercicios deben adaptarse a tu situación particular. **Te recomendamos consultar con un fisioterapeuta** para diseñar un programa personalizado.`,
    autor: "Dr. Alejandro Ruiz",
    fecha: "2024-12-01",
    categoria: "Dolor lumbar",
    tiempoLectura: "8 min",
    tags: ["dolor lumbar", "ejercicios", "espalda", "fisioterapia"],
    publicado: true,
  },
  {
    id: 2,
    slug: "como-prevenir-lesiones-deportivas",
    titulo: "Cómo Prevenir Lesiones Deportivas: Guía Completa 2024",
    descripcion:
      "Aprende las mejores estrategias para prevenir lesiones deportivas. Calentamiento, estiramiento, nutrición y hábitos para deportistas.",
    contenido: `## Introducción

Las lesiones deportivas son uno de los principales motivos de consulta en fisioterapia. Ya seas un atleta profesional o un deportista aficionado, la prevención es siempre la mejor estrategia.

En esta guía te explicamos las **claves para prevenir lesiones deportivas** basándonos en la última evidencia científica.

## 1. Calentamiento adecuado

El calentamiento es fundamental antes de cualquier actividad deportiva. Un buen calentamiento debe incluir:

- **Calentamiento general** (5-10 minutos): carrera suave, bicicleta o elíptica
- **Movilidad articular**: rotaciones de tobillos, rodillas, caderas, hombros
- **Activación muscular**: ejercicios específicos para los músculos que vas a trabajar
- **Movimientos específicos del deporte**: gestos técnicos a baja intensidad

### Protocolo FIFA 11+

El programa FIFA 11+ ha demostrado reducir las lesiones deportivas hasta un **30-50%**. Incluye ejercicios de fuerza, equilibrio y agilidad.

## 2. Fortalecimiento muscular

La fuerza es el factor más importante en la prevención de lesiones. Se recomienda:

- Entrenar fuerza **2-3 veces por semana**
- Trabajar tanto músculos agonistas como antagonistas
- Incluir ejercicios excéntricos (especialmente para tendones)
- Fortalecer el core (abdominales, lumbares, glúteos)
- Trabajar la propiocepción y el equilibrio

## 3. Flexibilidad y movilidad

Mantener una buena flexibilidad y movilidad articular es esencial:

- Realizar estiramientos **después del entrenamiento** (no antes)
- Incluir sesiones de movilidad articular en tu rutina
- Practicar yoga o pilates como complemento
- Trabajar especialmente las zonas más rígidas

## 4. Carga progresiva

Uno de los errores más comunes es aumentar la carga de entrenamiento demasiado rápido.

**Regla del 10%**: No aumentes el volumen de entrenamiento más de un 10% por semana.

Esto aplica a:
- Kilómetros corridos
- Peso levantado
- Horas de entrenamiento
- Intensidad del ejercicio

## 5. Descanso y recuperación

El descanso es tan importante como el entrenamiento:

- **Dormir 7-9 horas** por noche
- Incluir días de descanso activo
- Alternar entrenamientos intensos con suaves
- Escuchar a tu cuerpo

## 6. Nutrición e hidratación

Una buena nutrición ayuda a prevenir lesiones:

- Hidratarse antes, durante y después del ejercicio
- Consumir proteína suficiente para la recuperación muscular
- Asegurar una ingesta adecuada de calcio y vitamina D
- Evitar el ejercicio en ayunas prolongadas

## 7. Equipamiento adecuado

- Usar calzado específico para tu deporte
- Renovar las zapatillas cuando estén desgastadas
- Utilizar protecciones si tu deporte lo requiere

## Conclusión

La prevención de lesiones deportivas requiere un enfoque integral. Si quieres un programa personalizado de prevención, **consulta con un fisioterapeuta deportivo** que evalúe tus factores de riesgo individuales.`,
    autor: "Dr. Miguel Fernández",
    fecha: "2024-11-25",
    categoria: "Lesiones deportivas",
    tiempoLectura: "12 min",
    tags: ["lesiones deportivas", "prevención", "deporte", "calentamiento"],
    publicado: true,
  },
  {
    id: 3,
    slug: "beneficios-puncion-seca",
    titulo: "Punción Seca: Qué Es, Beneficios y Para Qué Sirve",
    descripcion:
      "Todo lo que necesitas saber sobre la punción seca. Beneficios, indicaciones, contraindicaciones y qué esperar de una sesión.",
    contenido: `## ¿Qué es la punción seca?

La punción seca es una **técnica invasiva mínima** utilizada en fisioterapia para el tratamiento de los puntos gatillo miofasciales. Consiste en la inserción de una aguja fina de acupuntura en el punto gatillo del músculo para desactivarlo.

A pesar de usar el mismo tipo de aguja que la acupuntura, la punción seca se basa en principios de **anatomía y fisiología occidental**, no en la medicina tradicional china.

## ¿Qué son los puntos gatillo?

Los puntos gatillo son **nudos de contracción muscular** que generan dolor local y referido. Se caracterizan por:

- Bandas tensas palpables en el músculo
- Dolor a la presión
- Dolor referido a zonas distantes
- Restricción del movimiento
- Debilidad muscular

## Beneficios de la punción seca

### Alivio del dolor
La punción seca es altamente efectiva para reducir el dolor muscular, tanto agudo como crónico.

### Mejora de la movilidad
Al desactivar los puntos gatillo, se recupera la longitud muscular normal y se mejora el rango de movimiento.

### Reducción de la tensión muscular
La respuesta de espasmo local que se produce durante la punción ayuda a relajar el músculo contracturado.

### Efecto rápido
Muchos pacientes experimentan **mejoría desde la primera sesión**, aunque generalmente se necesitan varias sesiones.

### Complemento a otras técnicas
La punción seca funciona especialmente bien **combinada con terapia manual y ejercicio terapéutico**.

## Indicaciones

La punción seca está indicada para:

- Contracturas musculares
- Cefaleas tensionales
- Cervicalgias
- Lumbalgias
- Epicondilitis (codo de tenista)
- Síndrome del túnel carpiano
- Dolor miofascial
- Fascitis plantar
- Tendinopatías

## Contraindicaciones

No se debe realizar punción seca en:

- Personas con fobia extrema a las agujas
- Zonas con infección activa
- Pacientes con alteraciones de la coagulación
- Embarazadas (en determinadas zonas)
- Sobre implantes o prótesis

## ¿Qué esperar de una sesión?

1. **Evaluación**: El fisioterapeuta localiza los puntos gatillo mediante palpación
2. **Inserción**: Se inserta la aguja en el punto gatillo
3. **Respuesta de espasmo local**: Se busca provocar un espasmo que desactiva el punto
4. **Post-tratamiento**: Se aplican estiramientos y se dan recomendaciones

### Efectos secundarios

Los efectos secundarios son **leves y temporales**:
- Dolor local post-punción (24-48 horas)
- Pequeño hematoma en la zona
- Fatiga muscular

## Conclusión

La punción seca es una técnica segura y efectiva cuando es realizada por un fisioterapeuta cualificado. Si sufres de dolor muscular crónico o contracturas recurrentes, la punción seca puede ser una excelente opción de tratamiento.`,
    autor: "Dr. Alejandro Ruiz",
    fecha: "2024-11-18",
    categoria: "Consejos",
    tiempoLectura: "6 min",
    tags: ["punción seca", "puntos gatillo", "dolor muscular", "tratamiento"],
    publicado: true,
  },
  {
    id: 4,
    slug: "dolor-cervical-causas-tratamiento",
    titulo: "Dolor Cervical: Causas, Síntomas y Tratamiento Efectivo",
    descripcion:
      "Guía completa sobre el dolor cervical. Conoce las causas, síntomas, diagnóstico y las mejores opciones de tratamiento en fisioterapia.",
    contenido: `## ¿Qué es el dolor cervical?

El dolor cervical o cervicalgia es el **dolor localizado en la zona del cuello**, que puede irradiarse hacia los hombros, brazos o cabeza. Es la cuarta causa de discapacidad a nivel mundial.

## Causas principales

### Causas mecánicas
- **Malas posturas mantenidas**: uso prolongado del móvil o ordenador
- **Sedentarismo**: debilidad de la musculatura cervical profunda
- **Sobrecarga muscular**: estrés, tensión emocional
- **Artrosis cervical**: desgaste de las articulaciones

### Causas traumáticas
- Latigazo cervical (accidente de tráfico)
- Traumatismos directos
- Lesiones deportivas

### Otras causas
- Hernias discales cervicales
- Estenosis de canal
- Cefalea cervicogénica

## Síntomas

- Dolor en la zona del cuello
- Rigidez cervical
- Dolor de cabeza (cefalea)
- Mareos de origen cervical
- Dolor irradiado a hombro o brazo
- Hormigueo en las manos
- Crepitaciones al mover el cuello

## Tratamiento en fisioterapia

### Terapia manual
- Movilización articular cervical
- Técnicas de tejidos blandos
- Manipulación vertebral (si está indicada)
- Liberación miofascial

### Ejercicio terapéutico
- Fortalecimiento de la musculatura cervical profunda
- Ejercicios de estabilización cervical
- Estiramientos suaves
- Reeducación postural

### Punción seca
Para desactivar puntos gatillo en trapecio, elevador de la escápula y musculatura suboccipital.

### Educación al paciente
- Ergonomía en el trabajo
- Higiene postural
- Ejercicios para hacer en casa
- Gestión del estrés

## Prevención

1. **Ergonomía**: Pantalla a la altura de los ojos, silla con buen respaldo
2. **Pausas activas**: Cada 30-45 minutos, realizar movimientos cervicales
3. **Ejercicio regular**: Fortalecer la musculatura del cuello y espalda alta
4. **Almohada adecuada**: Elegir una almohada que mantenga la columna alineada
5. **Gestión del estrés**: Técnicas de relajación y respiración

## Conclusión

El dolor cervical tiene tratamiento efectivo en fisioterapia. No aceptes el dolor como algo normal. Un fisioterapeuta puede identificar la causa y diseñar un plan de tratamiento personalizado para ti.`,
    autor: "Dra. Sofía Martínez",
    fecha: "2024-11-10",
    categoria: "Cuello",
    tiempoLectura: "10 min",
    tags: ["dolor cervical", "cuello", "cervicalgia", "tratamiento"],
    publicado: true,
  },
  {
    id: 5,
    slug: "rehabilitacion-protesis-rodilla",
    titulo: "Rehabilitación tras Prótesis de Rodilla: Guía Paso a Paso",
    descripcion:
      "Todo sobre la rehabilitación después de una prótesis de rodilla. Fases, ejercicios, tiempos de recuperación y consejos prácticos.",
    contenido: `## Introducción

La artroplastia total de rodilla es una de las cirugías más frecuentes en traumatología. Una **rehabilitación adecuada es fundamental** para garantizar el éxito de la intervención y recuperar la funcionalidad completa.

## Fases de la rehabilitación

### Fase 1: Postoperatorio inmediato (Semanas 1-2)

**Objetivos:**
- Control del dolor y la inflamación
- Prevención de complicaciones (trombosis)
- Inicio de la movilidad

**Ejercicios:**
- Bombeo de tobillo (mover el pie arriba y abajo)
- Contracciones isométricas de cuádriceps
- Flexo-extensión pasiva de rodilla
- Elevación de pierna recta (si tolera)

### Fase 2: Movilidad y carga (Semanas 3-6)

**Objetivos:**
- Alcanzar 90° de flexión de rodilla
- Marcha con bastones
- Fortalecimiento progresivo

**Ejercicios:**
- Bicicleta estática (asiento alto)
- Sentadillas parciales con apoyo
- Ejercicios en piscina (si la herida está cerrada)
- Subir y bajar escalones

### Fase 3: Fortalecimiento (Semanas 7-12)

**Objetivos:**
- Alcanzar 110-120° de flexión
- Marcha sin ayudas
- Fuerza funcional

**Ejercicios:**
- Bicicleta con resistencia progresiva
- Sentadillas con carga
- Trabajo de propiocepción
- Marcha en diferentes superficies

### Fase 4: Readaptación funcional (Meses 3-6)

**Objetivos:**
- Vuelta a las actividades de la vida diaria
- Recuperación funcional completa
- Mantenimiento

## Tiempos de recuperación

| Hito | Tiempo aproximado |
|---|---|
| Marcha con bastones | 2-4 semanas |
| Conducir (rodilla izquierda) | 2-3 semanas |
| Conducir (rodilla derecha) | 6-8 semanas |
| Marcha sin bastones | 4-8 semanas |
| Vuelta al trabajo (sedentario) | 6-8 semanas |
| Vuelta al trabajo (físico) | 3-4 meses |
| Recuperación completa | 6-12 meses |

## Consejos prácticos

1. **Aplicar hielo** después de los ejercicios (15-20 minutos)
2. **Elevar la pierna** cuando estés sentado
3. **Usar medias de compresión** según indicación médica
4. **No cruzar las piernas** en las primeras semanas
5. **Evitar sentarse en sillas bajas** (usar cojín elevador)
6. **Caminar todos los días**, incrementando gradualmente

## Conclusión

La rehabilitación tras una prótesis de rodilla requiere paciencia y constancia. Cada paciente evoluciona a su ritmo, y es fundamental seguir las indicaciones del fisioterapeuta.`,
    autor: "Dra. Sofía Martínez",
    fecha: "2024-11-02",
    categoria: "Rodilla",
    tiempoLectura: "15 min",
    tags: ["rodilla", "prótesis", "rehabilitación", "cirugía"],
    publicado: true,
  },
  {
    id: 6,
    slug: "ergonomia-trabajo-oficina",
    titulo: "Ergonomía en el Trabajo: Guía para Evitar Dolores de Espalda",
    descripcion:
      "Consejos prácticos de ergonomía para prevenir dolores de espalda, cuello y muñeca en tu puesto de trabajo. Con ilustraciones.",
    contenido: `## ¿Por qué es importante la ergonomía?

Pasamos una media de **8 horas diarias** sentados frente al ordenador. Una mala postura mantenida durante este tiempo puede provocar dolor cervical, lumbar, tendinitis y otros problemas musculoesqueléticos.

## La postura ideal frente al ordenador

### Silla
- Altura regulable para que los pies estén planos en el suelo
- Respaldo que apoye la curva lumbar
- Reposabrazos a la altura de los codos
- Asiento con profundidad adecuada (2-3 dedos entre el borde y la rodilla)

### Pantalla
- A la **altura de los ojos** (borde superior de la pantalla)
- A una distancia de **50-70 cm** (un brazo extendido)
- Sin reflejos ni brillos
- Texto legible sin forzar la vista

### Teclado y ratón
- Teclado a la altura de los codos
- Muñecas en posición neutra (no flexionadas)
- Ratón cerca del teclado para no estirar el brazo
- Considerar ratón vertical si hay molestias

### Mesa
- Superficie suficiente para organizar materiales
- Altura adecuada (aproximadamente 72-75 cm)
- Espacio libre debajo para las piernas

## Pausas activas

Las pausas activas son microdescansos que incluyen movimiento:

1. **Cada 30 minutos**: Levántate, camina 1-2 minutos
2. **Cada hora**: Realiza estiramientos de cuello, hombros y espalda
3. **Cada 2 horas**: Haz una pausa más larga (5-10 minutos)

### Ejercicios para hacer en la oficina

- Rotaciones de cuello (suaves)
- Encogimiento de hombros
- Estiramiento de pectorales en la puerta
- Extensión de muñecas
- Sentadillas (levantarse de la silla)

## Síndrome del texto cervical (Text Neck)

El uso excesivo del móvil con la cabeza inclinada hacia abajo genera una sobrecarga cervical importante. Recomendaciones:
- Elevar el móvil a la altura de los ojos
- Limitar el tiempo de uso
- Realizar ejercicios compensatorios

## Conclusión

Pequeños ajustes ergonómicos pueden tener un **gran impacto** en tu salud. Si ya tienes molestias, consulta con un fisioterapeuta para una valoración personalizada.`,
    autor: "Dr. Alejandro Ruiz",
    fecha: "2024-10-28",
    categoria: "Consejos",
    tiempoLectura: "7 min",
    tags: ["ergonomía", "oficina", "postura", "prevención"],
    publicado: true,
  },
  {
    id: 7,
    slug: "fascitis-plantar-tratamiento",
    titulo: "Fascitis Plantar: Causas, Tratamiento y Ejercicios",
    descripcion: "Todo sobre la fascitis plantar. Causas, síntomas, tratamiento en fisioterapia y ejercicios para aliviar el dolor del pie.",
    contenido: `## ¿Qué es la fascitis plantar?

La fascitis plantar es la **inflamación de la fascia plantar**, una banda de tejido fibroso que se extiende desde el talón hasta los dedos del pie. Es la causa más frecuente de dolor en el talón.

## Síntomas

- Dolor en la planta del pie, especialmente en el talón
- Dolor intenso al dar los primeros pasos por la mañana
- Dolor después de estar mucho tiempo de pie
- Mejora con el movimiento pero empeora tras el reposo

## Causas y factores de riesgo

- Sobrepeso
- Uso de calzado inadecuado
- Actividades con impacto repetitivo
- Pie plano o pie cavo
- Acortamiento del tendón de Aquiles

## Tratamiento en fisioterapia

### Terapia manual
- Liberación miofascial de la planta del pie
- Movilización articular del tobillo
- Técnicas de tejidos blandos en gemelos y sóleo

### Ejercicios específicos

**1. Automasaje con pelota de tenis:**
Rueda una pelota bajo la planta del pie durante 2-3 minutos.

**2. Estiramiento de la fascia plantar:**
Cruza el pie afectado sobre la rodilla y estira los dedos hacia arriba. Mantén 30 segundos.

**3. Estiramiento de gemelos en escalón:**
Apoya la parte delantera del pie en un escalón y deja caer el talón. Mantén 30 segundos.

**4. Ejercicios excéntricos:**
Ponte de puntillas y baja lentamente. 3 series de 15 repeticiones.

### Otras técnicas
- Electroterapia
- Vendaje neuromuscular
- Ondas de choque
- Plantillas ortopédicas personalizadas

## Conclusión

La fascitis plantar puede ser muy limitante, pero tiene un buen pronóstico con el tratamiento adecuado. La mayoría de los pacientes mejoran significativamente en 6-12 semanas de tratamiento.`,
    autor: "Dr. Miguel Fernández",
    fecha: "2024-10-20",
    categoria: "Consejos",
    tiempoLectura: "8 min",
    tags: ["fascitis plantar", "pie", "talón", "tratamiento"],
    publicado: true,
  },
  {
    id: 8,
    slug: "tendinitis-hombro-supraespinoso",
    titulo: "Tendinitis del Supraespinoso: Diagnóstico y Tratamiento",
    descripcion: "Guía completa sobre la tendinitis del supraespinoso. Causas del dolor de hombro, diagnóstico y tratamiento en fisioterapia.",
    contenido: `## ¿Qué es la tendinitis del supraespinoso?

El supraespinoso es uno de los cuatro músculos del manguito rotador del hombro. Su tendón es el más frecuentemente afectado, provocando dolor al levantar el brazo.

## Síntomas

- Dolor en la parte lateral del hombro
- Dolor al elevar el brazo por encima de la cabeza
- Dolor nocturno (al dormir sobre el lado afectado)
- Debilidad al levantar objetos
- Arco doloroso entre 60° y 120° de abducción

## Causas

- Movimientos repetitivos por encima de la cabeza
- Deportes: natación, tenis, voleibol, crossfit
- Trabajos con los brazos elevados
- Degeneración por la edad
- Impingement subacromial

## Tratamiento en fisioterapia

### Fase 1: Alivio del dolor
- Reposo relativo (evitar movimientos dolorosos)
- Crioterapia
- Electroterapia (TENS, ultrasonidos)
- Terapia manual suave

### Fase 2: Movilidad y fortalecimiento
- Ejercicios pendulares de Codman
- Movilización activa asistida
- Isométricos del manguito rotador
- Fortalecimiento escapular

### Fase 3: Fortalecimiento progresivo
- Ejercicios excéntricos del supraespinoso
- Fortalecimiento del manguito rotador con banda elástica
- Trabajo de estabilidad escapular
- Ejercicios funcionales

## Pronóstico

Con un tratamiento adecuado, la mayoría de las tendinitis del supraespinoso se resuelven en **8-12 semanas**. La cirugía solo se contempla en casos que no responden al tratamiento conservador.

## Conclusión

El dolor de hombro por tendinitis del supraespinoso es muy frecuente y tiene buen pronóstico con fisioterapia. No esperes a que empeore, consulta con un profesional.`,
    autor: "Dra. Sofía Martínez",
    fecha: "2024-10-15",
    categoria: "Hombro",
    tiempoLectura: "9 min",
    tags: ["hombro", "tendinitis", "supraespinoso", "manguito rotador"],
    publicado: true,
  },
  {
    id: 9,
    slug: "esguince-tobillo-recuperacion",
    titulo: "Esguince de Tobillo: Recuperación y Ejercicios",
    descripcion: "Cómo recuperarte de un esguince de tobillo. Grados, tratamiento, ejercicios y plazos de recuperación según la gravedad.",
    contenido: `## ¿Qué es un esguince de tobillo?

Un esguince de tobillo es una **lesión de los ligamentos** que estabilizan la articulación. El más frecuente es el esguince del ligamento lateral externo, que se produce al girar el pie hacia dentro.

## Grados de esguince

### Grado I (leve)
- Distensión ligamentosa sin rotura
- Dolor leve, inflamación mínima
- Puede caminar con molestias
- Recuperación: 1-2 semanas

### Grado II (moderado)
- Rotura parcial del ligamento
- Dolor moderado-severo, inflamación y hematoma
- Dificultad para caminar
- Recuperación: 3-6 semanas

### Grado III (grave)
- Rotura completa del ligamento
- Dolor intenso, gran inflamación
- Inestabilidad articular
- Recuperación: 6-12 semanas

## Tratamiento inicial (POLICE)

- **P**rotección: evitar movimientos dolorosos
- **O**ptimal **L**oading: carga progresiva según tolerancia
- **I**ce: hielo 15-20 min cada 2-3 horas
- **C**ompresión: vendaje compresivo
- **E**levación: elevar el pie por encima del corazón

## Ejercicios de rehabilitación

### Fase 1: Movilidad (semana 1-2)
- Movimientos del alfabeto con el pie
- Flexión-extensión de tobillo
- Movilización suave

### Fase 2: Fortalecimiento (semana 2-4)
- Ejercicios con banda elástica (4 direcciones)
- Elevaciones de talones
- Equilibrio sobre una pierna

### Fase 3: Propiocepción (semana 4-8)
- Plato de equilibrio
- Saltos y recepciones
- Carrera con cambios de dirección

## Conclusión

La rehabilitación del esguince de tobillo es fundamental para prevenir recaídas. El 40% de los esguinces mal tratados desarrollan inestabilidad crónica. Consulta con un fisioterapeuta para una recuperación completa.`,
    autor: "Dr. Miguel Fernández",
    fecha: "2024-10-08",
    categoria: "Lesiones deportivas",
    tiempoLectura: "11 min",
    tags: ["tobillo", "esguince", "rehabilitación", "deporte"],
    publicado: true,
  },
  {
    id: 10,
    slug: "hernia-discal-lumbar-que-hacer",
    titulo: "Hernia Discal Lumbar: ¿Qué Hacer y Qué No Hacer?",
    descripcion: "Todo sobre la hernia discal lumbar. Mitos, verdades, tratamiento conservador y cuándo es necesaria la cirugía.",
    contenido: `## ¿Qué es una hernia discal?

Una hernia discal lumbar se produce cuando el **núcleo pulposo del disco intervertebral** se desplaza y puede comprimir las raíces nerviosas. Esto puede causar dolor lumbar, ciática y otros síntomas neurológicos.

## Datos importantes

- El **85% de las hernias discales** se reabsorben espontáneamente
- Muchas personas tienen hernias discales sin síntomas
- La cirugía solo es necesaria en un 5-10% de los casos
- El ejercicio terapéutico es el tratamiento más efectivo

## Mitos y verdades

### ❌ Mito: "Tengo hernia, no puedo hacer ejercicio"
✅ **Verdad**: El ejercicio es el mejor tratamiento. La inactividad empeora la hernia.

### ❌ Mito: "Necesito cirugía"
✅ **Verdad**: La mayoría se resuelven con tratamiento conservador (fisioterapia).

### ❌ Mito: "No puedo levantar peso"
✅ **Verdad**: Puedes y debes levantar peso de forma progresiva y con buena técnica.

## Tratamiento en fisioterapia

1. **Educación al paciente**: entender la hernia reduce el miedo y el dolor
2. **Ejercicio terapéutico**: fortalecimiento progresivo
3. **Terapia manual**: movilización, tracción
4. **Neurodinámica**: movilización del nervio ciático
5. **Ejercicios de McKenzie**: extensión lumbar

## ¿Cuándo consultar al médico urgentemente?

- Pérdida de fuerza progresiva en la pierna
- Pérdida de sensibilidad en la zona perineal
- Alteración del control de esfínteres
- Dolor insoportable que no cede con medicación

## Conclusión

La hernia discal lumbar tiene un excelente pronóstico con tratamiento conservador. La clave es mantenerse activo, hacer ejercicio adaptado y confiar en el proceso de recuperación.`,
    autor: "Dr. Alejandro Ruiz",
    fecha: "2024-09-30",
    categoria: "Espalda",
    tiempoLectura: "9 min",
    tags: ["hernia discal", "lumbar", "ciática", "columna"],
    publicado: true,
  },
  {
    id: 11,
    slug: "sindrome-tunel-carpiano",
    titulo: "Síndrome del Túnel Carpiano: Síntomas y Tratamiento",
    descripcion: "Guía sobre el síndrome del túnel carpiano. Causas, síntomas, diagnóstico y opciones de tratamiento conservador.",
    contenido: `## ¿Qué es el síndrome del túnel carpiano?

Es la **compresión del nervio mediano** a su paso por el túnel carpiano en la muñeca. Provoca dolor, hormigueo y debilidad en la mano.

## Síntomas

- Hormigueo en dedos pulgar, índice, medio y parte del anular
- Dolor en muñeca y mano, especialmente por la noche
- Debilidad para agarrar objetos
- Torpeza con movimientos finos

## Factores de riesgo

- Trabajo con movimientos repetitivos de muñeca
- Uso prolongado del ratón y teclado
- Embarazo
- Diabetes
- Artritis reumatoide

## Tratamiento conservador

- Férula nocturna
- Ejercicios de deslizamiento nervioso
- Ergonomía del puesto de trabajo
- Terapia manual
- Electroterapia

## Conclusión

El tratamiento conservador es efectivo en la mayoría de los casos leves-moderados. Consulta con un fisioterapeuta si tienes síntomas.`,
    autor: "Dra. Sofía Martínez",
    fecha: "2024-09-22",
    categoria: "Consejos",
    tiempoLectura: "6 min",
    tags: ["túnel carpiano", "muñeca", "nervio mediano"],
    publicado: true,
  },
  {
    id: 12,
    slug: "beneficios-pilates-fisioterapia",
    titulo: "Pilates Terapéutico: Beneficios para la Rehabilitación",
    descripcion: "Descubre los beneficios del Pilates terapéutico como complemento a la fisioterapia. Indicaciones y ejercicios.",
    contenido: `## ¿Qué es el Pilates terapéutico?

El Pilates terapéutico es una **adaptación del método Pilates** aplicada por fisioterapeutas con fines rehabilitadores. Se centra en el control motor, la estabilización del core y la corrección postural.

## Beneficios

- Fortalecimiento del core y suelo pélvico
- Mejora de la postura
- Aumento de la flexibilidad
- Reducción del dolor lumbar
- Mejora del equilibrio
- Control de la respiración
- Conciencia corporal

## Indicaciones

- Dolor lumbar crónico
- Rehabilitación postoperatoria
- Incontinencia urinaria
- Escoliosis
- Fibromialgia
- Osteoporosis
- Embarazo y postparto

## Conclusión

El Pilates terapéutico es una herramienta excelente cuando es supervisado por un fisioterapeuta. Consulta si puede ser beneficioso para tu caso.`,
    autor: "Dra. Sofía Martínez",
    fecha: "2024-09-15",
    categoria: "Ejercicio",
    tiempoLectura: "5 min",
    tags: ["pilates", "ejercicio", "core", "rehabilitación"],
    publicado: true,
  },
  {
    id: 13,
    slug: "como-manejar-ansiedad-infantil",
    titulo: "Cómo Manejar la Ansiedad Infantil: Guía para Padres",
    descripcion: "La ansiedad en los niños es cada vez más común. Aprende a identificar los síntomas y descubre estrategias prácticas para ayudar a tu hijo a gestionar sus emociones.",
    contenido: `## ¿Qué es la ansiedad infantil?

La ansiedad es una emoción normal y necesaria. Sin embargo, cuando los miedos y preocupaciones interfieren con las actividades diarias del niño (ir al colegio, dormir, jugar con amigos), estamos hablando de un problema de ansiedad que requiere atención.

## Síntomas comunes de ansiedad en niños

Los niños no siempre expresan su ansiedad con palabras. A menudo, se manifiesta a través de síntomas físicos o cambios de comportamiento:

- **Síntomas físicos:** dolores de estómago frecuentes, dolores de cabeza, tensión muscular, problemas para conciliar el sueño.
- **Cambios de comportamiento:** irritabilidad, llanto excesivo, aferrarse a los padres, berrinches inusuales, evitación de situaciones sociales o escolares.
- **Cognitivos:** preocupaciones constantes por el futuro, miedo a equivocarse, pensamientos catastróficos.

## Estrategias para ayudar a tu hijo

### 1. Valida sus emociones
Nunca le digas "no pasa nada" o "no tienes por qué tener miedo". Valida lo que siente diciendo: *"Veo que estás asustado/preocupado, es normal sentirse así. Yo estoy aquí contigo"*.

### 2. Enséñale a identificar la ansiedad
Ayúdale a ponerle nombre a la emoción y a notar cómo se siente en su cuerpo. Pueden dibujarla o ponerle un apodo, por ejemplo, "el monstruo de las preocupaciones". Esto externaliza el problema y lo hace más manejable.

### 3. Fomenta el afrontamiento, no la evitación
Si tu hijo tiene miedo a los perros, evitar a todos los perros solo aumentará su miedo a largo plazo. Ayúdale a enfrentar sus miedos paso a paso (exposición gradual), celebrando cada pequeño avance.

### 4. Técnicas de respiración y relajación
Enséñale respiración diafragmática. Un juego útil es: *"Imagina que tienes una flor en una mano y una vela en la otra. Huele la flor profundamente por la nariz y luego sopla la vela suavemente por la boca"*.

### 5. Crea rutinas predecibles
Los niños ansiosos se benefician enormemente de las rutinas. Saber qué va a pasar y cuándo les proporciona una sensación de seguridad y control.

## ¿Cuándo buscar ayuda profesional?

Si la ansiedad está afectando significativamente la calidad de vida de tu hijo, su rendimiento escolar o sus relaciones familiares, es el momento de consultar con un psicólogo infantil. La terapia (especialmente a través del juego y el enfoque cognitivo-conductual) proporciona herramientas excelentes tanto para el niño como para los padres.`,
    autor: "Lic. Andrea Ramos",
    fecha: "2024-12-15",
    categoria: "Psicopedagogía",
    tiempoLectura: "6 min",
    tags: ["psicología infantil", "ansiedad", "emociones", "padres", "crianza"],
    publicado: true,
  },
  {
    id: 14,
    slug: "tdah-diagnostico-y-apoyo",
    titulo: "TDAH en la Infancia: Más allá del Diagnóstico",
    descripcion: "Comprender el TDAH es el primer paso para apoyar a tu hijo. Descubre qué es realmente, cómo se diagnostica y cómo puedes ayudar desde casa.",
    contenido: `## Entendiendo el TDAH

El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo muy común. A menudo se malinterpreta como "mala conducta" o "falta de límites", pero en realidad tiene una base neurobiológica que afecta cómo el cerebro procesa la información, los impulsos y la atención.

## Mitos comunes sobre el TDAH

- **Mito 1: Todos los niños con TDAH son hiperactivos.** Falso. Existe el predominio inatento, donde el niño es tranquilo pero tiene grandes dificultades para concentrarse.
- **Mito 2: Es culpa de una mala crianza.** Falso. Aunque el ambiente influye en cómo se manifiesta, el TDAH tiene un fuerte componente genético y biológico.
- **Mito 3: Los niños con TDAH no pueden concentrarse en nada.** Falso. Pueden hiperconcentrarse en cosas que les resultan muy estimulantes (como los videojuegos), pero les cuesta regular la atención en tareas que requieren esfuerzo sostenido.

## ¿Cómo apoyar a un niño con TDAH en casa?

### 1. Estructura y organización visual
El cerebro con TDAH necesita ayudas externas. Utiliza calendarios grandes, listas de verificación visuales, relojes de arena para medir el tiempo y códigos de colores. Mantén las rutinas estables.

### 2. Instrucciones cortas y claras
En lugar de decir: *"Ve a tu cuarto, recoge los juguetes, haz la cama y lávate los dientes"*, da una instrucción a la vez. Pide que te mire a los ojos y asegúrate de que ha entendido antes de dar el siguiente paso.

### 3. Fomenta el movimiento estratégico
Un niño hiperactivo necesita moverse para poder pensar. Permitir pequeñas adaptaciones (como usar una silla giratoria, apretar una pelota antiestrés o tener descansos de movimiento durante los deberes) puede mejorar significativamente su rendimiento.

### 4. Refuerzo positivo inmediato
Los niños con TDAH reciben muchas más críticas a lo largo del día que los niños sin el trastorno. Es vital equilibrar esto cazándolos "haciendo cosas bien". El elogio debe ser inmediato y específico.

## El papel de la psicología infantil

El diagnóstico debe ser realizado por profesionales (neurólogo, psiquiatra o psicólogo clínico). Una vez diagnosticado, la terapia psicológica infantil ayuda al niño a desarrollar habilidades de autorregulación emocional, habilidades sociales y autoestima, mientras proporciona psicoeducación y estrategias a los padres.

En FisioSphere, entendemos la importancia de un abordaje integral, apoyando tanto al niño como a su familia en este proceso.`,
    autor: "Lic. Andrea Ramos",
    fecha: "2024-12-05",
    categoria: "Psicopedagogía",
    tiempoLectura: "7 min",
    tags: ["TDAH", "psicología infantil", "atención", "crianza", "desarrollo"],
    publicado: true,
  },
];
