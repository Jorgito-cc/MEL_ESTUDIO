# MEL STUDIO

Plataforma web profesional de gestión visual, portafolio y reservas para servicios fotográficos de MEL STUDIO. Permite a los clientes explorar trabajos fotográficos clasificados por categorías, consultar paquetes de precios, agendar sesiones personalizadas y enviar opiniones y mensajes de contacto directo.

---

## Tipo de Sistema

| Característica | Descripción |
|---|---|
| Web App (Landing + Portafolio) | Presentación estética de servicios fotográficos clasificados por categorías visuales (Turismo, Eventos, Productos). |
| Sistema de Reservas | Formulario estructurado para agendar sesiones con selección de fecha, hora, tipo de sesión y paquete de servicio, conectado a WhatsApp. |
| Muro de Opiniones | Sistema de visualización de testimonios y modal interactivo para enviar nuevas valoraciones. |
| Diseño Responsivo | Interfaz completamente adaptable a dispositivos móviles, tablets y pantallas de escritorio. |

---

## Estructura de Arquitectura (Feature-Based)

El proyecto está organizado siguiendo el patrón arquitectónico modular basado en funcionalidades (*Feature-Based Architecture*):

```text
src/
├── assets/                  # Recursos estáticos (imágenes y fotografías optimizadas)
├── common/                  # Componentes y elementos compartidos y reutilizables
│   ├── components/          # Modal genérico, ScrollToTop, etc.
│   └── layout/              # Navbar (con drawer móvil), Footer y MainLayout
├── features/                # Módulos organizados por funcionalidad del negocio
│   ├── about/               # Vista y componentes de 'Sobre mí'
│   ├── contact/             # Formulario de contacto e información de la marca
│   ├── home/                # Hero, categorías destacadas y resumen de portada
│   ├── portfolio/           # Galería fotográfica, pestañas de categorías y modal de detalle
│   ├── reviews/             # Tarjetas de opiniones y modal para enviar reseñas
│   └── services/            # Paquetes de precios y formulario de reserva
├── routes/                  # Enrutador centralizado (AppRoutes y routePaths)
├── styles/                  # Variables CSS globales, tokens de diseño y estilos base
└── utils/                   # Utilidades de integración (enlaces de WhatsApp, validaciones)
```

---

## Tecnologías Utilizadas

- **React.js** (v18+)
- **Vite** (Entorno de desarrollo y empaquetador ultrarrápido)
- **React Router DOM** (Gestión declarativa de rutas y navegación SPA)
- **CSS3 Moderno** (Variables CSS, Flexbox, CSS Grid y Metodología BEM)
- **React Icons** (Iconografía ligera y escalable)

---

## Instalación y Uso Local

1. Clonar el repositorio:
```bash
git clone https://github.com/Jorgito-cc/MEL_ESTUDIO.git
```

2. Entrar al directorio del proyecto:
```bash
cd MEL_ESTUDIO
```

3. Instalar las dependencias:
```bash
npm install
```

4. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

5. Construir para producción:
```bash
npm run build
```

---

## Roles y Equipo

- **Diseñadora Gráfica & Fotógrafa**: Melisa Uria  
  Responsable de la identidad visual, dirección artística, paleta de colores y composición fotográfica.

- **Desarrollador Frontend**: Jorge Choque Calle  
  Encargado de la arquitectura modular del software, implementación de la interfaz de usuario, lógica de reservas, diseño responsivo y optimización.

---

## Enlace del Proyecto

- **Sitio Web Desplegado**: [https://melstudio.netlify.app](https://melstudio.netlify.app)
