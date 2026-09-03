export const PORTFOLIO_DATA = {
  turismo: Array.from({ length: 10 }, (_, i) => ({
    id: `t-${i + 1}`,
    src: `/assets/turismo/turismo${i + 1}.jpg`,
    titulo: `Paisaje Turístico ${i + 1}`,
    ubicacion: 'Santa Cruz, Bolivia',
    fecha: `2024-0${(i % 9) + 1}`,
    tecnica: 'Fotografía de Paisaje Digital',
    categoria: 'turismo',
  })),
  eventos: Array.from({ length: 10 }, (_, i) => ({
    id: `e-${i + 1}`,
    src: `/assets/eventos/evento${i + 1}.jpg`,
    titulo: `Evento Especial ${i + 1}`,
    ubicacion: 'Cochabamba / Santa Cruz',
    fecha: `2024-0${(i % 9) + 1}`,
    tecnica: 'Retrato y Cobertura en Vivo',
    categoria: 'eventos',
  })),
  productos: Array.from({ length: 10 }, (_, i) => ({
    id: `p-${i + 1}`,
    src: `/assets/productos/producto${i + 1}.jpg`,
    titulo: `Fotografía de Producto ${i + 1}`,
    ubicacion: 'Estudio Fotográfico',
    fecha: `2023-1${(i % 2)}`,
    tecnica: 'Iluminación Editorial & Estudio',
    categoria: 'productos',
  })),
};

export const CATEGORIES_LIST = [
  { id: 'turismo', label: 'Turismo' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'productos', label: 'Productos' },
];
