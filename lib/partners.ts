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
      'Partner a traves del Programa de Partners DonWeb para acompanar hosting, dominios y despliegues con foco en estabilidad operativa.',
    longDescription:
      'Trabajamos con DonWeb como socio estrategico dentro de su Programa de Partners para integrar infraestructura, hosting y servicios cloud en proyectos web, ecommerce y operaciones digitales que requieren una base confiable para crecer.',
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
      'Optimizacion y performance',
      'Soporte tecnico dedicado',
    ],
    additionalInfo: [
      {
        label: 'Modalidad',
        value: 'Partner a traves del Programa de Partners DonWeb',
      },
      { label: 'Categoria', value: 'Infraestructura digital' },
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
        'Trabajamos como partner a traves del Programa de Partners DonWeb para integrar hosting, dominios y cloud en proyectos que necesitan una base estable, soporte coordinado y margen real de crecimiento.',
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
        'DonWeb trabaja sobre servicios de hosting, dominios y cloud para equipos que necesitan operar y escalar presencia digital. Nuestra participacion en su Programa de Partners nos permite coordinar infraestructura, despliegue y soporte segun el alcance de cada implementacion, sin afirmar niveles o beneficios que dependan de condiciones particulares.',
      allianceBenefits: [
        'Acceso a soporte especializado para ordenar decisiones de provision y despliegue.',
        'Integracion de soluciones de hosting y cloud dentro de proyectos web o empresariales.',
        'Base tecnica mas clara para escalar sitios, ecommerce y aplicaciones a medida.',
        'Acompanamiento en migraciones, performance y continuidad operativa.',
      ],
      allianceLink: {
        label: 'Mas informacion del programa',
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
            'Definimos y desplegamos infraestructura para aplicaciones y servicios que necesitan mas control, recursos dedicados o crecimiento progresivo.',
        },
        {
          title: 'Soluciones para revendedores',
          description:
            'Ordenamos esquemas de reventa y administracion de cuentas cuando el negocio necesita centralizar provision, facturacion o multiples clientes.',
        },
        {
          title: 'Optimizacion y performance',
          description:
            'Ajustamos configuracion, capas de cache y buenas practicas de despliegue para mejorar tiempos de carga, estabilidad y continuidad.',
        },
        {
          title: 'Soporte tecnico dedicado',
          description:
            'Acompanamos incidentes, cambios de infraestructura y decisiones operativas con una mesa tecnica alineada al alcance real del proyecto.',
        },
      ],
      useCases: [
        {
          title: 'Lanzamiento de ecommerce con hosting administrado',
          description:
            'Montamos la base de infraestructura, dominio y correo para una tienda online que necesitaba salir rapido y operar con una plataforma ordenada desde el dia uno.',
        },
        {
          title: 'Migracion de WordPress con mejora de performance',
          description:
            'Planificamos la migracion de un sitio de alto trafico, revisamos configuracion y aplicamos ajustes para reducir tiempos de carga sin interrumpir el negocio.',
        },
        {
          title: 'Entorno cloud para aplicacion en crecimiento',
          description:
            'Desplegamos un entorno con mas margen de recursos y escalabilidad para una aplicacion que paso de una etapa inicial a una operacion con demanda sostenida.',
        },
      ],
      faq: [
        {
          question: 'Que significa ser partner de DonWeb?',
          answer:
            'Significa que trabajamos como socio estrategico dentro del Programa de Partners DonWeb para articular infraestructura y servicios segun cada proyecto.',
        },
        {
          question: 'Que beneficios recibe el cliente?',
          answer:
            'Recibe una implementacion mas ordenada entre estrategia, provision tecnica, soporte y escalabilidad, con una base pensada para continuidad operativa.',
        },
        {
          question: 'Que tipo de servicios podemos ofrecer juntos?',
          answer:
            'Podemos trabajar hosting web, WordPress, cloud, VPS, migraciones, performance y soluciones para revendedores dentro del alcance definido para cada necesidad.',
        },
        {
          question: 'Incluye venta directa de dominios o servidores?',
          answer:
            'La provision final depende del servicio requerido y del esquema comercial aplicable. Nuestro foco principal es consultoria, implementacion e integracion tecnica.',
        },
      ],
    },
  },
  {
    slug: 'tedxviedma',
    name: 'TEDxViedma',
    subtitle: 'Partner Tecnologico Integral',
    cardActionLabel: 'Ver caso',
    industry: 'Eventos, Plataforma y Operacion Digital',
    shortDescription:
      'Desarrollo completo del sistema, infraestructura y soporte continuo para una operacion digital de evento end-to-end.',
    longDescription:
      'En TEDxViedma desarrollamos integralmente el ecosistema tecnologico: plataforma a medida, modulos administrativos, infraestructura, despliegues y soporte continuo para sostener una experiencia estable antes, durante y despues del evento.',
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
      'Soporte tecnico continuo',
      'Estabilidad para jornadas de alto trafico',
    ],
    additionalInfo: [
      { label: 'Modalidad', value: 'Partner Tecnologico Integral' },
      { label: 'Categoria', value: 'Caso de exito institucional' },
      { label: 'Enfoque', value: 'Desarrollo, infraestructura y soporte' },
      { label: 'Perfil', value: 'Plataforma digital para evento en vivo' },
    ],
    cta: {
      label: 'Desarrollar algo similar',
      href: '/#contact',
    },
    caseStudyPage: {
      badge: 'Partner Tecnologico Integral',
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
            'Construimos la presencia principal del evento con foco en narrativa, agenda, speakers y conversion de inscriptos.',
        },
        {
          title: 'Sistema de inscripcion al streaming',
          description:
            'Disenamos el flujo de registro y acceso para centralizar altas, validaciones y seguimiento del streaming.',
        },
        {
          title: 'Gestion de oradores',
          description:
            'Centralizamos la carga, actualizacion y administracion de speakers dentro de una operacion ordenada.',
        },
        {
          title: 'Gestion de auspiciadores',
          description:
            'Armamos un modulo para administrar sponsors, visibilidad, piezas y orden de exhibicion.',
        },
        {
          title: 'Gestion de inscriptos',
          description:
            'Unificamos altas, consulta y control de participantes para reducir carga operativa manual.',
        },
        {
          title: 'ABM de contenidos multimedia',
          description:
            'Habilitamos la administracion de assets, piezas visuales y contenido multimedia desde el panel.',
        },
        {
          title: 'Internacionalizacion (i18n)',
          description:
            'Preparamos la plataforma para contenidos multiidioma y una experiencia mas amplia segun el publico.',
        },
        {
          title: 'Streaming embebido',
          description:
            'Integramos la experiencia de transmision dentro del ecosistema digital para evitar friccion externa.',
        },
        {
          title: 'Panel administrativo',
          description:
            'Concentramos la operacion en un backoffice con permisos, gestion de contenido y control operativo.',
        },
        {
          title: 'Automatizaciones internas',
          description:
            'Reducimos tareas repetitivas con automatizaciones orientadas a coordinacion y ejecucion del evento.',
        },
      ],
      infrastructureTitle: 'Infraestructura y soporte',
      infrastructureDescription:
        'El alcance no se limita al desarrollo. Tambien sostenemos la capa operativa para que la plataforma funcione con continuidad: provision, despliegues, monitoreo, mantenimiento y capacidad de respuesta cuando el evento exige cero margen de error.',
      infrastructureItems: [
        'Provision de infraestructura para hosting y operacion digital.',
        'Gestion de despliegues y actualizaciones controladas.',
        'Monitoreo y mantenimiento preventivo de la plataforma.',
        'Soporte tecnico continuo antes, durante y despues del evento.',
        'Mejoras evolutivas segun nuevas necesidades del equipo organizador.',
        'Garantia de estabilidad y acompanamiento en ventanas criticas.',
      ],
      architectureTitle: 'Arquitectura y tecnologia',
      architectureDescription:
        'Planteamos una arquitectura pensada para un evento real: experiencia clara para usuarios, administracion simple para el equipo interno y una base tecnica que soporte crecimiento, cambios y alta demanda sin sacrificar orden.',
      architecturePillars: [
        {
          title: 'Stack orientado a producto',
          description:
            'Seleccionamos tecnologia enfocada en velocidad de iteracion, mantenibilidad y buena experiencia de uso.',
        },
        {
          title: 'Escalabilidad operativa',
          description:
            'La estructura acompana picos de trafico, nuevas secciones y evoluciones del evento sin rehacer la base.',
        },
        {
          title: 'Seguridad y control',
          description:
            'Ordenamos accesos, panel y flujos internos para proteger la operacion y reducir errores manuales.',
        },
        {
          title: 'Performance y estabilidad',
          description:
            'Optimizamos carga, despliegue y comportamiento general para sostener una experiencia mas confiable.',
        },
        {
          title: 'Experiencia de usuario',
          description:
            'La interfaz prioriza claridad, navegacion y conversion para asistentes, equipo y stakeholders.',
        },
      ],
      impactMetrics: [
        {
          value: '2.500+',
          label: 'Inscriptos gestionados',
          description:
            'Registro y administracion centralizada para acceso y seguimiento del evento.',
        },
        {
          value: '10',
          label: 'Oradores coordinados',
          description:
            'Gestion digital de perfiles, datos y actualizaciones dentro del flujo operativo.',
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
            'Landing, admin, streaming y operacion integrados en una misma base tecnologica.',
        },
      ],
      proofTitle: 'Que demuestra este proyecto',
      proofPoints: [
        'Capacidad para desarrollar software institucional completamente a medida.',
        'Experiencia en plataformas de gestion con multiples modulos y actores.',
        'Criterio para montar infraestructura y operar despliegues con continuidad.',
        'Soporte continuo para procesos donde la operacion no se puede cortar.',
        'Capacidad de trabajo con eventos, camaras, fundaciones y organismos.',
      ],
      testimonial: {
        quote:
          'Krauser se convirtio en un socio tecnologico clave para TEDxViedma, resolviendo tanto la plataforma como la continuidad operativa con una mirada integral.',
        author: 'Equipo organizador',
        role: 'TEDxViedma',
      },
      faq: [
        {
          question: 'Desarrollan sistemas completos para eventos?',
          answer:
            'Si. Podemos cubrir discovery, diseno funcional, desarrollo, backoffice, automatizaciones y operacion de plataformas para eventos.',
        },
        {
          question: 'Incluyen infraestructura y soporte?',
          answer:
            'Si. Podemos sumar provision, despliegues, monitoreo, mantenimiento y acompanamiento tecnico segun criticidad y alcance.',
        },
        {
          question: 'Escala para eventos grandes?',
          answer:
            'La arquitectura se define para soportar crecimiento, picos de trafico y una operacion coordinada con mas volumen.',
        },
        {
          question: 'Incluye panel administrativo?',
          answer:
            'Si. Disenamos paneles a medida para que el equipo gestione contenidos, registros, modulos y tareas operativas.',
        },
        {
          question: 'Brindan mantenimiento continuo?',
          answer:
            'Si. Trabajamos con soporte continuo y mejoras evolutivas para sostener estabilidad y adaptacion a nuevas necesidades.',
        },
      ],
    },
  },
  {
    slug: 'jetbrains',
    name: 'JetBrains',
    subtitle: 'Partner Tecnologico - JetBrains',
    cardActionLabel: 'Ver partner',
    industry: 'Herramientas de Desarrollo',
    shortDescription:
      'Partner tecnologico de JetBrains para potenciar desarrollo profesional, calidad de codigo y entrega consistente de software.',
    longDescription:
      'Como partner tecnologico de JetBrains, trabajamos con herramientas lideres para fortalecer nuestro flujo de desarrollo, aplicar mejores practicas y entregar software mas robusto a clientes que necesitan equipos y procesos profesionales.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'JetBrains',
      src: '/jetbrains_short.png',
      initials: 'JB',
      gradient: 'from-purple-500 to-blue-500',
      variant: 'balanced',
    },
    highlights: [
      'Mayor calidad de codigo',
      'Mejores tiempos de entrega',
      'Arquitecturas robustas',
      'Desarrollo con herramientas lideres del mercado',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Developer tools' },
      {
        label: 'Modalidad',
        value: 'Miembro del programa JetBrains Partners',
      },
      { label: 'Enfoque', value: 'Desarrollo profesional de software' },
      { label: 'Aporte', value: 'Herramientas, practicas y productividad' },
    ],
    cta: {
      label: 'Nuestros Servicios de Desarrollo',
      href: '/#services',
    },
    detailPage: {
      badge: 'Partner Tecnologico',
      heroDescription:
        'Somos partner tecnologico de JetBrains y trabajamos con sus soluciones lideres para potenciar nuestro desarrollo de software, mejorar procesos de engineering y dar mejores resultados a nuestros clientes.',
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
        'JetBrains desarrolla IDEs y herramientas de productividad ampliamente usadas por equipos de software profesionales. Formar parte de JetBrains Partners nos da un marco de trabajo mas solido para desarrollar con mejores herramientas, sostener buenas practicas y mantener un flujo tecnico consistente en proyectos exigentes.',
      allianceBenefits: [
        'Acceso a licencias y herramientas premium para fortalecer el entorno de desarrollo.',
        'Formacion, novedades y actualizaciones para mantener el equipo tecnico al dia.',
        'Mayor visibilidad dentro de una comunidad tecnologica con foco profesional.',
        'Integracion de mejores practicas en desarrollo, calidad y entrega.',
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
            'Disenamos e implementamos productos y sistemas adaptados al contexto de negocio de cada cliente.',
        },
        {
          title: 'Arquitecturas escalables',
          description:
            'Definimos bases tecnicas preparadas para crecer en complejidad, volumen y evolucion del producto.',
        },
        {
          title: 'Integracion continua y buenas practicas',
          description:
            'Aplicamos procesos de desarrollo sostenibles para mejorar calidad, trazabilidad y velocidad de entrega.',
        },
        {
          title: 'Soporte y mantenimiento',
          description:
            'Acompanamos ciclos de mejora, correccion y evolucion para sostener el software en el tiempo.',
        },
        {
          title: 'Automatizacion de procesos',
          description:
            'Reducimos friccion operativa con automatizaciones enfocadas en flujos internos y tareas repetitivas.',
        },
        {
          title: 'Desarrollo con herramientas JetBrains',
          description:
            'Trabajamos con un stack de herramientas profesional que fortalece productividad, precision y consistencia tecnica.',
        },
      ],
      useCases: [
        {
          title: 'Refactor tecnico para una plataforma en crecimiento',
          description:
            'Ordenamos una base de codigo compleja, acelerando revisiones, deteccion de problemas y estandarizacion del trabajo de equipo.',
        },
        {
          title: 'Pipeline de entrega mas consistente',
          description:
            'Mejoramos el flujo de desarrollo y despliegue para reducir retrabajo y sostener releases mas predecibles.',
        },
        {
          title: 'Mantenimiento evolutivo con foco en calidad',
          description:
            'Aplicamos un proceso continuo de mejoras tecnicas y funcionales con mas control sobre calidad, deuda tecnica y estabilidad.',
        },
      ],
      faq: [
        {
          question: 'Que significa que son partner de JetBrains?',
          answer:
            'Significa que formamos parte de JetBrains Partners y trabajamos con sus herramientas dentro de un marco profesional orientado a mejorar nuestro flujo de desarrollo.',
        },
        {
          question: 'Como nos beneficia como clientes?',
          answer:
            'Se traduce en mejores procesos, mas consistencia tecnica y un equipo que trabaja con herramientas de referencia para entregar software de mayor calidad.',
        },
        {
          question: 'Como aplican herramientas JetBrains en los proyectos?',
          answer:
            'Las usamos para acelerar desarrollo, revisar codigo con mas criterio, sostener estandares y mantener un flujo tecnico mas ordenado.',
        },
        {
          question: 'Ofrecen formacion o consultoria relacionada?',
          answer:
            'Podemos acompanar decisiones tecnicas, buenas practicas y procesos de desarrollo segun el contexto del equipo y del proyecto.',
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
      'Integracion avanzada, soporte prioritario y optimizacion de comisiones para operaciones de pago digitales.',
    longDescription:
      'Somos partner dentro del ecosistema Mercado Pago y acompanamos implementaciones tecnicas, optimizacion de checkout y gestion estrategica de soluciones de pago para negocios que necesitan vender mejor y operar con menos friccion.',
    cardGradient: 'gradient-bg-1',
    logo: {
      alt: 'Mercado Pago',
      src: '/mercadopago_short.png',
      initials: 'MP',
      gradient: 'from-rose-500 to-orange-500',
      variant: 'square',
    },
    highlights: [
      'Mayor velocidad para salir a produccion',
      'Flujos de pago mas ordenados y estables',
      'Checkout optimizado para conversion',
      'Acompanamiento tecnico y comercial',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Pagos digitales' },
      {
        label: 'Modalidad',
        value: 'Partner dentro del ecosistema Mercado Pago',
      },
      { label: 'Enfoque', value: 'Checkout, cobros y optimizacion' },
      { label: 'Cobertura', value: 'Implementacion y acompanamiento' },
    ],
    cta: {
      label: 'Solicitar integracion',
      href: '/#contact',
    },
    paymentPage: {
      badge: 'Partner de Pagos Digitales',
      heroDescription:
        'Integramos, optimizamos y gestionamos soluciones de pago con Mercado Pago, brindando acompanamiento tecnico y comercial para resolver checkout, conversion y operacion con mayor agilidad.',
      heroLinks: [
        {
          label: 'Ver programa de Partners',
          href: 'https://www.mercadopago.com.ar/partners/es/',
          external: true,
        },
        {
          label: 'Solicitar integracion',
          href: '/#contact',
        },
      ],
      allianceTitle: 'Sobre nuestra alianza con Mercado Pago',
      allianceDescription:
        'Trabajamos como partner dentro del ecosistema Mercado Pago para implementar integraciones completas, ordenar procesos de cobro digitales y acompanar decisiones tecnicas y comerciales que impactan conversion, aprobacion y continuidad operativa. Seguimos sus directrices tecnicas y usamos ese marco para acelerar integraciones y resolver incidencias con mas contexto.',
      allianceLink: {
        label: 'Conocer programa oficial',
        href: 'https://www.mercadopago.com.ar/partners/es/',
        external: true,
      },
      differentiators: [
        {
          title: 'Soporte prioritario con ejecutivo asignado',
          description:
            'A traves de nuestra relacion con Mercado Pago gestionamos un canal mas directo para escalar consultas y situaciones especificas de clientes, con seguimiento mas agil segun el caso y el alcance de la cuenta.',
        },
        {
          title: 'Acompanamiento en configuraciones avanzadas',
          description:
            'Revisamos medios de pago, configuracion de checkout, reglas de cobro y flujos de conversion para que la implementacion responda mejor al negocio.',
        },
        {
          title: 'Evaluacion de condiciones preferenciales',
          description:
            'Analizamos la posibilidad de gestionar mejoras en tasas o condiciones comerciales para cuentas con volumen operativo relevante. Sujeto a evaluacion y criterios de Mercado Pago.',
        },
      ],
      operationsTitle: 'Que resolvemos como partner',
      operations: [
        {
          title: 'Integracion completa de checkout',
          description:
            'Implementamos experiencias de cobro en web y aplicaciones con foco en seguridad, velocidad y consistencia operativa.',
        },
        {
          title: 'Optimizacion de conversion',
          description:
            'Ajustamos configuraciones y flujos para reducir friccion y mejorar el rendimiento del checkout.',
        },
        {
          title: 'Automatizacion y estados de pago',
          description:
            'Integramos notificaciones, conciliacion y procesos internos para que el negocio reaccione mejor al ciclo de cobro.',
        },
        {
          title: 'Soporte post-lanzamiento',
          description:
            'Acompanamos incidentes, ajustes y evoluciones para sostener estabilidad luego de la salida a produccion.',
        },
        {
          title: 'Consultoria comercial y tecnica',
          description:
            'Combinamos mirada tecnica y operativa para decidir como implementar y evolucionar la capa de pagos.',
        },
      ],
      clientBenefitsTitle: 'Beneficios concretos para clientes',
      clientBenefits: [
        'Mayor calidad en la implementacion de cobros y checkouts.',
        'Mejores tiempos de resolucion ante dudas o incidencias.',
        'Arquitecturas de pago mas robustas y sostenibles.',
        'Desarrollo alineado a directrices y herramientas del ecosistema Mercado Pago.',
      ],
      useCases: [
        {
          title: 'Checkout optimizado para ecommerce en crecimiento',
          description:
            'Implementamos y ajustamos el flujo de pago para reducir pasos, mejorar conversion y sostener una operacion de cobro mas predecible.',
        },
        {
          title: 'Integracion de cobros con procesos internos',
          description:
            'Conectamos estados de pago, validaciones y automatizaciones para que ventas, soporte y operacion trabajen con menos friccion.',
        },
        {
          title: 'Acompanamiento comercial en una cuenta de mayor volumen',
          description:
            'Analizamos configuracion, performance y posibilidades de mejora para escalar el uso de Mercado Pago con mejor soporte y mas contexto de negocio.',
        },
      ],
      faq: [
        {
          question: 'Que significa que sean partner de Mercado Pago?',
          answer:
            'Significa que trabajamos dentro de su ecosistema de partners para implementar soluciones de pago y acompanar a clientes con un marco tecnico y comercial mas solido.',
        },
        {
          question: 'Como nos beneficia como clientes?',
          answer:
            'Se traduce en integraciones mas ordenadas, mejor acompanamiento y una gestion mas agil frente a configuraciones o incidencias de pago.',
        },
        {
          question: 'Pueden ayudar con soporte e integraciones avanzadas?',
          answer:
            'Si. Cubrimos implementacion, optimizacion, automatizaciones y soporte continuo segun la complejidad de cada operacion.',
        },
        {
          question: 'Pueden gestionar mejoras de condiciones o comisiones?',
          answer:
            'Podemos evaluar y gestionar esa posibilidad en cuentas seleccionadas segun volumen, actividad y criterio comercial de Mercado Pago. No es un beneficio garantizado.',
        },
      ],
    },
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
      src: '/nvidia_short.png',
      initials: 'NV',
      gradient: 'from-emerald-500 to-lime-500',
      variant: 'square',
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
    name: 'Fundacion CiTeCopa',
    subtitle: 'Partner Tecnologico - Plataforma Integral',
    cardActionLabel: 'Ver caso',
    industry: 'Fundacion, Educacion y Gestion Social',
    shortDescription:
      'Desarrollo completo de plataforma institucional, ecommerce y sistema de gestion con donaciones integradas.',
    longDescription:
      'Desarrollamos integralmente el ecosistema digital de Fundacion CiTeCopa: plataforma institucional, sistema de gestion, ecommerce solidario y procesamiento de donaciones para sostener una operacion institucional con foco social.',
    cardGradient: 'gradient-bg-3',
    logo: {
      alt: 'Fundacion CiTeCopa',
      src: '/citecopa_short.png',
      initials: 'FC',
      gradient: 'from-green-500 to-lime-500',
      variant: 'wide',
    },
    highlights: [
      'Plataforma institucional y gestion centralizada',
      'Ecommerce solidario y donaciones online',
      'Pagos digitales seguros y trazables',
      'Soporte tecnico continuo e infraestructura',
    ],
    additionalInfo: [
      { label: 'Categoria', value: 'Caso de exito institucional' },
      { label: 'Modalidad', value: 'Partner Tecnologico' },
      { label: 'Enfoque', value: 'ONG, gestion y donaciones digitales' },
      { label: 'Perfil', value: 'Plataforma integral para fundacion' },
    ],
    cta: {
      label: 'Desarrollar plataforma similar',
      href: '/#contact',
    },
    foundationPage: {
      badge: 'Partner Tecnologico',
      heroDescription:
        'Desarrollamos el ecosistema digital completo de Fundacion CiTeCopa, incluyendo gestion institucional, ecommerce y sistema de donaciones online para una operacion transparente, trazable y preparada para crecer.',
      heroLinks: [
        {
          label: 'Visitar Fundacion',
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
            'Construimos una presencia institucional flexible para comunicar programas, novedades y actividades de la fundacion.',
        },
        {
          title: 'Blog autoadministrable',
          description:
            'Integramos un modulo de contenidos para publicar noticias, avances y acciones con autonomia editorial.',
        },
        {
          title: 'Sistema de gestion de alumnos',
          description:
            'Centralizamos altas, seguimiento y administracion de alumnos en un flujo mas ordenado para el equipo interno.',
        },
        {
          title: 'Gestion de ingresos y egresos',
          description:
            'Digitalizamos movimientos financieros para dar mayor control, orden administrativo y visibilidad operativa.',
        },
        {
          title: 'Registro y administracion de donaciones',
          description:
            'Unificamos la recepcion y trazabilidad de donaciones dentro de un sistema preparado para seguimiento continuo.',
        },
        {
          title: 'Panel administrativo completo',
          description:
            'Concentramos contenidos, operaciones y control institucional en un backoffice a medida.',
        },
        {
          title: 'Ecommerce solidario',
          description:
            'Montamos una capa de venta alineada al modelo de sostenibilidad y captacion de fondos de la fundacion.',
        },
        {
          title: 'Integracion de checkout con Mercado Pago',
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
        'La solucion incluye una capa especifica para pagos y donaciones: checkout integrado con Mercado Pago, registro de ordenes, seguimiento de transacciones y control administrativo para dar seguridad, transparencia y trazabilidad de fondos.',
      donationItems: [
        'Checkout con Mercado Pago integrado.',
        'Procesamiento seguro de pagos y donaciones online.',
        'Gestion de ordenes y estados dentro del sistema.',
        'Registro automatico de transacciones para seguimiento.',
        'Panel administrativo para control y conciliacion.',
        'Mayor transparencia y trazabilidad de fondos.',
      ],
      supportTitle: 'Infraestructura y soporte',
      supportDescription:
        'Ademas del desarrollo, sostenemos la operacion con infraestructura, monitoreo y soporte continuo. Esto permite que la plataforma funcione con estabilidad, se actualice con criterio y evolucione junto a las necesidades de la organizacion.',
      supportItems: [
        'Provision de infraestructura para la operacion institucional.',
        'Mantenimiento continuo y correcciones sobre la plataforma.',
        'Actualizaciones evolutivas segun nuevas necesidades.',
        'Soporte tecnico para equipo interno y operacion diaria.',
        'Monitoreo de estabilidad y seguimiento preventivo.',
      ],
      impactTitle: 'Impacto del proyecto',
      impactMetrics: [
        {
          value: '420+',
          label: 'Alumnos gestionados',
          description:
            'Seguimiento centralizado de alumnos y procesos vinculados a la operacion educativa.',
        },
        {
          value: '1.300+',
          label: 'Donaciones procesadas',
          description:
            'Donaciones registradas con control administrativo y trazabilidad dentro de la plataforma.',
        },
        {
          value: '2.100+',
          label: 'Transacciones registradas',
          description:
            'Cobros, ordenes y movimientos procesados con mayor orden institucional.',
        },
        {
          value: '68%',
          label: 'Procesos internos automatizados',
          description:
            'Reduccion de tareas manuales en administracion, control y seguimiento.',
        },
      ],
      proofTitle: 'Que demuestra este proyecto',
      proofPoints: [
        'Capacidad para desarrollar plataformas digitales para ONG y fundaciones.',
        'Experiencia integrando ecommerce y sistemas de donaciones online.',
        'Criterio para ordenar sistemas administrativos internos con tecnologia a medida.',
        'Implementacion de pagos digitales seguros, transparentes y trazables.',
        'Construccion de soluciones institucionales escalables con soporte continuo.',
      ],
      testimonial: {
        quote:
          'Krauser nos ayudo a consolidar una plataforma integral que conecta gestion, sostenibilidad y transparencia en una sola base tecnologica.',
        author: 'Equipo institucional',
        role: 'Fundacion CiTeCopa',
      },
      faq: [
        {
          question: 'Desarrollan plataformas para fundaciones?',
          answer:
            'Si. Disenamos plataformas institucionales para ONG, fundaciones y organizaciones que necesitan gestion, contenidos y procesos digitales integrados.',
        },
        {
          question: 'Incluye sistema de donaciones?',
          answer:
            'Si. Podemos implementar recepcion de donaciones, registro de transacciones y seguimiento administrativo dentro del mismo ecosistema.',
        },
        {
          question: 'Se pueden integrar pagos online?',
          answer:
            'Si. Integramos pasarelas y checkouts para ecommerce, donaciones y cobros segun la necesidad de la organizacion.',
        },
        {
          question: 'Incluye panel administrativo?',
          answer:
            'Si. Desarrollamos backoffice a medida para controlar contenidos, operaciones, pagos y procesos internos.',
        },
        {
          question: 'Brindan soporte continuo?',
          answer:
            'Si. Acompanamos con mantenimiento, soporte, monitoreo y mejoras evolutivas para sostener la plataforma en el tiempo.',
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
