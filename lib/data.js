// data.js
// Toda la información editable del sitio vive aquí.
// Cambia textos, precios o contacto sin tocar los componentes.

export const brand = {
  name: "Kivo",
  tagline: "Páginas web rápidas y modernas para negocios locales",
  city: "Matamoros, Tamaulipas",
  logoText: "Kivo", // texto alternativo del logo (el wordmark ya viene resuelto en el SVG)
  logoFont: {
    family: "Inter",
    weight: 800, // ExtraBold, igual que el wordmark en public/brand/kivo-lockup.svg
    letterSpacing: "0",
  },
}

export const contact = {
  whatsappNumber: "528681570465", // formato: 52 + 10 dígitos, sin espacios ni +
  whatsappMessage: "Hola, vi tu página y quiero información sobre mi proyecto web 🚀",
  email: "email@proton.me",
}

export const hero = {
  title: "Tu negocio necesita una página web que venda",
  subtitle:
    "Diseño moderno, carga rápida y hosting confiable. Tu sitio armado contigo, no con una plantilla genérica.",
  ctaText: "Habla conmigo por WhatsApp",
}

export const pricing = {
  note: "Todos los precios incluyen IVA.",
  domainNote:
    "El dominio (por ejemplo, tunegocio.com) se compra por separado con el proveedor que prefieras. Nosotros te asesoramos en todo el proceso de compra y conexión, sin costo extra.",
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
      "Entrega en 1-2 semanas",
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
      "Entrega en 2-4 semanas",
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

export const services = {
  title: "¿Qué incluye el servicio?",
  subtitle: "Todo lo que hacemos por ti, de principio a fin, para que tu página web esté lista y funcionando.",
  items: [
    {
      icon: "palette",
      title: "Diseño y desarrollo",
      text: "Diseño a la medida de tu negocio, responsive y optimizado para convertir visitas en clientes.",
    },
    {
      icon: "globe",
      title: "Dominio y hosting",
      text: "Configuramos tu hosting y SSL. El dominio se compra aparte, pero te asesoramos en todo el proceso de compra y conexión.",
    },
    {
      icon: "gauge",
      title: "Velocidad y SEO básico",
      text: "Imágenes optimizadas, carga rápida y buenas prácticas de SEO para que te encuentren en Google.",
    },
    {
      icon: "share2",
      title: "Integraciones",
      text: "Botón de WhatsApp, redes sociales y formularios de contacto conectados y listos para usarse.",
    },
    {
      icon: "wrench",
      title: "Mantenimiento",
      text: "Actualizaciones, respaldos periódicos y soporte directo conmigo cuando lo necesites.",
    },
    {
      icon: "rocket",
      title: "Proceso cercano",
      text: "Vamos de la idea al sitio publicado revisando cada sección contigo, con acompañamiento en cada paso.",
    },
  ],
}

export const about = {
  title: "¿Por qué trabajar conmigo?",
  points: [
    { title: "Entrega realista", text: "Sitios listos en semanas, con tiempo real para hacerlo bien." },
    { title: "Tecnología moderna", text: "Next.js, hosting propio, sin depender de terceros." },
    { title: "Soporte real", text: "Contacto directo conmigo, sin tickets ni esperas." },
    {
      title: "Hecho contigo, no en automático",
      text: "Platicamos tu idea, ajustamos el diseño contigo y revisamos cada sección antes de publicarla. Por eso los tiempos son de semanas: no es una plantilla armada sola, es tu sitio hecho a mano.",
    },
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
