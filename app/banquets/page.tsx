import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import Tilt from "@/components/fx/Tilt";
import { CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Banquets & Lawns",
  description:
    "Raas Mahal, our signature banquet hall, plus lawns and a poolside party area in Indore for weddings, corporate events and social gatherings.",
};

const features = [
  "Natural light by day, warm illumination by evening",
  "High ceilings with chandeliers",
  "A sophisticated sound system",
  "Space to accommodate all your guests",
  "Décor and ambience that make every moment special",
  "Poolside and lawn areas for open-air celebrations",
];

const venues = [
  { title: "Wedding Lawn", text: "An open lawn with a stage, for ceremonies under the sky.", image: img.lawn, alt: "Wedding lawn with a stage" },
  { title: "Poolside", text: "A decked poolside that comes alive for evening parties.", image: img.poolDecor, alt: "Poolside decorated with canopy drapes" },
  { title: "Mandap & Décor", text: "Entrances and stages styled to your theme.", image: img.mandap, alt: "Wedding mandap with elephant statues" },
];

export default function BanquetsPage() {
  return (
    <>
      <PageHero eyebrow="Celebrate" title="Banquets & Lawns" image={img.mahal1} alt="Raas Mahal banquet hall with a crystal chandelier" />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Heading eyebrow="Our signature hall" title="Raas Mahal">
            A grand banquet hall beneath a crystal chandelier and a chequered ceiling, with warm
            panelled walls and a red-carpeted floor, ready for weddings, receptions and corporate
            gatherings. Speak to our team for availability, capacity and customised arrangements.
          </Heading>
          <Photo src={img.mahal1} alt="Raas Mahal banquet hall" />
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Photo src={img.mahal2} alt="Raas Mahal with tables set on red carpet" sizes="(min-width: 768px) 50vw, 100vw" />
          <Photo src={img.mahal3} alt="Raas Mahal tables beneath the chandelier" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Royal banquets" title="Spectacular spaces for grand celebrations">
              Weddings, corporate events and social gatherings find an elegant home here.
            </Heading>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <Photo src={img.banquetStairs} alt="Banquet hall and staircase" />
        </div>
      </Section>

      <Section>
        <Heading center eyebrow="More venues" title="Lawns, poolside and décor" />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {venues.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1} className="h-full">
              <Tilt className="h-full" max={6}>
                <article className="h-full border border-white/10 bg-surface">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={v.image} alt={v.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="space-y-2 p-7">
                    <h3 className="text-3xl">{v.title}</h3>
                    <p className="text-white/65">{v.text}</p>
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
