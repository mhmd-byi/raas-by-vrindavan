import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
    <section className="relative flex h-[46svh] min-h-[320px] items-end overflow-hidden bg-ink">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-ink/20" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
        <h1 className="mt-2 text-5xl text-white sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "sand" | "dark";
  className?: string;
}) {
  const bg = { light: "bg-ivory", sand: "bg-sand", dark: "bg-ink text-white" }[tone];
  return (
    <section className={`${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">{children}</div>
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
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-xs uppercase tracking-[0.35em] text-gold-dark">{eyebrow}</p>}
      <h2 className="mt-3 text-4xl sm:text-5xl">{title}</h2>
      {children && <p className="mt-5 leading-relaxed opacity-80">{children}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "maroon",
}: {
  href: string;
  children: ReactNode;
  variant?: "maroon" | "gold" | "outline";
}) {
  const styles = {
    maroon: "bg-maroon text-white hover:bg-maroon-light",
    gold: "bg-gold text-ink hover:bg-white",
    outline: "border border-maroon text-maroon hover:bg-maroon hover:text-white",
  }[variant];
  return (
    <Link href={href} className={`inline-block px-8 py-3 text-sm uppercase tracking-[0.18em] transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

export function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative aspect-[3/2] overflow-hidden bg-sand ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-maroon text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-14 text-center lg:px-8">
        <h2 className="text-4xl sm:text-5xl">Planning something unforgettable?</h2>
        <p className="max-w-xl text-white/80">
          Tell us about your occasion and our team will help you shape it.
        </p>
        <ButtonLink href="/contact-us" variant="gold">
          Enquire Now
        </ButtonLink>
      </div>
    </section>
  );
}
