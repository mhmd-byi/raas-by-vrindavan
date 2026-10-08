"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Offering = { title: string; blurb: string; href: string; image: string; alt: string };

/** Vertical scroll drives a horizontal rail; cards sit at an angle and swing flat as they pass centre. */
export default function OfferingsRail({ items }: { items: Offering[] }) {
  const section = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (rail.current) setTravel(Math.max(0, rail.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  return (
    <section ref={section} style={{ height: `calc(100svh + ${travel}px)` }} className="relative bg-surface">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="mb-10 px-5 lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">What we offer</p>
          <h2 className="mt-3 text-5xl sm:text-7xl">Our Offerings</h2>
        </div>

        <motion.div ref={rail} style={{ x, perspective: 1400 }} className="flex w-max gap-6 px-5 lg:gap-10 lg:px-10">
          {items.map((o, i) => (
            <Link
              key={o.title}
              href={o.href}
              className="group relative block h-[52svh] w-[78vw] shrink-0 overflow-hidden bg-ink transition-transform duration-700 [transform:rotateY(-10deg)] hover:[transform:rotateY(0deg)_translateZ(30px)] sm:w-[48vw] lg:h-[56svh] lg:w-[34vw]"
            >
              <Image
                src={o.image}
                alt={o.alt}
                fill
                sizes="(min-width: 1024px) 34vw, 78vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <span className="absolute left-6 top-5 font-display text-5xl text-gold/80">0{i + 1}</span>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <h3 className="text-3xl text-white lg:text-4xl">{o.title}</h3>
                <p className="mt-2 max-w-sm text-sm text-white/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-lg:opacity-100">
                  {o.blurb}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
