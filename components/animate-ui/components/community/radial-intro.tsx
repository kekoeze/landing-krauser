"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

type RadialLayoutMode = "desktop" | "tablet-compact" | "mobile-compact";

function useRadialLayoutMode(): RadialLayoutMode {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};
      const mqDesktop = window.matchMedia("(min-width: 1024px)");
      const mqTablet = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
      const mqMobile = window.matchMedia("(max-width: 639px)");
      const fn = () => onStoreChange();
      mqDesktop.addEventListener("change", fn);
      mqTablet.addEventListener("change", fn);
      mqMobile.addEventListener("change", fn);
      return () => {
        mqDesktop.removeEventListener("change", fn);
        mqTablet.removeEventListener("change", fn);
        mqMobile.removeEventListener("change", fn);
      };
    },
    () => {
      if (typeof window === "undefined") return "desktop";
      const w = window.innerWidth;
      if (w >= 1024) return "desktop";
      if (w >= 640) return "tablet-compact";
      return "mobile-compact";
    },
    () => "desktop"
  );
}

export type RadialOrbitItem = {
  id: string | number;
  name: string;
  src?: string;
};

type RadialIntroProps = {
  orbitItems: RadialOrbitItem[];
  className?: string;
  selectedId?: RadialOrbitItem["id"];
  defaultSelectedId?: RadialOrbitItem["id"];
  onSelect?: (item: RadialOrbitItem) => void;
  centerLogoSrc?: string;
  centerLogoAlt?: string;
  centerEmphasis?: boolean;
};

