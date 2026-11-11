import type { ReactNode } from "react";
import ParallaxImage from "@/components/fx/ParallaxImage";
import Reveal from "@/components/fx/Reveal";
import { TextLink } from "@/components/ui";

/** One idea per screen: a full-width photo, a headline, one line and one link. */
export default function Chapter({
  eyebrow,
  title,
  children,
  href,
  cta,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  href: string;
  cta: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[80svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <ParallaxImage src={image} alt={alt} strength={6} sizes="100vw" className="h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-40 lg:px-10 lg:pb-24">
        {/* Dark-tinted glass keeps the text legible over any photo while the photo still shows through. */}
        <div className="glass max-w-xl rounded-2xl bg-ink/40 p-7 sm:p-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl sm:text-5xl">{title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-white/85">{children}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-7">
            <TextLink href={href}>{cta}</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
