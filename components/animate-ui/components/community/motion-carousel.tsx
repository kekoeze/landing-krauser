"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MotionCarouselProps<T> = {
  slides: T[];
  options?: EmblaOptionsType;
  className?: string;
  viewportClassName?: string;
  trackClassName?: string;
  slideClassName?: string;
  renderSlide?: (slide: T, index: number) => React.ReactNode;
  showArrows?: boolean;
  showDots?: boolean;
  onIndexChange?: (index: number) => void;
  arrowsClassName?: string;
  dotsClassName?: string;
};

function clampIndex(index: number, max: number) {
  return Math.max(0, Math.min(max, index));
}

export function MotionCarousel<T>({
  slides,
  options,
  className,
  viewportClassName,
  trackClassName,
  slideClassName,
  renderSlide,
  showArrows = true,
  showDots = true,
  onIndexChange,
  arrowsClassName,
  dotsClassName,
}: MotionCarouselProps<T>) {
  const [viewportRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback(
    (api: EmblaCarouselType) => {
      const next = api.selectedScrollSnap();
      setSelectedIndex(next);
      onIndexChange?.(next);
    },
    [onIndexChange],
  );

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
  const canScrollNext = emblaApi?.canScrollNext() ?? false;

  const defaultRender = (slide: T) => (
    <div className="flex h-40 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white">
      <span className="text-sm font-semibold text-slate-700">{String(slide)}</span>
    </div>
  );

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      {showArrows ? (
        <div className={["pointer-events-none absolute inset-y-0 left-0 right-0 z-10", arrowsClassName].filter(Boolean).join(" ")}>
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Anterior"
            className="pointer-events-auto absolute left-0 top-1/2 z-20 -translate-x-1 -translate-y-1/2 rounded-full border border-white/30 bg-[#20B0FE] p-3.5 shadow-[0_10px_32px_rgba(32,176,254,0.5)] opacity-0 ring-0 transition-all duration-200 hover:-translate-y-1/2 hover:-translate-x-0.5 hover:border-white/45 hover:bg-[#1aa2f0] hover:shadow-[0_14px_40px_rgba(32,176,254,0.62)] hover:ring-2 hover:ring-[#EAEEF5]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAEEF5]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#20B0FE] disabled:pointer-events-none disabled:opacity-0 disabled:shadow-none group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5 text-[#EAEEF5]" strokeWidth={2.5} aria-hidden />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
            className="pointer-events-auto absolute right-0 top-1/2 z-20 translate-x-1 -translate-y-1/2 rounded-full border border-white/30 bg-[#20B0FE] p-3.5 shadow-[0_10px_32px_rgba(32,176,254,0.5)] opacity-0 ring-0 transition-all duration-200 hover:-translate-y-1/2 hover:translate-x-0.5 hover:border-white/45 hover:bg-[#1aa2f0] hover:shadow-[0_14px_40px_rgba(32,176,254,0.62)] hover:ring-2 hover:ring-[#EAEEF5]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAEEF5]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#20B0FE] disabled:pointer-events-none disabled:opacity-0 disabled:shadow-none group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5 text-[#EAEEF5]" strokeWidth={2.5} aria-hidden />
          </button>
        </div>
      ) : null}

      <AnimatePresence initial={false}>
        <motion.div
          key="embla"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <div ref={viewportRef} className={["overflow-hidden", viewportClassName].filter(Boolean).join(" ")}>
            <div className={["flex touch-pan-y", trackClassName].filter(Boolean).join(" ")}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={[
                    "min-w-0 shrink-0",
                    slideClassName ?? "flex-[0_0_auto]",
                  ].join(" ")}
                >
                  {renderSlide ? renderSlide(slide, index) : defaultRender(slide)}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {showDots ? (
        <div className={["mt-6 flex items-center justify-center gap-3", dotsClassName].filter(Boolean).join(" ")}>
          {scrollSnaps.map((_, index) => {
            const isActive = index === clampIndex(selectedIndex, scrollSnaps.length - 1);
            return (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
                className={[
                  "h-2 w-2 rounded-full bg-[#252E49] transition-all duration-200",
                  isActive ? "scale-110 opacity-100 shadow-[0_0_0_3px_rgba(37,46,73,0.12)]" : "opacity-30 hover:scale-105 hover:opacity-55",
                ].join(" ")}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

