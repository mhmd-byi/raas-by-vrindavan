"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import ParallaxImage from "@/components/fx/ParallaxImage";
import { TextLink } from "@/components/ui";
import type { Room } from "@/lib/site";

function StackCard({ room, i, n, progress }: { room: Room; i: number; n: number; progress: MotionValue<number> }) {
  // Each card shrinks and dims slightly as the next one slides over it.
  const target = 1 - (n - i) * 0.04;
  const scale = useTransform(progress, [i / n, 1], [1, target]);
  const dim = useTransform(progress, [i / n, (i + 1) / n], [0, 0.55]);

  return (
    <div className="sticky top-0 flex h-svh items-center px-5 lg:px-10" style={{ zIndex: i }}>
      <motion.article
        style={{ scale, top: i * 12 }}
        className="relative mx-auto grid w-full max-w-[1300px] origin-top overflow-hidden border border-white/10 bg-surface-2 lg:h-[72svh] lg:grid-cols-[1.25fr_1fr]"
      >
        <ParallaxImage src={room.image} alt={room.alt} className="aspect-[4/3] lg:aspect-auto lg:h-full" sizes="(min-width: 1024px) 55vw, 100vw" strength={8} />
        <div className="flex flex-col justify-center gap-5 p-8 lg:p-14">
          <span className="font-display text-6xl text-gold/60">0{i + 1}</span>
          <h3 className="text-4xl lg:text-6xl">{room.name}</h3>
          <p className="max-w-md leading-relaxed text-white/65">{room.blurb}</p>
          <TextLink href={`/rooms#${room.slug}`}>Explore</TextLink>
        </div>
        <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />
      </motion.article>
    </div>
  );
}

export default function RoomStack({ rooms }: { rooms: Room[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} style={{ height: `${rooms.length * 100}svh` }} className="relative">
      {rooms.map((r, i) => (
        <StackCard key={r.slug} room={r} i={i} n={rooms.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
