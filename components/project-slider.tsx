"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { EmblaOptionsType } from "embla-carousel";
import { MotionCarousel } from "@/components/animate-ui/components/community/motion-carousel";
import ProjectFlipCard, { type ProjectFlipData } from "@/components/project-flip-card";

export type ProjectSlide = ProjectFlipData;

export default function ProjectSlider({
  title,
  subtitle,
  projects,
}: {
  title?: string;
  subtitle?: string;
  projects: ProjectSlide[];
}) {
  const [, setActive] = useState(0);
  const OPTIONS: EmblaOptionsType = useMemo(() => ({ loop: true, align: "start" }), []);

  return (
    <div className="group relative">
      {title ? (
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#8A2BE2] md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 mx-auto max-w-3xl text-base text-[#C026D3]/80 md:text-lg">{subtitle}</p>
          ) : null}
        </div>
      ) : null}

      <div className={title ? "relative mt-12" : "relative"}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <MotionCarousel
            slides={projects}
            options={OPTIONS}
            onIndexChange={(index) => setActive(index)}
            viewportClassName="pb-10 px-1 sm:px-2"
            trackClassName="gap-6 md:gap-7 lg:gap-8"
            slideClassName="pl-0 pr-0"
            showArrows
            showDots
            renderSlide={(project, idx) => (
              <div className="w-[78vw] sm:w-[58vw] md:w-[calc((100vw-64px)/2)] lg:w-[calc((1120px-40px)/3)] py-2">
                <ProjectFlipCard project={project} compact />
              </div>
            )}
          />
        </motion.div>
      </div>
    </div>
  );
}

