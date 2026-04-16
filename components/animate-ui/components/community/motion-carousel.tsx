"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { motion, AnimatePresence } from "framer-motion";

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
            className="pointer-events-auto absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/80 p-3 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur-md opacity-0 transition-opacity duration-200 hover:bg-white disabled:opacity-0 group-hover:opacity-100"
          >
            <span className="block h-2 w-2 rotate-45 border-b-2 border-l-2 border-[#8A2BE2]" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Siguiente"
            className="pointer-events-auto absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 rounded-full border border-slate-200/80 bg-white/80 p-3 shadow-[0_14px_40px_rgba(15,23,42,0.10)] backdrop-blur-md opacity-0 transition-opacity duration-200 hover:bg-white disabled:opacity-0 group-hover:opacity-100"
          >
            <span className="block h-2 w-2 -rotate-45 border-b-2 border-r-2 border-[#8A2BE2]" />
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
                    "min-w-0 flex-[0_0_auto]",
                    slideClassName ?? "",
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
                  "h-2 w-2 rounded-full bg-[#8A2BE2] transition-opacity",
                  isActive ? "opacity-100" : "opacity-35 hover:opacity-60",
                ].join(" ")}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