export function RadialIntro({
  orbitItems,
  className,
  selectedId,
  defaultSelectedId,
  onSelect,
  centerLogoSrc,
  centerLogoAlt,
  centerEmphasis = false,
}: RadialIntroProps) {
  const layoutMode = useRadialLayoutMode();
  const compact = layoutMode !== "desktop";
  const firstId = orbitItems[0]?.id;
  const [internalSelected, setInternalSelected] = React.useState<RadialOrbitItem["id"] | undefined>(
    defaultSelectedId ?? firstId
  );

  const normalizedSelectedId =
    selectedId === undefined || selectedId === null || selectedId === "" ? undefined : selectedId;
  const currentSelected = normalizedSelectedId ?? internalSelected;
  const count = Math.max(orbitItems.length, 1);
  /* Radio en px: en móvil/tablet compacto los logos van más lejos del centro (columna estrecha vs ancha). */
  const radius =
    layoutMode === "desktop" ? 206 : layoutMode === "tablet-compact" ? 122 : 91;
  const fallbackCenterItem = orbitItems.find((i) => i.id === currentSelected) ?? orbitItems[0];
  const centerSrc = centerLogoSrc ?? fallbackCenterItem?.src;
  const centerAlt = centerLogoAlt ?? fallbackCenterItem?.name ?? "Partner";
  const centerFallback = String(centerAlt ?? "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className={cn("relative w-full", compact && "overflow-visible", className)}>
      <div
        className={cn(
          "relative flex aspect-square w-full items-center justify-center",
          compact ? "mx-0 max-w-full overflow-visible" : "mx-auto max-w-[560px]"
        )}
      >
        {/* Soft radial background */}
        <div />
        <motion.div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute rounded-full blur-2xl",
            compact ? "inset-3" : "inset-6"
          )}
          style={{
            background:
              "radial-gradient(circle at 45% 40%, rgba(108,26,235,0.22), transparent 55%), radial-gradient(circle at 55% 62%, rgba(192,38,211,0.16), transparent 58%)",
          }}
          animate={{ opacity: [0.35, 0.75, 0.35], scale: [1, 1.03, 1] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute rounded-full blur-xl",
            compact ? "inset-5" : "inset-10"
          )}
          style={{
            background:
              "radial-gradient(circle at 30% 55%, rgba(128,117,233,0.18), transparent 60%), radial-gradient(circle at 70% 45%, rgba(192,38,211,0.10), transparent 62%)",
          }}
          animate={{ opacity: [0.25, 0.55, 0.25], x: [0, 6, 0], y: [0, -4, 0] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Base ring + glass */}
        <motion.div
          className={cn(
            "absolute rounded-full border border-slate-200/70 bg-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur",
            compact ? "inset-3" : "inset-8"
          )}
          animate={{
            boxShadow: [
              "0_18px_55px_rgba(15,23,42,0.06)",
              "0_28px_86px_rgba(15,23,42,0.10)",
              "0_18px_55px_rgba(15,23,42,0.06)",
            ],
          }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Anillo con degradé de marca alrededor del logo: ver clases en globals.css */}

        {/* Rotating orbit */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {orbitItems.map((item, idx) => {
            const angle = (360 / count) * idx;
            const isSelected = item.id === currentSelected;
            const fallback = String(item.name ?? "").trim().slice(0, 2).toUpperCase();

            return (
              <div
                key={item.id}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg) translate(-50%, -50%)`,
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setInternalSelected(item.id);
                    onSelect?.(item);
                  }}
                  aria-pressed={isSelected}
                  className={cn(
                    "group relative grid place-items-center border bg-white transition-all duration-300 hover:-translate-y-0.5",
                    compact
                      ? "h-12 w-12 rounded-2xl shadow-[0_10px_28px_rgba(15,23,42,0.10)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.12)]"
                      : "h-24 w-24 rounded-3xl shadow-[0_16px_46px_rgba(15,23,42,0.12)] hover:shadow-[0_18px_48px_rgba(15,23,42,0.14)]",
                    isSelected ? "border-[#C026D3]/40 ring-2 ring-[#C026D3]/25" : "border-slate-200/80"
                  )}
                >
                  {/* tiny radial glow on hover/selected */}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                      compact ? "rounded-2xl" : "rounded-3xl",
                      "bg-[radial-gradient(circle_at_30%_20%,rgba(192,38,211,0.18),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(108,26,235,0.14),transparent_55%)]",
                      isSelected ? "opacity-100" : "group-hover:opacity-100"
                    )}
                  />

                  {item.src ? (
                    // Use <img> to support remote URLs without Next config.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={item.name}
                      className={cn(
                        "relative z-10 bg-white object-contain",
                        compact ? "h-10 w-10 rounded-xl p-1.5" : "h-16 w-16 rounded-2xl p-2"
                      )}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span
                      className={cn(
                        "relative z-10 font-extrabold tracking-tight text-slate-800",
                        compact ? "text-[11px]" : "text-sm"
                      )}
                    >
                      {fallback}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </motion.div>

        {/* Center logo */}
        <div className="relative z-10 grid place-items-center">
          {/* Emphasis layers for default spotlight state */}
          {centerEmphasis ? (
            <>
              <motion.div
                className="absolute h-[260px] w-[260px] rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(192,38,211,0.22), transparent 55%), radial-gradient(circle at 70% 70%, rgba(108,26,235,0.22), transparent 55%)",
                }}
                animate={{ opacity: [0.55, 0.9, 0.55] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute h-[186px] w-[186px] rounded-full border border-slate-200/60 bg-white/40 backdrop-blur"
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          ) : null}

          <motion.div
            className="relative"
            animate={centerEmphasis ? { y: [0, -3, 0] } : { y: 0 }}
            transition={centerEmphasis ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
          >
            <div
              className={cn(
                "relative",
                compact
                  ? layoutMode === "tablet-compact"
                    ? "h-[108px] w-[108px]"
                    : "h-[96px] w-[96px]"
                  : "h-[204px] w-[204px]"
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute left-1/2 top-1/2 z-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center",
                  compact
                    ? layoutMode === "tablet-compact"
                      ? "h-[142px] w-[142px]"
                      : "h-[128px] w-[128px]"
                    : "h-[256px] w-[256px]"
                )}
              >
                <div className="partner-gradient-ring-glow absolute inset-0" />
              </div>

              <div className="relative z-10 h-full w-full">
              {centerSrc ? (
                <Image
                  src={centerSrc}
                  alt={centerAlt}
                  fill
                  sizes={
                    compact
                      ? layoutMode === "tablet-compact"
                        ? "108px"
                        : "96px"
                      : "204px"
                  }
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="grid h-full w-full place-items-center rounded-3xl border border-slate-200/80 bg-white text-3xl font-black tracking-tight text-slate-900">
                  {centerFallback || "?"}
                </div>
              )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

