"use client";

import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = {
    Services: [
      { label: "Tienda E-commerce", href: "#services" },
      { label: "Landing Page", href: "#services" },
      { label: "Sitio Web Blog", href: "#services" },
      { label: "Desarrollo Personalizado", href: "#services" },
    ],
    Company: [
      { label: "Inicio", href: "#home" },
      { label: "Nosotros", href: "#about" },
      { label: "Partners", href: "#partners" },
      { label: "Proyectos", href: "#portfolio" },
    ],
    Resources: [
      { label: "Términos de servicios", href: "#" },
      { label: "Política de privacidad", href: "#" },
    ],
  };

  const socials = [
    { label: 'Instagram', icon: Instagram },
    { label: 'Facebook', icon: Facebook },
    { label: 'LinkedIn', icon: Linkedin },
  ] as const;

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-44 sm:h-11 sm:w-52"
                aria-label="Krauser"
                role="img"
                style={{
                  backgroundColor: "#2563EB",
                  WebkitMaskImage: "url('/isologotipo%20horizontal.png')",
                  maskImage: "url('/isologotipo%20horizontal.png')",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "left center",
                  maskPosition: "left center",
                }}
              />
            </div>
            <p className="mt-4 text-sm tracking-[0.22em] text-slate-400">
              DESARROLLO DE SOFTWARE
            </p>
            <p className="mt-2 text-xs text-slate-500">Viedma, Río Negro, Argentina</p>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">REDES SOCIALES</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <div
                    key={s.label}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    <s.icon className="h-4 w-4 text-[color:hsl(var(--secondary))]" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">SERVICES</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {footerLinks.Services.map((item) => (
                <li key={item.label}>
                  <a className="hover:text-slate-200 transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">COMPANY</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <a className="hover:text-slate-200 transition-colors" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">CONTACTO</p>
            <div className="mt-4 flex flex-col gap-3 md:items-end">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
                href="https://wa.me/5492920707402"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-[color:hsl(var(--secondary))]" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
                href="mailto:contacto@krauser.com.ar"
              >
                <Mail className="h-4 w-4 text-[color:hsl(var(--secondary))]" />
                <span className="text-sm">Email</span>
              </a>
              <div className="mt-2 space-y-2 text-xs text-slate-400">
                {footerLinks.Resources.map((item) => (
                  <a key={item.label} className="block hover:text-slate-200 transition-colors" href={item.href}>
                    {item.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {currentYear} KRAUSER. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}