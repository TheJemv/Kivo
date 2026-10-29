// data.js
// Datos de negocio NO traducibles: precios, IDs, íconos, contacto, logos.
// Los textos que sí se traducen (títulos, descripciones, botones) viven en
// messages/es.json y messages/en.json, y se combinan con estos datos por id.
// Para cambiar precios o el número de WhatsApp, edita este archivo.
// Para cambiar textos, edita los .json de messages/.

export const brand = {
   name: 'Kivo',
   logoText: 'Kivo', // texto alternativo del logo (el wordmark ya viene resuelto en el SVG)
   logoFont: {
      family: 'Inter',
      weight: 800, // ExtraBold, igual que el wordmark en public/brand/kivo-lockup.svg
      letterSpacing: '0',
   },
};

export const contact = {
   whatsappNumber: '528681570465', // formato: 52 + 10 dígitos, sin espacios ni +
   email: 'email@proton.me',
   // TODO: reemplazar por el invite real de Discord antes de publicar.
   discordUrl: '[LINK_DISCORD]',
};

// Orden y anclas del menú. Las etiquetas viven en messages: nav.links.<id>
export const navLinkIds = [
   'hosting',
   'precios',
   'como-funciona',
   'revendedores',
   'preguntas',
   'diseno-web',
];

// Orden de las tarjetas de "qué puedes hostear". Textos en messages: hostingTypes.items.<id>
export const hostingTypeIds = ['sites', 'apps', 'database', 'fullstack'];

// Orden de los pasos de "cómo funciona". Textos en messages: howItWorks.steps.<id>
export const howItWorksStepIds = ['connect', 'configure', 'push'];

// Planes para desarrolladores. Nombre/features viven en messages: pricingDev.packages.<id>
export const devPackages = [
   { id: 'static', price: 99, currency: 'MXN', highlighted: false },
   { id: 'webapp', price: 199, currency: 'MXN', highlighted: false },
   { id: 'database', price: 199, currency: 'MXN', highlighted: false },
   { id: 'fullstack', price: 449, currency: 'MXN', highlighted: true },
   { id: 'agency', price: 1499, currency: 'MXN', highlighted: false },
];

// Plan único para negocios. Nombre/features viven en messages: pricingBusiness.*
export const businessPackage = { id: 'business', price: 349, currency: 'MXN' };

// Orden de los puntos de seguridad. Textos en messages: security.points.<id>
export const securityPointIds = ['backups', 'ssl', 'privateDb', 'monitoring'];

// Orden de las tarjetas de revendedores/referidos. Textos en messages: resellers.cards.<id>
export const resellerCardIds = ['referral', 'reseller'];

// Orden de las preguntas frecuentes. Textos en messages: faq.items.<id>
export const faqIds = [
   'invoice',
   'requirements',
   'location',
   'incidents',
   'restore',
   'migration',
   'payment',
   'cancel',
];

// Paquetes de diseño web (servicio secundario). Nombre/features viven en messages: webDesign.packages.<id>
export const webDesignPackages = [
   { id: 'landing', price: 2800, currency: 'MXN', highlighted: false },
   { id: 'sitio-5', price: 6500, currency: 'MXN', highlighted: false },
   { id: 'combo', price: 5900, currency: 'MXN', highlighted: true },
];
