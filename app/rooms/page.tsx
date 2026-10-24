import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import { ButtonLink, CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { rooms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Suite, premium, super deluxe, deluxe, executive and club rooms at Raas by Vrindavan, Indore.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Luxurious stay" title="Rooms & Suites" image={rooms[0].image} alt={rooms[0].alt} />

      <Section>
        <Heading center eyebrow="Stay with us" title="Six ways to stay">
          From suites with their own living areas to cosy club rooms, every room is designed for a
          comfortable stay, with the pool and banquets steps away.
        </Heading>
      </Section>

      {rooms.map((r, i) => (
        <Section key={r.slug} tone={i % 2 ? "surface" : "base"} className="scroll-mt-20">
          <div id={r.slug} className="grid scroll-mt-28 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={`space-y-6 lg:sticky lg:top-32 ${i % 2 ? "lg:order-2" : ""}`}>
              <Reveal>
                <span className="font-display text-7xl text-gold/50">0{i + 1}</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-5xl sm:text-6xl">{r.name}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="max-w-md text-lg leading-relaxed text-white/65">{r.blurb}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <ButtonLink href="/contact-us" variant="outline">
                  Enquire about {r.name}
                </ButtonLink>
              </Reveal>
            </div>

            <div className="space-y-4">
              <Photo src={r.gallery[0].src} alt={r.gallery[0].alt} sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="grid grid-cols-2 gap-4">
                {r.gallery.slice(1).map((g) => (
                  <Reveal key={g.src}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                      <Image
                        src={g.src}
                        alt={g.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-[1200ms] hover:scale-110"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Section>
      ))}

      <CtaBand />
    </>
  );
}
