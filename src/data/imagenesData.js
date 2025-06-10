export const IMAGENES = {
  turismo: Array.from({ length: 10 }, (_, i) => ({
    id: `t-${i + 1}`,
    src: `/assets/turismo/turismo${i + 1}.jpg`,
    titulo: `Paisaje ${i + 1}`,
    ubicacion: 'Santa Cruz',
    fecha: `2023-0${i + 1 < 10 ? '0' : ''}${i + 1}`,
    tecnica: 'Digital',
  })),
  eventos: Array.from({ length: 10 }, (_, i) => ({
    id: `e-${i + 1}`,
    src: `/assets/eventos/evento${i + 1}.jpg`,
    titulo: `Evento ${i + 1}`,
    ubicacion: 'Cochabamba',
    fecha: `2024-0${i + 1 < 10 ? '0' : ''}${i + 1}`,
    tecnica: 'Retrato',
  })),
  productos: Array.from({ length: 10 }, (_, i) => ({
    id: `p-${i + 1}`,
    src: `/assets/productos/producto${i + 1}.jpg`,
    titulo: `Producto ${i + 1}`,
    ubicacion: 'La Paz',
    fecha: `2022-0${i + 1 < 10 ? '0' : ''}${i + 1}`,
    tecnica: 'Editorial',
  }))
};
