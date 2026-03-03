export type PartnerLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type PartnerCapability = {
  title: string;
  description: string;
};

export type PartnerUseCase = {
  title: string;
  description: string;
};

export type PartnerFaq = {
  question: string;
  answer: string;
};

export type PartnerDetailPage = {
  badge: string;
  heroDescription: string;
  heroLinks: PartnerLink[];
  allianceTitle: string;
  allianceDescription: string;
  allianceBenefits: string[];
  allianceLink: PartnerLink;
  capabilities: PartnerCapability[];
  useCases: PartnerUseCase[];
  faq: PartnerFaq[];
};

export type Partner = {
  slug: string;
  name: string;
  industry: string;
  subtitle?: string;
  featured?: boolean;
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
  cta?: PartnerLink;
  detailPage?: PartnerDetailPage;
};

export const partners: Partner[] = [
  {
    slug: 'donweb',
    name: 'DonWeb',
    industry: 'Hosting, Cloud y Dominios',
    shortDescription:
      'Aliado de infraestructura y presencia digital para proyectos que necesitan una base solida para crecer.',
    longDescription:
      'Trabajamos junto a DonWeb para potenciar despliegues, dominios y servicios de hosting con una base confiable para productos web, ecommerce y plataformas a medida.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'DonWeb',
      initials: 'DW',
      gradient: 'from-teal-500 to-emerald-500',
    },
    highlights: [
      'Infraestructura para sitios y aplicaciones',
      'Servicios de hosting, cloud y dominios',
      'Soporte para despliegues escalables',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Infraestructura digital' },
      { label: 'Relacion', value: 'Partner tecnologico' },
      { label: 'Enfoque', value: 'Hosting, cloud y dominios' },
      { label: 'Aporte', value: 'Base estable para proyectos online' },
    ],
  },
  {
    slug: 'tedxviedma',
    name: 'TEDxViedma',
    industry: 'Comunidad, Ideas y Eventos',
    shortDescription:
      'Partner institucional vinculado a la difusion de ideas, comunidad y experiencias con impacto local.',
    longDescription:
      'Acompanamos a TEDxViedma en iniciativas donde tecnologia, comunicacion y experiencia digital ayudan a amplificar eventos, contenidos y alcance comunitario.',
    cardGradient: 'gradient-bg-2',
    logo: {
      alt: 'TEDxViedma',
      initials: 'TV',
      gradient: 'from-blue-500 to-cyan-500',
    },
    highlights: [
      'Soporte para presencia digital',
      'Acompanamiento en iniciativas de difusion',
      'Experiencias centradas en comunidad',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Comunidad y eventos' },
      { label: 'Relacion', value: 'Partner institucional' },
      { label: 'Enfoque', value: 'Difusion y experiencia' },
      { label: 'Perfil', value: 'Evento independiente TEDx' },
    ],
  },
  {
    slug: 'jetbrains',
    name: 'JetBrains',
    industry: 'Herramientas de Desarrollo',
    shortDescription:
      'Alianza con una referencia global en herramientas para desarrollo profesional de software.',
    longDescription:
      'La relacion con JetBrains fortalece nuestro flujo tecnico con herramientas enfocadas en productividad, calidad de codigo y trabajo sostenido en proyectos complejos.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'JetBrains',
      initials: 'JB',
      gradient: 'from-purple-500 to-blue-500',
    },
    highlights: [
      'Herramientas para desarrollo profesional',
      'Mejora de productividad y calidad',
      'Soporte al trabajo de equipos tecnicos',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Developer tools' },
      { label: 'Relacion', value: 'Partner tecnologico' },
      { label: 'Enfoque', value: 'Productividad y calidad de codigo' },
      { label: 'Aporte', value: 'Flujo tecnico mas consistente' },
    ],
  },
  {
    slug: 'mercadopago',
    name: 'Mercado Pago',
    industry: 'Fintech y Pagos',
    shortDescription:
      'Partner clave para integraciones de cobro, checkout y experiencias de pago digitales en la region.',
    longDescription:
      'Trabajamos con Mercado Pago para implementar flujos de pago robustos, integraciones confiables y experiencias de compra mas fluidas en productos web y plataformas transaccionales.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'Mercado Pago',
      initials: 'MP',
      gradient: 'from-rose-500 to-orange-500',
    },
    highlights: [
      'Integraciones de checkout y cobros',
      'Experiencias de pago mas simples',
      'Base confiable para productos transaccionales',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Pagos digitales' },
      { label: 'Relacion', value: 'Partner de integracion' },
      { label: 'Enfoque', value: 'Checkout, cobros y pagos' },
      { label: 'Cobertura', value: 'Ecosistema fintech regional' },
    ],
  },
  {
    slug: 'nvidia',
    name: 'NVIDIA',
    subtitle: 'NVIDIA Connect (ISV Program)',
    featured: true,
    industry: 'IA, GPU y Computacion Acelerada',
    shortDescription:
      'Partner a traves del programa NVIDIA Connect para acompanar soluciones de IA, vision y workloads acelerados con foco de negocio.',
    longDescription:
      'Trabajamos como partner a traves del programa NVIDIA Connect (ISV) para ayudar a equipos que necesitan acelerar desarrollo, validacion tecnica y salida a mercado en productos basados en IA.',
    cardGradient: 'gradient-bg-2',
    logo: {
      alt: 'NVIDIA',
      initials: 'NV',
      gradient: 'from-emerald-500 to-lime-500',
    },
    highlights: [
      'AI y GenAI aplicada',
      'Computer Vision',
      'Optimizacion de performance',
      'Deploy en cloud',
      'Soluciones empresariales aceleradas',
    ],
    additionalInfo: [
      { label: 'Modalidad', value: 'Partner via NVIDIA Connect (ISV)' },
      { label: 'Categoria', value: 'IA y computacion acelerada' },
      { label: 'Enfoque', value: 'Innovacion y time-to-market' },
      { label: 'Perfil', value: 'Implementacion orientada a negocio' },
    ],
    cta: {
      label: 'Hablemos de tu proyecto',
      href: '/#contact',
    },
    detailPage: {
      badge: 'NVIDIA Connect for ISVs',
      heroDescription:
        'Krauser es partner a traves del programa NVIDIA Connect para ISVs, acompanando iniciativas que necesitan acelerar desarrollo, validacion tecnica y ejecucion de soluciones de IA sin prometer niveles o certificaciones no verificadas.',
      heroLinks: [
        {
          label: 'Conocer NVIDIA Connect',
          href: 'https://www.nvidia.com/en-us/programs/isv/',
          external: true,
        },
        {
          label: 'Hablemos de tu proyecto',
          href: '/#contact',
        },
      ],
      allianceTitle: 'Sobre la alianza',
      allianceDescription:
        'NVIDIA Connect es un programa orientado a ISVs que busca impulsar innovacion y aceleracion tecnologica. Lo usamos como marco para trabajar con mas recursos de desarrollo, mejor contexto tecnico y un camino mas ordenado hacia implementaciones listas para negocio.',
      allianceBenefits: [
        'Recursos de desarrollo para acelerar pruebas y validaciones.',
        'Entrenamiento tecnico para fortalecer decisiones de implementacion.',
        'Guia tecnica para ordenar arquitectura y despliegue.',
        'Acceso a oportunidades del ecosistema en contextos relevantes.',
      ],
      allianceLink: {
        label: 'Ver programa NVIDIA Connect',
        href: 'https://www.nvidia.com/en-us/programs/isv/',
        external: true,
      },
      capabilities: [
        {
          title: 'AI / GenAI',
          description:
            'Diseno e implementacion de asistentes, automatizaciones y experiencias generativas con foco en productividad y operaciones.',
        },
        {
          title: 'Computer Vision',
          description:
            'Pipelines de deteccion, analitica e inspeccion visual para escenarios industriales, comerciales y operativos.',
        },
        {
          title: 'Optimizacion de performance',
          description:
            'Ajuste de inferencia, arquitectura y consumo para mejorar rendimiento, costo y estabilidad.',
        },
        {
          title: 'Deploy en cloud',
          description:
            'Puesta en produccion de workloads acelerados con monitoreo, observabilidad y criterios de escalado.',
        },
        {
          title: 'Soluciones empresariales aceleradas',
          description:
            'Integracion de IA aplicada en procesos, productos y plataformas que necesitan velocidad de adopcion.',
        },
      ],
      useCases: [
        {
          title: 'Asistente corporativo con GenAI',
          description:
            'Implementamos un asistente con contexto interno para soporte, operaciones y consulta documental, reduciendo friccion operativa.',
        },
        {
          title: 'Analitica visual en tiempo real',
          description:
            'Desarrollamos un flujo de vision para deteccion de eventos y control visual con alertas y tableros de seguimiento.',
        },
        {
          title: 'Capa de inferencia para producto digital',
          description:
            'Llevamos modelos a un entorno productivo con integraciones de negocio, trazabilidad y despliegue preparado para escalar.',
        },
      ],
      faq: [
        {
          question: 'Que implica ser partner a traves de NVIDIA Connect?',
          answer:
            'Implica que trabajamos dentro del marco del programa NVIDIA Connect para ISVs, enfocado en acelerar desarrollo y salida a mercado.',
        },
        {
          question: 'Que beneficio obtiene el cliente?',
          answer:
            'El cliente obtiene un equipo que combina ejecucion tecnica con foco de negocio para construir soluciones aceleradas con mayor claridad y menor friccion.',
        },
        {
          question: 'Venden hardware o licencias de NVIDIA?',
          answer:
            'No. Nuestro foco esta en estrategia, desarrollo, integracion y despliegue. La provision final depende del alcance de cada proyecto.',
        },
        {
          question: 'Como trabajan soluciones aceleradas?',
          answer:
            'Partimos de discovery, definimos arquitectura, validamos rapidamente y luego avanzamos a una implementacion preparada para produccion.',
        },
      ],
    },
  },
  {
    slug: 'citecopa',
    name: 'CITECOPA',
    industry: 'Fundacion y Robotica',
    shortDescription:
      'Fundacion sin fines de lucro orientada a la robotica, la formacion tecnica y el desarrollo con impacto social.',
    longDescription:
      'Acompanamos a CITECOPA en proyectos vinculados a robotica, educacion y tecnologia aplicada, impulsando espacios de aprendizaje, experimentacion y crecimiento comunitario.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'CITECOPA',
      initials: 'CT',
      gradient: 'from-green-500 to-lime-500',
    },
    highlights: [
      'Impulso a iniciativas de robotica',
      'Enfoque educativo y social',
      'Trabajo conjunto con impacto comunitario',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Fundacion sin fines de lucro' },
      { label: 'Relacion', value: 'Partner institucional' },
      { label: 'Enfoque', value: 'Robotica y formacion tecnica' },
      { label: 'Perfil', value: 'Tecnologia con impacto social' },
    ],
  },
];

export async function getPartners(): Promise<Partner[]> {
  return partners;
}

export async function getPartnerBySlug(slug: string): Promise<Partner | null> {
  return partners.find((partner) => partner.slug === slug) ?? null;
}
