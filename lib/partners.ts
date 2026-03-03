export type Partner = {
  slug: string;
  name: string;
  industry: string;
  shortDescription: string;
  longDescription: string;
  cardGradient: string;
  logo: {
    src?: string;
    alt: string;
    initials: string;
    gradient: string;
  };
  highlights: string[];
  additionalInfo: Array<{
    label: string;
    value: string;
  }>;
  cta?: {
    label: string;
    href: string;
  };
};

export const partners: Partner[] = [
  {
    slug: 'andes-retail',
    name: 'Andes Retail Group',
    industry: 'Retail y Ecommerce',
    shortDescription:
      'Grupo omnicanal que unifico catalogo, pagos y logistica en una sola plataforma.',
    longDescription:
      'Trabajamos en una arquitectura headless para acelerar lanzamientos y mejorar conversion. El roadmap incluye personalizacion con IA y analitica en tiempo real para los equipos de marketing.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'Andes Retail Group',
      initials: 'AR',
      gradient: 'from-teal-500 to-emerald-500',
    },
    highlights: [
      'Ecommerce headless con catalogo unificado',
      'Integraciones con ERP y fulfillment',
      'Panel de ventas con alertas de stock',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Buenos Aires, AR' },
      { label: 'Tiempo de alianza', value: '18 meses' },
      { label: 'Servicios', value: 'Ecommerce, Integraciones, Data' },
      { label: 'Equipo dedicado', value: '8 especialistas' },
    ],
    cta: {
      label: 'Solicitar caso',
      href: '/#contact',
    },
  },
  {
    slug: 'patagonia-logistics',
    name: 'Patagonia Logistics',
    industry: 'Logistica y Supply Chain',
    shortDescription:
      'Operador regional que optimizo rutas y redujo tiempos de entrega con automatizacion.',
    longDescription:
      'Implementamos un motor de asignacion dinamica con visibilidad en tiempo real. La capa de integraciones conecta WMS, tracking y canales B2B.',
    cardGradient: 'gradient-bg-2',
    logo: {
      alt: 'Patagonia Logistics',
      initials: 'PL',
      gradient: 'from-blue-500 to-cyan-500',
    },
    highlights: [
      'Ruteo inteligente con SLA por zona',
      'Dashboard operativo con KPIs diarios',
      'Automatizacion de notificaciones',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Neuquen, AR' },
      { label: 'Tiempo de alianza', value: '12 meses' },
      { label: 'Servicios', value: 'Automatizacion, Cloud, Data' },
      { label: 'Cobertura', value: '6 provincias' },
    ],
  },
  {
    slug: 'financia-sur',
    name: 'Financia Sur',
    industry: 'Fintech y Pagos',
    shortDescription:
      'Fintech que acelero el onboarding digital y mejoro la aprobacion crediticia.',
    longDescription:
      'Creamos flujos KYC con verificacion automatica y scoring con modelos explicables. La arquitectura esta lista para escalar con nuevos productos financieros.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'Financia Sur',
      initials: 'FS',
      gradient: 'from-purple-500 to-blue-500',
    },
    highlights: [
      'KYC automatizado con validaciones en segundos',
      'Scoring con reglas y machine learning',
      'Monitoreo antifraude integrado',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Cordoba, AR' },
      { label: 'Tiempo de alianza', value: '24 meses' },
      { label: 'Servicios', value: 'IA, Integraciones, Cloud' },
      { label: 'Usuarios activos', value: '120k' },
    ],
    cta: {
      label: 'Agendar reunion',
      href: '/#contact',
    },
  },
  {
    slug: 'salud-viva',
    name: 'Salud Viva',
    industry: 'Salud Digital',
    shortDescription:
      'Red de clinicas que digitalizo turnos, historias clinicas y telemedicina.',
    longDescription:
      'Diseniamos un hub de datos clinicos con integraciones HL7 y APIs privadas. La experiencia paciente es mobile-first con recordatorios automatizados.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'Salud Viva',
      initials: 'SV',
      gradient: 'from-rose-500 to-orange-500',
    },
    highlights: [
      'Portal del paciente con turnos y pagos',
      'Interoperabilidad con laboratorios',
      'Telemedicina segura y escalable',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Rosario, AR' },
      { label: 'Tiempo de alianza', value: '9 meses' },
      { label: 'Servicios', value: 'App Web, Integraciones, Cloud' },
      { label: 'Sedes', value: '14 clinicas' },
    ],
  },
  {
    slug: 'energia-nova',
    name: 'Energia Nova',
    industry: 'Energia Renovable',
    shortDescription:
      'Empresa solar que consolido operaciones y mantenimiento en un solo centro.',
    longDescription:
      'Implementamos un sistema de monitoreo con alertas predictivas y reportes ESG. El equipo opera desde un NOC con tableros en tiempo real.',
    cardGradient: 'gradient-bg-2',
    logo: {
      alt: 'Energia Nova',
      initials: 'EN',
      gradient: 'from-amber-500 to-yellow-500',
    },
    highlights: [
      'Monitoreo de activos con alertas predictivas',
      'Dashboards ESG para inversores',
      'Integracion con sensores IoT',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Mendoza, AR' },
      { label: 'Tiempo de alianza', value: '15 meses' },
      { label: 'Servicios', value: 'Cloud, Data, Automatizacion' },
      { label: 'Activos conectados', value: '2.400' },
    ],
  },
  {
    slug: 'agrovision',
    name: 'Agrovision',
    industry: 'Agtech',
    shortDescription:
      'Plataforma agricola que conecto productores, acopios y exportadores.',
    longDescription:
      'Creamos un marketplace con trazabilidad y contratos digitales. La infraestructura esta pensada para crecer con modulos de forecasting y pagos.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'Agrovision',
      initials: 'AV',
      gradient: 'from-green-500 to-lime-500',
    },
    highlights: [
      'Trazabilidad por lote y origen',
      'Contratos digitales con firma',
      'Integracion con sistemas de acopio',
    ],
    additionalInfo: [
      { label: 'Ubicacion', value: 'Santa Fe, AR' },
      { label: 'Tiempo de alianza', value: '6 meses' },
      { label: 'Servicios', value: 'Plataforma, Integraciones, Data' },
      { label: 'Operaciones', value: '+1.200 productores' },
    ],
  },
];

export async function getPartners(): Promise<Partner[]> {
  return partners;
}

export async function getPartnerBySlug(slug: string): Promise<Partner | null> {
  return partners.find((partner) => partner.slug === slug) ?? null;
}
