"use client";

import { motion } from "motion/react";

/** Words slide up out of a mask, staggered. `dim` lists word indexes rendered at lower opacity. */
export default function SplitText({
  text,
  as: Tag = "span",
  delay = 0,
  stagger = 0.09,
  dim = [],
  className,
  inView = false,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3";
  delay?: number;
  stagger?: number;
  dim?: number[];
  className?: string;
  inView?: boolean;
}) {
  const Comp = motion[Tag];
  const target = inView ? { whileInView: "show", viewport: { once: true, margin: "-60px" } } : { animate: "show" };

  return (
    <Comp
      className={className}
      initial="hidden"
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      {...target}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block ${dim.includes(i) ? "opacity-45" : ""}`}
            variants={{
              hidden: { y: "110%", opacity: 0, filter: "blur(6px)" },
              show: {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < text.split(" ").length - 1 && " "}
        </span>
      ))}
    </Comp>
  );
}
