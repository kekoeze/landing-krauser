"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
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

/** Muestra el logotipo textual solo al hover/focus del isologo o al focus del enlace (teclado). */
const LOGO_WORDMARK_REVEAL =
  'ml-2 inline-flex max-w-0 items-center overflow-hidden whitespace-nowrap pr-0 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ' +
  'peer-hover/icon:ml-3 peer-hover/icon:max-w-[220px] peer-hover/icon:pr-1 peer-hover/icon:opacity-100 ' +
  'md:peer-hover/icon:max-w-[240px] md:peer-hover/icon:pr-0 ' +
  'group-focus-visible/link:ml-3 group-focus-visible/link:max-w-[220px] group-focus-visible/link:pr-1 group-focus-visible/link:opacity-100 ' +
  'md:group-focus-visible/link:max-w-[240px] md:group-focus-visible/link:pr-0';

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
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-[background-color,box-shadow,border-color] duration-300 ${
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
          <div className="flex flex-1 min-w-0 items-center">
            <a
              href={getMenuHref('#home')}
              className="group/link inline-flex min-w-0 max-w-full items-center overflow-visible rounded-2xl px-2 py-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8075E9]/35"
              aria-label="Ir al inicio"
            >
              <span className="peer/icon inline-flex shrink-0 rounded-2xl">
                <Image
                  src="/isologo.png"
                  alt="Krauser"
                  width={44}
                  height={44}
                  className="h-10 w-10 shrink-0 sm:h-11 sm:w-11"
                  priority
                />
              </span>
              <span className={LOGO_WORDMARK_REVEAL}>
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
          <div className="hidden lg:flex flex-1 items-center justify-center">
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

          <div className="relative z-50 flex shrink-0 items-center space-x-2">
            {/* Mobile menu (Sheet) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-11 w-11 rounded-2xl text-[#8075E9] hover:text-[#8075E9] hover:bg-[#8075E9]/10 border border-[#8075E9]/15"
                  aria-label="Abrir menú"
                >
                  <Menu className="h-6 w-6" strokeWidth={2.4} aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[86vw] max-w-[360px] border-l border-slate-200/70 bg-white/95 backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <motion.div
                    className="flex flex-col items-stretch justify-start pt-1"
                    initial={{ opacity: 0, x: -22, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                      mass: 0.82,
                    }}
                  >
                    <motion.a
                      href={getMenuHref('#home')}
                      className="group/link inline-flex items-center justify-start overflow-visible rounded-2xl px-2 py-2 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8075E9]/35"
                      aria-label="Ir al inicio"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        delay: 0.04,
                      }}
                    >
                      <motion.span
                        className="peer/icon group/isoframe relative inline-flex shrink-0 rounded-2xl"
                        initial={{ scale: 0.88, rotate: -6 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 22,
                          delay: 0.06,
                        }}
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#9933FF]/25 via-[#C026D3]/15 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover/isoframe:opacity-100"
                        />
                        <Image
                          src="/isologo.png"
                          alt="Krauser"
                          width={44}
                          height={44}
                          className="relative h-11 w-11 shrink-0 opacity-95"
                          priority={false}
                        />
                      </motion.span>
                      <span className={LOGO_WORDMARK_REVEAL}>
                        <Image
                          src="/logotipo-oscuro.png"
                          alt="Krauser"
                          width={180}
                          height={44}
                          className="h-7 w-auto opacity-90"
                          priority={false}
                        />
                      </span>
                    </motion.a>
                    <motion.div
                      aria-hidden
                      className="mt-3 h-[2px] max-w-[min(220px,88%)] origin-left rounded-full bg-gradient-to-r from-[#9933FF] via-[#C026D3] to-[#20B0FE]/60"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        delay: 0.14,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.div>
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
