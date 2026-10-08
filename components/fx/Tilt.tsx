"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { ReactNode } from "react";

/** 3D tilt toward the pointer, with a soft gold glare that follows it. */
export default function Tilt({
  children,
  className = "",
  max = 9,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const rotateY = useSpring(0, { stiffness: 180, damping: 18 });
  const rotateX = useSpring(0, { stiffness: 180, damping: 18 });
  const glare = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(212,175,95,0.18), transparent 60%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    gx.set(x * 100);
    gy.set(y * 100);
    rotateY.set((x - 0.5) * max * 2);
    rotateX.set(-(y - 0.5) * max * 2);
  }
  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glare }} />
      </motion.div>
    </div>
  );
}
