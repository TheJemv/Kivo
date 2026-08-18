// data.js
// Toda la información editable del sitio vive aquí.
// Cambia textos, precios o contacto sin tocar los componentes.

export const brand = {
  name: "NorteWeb", // Sugerencia de nombre — alternativas: "NorteWeb Studio", "PixelFrontera"
  tagline: "Páginas web rápidas y modernas para negocios locales",
  city: "Matamoros, Tamaulipas",
  logoText: "Norte", // parte resaltada del nombre en el logo (ej. "Norte" + "Web")
}

export const contact = {
  whatsappNumber: "52XXXXXXXXXX", // formato: 52 + 10 dígitos, sin espacios ni +
  whatsappMessage: "Hola, vi tu página y quiero información sobre mi proyecto web 🚀",
  email: "tucorreo@ejemplo.com",
}

export const hero = {
  title: "Tu negocio necesita una página web que venda",
  subtitle:
    "Diseño moderno, carga rápida y hosting confiable. Entrega en días, no en meses.",
  ctaText: "Habla conmigo por WhatsApp",
}

export const pricing = {
  note: "Todos los precios incluyen IVA.",
}

export const packages = [
  {
    id: "landing",
    name: "Landing Page",
    price: 2800,
    currency: "MXN",
    billing: "pago único, IVA incluido",
    description: "Ideal para negocios que necesitan presencia en línea rápida y efectiva.",
    features: [
      "1 página (scroll único)",
      "Diseño responsive (móvil y escritorio)",
      "Botón directo a WhatsApp",
      "Formulario de contacto simple",
      "Entrega en 3-5 días",
    ],
    highlighted: false,
  },
  {
    id: "sitio-5",
    name: "Sitio Web de 5 Páginas",
    price: 6500,
    currency: "MXN",
    billing: "pago único, IVA incluido",
    description: "Para negocios que quieren mostrar todo: servicios, historia y contacto.",
    features: [
      "Inicio, Nosotros, Servicios, Galería/Blog, Contacto",
      "Diseño responsive",
      "SEO básico (títulos, descripciones)",
      "Integración con redes sociales",
      "Entrega en 7-10 días",
    ],
    highlighted: true,
  },
  {
    id: "hosting",
    name: "Hosting Mensual",
    price: 349,
    currency: "MXN",
    billing: "por mes, IVA incluido",
    description: "Tu sitio siempre en línea, seguro, actualizado y con mantenimiento incluido.",
    features: [
      "Hosting en servidor propio (alta disponibilidad)",
      "Certificado SSL incluido",
      "Dominio conectado",
      "Mantenimiento y actualizaciones incluidas",
      "Respaldo mensual",
      "Soporte directo por WhatsApp",
    ],
    highlighted: false,
  },
  {
    id: "cita",
    name: "Agenda una Cita",
    price: 0,
    currency: "MXN",
    billing: "consulta gratuita",
    description: "¿Tienes un proyecto más grande o una idea distinta? Hablemos.",
    features: [
      "Llamada de 20 minutos",
      "Diagnóstico de tu proyecto",
      "Cotización personalizada",
      "Sin costo ni compromiso",
    ],
    highlighted: false,
    ctaOverride: "Agendar por WhatsApp",
  },
]

export const about = {
  title: "¿Por qué trabajar conmigo?",
  points: [
    { title: "Rápido", text: "Sitios listos en días, no semanas." },
    { title: "Tecnología moderna", text: "Next.js, hosting propio, sin depender de terceros." },
    { title: "Soporte real", text: "Contacto directo conmigo, sin tickets ni esperas." },
  ],
}

export const techStack = {
  title: "Tecnología en la que puedes confiar",
  items: [
    {
      icon: "zap",
      title: "Carga rápida",
      text: "Tu página abre en segundos, sin hacer esperar a tus clientes.",
    },
    {
      icon: "shield-check",
      title: "Siempre en línea",
      text: "Tu sitio funciona 24/7, sin caídas ni interrupciones.",
    },
    {
      icon: "lock",
      title: "Datos protegidos",
      text: "Conexión segura y respaldos para que tu información esté a salvo.",
    },
  ],
  logos: [
    { name: "Next.js", iconSlug: "nextjs" },
    { name: "Docker", iconSlug: "docker" },
    { name: "Cloudflare", iconSlug: "cloudflare" },
  ],
}

export const testimonials = [
  // Agrega aquí testimonios reales conforme entregues proyectos
  // { name: "Nombre", business: "Negocio", quote: "..." },
]

export const footer = {
  copyText: `© ${new Date().getFullYear()} ${brand.name}. Todos los derechos reservados.`,
}
