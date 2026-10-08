import Link from "next/link";
import type { ReactNode } from "react";
import MagneticLink from "@/components/fx/MagneticLink";
import ParallaxImage from "@/components/fx/ParallaxImage";
import Reveal from "@/components/fx/Reveal";
import SplitText from "@/components/fx/SplitText";
import PageHeroFrame from "@/components/fx/PageHeroFrame";

export function PageHero({
  eyebrow,
  title,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <PageHeroFrame image={image} alt={alt}>
      <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      <SplitText as="h1" text={title} delay={0.2} className="mt-3 text-6xl text-white sm:text-8xl" />
    </PageHeroFrame>
  );
}

export function Section({
  children,
  tone = "base",
  className = "",
}: {
  children: ReactNode;
  tone?: "base" | "surface";
  className?: string;
}) {
  const bg = tone === "surface" ? "bg-surface" : "bg-background";
  return (
    <section className={`${bg} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-32">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
        </Reveal>
      )}
      <SplitText as="h2" inView text={title} className="mt-4 text-4xl sm:text-6xl" />
      {children && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-white/65">{children}</p>
        </Reveal>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "outline";
}) {
  const styles =
    variant === "gold"
      ? "bg-gold text-ink hover:bg-white"
      : "border border-white/30 text-white hover:border-gold hover:text-gold";
  return (
    <MagneticLink
      href={href}
      className={`inline-block rounded-full px-9 py-4 text-[13px] uppercase tracking-[0.22em] transition-colors ${styles}`}
    >
      {children}
    </MagneticLink>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold">
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
    </Link>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return <ParallaxImage src={src} alt={alt} sizes={sizes} className={`aspect-[4/3] ${className}`} />;
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon/40 blur-[120px]" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-5 py-28 text-center lg:px-10 lg:py-36">
        <SplitText as="h2" inView text="Planning something unforgettable?" className="max-w-4xl text-5xl sm:text-7xl" />
        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg text-white/65">
            Tell us about your occasion and our team will help you shape it.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <ButtonLink href="/contact-us">Enquire Now</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
