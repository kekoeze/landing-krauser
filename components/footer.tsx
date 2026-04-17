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
    {
      label: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/krauser.com.ar/',
    },
    {
      label: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/krauser.com.ar/',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/krauser/',
    },
  ] as const;

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#20B0FE]/45 text-[#20B0FE] transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#20B0FE] hover:bg-[#20B0FE]/10 hover:text-[#7dd4ff] hover:shadow-[0_0_0_1px_rgba(32,176,254,0.35),0_8px_24px_rgba(32,176,254,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B0FE]/55 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <s.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.85} aria-hidden />
                  </a>
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
                href="https://wa.me/5492920707402?text=%C2%A1Hola!%20Quiero%20coordinar%20una%20demo%20de%20Evan."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#20B0FE]" strokeWidth={2.1} aria-hidden />
                <span className="text-sm">WhatsApp</span>
                <span className="text-sm text-slate-400">+54 2920 707402</span>
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors"
                href="mailto:contacto@krauser.com.ar"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#20B0FE]" strokeWidth={2.1} aria-hidden />
                <span className="text-sm">Email</span>
                <span className="text-sm text-slate-400">contacto@krauser.com.ar</span>
              </a>
              <div className="text-xs text-slate-400 md:text-right">
                Horario: 15 a 22 h (ARG)
              </div>
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