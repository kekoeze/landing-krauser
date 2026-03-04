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

export type PartnerMetric = {
  value: string;
  label: string;
  description: string;
};

export type PartnerTestimonial = {
  quote: string;
  author: string;
  role: string;
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

export type PartnerCaseStudyPage = {
  badge: string;
  heroDescription: string;
  heroLinks: PartnerLink[];
  deliveryTitle: string;
  modules: PartnerCapability[];
  infrastructureTitle: string;
  infrastructureDescription: string;
  infrastructureItems: string[];
  architectureTitle: string;
  architectureDescription: string;
  architecturePillars: PartnerCapability[];
  impactMetrics: PartnerMetric[];
  proofTitle: string;
  proofPoints: string[];
  testimonial: PartnerTestimonial;
  faq: PartnerFaq[];
};

export type PartnerPaymentPage = {
  badge: string;
  heroDescription: string;
  heroLinks: PartnerLink[];
  allianceTitle: string;
  allianceDescription: string;
  allianceLink: PartnerLink;
  differentiators: PartnerCapability[];
  operationsTitle: string;
  operations: PartnerCapability[];
  clientBenefitsTitle: string;
  clientBenefits: string[];
  useCases: PartnerUseCase[];
  faq: PartnerFaq[];
};

export type PartnerFoundationPage = {
  badge: string;
  heroDescription: string;
  heroLinks: PartnerLink[];
  scopeTitle: string;
  modules: PartnerCapability[];
  donationTitle: string;
  donationDescription: string;
  donationItems: string[];
  supportTitle: string;
  supportDescription: string;
  supportItems: string[];
  impactTitle: string;
  impactMetrics: PartnerMetric[];
  proofTitle: string;
  proofPoints: string[];
  testimonial: PartnerTestimonial;
  faq: PartnerFaq[];
};

export type Partner = {
  slug: string;
  name: string;
  industry: string;
  subtitle?: string;
  featured?: boolean;
  cardActionLabel?: string;
  shortDescription: string;
  longDescription: string;
  cardGradient: string;
  logo: {
    src?: string;
    alt: string;
    initials: string;
    gradient: string;
    variant?: 'wide' | 'balanced' | 'square';
  };
  highlights: string[];
  additionalInfo: Array<{
    label: string;
    value: string;
  }>;
  cta?: PartnerLink;
  detailPage?: PartnerDetailPage;
  caseStudyPage?: PartnerCaseStudyPage;
  paymentPage?: PartnerPaymentPage;
  foundationPage?: PartnerFoundationPage;
};

export const partners: Partner[] = [
  {
    slug: 'donweb',
    name: 'DonWeb',
    subtitle: 'Programa de Partners DonWeb',
    industry: 'Hosting, Cloud y Dominios',
    shortDescription:
      'Partner a través del Programa de Partners DonWeb para acompañar hosting, dominios y despliegues con foco en estabilidad operativa.',
    longDescription:
      'Trabajamos con DonWeb como socio estratégico dentro de su Programa de Partners para integrar infraestructura, hosting y servicios cloud en proyectos web, ecommerce y operaciones digitales que requieren una base confiable para crecer.',
    cardGradient: 'gradient-bg-1',
    logo: {
      src: '/donweb_short.png',
      // src: '/donweb.png',
      alt: 'DonWeb',
      initials: 'DW',
      gradient: 'from-teal-500 to-emerald-500',
      variant: 'balanced',
    },
    highlights: [
      'Hosting Web y WordPress',
      'Cloud & VPS',
      'Soluciones para revendedores',
      'Optimización y performance',
      'Soporte técnico dedicado',
    ],
    additionalInfo: [
      {
        label: 'Modalidad',
        value: 'Partner a través del Programa de Partners DonWeb',
      },
      { label: 'Categoría', value: 'Infraestructura digital' },
      { label: 'Enfoque', value: 'Hosting, cloud y performance' },
      {
        label: 'Perfil',
        value: 'Soluciones para sitios, ecommerce y operaciones web',
      },
    ],
    cta: {
      label: 'Hablemos de tu proyecto',
      href: '/#contact',
    },
    detailPage: {
      badge: 'Programa de Partners DonWeb',
      heroDescription:
        'Trabajamos como partner a través del Programa de Partners DonWeb para integrar hosting, dominios y cloud en proyectos que necesitan una base estable, soporte coordinado y margen real de crecimiento.',
      heroLinks: [
        {
          label: 'Conocer Programa de Partners DonWeb',
          href: 'https://donweb.com/site/sp/argentina/plataforma-resellers',
          external: true,
        },
        {
          label: 'Hablemos de tu proyecto',
          href: '/#contact',
        },
      ],
      allianceTitle: 'Sobre la alianza',
      allianceDescription:
        'DonWeb trabaja sobre servicios de hosting, dominios y cloud para equipos que necesitan operar y escalar presencia digital. Nuestra participación en su Programa de Partners nos permite coordinar infraestructura, despliegue y soporte según el alcance de cada implementación, sin afirmar niveles o beneficios que dependan de condiciones particulares.',
      allianceBenefits: [
        'Acceso a soporte especializado para ordenar decisiones de provisión y despliegue.',
        'Integración de soluciones de hosting y cloud dentro de proyectos web o empresariales.',
        'Base técnica más clara para escalar sitios, ecommerce y aplicaciones a medida.',
        'Acompañamiento en migraciones, performance y continuidad operativa.',
      ],
      allianceLink: {
        label: 'Más información del programa',
        href: 'https://donweb.com/site/sp/argentina/plataforma-resellers',
        external: true,
      },
      capabilities: [
        {
          title: 'Hosting Web y WordPress',
          description:
            'Implementamos entornos listos para sitios institucionales, landing pages, blogs y proyectos WordPress con criterios de estabilidad y mantenimiento.',
        },
        {
          title: 'Cloud & VPS',
          description:
            'Definimos y desplegamos infraestructura para aplicaciones y servicios que necesitan más control, recursos dedicados o crecimiento progresivo.',
        },
        {
          title: 'Soluciones para revendedores',
          description:
            'Ordenamos esquemas de reventa y administración de cuentas cuando el negocio necesita centralizar provisión, facturación o múltiples clientes.',
        },
        {
          title: 'Optimización y performance',
          description:
            'Ajustamos configuración, capas de cache y buenas prácticas de despliegue para mejorar tiempos de carga, estabilidad y continuidad.',
        },
        {
          title: 'Soporte técnico dedicado',
          description:
            'Acompañamos incidentes, cambios de infraestructura y decisiones operativas con una mesa técnica alineada al alcance real del proyecto.',
        },
      ],
      useCases: [
        {
          title: 'Lanzamiento de ecommerce con hosting administrado',
          description:
            'Montamos la base de infraestructura, dominio y correo para una tienda online que necesitaba salir rápido y operar con una plataforma ordenada desde el día uno.',
        },
        {
          title: 'Migración de WordPress con mejora de performance',
          description:
            'Planificamos la migración de un sitio de alto tráfico, revisamos configuración y aplicamos ajustes para reducir tiempos de carga sin interrumpir el negocio.',
        },
        {
          title: 'Entorno cloud para aplicación en crecimiento',
          description:
            'Desplegamos un entorno con más margen de recursos y escalabilidad para una aplicación que paso de una etapa inicial a una operación con demanda sostenida.',
        },
      ],
      faq: [
        {
          question: 'Qué significa ser partner de DonWeb?',
          answer:
            'Significa que trabajamos como socio estratégico dentro del Programa de Partners DonWeb para articular infraestructura y servicios según cada proyecto.',
        },
        {
          question: 'Qué beneficios recibe el cliente?',
          answer:
            'Recibe una implementación más ordenada entre estrategia, provisión técnica, soporte y escalabilidad, con una base pensada para continuidad operativa.',
        },
        {
          question: 'Qué tipo de servicios podemos ofrecer juntos?',
          answer:
            'Podemos trabajar hosting web, WordPress, cloud, VPS, migraciones, performance y soluciones para revendedores dentro del alcance definido para cada necesidad.',
        },
        {
          question: 'Incluye venta directa de dominios o servidores?',
          answer:
            'La provisión final depende del servicio requerido y del esquema comercial aplicable. Nuestro foco principal es consultoría, implementación e integración técnica.',
        },
      ],
    },
  },
  {
    slug: 'tedxviedma',
    name: 'TEDxViedma',
    subtitle: 'Partner Tecnológico Integral',
    cardActionLabel: 'Ver caso',
    industry: 'Eventos, Plataforma y Operación Digital',
    shortDescription:
      'Desarrollo completo del sistema, infraestructura y soporte continuo para una operación digital de evento end-to-end.',
    longDescription:
      'En TEDxViedma desarrollamos integralmente el ecosistema tecnológico: plataforma a medida, módulos administrativos, infraestructura, despliegues y soporte continuo para sostener una experiencia estable antes, durante y después del evento.',
    cardGradient: 'gradient-bg-2',
    logo: {
      src: '/tedxviedma_short.png',
      alt: 'TEDxViedma logo',
      initials: 'TV',
      gradient: 'from-blue-500 to-cyan-500',
      variant: 'wide',
    },
    highlights: [
      'Plataforma institucional a medida',
      'Infraestructura y despliegues',
      'Panel administrativo y automatizaciones',
      'Soporte técnico continuo',
      'Estabilidad para jornadas de alto tráfico',
    ],
    additionalInfo: [
      { label: 'Modalidad', value: 'Partner Tecnológico Integral' },
      { label: 'Categoría', value: 'Caso de éxito institucional' },
      { label: 'Enfoque', value: 'Desarrollo, infraestructura y soporte' },
      { label: 'Perfil', value: 'Plataforma digital para evento en vivo' },
    ],
    cta: {
      label: 'Desarrollar algo similar',
      href: '/#contact',
    },
    caseStudyPage: {
      badge: 'Partner Tecnológico Integral',
      heroDescription:
        'Desde Krauser desarrollamos, implementamos y mantenemos el ecosistema digital completo de TEDxViedma, combinando software a medida, infraestructura, soporte continuo y criterio operativo para un evento de alta exigencia.',
      heroLinks: [
        {
          label: 'Ver proyecto',
          href: '/partners/tedxviedma#alcance',
        },
        {
          label: 'Desarrollar algo similar',
          href: '/#contact',
        },
      ],
      deliveryTitle: 'Alcance del desarrollo',
      modules: [
        {
          title: 'Landing institucional',
          description:
            'Construimos la presencia principal del evento con foco en narrativa, agenda, speakers y conversión de inscriptos.',
        },
        {
          title: 'Sistema de inscripción al streaming',
          description:
            'Diseñamos el flujo de registro y acceso para centralizar altas, validaciones y seguimiento del streaming.',
        },
        {
          title: 'Gestión de oradores',
          description:
            'Centralizamos la carga, actualización y administración de speakers dentro de una operación ordenada.',
        },
        {
          title: 'Gestión de auspiciadores',
          description:
            'Armamos un módulo para administrar sponsors, visibilidad, piezas y orden de exhibición.',
        },
        {
          title: 'Gestión de inscriptos',
          description:
            'Unificamos altas, consulta y control de participantes para reducir carga operativa manual.',
        },
        {
          title: 'ABM de contenidos multimedia',
          description:
            'Habilitamos la administración de assets, piezas visuales y contenido multimedia desde el panel.',
        },
        {
          title: 'Internacionalización (i18n)',
          description:
            'Preparamos la plataforma para contenidos multiidioma y una experiencia más amplia según el público.',
        },
        {
          title: 'Streaming embebido',
          description:
            'Integramos la experiencia de transmisión dentro del ecosistema digital para evitar fricción externa.',
        },
        {
          title: 'Panel administrativo',
          description:
            'Concentramos la operación en un backoffice con permisos, gestión de contenido y control operativo.',
        },
        {
          title: 'Automatizaciones internas',
          description:
            'Reducimos tareas repetitivas con automatizaciones orientadas a coordinación y ejecución del evento.',
        },
      ],
      infrastructureTitle: 'Infraestructura y soporte',
      infrastructureDescription:
        'El alcance no se limita al desarrollo. También sostenemos la capa operativa para que la plataforma funcione con continuidad: provisión, despliegues, monitoreo, mantenimiento y capacidad de respuesta cuando el evento exige cero margen de error.',
      infrastructureItems: [
        'Provisión de infraestructura para hosting y operación digital.',
        'Gestión de despliegues y actualizaciones controladas.',
        'Monitoreo y mantenimiento preventivo de la plataforma.',
        'Soporte técnico continuo antes, durante y después del evento.',
        'Mejoras evolutivas según nuevas necesidades del equipo organizador.',
        'Garantía de estabilidad y acompañamiento en ventanas críticas.',
      ],
      architectureTitle: 'Arquitectura y tecnología',
      architectureDescription:
        'Planteamos una arquitectura pensada para un evento real: experiencia clara para usuarios, administración simple para el equipo interno y una base técnica que soporte crecimiento, cambios y alta demanda sin sacrificar orden.',
      architecturePillars: [
        {
          title: 'Stack orientado a producto',
          description:
            'Seleccionamos tecnología enfocada en velocidad de iteración, mantenibilidad y buena experiencia de uso.',
        },
        {
          title: 'Escalabilidad operativa',
          description:
            'La estructura acompaña picos de tráfico, nuevas secciones y evoluciones del evento sin rehacer la base.',
        },
        {
          title: 'Seguridad y control',
          description:
            'Ordenamos accesos, panel y flujos internos para proteger la operación y reducir errores manuales.',
        },
        {
          title: 'Performance y estabilidad',
          description:
            'Optimizamos carga, despliegue y comportamiento general para sostener una experiencia más confiable.',
        },
        {
          title: 'Experiencia de usuario',
          description:
            'La interfaz prioriza claridad, navegación y conversión para asistentes, equipo y stakeholders.',
        },
      ],
      impactMetrics: [
        {
          value: '1.000+',
          label: 'Inscriptos gestionados',
          description:
            'Registro y administración centralizada para acceso y seguimiento del evento.',
        },
        {
          value: '10',
          label: 'Oradores coordinados',
          description:
            'Gestión digital de perfiles, datos y actualizaciones dentro del flujo operativo.',
        },
        {
          value: '+40',
          label: 'Sponsors administrados',
          description:
            'Control de presencia institucional, piezas y espacios dentro de la plataforma.',
        },
        {
          value: '70%',
          label: 'Procesos automatizados',
          description:
            'Reduccion del trabajo manual en tareas recurrentes del equipo organizador.',
        },
        {
          value: '1',
          label: 'Ecosistema unificado',
          description:
            'Landing, admin, streaming y operación integrados en una misma base tecnológica.',
        },
      ],
      proofTitle: 'Qué demuestra este proyecto',
      proofPoints: [
        'Capacidad para desarrollar software institucional completamente a medida.',
        'Experiencia en plataformas de gestión con múltiples módulos y actores.',
        'Criterio para montar infraestructura y operar despliegues con continuidad.',
        'Soporte continuo para procesos donde la operación no se puede cortar.',
        'Capacidad de trabajo con eventos, cámaras, fundaciones y organismos.',
      ],
      testimonial: {
        quote:
          'Krauser se convirtió en un socio tecnológico clave para TEDxViedma, resolviendo tanto la plataforma como la continuidad operativa con una mirada integral.',
        author: 'Equipo organizador',
        role: 'TEDxViedma',
      },
      faq: [
        {
          question: 'Desarrollan sistemas completos para eventos?',
          answer:
            'Sí. Podemos cubrir discovery, diseño funcional, desarrollo, backoffice, automatizaciones y operación de plataformas para eventos.',
        },
        {
          question: 'Incluyen infraestructura y soporte?',
          answer:
            'Sí. Podemos sumar provisión, despliegues, monitoreo, mantenimiento y acompañamiento técnico según criticidad y alcance.',
        },
        {
          question: 'Escala para eventos grandes?',
          answer:
            'La arquitectura se define para soportar crecimiento, picos de tráfico y una operación coordinada con más volumen.',
        },
        {
          question: 'Incluye panel administrativo?',
          answer:
            'Sí. Diseñamos paneles a medida para que el equipo gestione contenidos, registros, módulos y tareas operativas.',
        },
        {
          question: 'Brindan mantenimiento continuo?',
          answer:
            'Sí. Trabajamos con soporte continuo y mejoras evolutivas para sostener estabilidad y adaptación a nuevas necesidades.',
        },
      ],
    },
  },
  {
    slug: 'jetbrains',
    name: 'JetBrains',
    subtitle: 'Partner Tecnológico - JetBrains',
    cardActionLabel: 'Ver partner',
    industry: 'Herramientas de Desarrollo',
    shortDescription:
      'Partner tecnológico de JetBrains para potenciar desarrollo profesional, calidad de código y entrega consistente de software.',
    longDescription:
      'Como partner tecnológico de JetBrains, trabajamos con herramientas líderes para fortalecer nuestro flujo de desarrollo, aplicar mejores prácticas y entregar software más robusto a clientes que necesitan equipos y procesos profesionales.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'JetBrains',
      src: '/jetbrains_short.png',
      initials: 'JB',
      gradient: 'from-purple-500 to-blue-500',
      variant: 'balanced',
    },
    highlights: [
      'Mayor calidad de código',
      'Mejores tiempos de entrega',
      'Arquitecturas robustas',
      'Desarrollo con herramientas líderes del mercado',
    ],
    additionalInfo: [
      { label: 'Categoría', value: 'Developer tools' },
      {
        label: 'Modalidad',
        value: 'Miembro del programa JetBrains Partners',
      },
      { label: 'Enfoque', value: 'Desarrollo profesional de software' },
      { label: 'Aporte', value: 'Herramientas, prácticas y productividad' },
    ],
    cta: {
      label: 'Nuestros Servicios de Desarrollo',
      href: '/#services',
    },
    detailPage: {
      badge: 'Partner Tecnológico',
      heroDescription:
        'Somos partner tecnológico de JetBrains y trabajamos con sus soluciones líderes para potenciar nuestro desarrollo de software, mejorar procesos de engineering y dar mejores resultados a nuestros clientes.',
      heroLinks: [
        {
          label: 'Conocer JetBrains Partners',
          href: 'https://www.jetbrains.com/company/partners/',
          external: true,
        },
        {
          label: 'Nuestros Servicios de Desarrollo',
          href: '/#services',
        },
      ],
      allianceTitle: 'Sobre el programa JetBrains Partners',
      allianceDescription:
        'JetBrains desarrolla IDEs y herramientas de productividad ampliamente usadas por equipos de software profesionales. Formar parte de JetBrains Partners nos da un marco de trabajo más sólido para desarrollar con mejores herramientas, sostener buenas prácticas y mantener un flujo técnico consistente en proyectos exigentes.',
      allianceBenefits: [
        'Acceso a licencias y herramientas premium para fortalecer el entorno de desarrollo.',
        'Formación, novedades y actualizaciones para mantener el equipo técnico al día.',
        'Mayor visibilidad dentro de una comunidad tecnológica con foco profesional.',
        'Integración de mejores prácticas en desarrollo, calidad y entrega.',
      ],
      allianceLink: {
        label: 'Ver programa oficial',
        href: 'https://www.jetbrains.com/company/partners/',
        external: true,
      },
      capabilities: [
        {
          title: 'Desarrollo de software a medida',
          description:
            'Diseñamos e implementamos productos y sistemas adaptados al contexto de negocio de cada cliente.',
        },
        {
          title: 'Arquitecturas escalables',
          description:
            'Definimos bases técnicas preparadas para crecer en complejidad, volumen y evolución del producto.',
        },
        {
          title: 'Integración continua y buenas prácticas',
          description:
            'Aplicamos procesos de desarrollo sostenibles para mejorar calidad, trazabilidad y velocidad de entrega.',
        },
        {
          title: 'Soporte y mantenimiento',
          description:
            'Acompañamos ciclos de mejora, corrección y evolución para sostener el software en el tiempo.',
        },
        {
          title: 'Automatización de procesos',
          description:
            'Reducimos fricción operativa con automatizaciones enfocadas en flujos internos y tareas repetitivas.',
        },
        {
          title: 'Desarrollo con herramientas JetBrains',
          description:
            'Trabajamos con un stack de herramientas profesional que fortalece productividad, precisión y consistencia técnica.',
        },
      ],
      useCases: [
        {
          title: 'Refactor técnico para una plataforma en crecimiento',
          description:
            'Ordenamos una base de código compleja, acelerando revisiones, detección de problemas y estandarización del trabajo de equipo.',
        },
        {
          title: 'Pipeline de entrega más consistente',
          description:
            'Mejoramos el flujo de desarrollo y despliegue para reducir retrabajo y sostener releases más predecibles.',
        },
        {
          title: 'Mantenimiento evolutivo con foco en calidad',
          description:
            'Aplicamos un proceso continuo de mejoras técnicas y funcionales con más control sobre calidad, deuda técnica y estabilidad.',
        },
      ],
      faq: [
        {
          question: 'Qué significa que son partner de JetBrains?',
          answer:
            'Significa que formamos parte de JetBrains Partners y trabajamos con sus herramientas dentro de un marco profesional orientado a mejorar nuestro flujo de desarrollo.',
        },
        {
          question: 'Cómo nos beneficia como clientes?',
          answer:
            'Se traduce en mejores procesos, más consistencia técnica y un equipo que trabaja con herramientas de referencia para entregar software de mayor calidad.',
        },
        {
          question: 'Cómo aplican herramientas JetBrains en los proyectos?',
          answer:
            'Las usamos para acelerar desarrollo, revisar código con más criterio, sostener estándares y mantener un flujo técnico más ordenado.',
        },
        {
          question: 'Ofrecen formación o consultoría relacionada?',
          answer:
            'Podemos acompañar decisiones técnicas, buenas prácticas y procesos de desarrollo según el contexto del equipo y del proyecto.',
        },
      ],
    },
  },
  {
    slug: 'mercadopago',
    name: 'Mercado Pago',
    subtitle: 'Partner de Pagos Digitales',
    cardActionLabel: 'Ver partner',
    industry: 'Fintech y Pagos',
    shortDescription:
      'Integración avanzada, soporte prioritario y optimización de comisiones para operaciones de pago digitales.',
    longDescription:
      'Somos partner dentro del ecosistema Mercado Pago y acompañamos implementaciones técnicas, optimización de checkout y gestión estratégica de soluciones de pago para negocios que necesitan vender mejor y operar con menos fricción.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'Mercado Pago',
      src: '/mercadopago_short.png',
      initials: 'MP',
      gradient: 'from-rose-500 to-orange-500',
      variant: 'square',
    },
    highlights: [
      'Mayor velocidad para salir a producción',
      'Flujos de pago más ordenados y estables',
      'Checkout optimizado para conversión',
      'Acompañamiento técnico y comercial',
    ],
    additionalInfo: [
      { label: 'Categoría', value: 'Pagos digitales' },
      {
        label: 'Modalidad',
        value: 'Partner dentro del ecosistema Mercado Pago',
      },
      { label: 'Enfoque', value: 'Checkout, cobros y optimización' },
      { label: 'Cobertura', value: 'Implementación y acompañamiento' },
    ],
    cta: {
      label: 'Solicitar integración',
      href: '/#contact',
    },
    paymentPage: {
      badge: 'Partner de Pagos Digitales',
      heroDescription:
        'Integramos, optimizamos y gestionamos soluciones de pago con Mercado Pago, brindando acompañamiento técnico y comercial para resolver checkout, conversión y operación con mayor agilidad.',
      heroLinks: [
        {
          label: 'Ver programa de Partners',
          href: 'https://www.mercadopago.com.ar/partners/es/',
          external: true,
        },
        {
          label: 'Solicitar integración',
          href: '/#contact',
        },
      ],
      allianceTitle: 'Sobre nuestra alianza con Mercado Pago',
      allianceDescription:
        'Trabajamos como partner dentro del ecosistema Mercado Pago para implementar integraciones completas, ordenar procesos de cobro digitales y acompañar decisiones técnicas y comerciales que impactan conversión, aprobación y continuidad operativa. Seguimos sus directrices técnicas y usamos ese marco para acelerar integraciones y resolver incidencias con más contexto.',
      allianceLink: {
        label: 'Conocer programa oficial',
        href: 'https://www.mercadopago.com.ar/partners/es/',
        external: true,
      },
      differentiators: [
        {
          title: 'Soporte prioritario con ejecutivo asignado',
          description:
            'A través de nuestra relación con Mercado Pago gestionamos un canal más directo para escalar consultas y situaciones específicas de clientes, con seguimiento más ágil según el caso y el alcance de la cuenta.',
        },
        {
          title: 'Acompañamiento en configuraciones avanzadas',
          description:
            'Revisamos medios de pago, configuración de checkout, reglas de cobro y flujos de conversión para que la implementación responda mejor al negocio.',
        },
        {
          title: 'Evaluación de condiciones preferenciales',
          description:
            'Analizamos la posibilidad de gestionar mejoras en tasas o condiciones comerciales para cuentas con volumen operativo relevante. Sujeto a evaluación y criterios de Mercado Pago.',
        },
      ],
      operationsTitle: 'Qué resolvemos como partner',
      operations: [
        {
          title: 'Integración completa de checkout',
          description:
            'Implementamos experiencias de cobro en web y aplicaciones con foco en seguridad, velocidad y consistencia operativa.',
        },
        {
          title: 'Optimización de conversión',
          description:
            'Ajustamos configuraciones y flujos para reducir fricción y mejorar el rendimiento del checkout.',
        },
        {
          title: 'Automatización y estados de pago',
          description:
            'Integramos notificaciones, conciliación y procesos internos para que el negocio reaccione mejor al ciclo de cobro.',
        },
        {
          title: 'Soporte post-lanzamiento',
          description:
            'Acompañamos incidentes, ajustes y evoluciones para sostener estabilidad luego de la salida a producción.',
        },
        {
          title: 'Consultoría comercial y técnica',
          description:
            'Combinamos mirada técnica y operativa para decidir cómo implementar y evolucionar la capa de pagos.',
        },
      ],
      clientBenefitsTitle: 'Beneficios concretos para clientes',
      clientBenefits: [
        'Mayor calidad en la implementación de cobros y checkouts.',
        'Mejores tiempos de resolución ante dudas o incidencias.',
        'Arquitecturas de pago más robustas y sostenibles.',
        'Desarrollo alineado a directrices y herramientas del ecosistema Mercado Pago.',
      ],
      useCases: [
        {
          title: 'Checkout optimizado para ecommerce en crecimiento',
          description:
            'Implementamos y ajustamos el flujo de pago para reducir pasos, mejorar conversión y sostener una operación de cobro más predecible.',
        },
        {
          title: 'Integración de cobros con procesos internos',
          description:
            'Conectamos estados de pago, validaciones y automatizaciones para que ventas, soporte y operación trabajen con menos fricción.',
        },
        {
          title: 'Acompañamiento comercial en una cuenta de mayor volumen',
          description:
            'Analizamos configuración, performance y posibilidades de mejora para escalar el uso de Mercado Pago con mejor soporte y más contexto de negocio.',
        },
      ],
      faq: [
        {
          question: 'Qué significa que sean partner de Mercado Pago?',
          answer:
            'Significa que trabajamos dentro de su ecosistema de partners para implementar soluciones de pago y acompañar a clientes con un marco técnico y comercial más sólido.',
        },
        {
          question: 'Cómo nos beneficia como clientes?',
          answer:
            'Se traduce en integraciones más ordenadas, mejor acompañamiento y una gestión más ágil frente a configuraciones o incidencias de pago.',
        },
        {
          question: 'Pueden ayudar con soporte e integraciones avanzadas?',
          answer:
            'Sí. Cubrimos implementación, optimización, automatizaciones y soporte continuo según la complejidad de cada operación.',
        },
        {
          question: 'Pueden gestionar mejoras de condiciones o comisiones?',
          answer:
            'Podemos evaluar y gestionar esa posibilidad en cuentas seleccionadas según volumen, actividad y criterio comercial de Mercado Pago. No es un beneficio garantizado.',
        },
      ],
    },
  },
  {
    slug: 'nvidia',
    name: 'NVIDIA',
    subtitle: 'NVIDIA Connect (ISV Program)',
    featured: true,
    industry: 'IA, GPU y Computación Acelerada',
    shortDescription:
      'Partner a través del programa NVIDIA Connect para acompañar soluciones de IA, visión y workloads acelerados con foco de negocio.',
    longDescription:
      'Trabajamos como partner a través del programa NVIDIA Connect (ISV) para ayudar a equipos que necesitan acelerar desarrollo, validación técnica y salida a mercado en productos basados en IA.',
    cardGradient: 'gradient-bg-2',
    logo: {
      alt: 'NVIDIA',
      src: '/nvidia_short.png',
      initials: 'NV',
      gradient: 'from-emerald-500 to-lime-500',
      variant: 'square',
    },
    highlights: [
      'AI y GenAI aplicada',
      'Computer Vision',
      'Optimización de performance',
      'Deploy en cloud',
      'Soluciones empresariales aceleradas',
    ],
    additionalInfo: [
      { label: 'Modalidad', value: 'Partner via NVIDIA Connect (ISV)' },
      { label: 'Categoría', value: 'IA y computación acelerada' },
      { label: 'Enfoque', value: 'Innovación y time-to-market' },
      { label: 'Perfil', value: 'Implementación orientada a negocio' },
    ],
    cta: {
      label: 'Hablemos de tu proyecto',
      href: '/#contact',
    },
    detailPage: {
      badge: 'NVIDIA Connect for ISVs',
      heroDescription:
        'Krauser es partner a través del programa NVIDIA Connect para ISVs, acompañando iniciativas que necesitan acelerar desarrollo, validación técnica y ejecución de soluciones de IA sin prometer niveles o certificaciones no verificadas.',
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
        'NVIDIA Connect es un programa orientado a ISVs que busca impulsar innovación y aceleración tecnológica. Lo usamos como marco para trabajar con más recursos de desarrollo, mejor contexto técnico y un camino más ordenado hacia implementaciones listas para negocio.',
      allianceBenefits: [
        'Recursos de desarrollo para acelerar pruebas y validaciones.',
        'Entrenamiento técnico para fortalecer decisiones de implementación.',
        'Guía técnica para ordenar arquitectura y despliegue.',
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
            'Diseño e implementación de asistentes, automatizaciones y experiencias generativas con foco en productividad y operaciones.',
        },
        {
          title: 'Computer Vision',
          description:
            'Pipelines de detección, analítica e inspección visual para escenarios industriales, comerciales y operativos.',
        },
        {
          title: 'Optimización de performance',
          description:
            'Ajuste de inferencia, arquitectura y consumo para mejorar rendimiento, costo y estabilidad.',
        },
        {
          title: 'Deploy en cloud',
          description:
            'Puesta en producción de workloads acelerados con monitoreo, observabilidad y criterios de escalado.',
        },
        {
          title: 'Soluciones empresariales aceleradas',
          description:
            'Integración de IA aplicada en procesos, productos y plataformas que necesitan velocidad de adopción.',
        },
      ],
      useCases: [
        {
          title: 'Asistente corporativo con GenAI',
          description:
            'Implementamos un asistente con contexto interno para soporte, operaciones y consulta documental, reduciendo fricción operativa.',
        },
        {
          title: 'Analítica visual en tiempo real',
          description:
            'Desarrollamos un flujo de visión para detección de eventos y control visual con alertas y tableros de seguimiento.',
        },
        {
          title: 'Capa de inferencia para producto digital',
          description:
            'Llevamos modelos a un entorno productivo con integraciones de negocio, trazabilidad y despliegue preparado para escalar.',
        },
      ],
      faq: [
        {
          question: 'Qué implica ser partner a través de NVIDIA Connect?',
          answer:
            'Implica que trabajamos dentro del marco del programa NVIDIA Connect para ISVs, enfocado en acelerar desarrollo y salida a mercado.',
        },
        {
          question: 'Qué beneficio obtiene el cliente?',
          answer:
            'El cliente obtiene un equipo que combina ejecución técnica con foco de negocio para construir soluciones aceleradas con mayor claridad y menor fricción.',
        },
        {
          question: 'Venden hardware o licencias de NVIDIA?',
          answer:
            'No. Nuestro foco está en estrategia, desarrollo, integración y despliegue. La provisión final depende del alcance de cada proyecto.',
        },
        {
          question: 'Cómo trabajan soluciones aceleradas?',
          answer:
            'Partimos de discovery, definimos arquitectura, validamos rápidamente y luego avanzamos a una implementación preparada para producción.',
        },
      ],
    },
  },
  {
    slug: 'citecopa',
    name: 'Fundación CiTeCopa',
    subtitle: 'Partner Tecnológico - Plataforma Integral',
    cardActionLabel: 'Ver caso',
    industry: 'Fundación, Educación y Gestión Social',
    shortDescription:
      'Desarrollo completo de plataforma institucional, ecommerce y sistema de gestión con donaciones integradas.',
    longDescription:
      'Desarrollamos integralmente el ecosistema digital de Fundación CiTeCopa: plataforma institucional, sistema de gestión, ecommerce solidario y procesamiento de donaciones para sostener una operación institucional con foco social.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'Fundación CiTeCopa',
      src: '/citecopa_short.png',
      initials: 'FC',
      gradient: 'from-green-500 to-lime-500',
      variant: 'wide',
    },
    highlights: [
      'Plataforma institucional y gestión centralizada',
      'Ecommerce solidario y donaciones online',
      'Pagos digitales seguros y trazables',
      'Soporte técnico continuo e infraestructura',
    ],
    additionalInfo: [
      { label: 'Categoría', value: 'Caso de éxito institucional' },
      { label: 'Modalidad', value: 'Partner Tecnológico' },
      { label: 'Enfoque', value: 'ONG, gestión y donaciones digitales' },
      { label: 'Perfil', value: 'Plataforma integral para fundación' },
    ],
    cta: {
      label: 'Desarrollar plataforma similar',
      href: '/#contact',
    },
    foundationPage: {
      badge: 'Partner Tecnológico',
      heroDescription:
        'Desarrollamos el ecosistema digital completo de Fundación CiTeCopa, incluyendo gestión institucional, ecommerce y sistema de donaciones online para una operación transparente, trazable y preparada para crecer.',
      heroLinks: [
        {
          label: 'Visitar Fundación',
          href: 'https://citecopa.org.ar/',
          external: true,
        },
        {
          label: 'Desarrollar plataforma similar',
          href: '/#contact',
        },
      ],
      scopeTitle: 'Alcance del desarrollo',
      modules: [
        {
          title: 'Landing institucional dinamica',
          description:
            'Construimos una presencia institucional flexible para comunicar programas, novedades y actividades de la fundación.',
        },
        {
          title: 'Blog autoadministrable',
          description:
            'Integramos un módulo de contenidos para publicar noticias, avances y acciones con autonomía editorial.',
        },
        {
          title: 'Sistema de gestión de alumnos',
          description:
            'Centralizamos altas, seguimiento y administración de alumnos en un flujo más ordenado para el equipo interno.',
        },
        {
          title: 'Gestión de ingresos y egresos',
          description:
            'Digitalizamos movimientos financieros para dar mayor control, orden administrativo y visibilidad operativa.',
        },
        {
          title: 'Registro y administración de donaciones',
          description:
            'Unificamos la recepción y trazabilidad de donaciones dentro de un sistema preparado para seguimiento continuo.',
        },
        {
          title: 'Panel administrativo completo',
          description:
            'Concentramos contenidos, operaciones y control institucional en un backoffice a medida.',
        },
        {
          title: 'Ecommerce solidario',
          description:
            'Montamos una capa de venta alineada al modelo de sostenibilidad y captación de fondos de la fundación.',
        },
        {
          title: 'Integración de checkout con Mercado Pago',
          description:
            'Implementamos cobros y donaciones con un flujo seguro, simple y conectado al ecosistema operativo.',
        },
        {
          title: 'Reportes y control financiero',
          description:
            'Desarrollamos vistas de control para seguir transacciones, ingresos, egresos y actividad general.',
        },
      ],
      donationTitle: 'Sistema de Donaciones y Pagos',
      donationDescription:
        'La solución incluye una capa específica para pagos y donaciones: checkout integrado con Mercado Pago, registro de órdenes, seguimiento de transacciones y control administrativo para dar seguridad, transparencia y trazabilidad de fondos.',
      donationItems: [
        'Checkout con Mercado Pago integrado.',
        'Procesamiento seguro de pagos y donaciones online.',
        'Gestión de órdenes y estados dentro del sistema.',
        'Registro automático de transacciones para seguimiento.',
        'Panel administrativo para control y conciliación.',
        'Mayor transparencia y trazabilidad de fondos.',
      ],
      supportTitle: 'Infraestructura y soporte',
      supportDescription:
        'Además del desarrollo, sostenemos la operación con infraestructura, monitoreo y soporte continuo. Esto permite que la plataforma funcione con estabilidad, se actualice con criterio y evolucione junto a las necesidades de la organización.',
      supportItems: [
        'Provisión de infraestructura para la operación institucional.',
        'Mantenimiento continuo y correcciones sobre la plataforma.',
        'Actualizaciones evolutivas según nuevas necesidades.',
        'Soporte técnico para equipo interno y operación diaria.',
        'Monitoreo de estabilidad y seguimiento preventivo.',
      ],
      impactTitle: 'Impacto del proyecto',
      impactMetrics: [
        {
          value: '420+',
          label: 'Alumnos gestionados',
          description:
            'Seguimiento centralizado de alumnos y procesos vinculados a la operación educativa.',
        },
        {
          value: '200+',
          label: 'Donaciones procesadas',
          description:
            'Donaciones registradas con control administrativo y trazabilidad dentro de la plataforma.',
        },
        {
          value: '500¿+',
          label: 'Transacciones registradas',
          description:
            'Cobros, órdenes y movimientos procesados con mayor orden institucional.',
        },
        {
          value: '68%',
          label: 'Procesos internos automatizados',
          description:
            'Reduccion de tareas manuales en administración, control y seguimiento.',
        },
      ],
      proofTitle: 'Qué demuestra este proyecto',
      proofPoints: [
        'Capacidad para desarrollar plataformas digitales para ONG y fundaciones.',
        'Experiencia integrando ecommerce y sistemas de donaciones online.',
        'Criterio para ordenar sistemas administrativos internos con tecnología a medida.',
        'Implementación de pagos digitales seguros, transparentes y trazables.',
        'Construcción de soluciones institucionales escalables con soporte continuo.',
      ],
      testimonial: {
        quote:
          'Krauser nos ayudó a consolidar una plataforma integral que conecta gestión, sostenibilidad y transparencia en una sola base tecnológica.',
        author: 'Equipo institucional',
        role: 'Fundación CiTeCopa',
      },
      faq: [
        {
          question: 'Desarrollan plataformas para fundaciones?',
          answer:
            'Sí. Diseñamos plataformas institucionales para ONG, fundaciones y organizaciones que necesitan gestión, contenidos y procesos digitales integrados.',
        },
        {
          question: 'Incluye sistema de donaciones?',
          answer:
            'Sí. Podemos implementar recepción de donaciones, registro de transacciones y seguimiento administrativo dentro del mismo ecosistema.',
        },
        {
          question: 'Se pueden integrar pagos online?',
          answer:
            'Sí. Integramos pasarelas y checkouts para ecommerce, donaciones y cobros según la necesidad de la organización.',
        },
        {
          question: 'Incluye panel administrativo?',
          answer:
            'Sí. Desarrollamos backoffice a medida para controlar contenidos, operaciones, pagos y procesos internos.',
        },
        {
          question: 'Brindan soporte continuo?',
          answer:
            'Sí. Acompañamos con mantenimiento, soporte, monitoreo y mejoras evolutivas para sostener la plataforma en el tiempo.',
        },
      ],
    },
  },
];

export async function getPartners(): Promise<Partner[]> {
  return partners;
}

export async function getPartnerBySlug(slug: string): Promise<Partner | null> {
  return partners.find((partner) => partner.slug === slug) ?? null;
}
