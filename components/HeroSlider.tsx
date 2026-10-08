"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-roledescription="carousel" aria-label="Featured" className="relative h-[85svh] min-h-[480px] overflow-hidden bg-ink">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/20" />

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Indore, Madhya Pradesh</p>
        <h1 aria-live="polite" className="mt-3 max-w-3xl text-4xl text-white sm:text-6xl">
          {heroSlides[index].title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact-us" className="bg-gold px-8 py-3 text-sm uppercase tracking-[0.18em] text-ink hover:bg-white">
            Book Now
          </Link>
          <Link href="/gallery" className="border border-white/70 px-8 py-3 text-sm uppercase tracking-[0.18em] text-white hover:bg-white hover:text-ink">
            View Gallery
          </Link>
        </div>
        <div className="mt-8 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1 w-10 transition-colors ${i === index ? "bg-gold" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
