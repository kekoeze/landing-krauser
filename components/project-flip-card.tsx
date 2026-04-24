"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, Star, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type ProjectFlipData = {
  category?: string; // e.g. SaaS
  title: string;
  subtitle?: string; // short subtitle
  description: string; // short description (front)
  longDescription?: string; // long text (back)
  features?: string[];
  imageUrl?: string;
  imageFit?: "cover" | "contain";
  techTags?: string[];
  href?: string;
  usable?: boolean;
  status?: "usable" | "process";
};

type ProjectFlipCardProps = {
  project: ProjectFlipData;
  className?: string;
  compact?: boolean;
};

export default function ProjectFlipCard({ project, className, compact = false }: ProjectFlipCardProps) {
  const [flipped, setFlipped] = React.useState(false);
  const status = project.status ?? (project.usable ? "usable" : undefined);
  const imageFit = project.imageFit ?? "cover";

  return (
    <div
      className={cn(
        "[perspective:1200px] relative z-10 max-w-full min-h-0 group/flip will-change-transform transition-transform duration-300",
        "group-hover/flip:z-20",
        !compact && "group-hover/flip:scale-[1.03]",
        compact ? "h-[520px]" : "h-[620px]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d]",
          // Desktop: flip on hover. Mobile: flip via state.
          "group-hover/flip:[transform:rotateY(180deg)]",
          flipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* FRONT */}
        <Card
          className={cn(
            "absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]",
            "[backface-visibility:hidden]"
          )}
        >
          {status === "usable" ? (
            <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/90 px-3 py-1 text-xs font-extrabold text-amber-700 shadow-sm backdrop-blur">
              <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
              Utilizable
            </div>
          ) : status === "process" ? (
            <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-700 shadow-sm backdrop-blur">
              <Wrench className="h-4 w-4 text-[#8A2BE2]" />
              Proceso de desarrollo
            </div>
          ) : null}
          {project.imageUrl ? (
            <div
              className={cn(
                "relative w-full shrink-0 overflow-hidden bg-slate-100",
                compact ? "h-40" : "h-56"
              )}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes={compact ? "(min-width: 1024px) 360px, (min-width: 768px) 45vw, 85vw" : "(min-width: 1024px) 560px, 92vw"}
                className={cn(
                  "h-full w-full",
                  imageFit === "contain" ? "object-contain p-3 bg-white" : "object-cover"
                )}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(138,43,226,0.12),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(192,38,211,0.10),transparent_60%)]" />
            </div>
          ) : null}

          <div className={cn("flex min-h-0 flex-1 flex-col p-6", compact ? "sm:p-6" : "sm:p-8")}>
            {project.category ? (
              <p className="text-xs font-semibold tracking-[0.24em] text-[#8A2BE2] uppercase">
                {project.category}
              </p>
            ) : null}

            <h3
              className={cn(
                "mt-2 font-extrabold tracking-tight text-slate-950",
                compact ? "text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden break-words" : "text-2xl",
              )}
            >
              {project.title}
            </h3>
            {project.subtitle ? (
              <p
                className={cn(
                  "mt-1 text-sm font-semibold text-slate-700",
                  compact
                    ? "[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden break-words"
                    : "",
                )}
              >
                {project.subtitle}
              </p>
            ) : null}

            <p
              className={cn(
                "mt-3 text-sm leading-relaxed text-slate-900",
                compact
                  ? "[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden"
                  : "[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4] overflow-hidden"
              )}
            >
              {project.description}
            </p>

            {project.techTags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#8A2BE2]/10 px-3 py-1 text-xs font-semibold text-[#5B21B6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {!compact ? (
              <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A2BE2] hover:text-[#C026D3] transition-colors"
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  Ver detalles
                  <ExternalLink className="h-4 w-4" />
                </button>

                {project.href ? (
                  <Button
                    variant="gradient"
                    size="sm"
                    className="h-9 px-4"
                    onClick={() => window.open(project.href, "_blank", "noopener,noreferrer")}
                  >
                    Ver
                  </Button>
                ) : null}
              </div>
            ) : (
              <div className="mt-auto shrink-0" aria-hidden />
            )}
          </div>
        </Card>

        {/* BACK */}
        <Card
          className={cn(
            "absolute inset-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]",
            "[transform:rotateY(180deg)] [backface-visibility:hidden]"
          )}
        >
          <div className={cn("p-6 h-full flex flex-col", compact ? "sm:p-6" : "sm:p-8")}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                {project.category ? (
                  <p className="text-xs font-semibold tracking-[0.24em] text-[#C026D3] uppercase">
                    {project.category}
                  </p>
                ) : null}
                <h3 className={cn("mt-2 font-extrabold tracking-tight text-slate-950", compact ? "text-lg" : "text-2xl")}>
                  {project.title}
                </h3>
                {project.subtitle ? (
                  <p className="mt-1 text-sm font-semibold text-slate-700">{project.subtitle}</p>
                ) : null}
                {status === "usable" ? (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-800">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500" />
                    Listo para usar
                  </div>
                ) : status === "process" ? (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#8A2BE2]/10 px-3 py-1 text-xs font-extrabold text-[#5B21B6]">
                    <Wrench className="h-4 w-4 text-[#8A2BE2]" />
                    Proceso de desarrollo
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className={cn(
                "mt-4 space-y-4 overflow-auto pr-1",
                compact ? "max-h-[260px]" : "max-h-[420px]"
              )}
            >
              {project.longDescription ? (
                <p className="text-sm leading-relaxed text-slate-900">{project.longDescription}</p>
              ) : (
                <p className="text-sm leading-relaxed text-slate-900">{project.description}</p>
              )}

              {project.features?.length ? (
                <div>
                  <p className="text-sm font-extrabold text-slate-950">Características principales:</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-900">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C026D3]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {(project.href || compact) ? (
              <div className="mt-auto pt-5 flex items-center justify-end">
                {project.href ? (
                  <Button
                    variant="gradient"
                    size="sm"
                    className="h-9 px-4"
                    onClick={() => {
                      setFlipped(false);
                      window.open(project.href, "_blank", "noopener,noreferrer");
                    }}
                  >
                    Ver proyecto
                  </Button>
                ) : (
                  <Button
                    variant="gradient"
                    size="sm"
                    className="h-9 px-4"
                    onClick={() => {
                      setFlipped(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Ver proyecto
                  </Button>
                )}
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
}

