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
          <h2 className="text-3xl font-extrabold tracking-tight text-[#9933FF] md:text-4xl">
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
            viewportClassName="pb-10"
            trackClassName="gap-8 md:gap-10 lg:gap-10"
            slideClassName="flex-[0_0_100%] md:flex-[0_0_calc((100%-2.5rem)/2)] lg:flex-[0_0_calc((100%-5rem)/3)]"
            showArrows
            showDots
            renderSlide={(project, idx) => (
              <div className="w-full px-2 py-3 sm:px-3 md:px-2 lg:px-2.5">
                <ProjectFlipCard project={project} compact />
              </div>
            )}
          />
        </motion.div>
      </div>
    </div>
  );
}

