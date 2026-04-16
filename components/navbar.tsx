"use client";

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Partners', href: '#partners' },
    { name: 'Proyectos', href: '#portfolio' },
    { name: 'Contactos', href: 'whatsapp' },
  ];

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer más sobre los servicios de Krauser. Me gustaría recibir información sobre desarrollo web y soluciones tecnológicas.'
    );
    return `https://wa.me/5492920707402?text=${message}`;
  }, []);

  const getMenuHref = (href: string) => {
    return pathname === '/' ? href : `/${href}`;
  };

  const resolveHref = (href: string) => {
    if (href === 'whatsapp') return whatsappHref;
    return getMenuHref(href);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)] border-b border-slate-200/80'
          : 'bg-slate-50/90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div className="flex items-center">
            <a
              href={getMenuHref('#home')}
              className="inline-flex items-center rounded-2xl px-2 py-2 transition-opacity hover:opacity-90"
              aria-label="Ir al inicio"
            >
              <Image
                src="/isologo.png"
                alt="Krauser"
                width={44}
                height={44}
                className="h-10 w-10 sm:h-11 sm:w-11"
                priority
              />
              <span className="ml-3 hidden md:inline-flex text-base font-extrabold tracking-tight text-[#8A2BE2]">
                Krauser
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 lg:gap-2">
                {menuItems.map((item) => {
                  const href = resolveHref(item.href);
                  const isExternal = item.href === 'whatsapp';
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noreferrer' : undefined}
                          className="inline-flex h-11 items-center rounded-xl px-4 text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-[#8A2BE2]"
                        >
                          {item.name.toUpperCase()}
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu (Sheet) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden h-11 w-11 rounded-2xl text-[#8A2BE2] hover:text-[#C026D3] hover:bg-[#8A2BE2]/8"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/90 backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle className="text-[#8A2BE2]">Menú</SheetTitle>
                </SheetHeader>

                <div className="mt-6 space-y-2">
                  <div className="space-y-1">
                    {menuItems.map((item) => {
                      const href = resolveHref(item.href);
                      const isExternal = item.href === 'whatsapp';
                      return (
                      <a
                        key={item.name}
                        href={href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="block rounded-xl px-3 py-3 text-base font-semibold tracking-tight text-slate-900 hover:text-[#8A2BE2]"
                      >
                        {item.name.toUpperCase()}
                      </a>
                      );
                    })}
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
