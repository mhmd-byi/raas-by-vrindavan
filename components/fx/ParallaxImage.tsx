"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

/** Image that drifts inside its frame while the page scrolls, giving depth. */
export default function ParallaxImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  strength = 12,
  priority,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-surface ${className}`}>
      <motion.div style={{ y, scale: 1 + (strength * 2) / 100 + 0.04 }} className="absolute inset-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </div>
  );
}
