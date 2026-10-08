import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import Tilt from "@/components/fx/Tilt";
import { CtaBand, Heading, PageHero, Section } from "@/components/ui";
import { img, rooms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Presidential, family, deluxe, executive and club house rooms at Raas by Vrindavan, Indore, with Turkish bath-inspired showers.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero eyebrow="Luxurious stay" title="Rooms & Suites" image={img.suite} alt="Suite with padded headboard" />

      <Section>
        <Heading center eyebrow="Stay with us" title="Rooms designed around you">
          Interiors with luxuriously snug furniture, Turkish bath-inspired showers and the pool,
          banquets and restaurant steps away.
        </Heading>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 0.1} className="h-full">
              <Tilt className="h-full" max={6}>
                <article id={r.slug} className="h-full scroll-mt-28 border border-white/10 bg-surface">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2 p-7">
                    <h2 className="text-3xl">{r.name}</h2>
                    <p className="text-white/65">{r.blurb}</p>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
