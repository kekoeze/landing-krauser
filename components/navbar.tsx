"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
  ];

  const getMenuHref = (href: string) => {
    return pathname === '/' ? href : `/${href}`;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 overflow-visible transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b border-slate-200/75 bg-slate-50/95 shadow-[0_12px_30px_rgba(15,23,42,0.08)]'
          : 'border-b border-transparent bg-slate-50/90'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div className="flex min-w-0 max-w-[calc(100vw-5.5rem)] items-center sm:max-w-none">
            <a
              href={getMenuHref('#home')}
              className="group inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-2xl px-2 py-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8075E9]/35"
              aria-label="Ir al inicio"
            >
              <Image
                src="/isologo.png"
                alt="Krauser"
                width={44}
                height={44}
                className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
                priority
              />
              <span className="ml-2 inline-flex max-w-0 overflow-hidden whitespace-nowrap pr-0 opacity-0 transition-all duration-300 ease-out group-hover:ml-3 group-hover:max-w-[220px] group-hover:pr-1 group-hover:opacity-100 md:group-hover:max-w-[240px] md:group-hover:pr-0 group-focus-visible:ml-3 group-focus-visible:max-w-[220px] group-focus-visible:pr-1 group-focus-visible:opacity-100 md:group-focus-visible:max-w-[240px] md:group-focus-visible:pr-0 group-active:ml-3 group-active:max-w-[220px] group-active:pr-1 group-active:opacity-100 md:group-active:max-w-[240px] md:group-active:pr-0">
                <Image
                  src="/logotipo-oscuro.png"
                  alt="Krauser"
                  width={180}
                  height={44}
                  className="h-6 w-auto opacity-90 sm:h-7"
                  priority={false}
                />
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 lg:gap-2">
                {menuItems.map((item) => {
                  const href = getMenuHref(item.href);
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink asChild>
                        <a
                          href={href}
                          className="group/navitem relative inline-flex h-11 items-center rounded-xl px-4 text-sm font-semibold tracking-tight text-slate-900 transition-colors duration-200 hover:text-[#252E49]"
                        >
                          {item.name.toUpperCase()}
                          <span
                            aria-hidden
                            className="pointer-events-none absolute bottom-1 left-3 right-3 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#252E49] to-[#20B0FE] opacity-0 shadow-[0_0_14px_rgba(32,176,254,0.45)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/navitem:scale-x-100 group-hover/navitem:opacity-100"
                          />
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
                  className="md:hidden h-11 w-11 rounded-2xl text-[#8075E9] hover:text-[#8075E9] hover:bg-[#8075E9]/10"
                  aria-label="Abrir menú"
                >
                  <span className="relative block h-5 w-6">
                    <span className="absolute left-0 top-0 block h-[3px] w-full rounded-full bg-current" />
                    <span className="absolute left-0 top-1/2 block h-[3px] w-full -translate-y-1/2 rounded-full bg-current opacity-90" />
                    <span className="absolute left-0 bottom-0 block h-[3px] w-full rounded-full bg-current" />
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white/90 backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <div className="flex justify-center pt-1">
                    <a
                      href={getMenuHref('#home')}
                      className="group inline-flex items-center justify-center rounded-2xl px-2 py-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8075E9]/35"
                      aria-label="Ir al inicio"
                    >
                      <Image
                        src="/isologo.png"
                        alt="Krauser"
                        width={44}
                        height={44}
                        className="h-11 w-11 shrink-0 opacity-95"
                        priority={false}
                      />
                      <span className="ml-2 inline-flex max-w-0 overflow-hidden whitespace-nowrap pr-0 opacity-0 transition-all duration-300 ease-out group-hover:ml-3 group-hover:max-w-[240px] group-hover:pr-2 group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-[240px] group-focus-visible:pr-2 group-focus-visible:opacity-100 group-active:ml-3 group-active:max-w-[240px] group-active:pr-2 group-active:opacity-100">
                        <Image
                          src="/logotipo-oscuro.png"
                          alt="Krauser"
                          width={180}
                          height={44}
                          className="h-7 w-auto opacity-90"
                          priority={false}
                        />
                      </span>
                    </a>
                  </div>
                </SheetHeader>

                <div className="mt-6 space-y-2">
                  <div className="space-y-1">
                    {menuItems.map((item) => {
                      const href = getMenuHref(item.href);
                      return (
                      <a
                        key={item.name}
                        href={href}
                        className="group/navm relative block rounded-2xl px-4 py-3 text-base font-semibold tracking-tight text-slate-900 transition-colors duration-200 hover:bg-slate-900/[0.04] hover:text-[#252E49]"
                      >
                        {item.name.toUpperCase()}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute bottom-2 left-4 right-4 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-[#252E49] to-[#20B0FE] opacity-0 shadow-[0_0_12px_rgba(32,176,254,0.4)] transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/navm:scale-x-100 group-hover/navm:opacity-100"
                        />
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
