import type { ReactNode } from "react";
import Reveal from "@/components/fx/Reveal";

/** Section heading with a plain fade-in, quieter than the word-by-word reveal on the current home page. */
export default function SectionHead({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-4xl sm:text-6xl">{title}</h2>
      </Reveal>
      {children && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-white/65">{children}</p>
        </Reveal>
      )}
    </div>
  );
}
