"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

/** Link that leans toward the pointer. */
export default function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  // Damping near critical: the button settles smoothly instead of wobbling.
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const reduce = useReducedMotion();

  return (
    <motion.span
      style={{ x, y }}
      className="inline-block"
      onPointerMove={(e) => {
        if (reduce || e.pointerType === "touch") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.span>
  );
}
