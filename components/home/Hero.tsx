"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import HeroBackdrop from "@/components/fx/HeroBackdrop";
import SplitText from "@/components/fx/SplitText";
import { img } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <HeroBackdrop src={img.poolNight} alt="The Raas by Vrindavan poolside entrance glowing at night" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/25" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-40 lg:px-10 lg:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-gold"
        >
          Indore · Weddings · Events · Stays
        </motion.p>

        <h1 className="text-[56px] leading-[0.95] text-white sm:text-[96px] lg:text-[140px]">
          <span className="block">
            <SplitText text="Where memories" delay={0.4} />
          </span>
          <span className="block">
            <SplitText text="are made in" delay={0.75} dim={[0, 1]} />
          </span>
          <span className="block italic text-gold">
            <SplitText text="royal splendour" delay={1.05} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
        >
          <Link
            href="/contact-us"
            className="w-fit rounded-full bg-gold px-9 py-4 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-white"
          >
            Book Now
          </Link>
          <Link href="/gallery" className="w-fit text-[13px] uppercase tracking-[0.22em] text-white/80 underline-offset-8 hover:text-gold hover:underline">
            View Gallery
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Royal banquets, spacious rooms and a poolside made for celebrations.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 right-6 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-white/50 lg:flex"
      >
        Scroll
        <span className="block h-14 w-px origin-top animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
