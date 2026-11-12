// Google muestra unos 155-160 caracteres de la descripción: el resto lo corta con "…".
// Recorta en el último espacio antes del límite para no partir palabras.
export function recortarDescripcion(texto: string, max = 158) {
  if (texto.length <= max) return texto;
  const corte = texto.slice(0, max);
  return corte.slice(0, corte.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '.';
}

// Título de una página con la marca solo si cabe en ~62 caracteres (lo que Google suele mostrar).
const MARCA = ' | FisioSphere';
export function tituloConMarca(titulo: string) {
  return titulo.length + MARCA.length <= 62 ? titulo : { absolute: titulo };
}
