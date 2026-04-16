"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectSlider, { type ProjectSlide } from "@/components/project-slider";
import ParallaxSection from "@/components/parallax-section";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const sliderProjects: ProjectSlide[] = [
    {
      category: "SaaS",
      title: "Evan - Sistema de gestión comercial",
      subtitle: "Plataforma integral de gestión comercial",
      description: "Evan centraliza y automatiza la operación comercial en un solo entorno.",
      longDescription:
        "Evan centraliza y automatiza la operación comercial en un solo entorno, integrando inteligencia artificial, ecommerce en tiempo real, control de stock, ventas, créditos y facturación electrónica.",
      features: [
        "Inteligencia artificial integrada para optimizar catálogos y recomendaciones",
        "Gestión de ventas con métricas avanzadas y reportes en tiempo real",
        "Ecommerce sincronizado instantáneamente con stock y precios",
        "Administración de créditos, fiados y pagos pendientes",
        "Control de inventario con alertas automáticas e inteligencia de stock",
        "Integración con ARCA y supervisión en tiempo real del negocio",
      ],
      imageUrl: "/dashboard-evan.jpg",
      techTags: ["IA", "Ecommerce", "Analytics"],
      href: "https://webevan.krauser.com.ar/#/pages/landing",
      usable: true,
    },
    {
      category: "Software",
      title: "Ecommerce Bebidas",
      subtitle: "Bebidas por delivery, con o sin local físico",
      description: "Vendé bebidas por delivery sin depender de un negocio con puertas abiertas al público.",
      longDescription:
        "Tu web de bebidas por delivery: pedidos online, avisos al instante (WhatsApp, Telegram), dirección por pedido y panel de stock y reportes. Mercado Pago es opcional: si no lo usás, evitás sus comisiones y cobrás como definas vos. Configurás una vez.",
      features: [
        "Pedidos online con flujo simple y rápido",
        "Avisos al instante por WhatsApp y/o Telegram",
        "Dirección y datos por pedido, listos para despacho",
        "Panel de stock y reportes para controlar la operación",
        "Cobro flexible: Mercado Pago opcional para evitar comisiones",
      ],
      imageUrl: "/Captura%20de%20pantalla%20de%202026-04-16%2011-37-06.png",
      techTags: ["Ecommerce", "Delivery", "Stock", "Reportes"],
      href: "https://ecommerce-bebidas.com.ar/",
      usable: true,
    },
    {
      category: "Desarrollo a medida",
      title: "TEDxViedma",
      subtitle: "Plataforma institucional para evento en vivo",
      description:
        "Desarrollamos, implementamos y mantenemos el ecosistema digital completo de TEDxViedma con soporte continuo.",
      longDescription:
        "Desarrollamos, implementamos y mantenemos el ecosistema digital completo de TEDxViedma, combinando software a medida, infraestructura y soporte continuo para una operación de alta exigencia.",
      features: [
        "Landing institucional con foco en narrativa, agenda y conversión",
        "Sistema de inscripción y acceso al streaming",
        "Panel administrativo con gestión de contenidos y permisos",
        "Gestión centralizada de oradores, sponsors e inscriptos",
        "Automatizaciones internas para reducir carga operativa",
        "Soporte técnico continuo antes, durante y después del evento",
      ],
      imageUrl: "/tedxviedma_home.png",
      techTags: ["Software a medida", "Backoffice", "Infraestructura", "Automatizaciones"],
      href: "/partners/tedxviedma",
    },
    {
      category: "Desarrollo a medida",
      title: "Academia bogado - Padel",
      subtitle: "Plataforma para la gestión de turnos, alumnos y pagos",
      description:
        "Sistema integral que centraliza alumnos, pagos, planes, categorías, horarios, reservas y reportes para ordenar la operación.",
      longDescription:
        "La plataforma funciona como un sistema integral de gestión académica y deportiva, centralizando la administración de alumnos, pagos, planes, categorías, horarios, reservas y reportes para ordenar toda la operación del espacio.",
      features: [
        "Gestión de alumnos con altas, administración y visualización de estados",
        "Control de pagos con ingresos mensuales, vencimientos y búsqueda por alumno o concepto",
        "Planes de precio configurables para modalidad individual, pareja o grupal",
        "Categorías por nivel y género, con gestión de estado activa o inactiva",
        "Asignación de horarios semanales, cupos máximos, reservas y lista de espera",
        "Reportes administrativos con estadísticas, accesos rápidos y seguimiento operativo",
      ],
      imageUrl: "/academiabogado_home.png",
      techTags: ["Backoffice", "Pagos", "Reservas", "Reportes"],
      href: "https://academiabogado.com.ar/",
    },
    {
      category: "SaaS",
      title: "GymPro",
      subtitle: "Plataforma de gestión para gimnasios y entrenadores",
      description:
        "GymPro centraliza la gestión deportiva y administrativa para manejar alumnos, rutinas, planes y pagos de forma escalable.",
      longDescription:
        "GymPro centraliza la gestión deportiva y administrativa en un solo sistema, permitiendo manejar alumnos, rutinas, ejercicios, planes y pagos de forma ordenada y escalable.",
      features: [
        "Dashboard con métricas clave de alumnos, ingresos y rendimiento",
        "Gestión de alumnos con perfiles, rutinas asignadas y planes de pago",
        "Creación de rutinas personalizadas y organización por bloques de entrenamiento",
        "Biblioteca de ejercicios con imágenes, videos y categorías",
        "Administración de planes de suscripción con precios y condiciones",
        "Registro de pagos, ingresos totales y control de pendientes",
      ],
      imageUrl: "/gympro_home.png",
      techTags: ["Dashboard", "Backoffice", "Suscripciones", "Reportes"],
      href: "https://krauser.com.ar",
      usable: true,
    },
    {
      category: "SaaS",
      title: "Miviandita",
      subtitle: "ERP gastronómico para viandas y pedidos",
      description:
        "Plataforma para negocios gastronómicos de viandas: órdenes, clientes, productos, catálogos semanales y comunicación.",
      longDescription:
        "Miviandita es una plataforma SaaS para negocios gastronómicos que venden viandas, centralizando órdenes, clientes, productos, catálogos semanales y comunicación en una sola herramienta escalable.",
      features: [
        "Gestión de órdenes con búsqueda, filtros y control de estado de pedido y pago",
        "Administración de clientes con importación desde WhatsApp y mensajes masivos",
        "Registro de viandas con nombre, descripción, precio e imagen",
        "Catálogos semanales en formato Kanban organizados por día",
        "Gestión de grupos de WhatsApp para comunicación segmentada",
        "Planes escalables con reportes, multiusuario e integraciones según el negocio",
      ],
      imageUrl: "/miviandita_home.png",
      techTags: ["ERP", "WhatsApp", "Kanban", "Suscripciones"],
      status: "process",
    },
  ];

  return (
    <ParallaxSection id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            <GradientText text="PROYECTOS QUE IMPULSAMOS, NEGOCIOS REALES" className="font-extrabold" />
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-base text-[#C026D3]/80 md:text-lg">
            Conocé algunos de los desarrollos que ayudaron a nuestros clientes a crecer y profesionalizar su presencia
            digital.
          </p>
        </div>

        <div className="mt-12">
          <ProjectSlider projects={sliderProjects} />
        </div>
      </div>
    </ParallaxSection>
  );
}

