"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

/** Inner-page hero: the photo slowly zooms and drifts as you scroll away, with the title lifting off. */
export default function PageHeroFrame({ image, alt, children }: { image: string; alt: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex h-[70svh] min-h-[440px] items-end overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-ink/40 to-ink/60" />
      <motion.div style={{ y: textY, opacity }} className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 lg:px-10">
        {children}
      </motion.div>
    </section>
  );
}
