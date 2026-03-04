"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Partner } from '@/lib/partners';
import { partners } from '@/lib/partners';
import PartnerLogo from '@/components/partner-logo';

const STACK_PEEK_OFFSET = 20;
const STACK_SCALE_STEP = 0.05;
const STACK_FRAME_OPACITY_STEP = 0.12;
const MAX_VISIBLE_STACK = 3;
const CARD_EXIT_Y = -84;
const CARD_EXIT_SCALE = 0.96;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

type CardMotionState = {
  scale: number;
  opacity: number;
  y: number;
  zIndex: number;
  contentOpacity: number;
  surfaceOpacity: number;
  veilOpacity: number;
};

function getCardMotionState(
  progressValue: number,
  index: number,
  total: number
): CardMotionState {
  const scrollSteps = Math.max(total - 1, 1);
  const scrollIndex = clamp(progressValue) * scrollSteps;
  const phase = index - scrollIndex;

  if (phase <= -1) {
    return {
      scale: CARD_EXIT_SCALE,
      opacity: 0,
      y: CARD_EXIT_Y,
      zIndex: 0,
      contentOpacity: 0,
      surfaceOpacity: 0,
      veilOpacity: 0,
    };
  }

  if (phase < 0) {
    const exitProgress = clamp(-phase);

    return {
      scale: 1 - (1 - CARD_EXIT_SCALE) * exitProgress,
      opacity: 1 - exitProgress * 0.7,
      y: CARD_EXIT_Y * exitProgress,
      zIndex: total + 1,
      contentOpacity: 1 - exitProgress,
      surfaceOpacity: 0.62 - exitProgress * 0.18,
      veilOpacity: exitProgress * 0.08,
    };
  }

  const stackDepth = Math.min(phase, MAX_VISIBLE_STACK);
  const visibility = 1 - clamp(phase - MAX_VISIBLE_STACK, 0, 1);
  const contentOpacity = clamp(1 - phase * 2.5, 0, 1) * visibility;

  return {
    scale: 1 - stackDepth * STACK_SCALE_STEP,
    opacity: Math.max(1 - stackDepth * STACK_FRAME_OPACITY_STEP, 0.48) * visibility,
    y: -stackDepth * STACK_PEEK_OFFSET,
    zIndex: visibility > 0 ? total - index : 0,
    contentOpacity,
    surfaceOpacity: Math.max(0.62 - stackDepth * 0.12, 0.26) * visibility,
    veilOpacity: Math.min(stackDepth * 0.18, 0.5) * visibility,
  };
}

type PartnerCardProps = {
  partner: Partner;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function PartnerCard({ partner, index, total, progress }: PartnerCardProps) {
  const scale = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).scale
  );
  const opacity = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).opacity
  );
  const y = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).y
  );
  const zIndex = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).zIndex
  );
  const contentOpacity = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).contentOpacity
  );
  const surfaceOpacity = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).surfaceOpacity
  );
  const veilOpacity = useTransform(progress, (value) =>
    getCardMotionState(value, index, total).veilOpacity
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        scale,
        opacity,
        y,
        zIndex,
        transformOrigin: 'top center',
      }}
    >
      <div className="flex h-full w-full items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl mx-auto">
          <Link
            href={`/partners/${partner.slug}`}
            className="block group"
            aria-label={`Ver partner ${partner.name}`}
          >
            <div
              className={`glass-card-hover isolate overflow-hidden rounded-2xl border border-slate-300/70 dark:border-white/[0.08] shadow-[0_20px_48px_rgba(148,163,184,0.28),0_8px_22px_rgba(15,23,42,0.10)] dark:shadow-[0_20px_48px_rgba(4,10,26,0.28),0_6px_16px_rgba(4,10,26,0.18)] transition-shadow duration-500 hover:backdrop-blur-none hover:shadow-[0_24px_56px_rgba(148,163,184,0.34),0_10px_24px_rgba(15,23,42,0.14)] dark:hover:shadow-[0_24px_56px_rgba(4,10,26,0.32),0_8px_18px_rgba(4,10,26,0.22)] p-8 md:p-10 group relative ${partner.cardGradient}`}
            >
              <div className="pointer-events-none absolute -inset-[2px] rounded-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.14)_34%,rgba(125,211,252,0.12)_66%,rgba(255,255,255,0.42)_100%)] opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-85 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(148,163,184,0.03)_30%,rgba(96,165,250,0.05)_62%,rgba(255,255,255,0.07)_100%)] dark:opacity-45 dark:group-hover:opacity-60"></div>
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.28)_24%,rgba(191,219,254,0.20)_58%,rgba(255,255,255,0.62)_100%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_24%,rgba(96,165,250,0.04)_58%,rgba(255,255,255,0.09)_100%)]"></div>
              <motion.div
                className="absolute inset-px rounded-[15px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,247,251,0.90)_100%)] dark:bg-[linear-gradient(180deg,rgba(8,13,24,0.94)_0%,rgba(10,16,30,0.88)_100%)]"
                style={{ opacity: surfaceOpacity }}
              />
              <div className="absolute inset-px rounded-[15px] bg-white/0 transition-colors duration-300 group-hover:bg-white/18 dark:group-hover:bg-slate-950/20"></div>
              <div className="absolute inset-px rounded-[15px] border border-slate-200/90 dark:border-white/[0.065]"></div>
              <div className="absolute inset-[2px] rounded-[14px] border border-slate-200/70 dark:border-white/[0.035]"></div>
              <motion.div
                className="absolute inset-px rounded-[15px] bg-white/72 dark:bg-slate-950/70"
                style={{ opacity: veilOpacity }}
              />

              <motion.div className="relative z-10" style={{ opacity: contentOpacity }}>
                {partner.logo.src ? (
                  <div className="relative mb-6 h-12 w-full max-w-[160px] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:max-w-[180px]">
                    <Image
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      fill
                      sizes="(max-width: 640px) 160px, 180px"
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <PartnerLogo
                    partner={partner}
                    size="md"
                    className="mb-6 group-hover:scale-110"
                  />
                )}

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400 mb-3">
                  {partner.industry}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white mb-4 group-hover:text-violet-600 dark:group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h3>

                {partner.subtitle ? (
                  <p className="text-sm md:text-base font-medium text-slate-600 dark:text-gray-300 mb-4">
                    {partner.subtitle}
                  </p>
                ) : null}

                <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                  {partner.shortDescription}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-300/70 dark:border-gray-700/50 flex items-center justify-between text-sm text-slate-500 dark:text-gray-400">
                  <span>Ver detalles</span>
                  <span className="text-violet-600 dark:text-purple-400 flex items-center gap-2 group-hover:text-violet-500 dark:group-hover:text-purple-300 transition-colors">
                    {partner.cardActionLabel ?? 'Conocer mas'}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PartnersSection() {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.28,
  });

  return (
    <section id="partners" className="relative">
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-48 -left-48"></div>
        <div className="floating-orb-2 top-1/2 -right-40"></div>
        <div className="floating-orb-3 -bottom-32 left-1/3"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Partners estrategicos</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Equipos con los que construimos soluciones reales, medibles y listas para escalar.
          </p>
        </motion.div>
      </div>

      <div
        ref={stackRef}
        className="relative z-10"
        style={{ height: `${partners.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen">
          <div className="relative h-full overflow-hidden">
            {partners.map((partner, index) => (
              <PartnerCard
                key={partner.slug}
                partner={partner}
                index={index}
                total={partners.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
