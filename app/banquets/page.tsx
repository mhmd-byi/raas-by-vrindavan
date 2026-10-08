import type { Metadata } from "next";
import { CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Banquets & Lawns",
  description:
    "Royal banquet halls, lawns and a poolside party area in Indore for weddings, corporate events and social gatherings.",
};

const features = [
  "Natural light by day, warm illumination by evening",
  "High ceilings with chandeliers",
  "A sophisticated sound system",
  "Space to accommodate all your guests",
  "Décor and ambience that make every moment special",
  "Poolside and lawn areas for open-air celebrations",
];

export default function BanquetsPage() {
  return (
    <>
      <PageHero eyebrow="Celebrate" title="Banquets & Lawns" image={img.banquet} alt="Banquet hall with chandeliers" />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Royal banquets" title="Spectacular halls for fine dining and grand celebrations">
              Weddings, corporate events and social gatherings find an elegant home here. Speak to
              our team for hall availability, capacities and customised arrangements.
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
          <Photo src={img.banquetStairs} alt="Banquet hall and staircase" className="aspect-[4/3]" />
        </div>
      </Section>

      <Section tone="surface">
        <Heading center eyebrow="Under the stars" title="The poolside party area" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Photo src={img.poolNight} alt="Poolside at night" sizes="(min-width: 768px) 50vw, 100vw" />
          <Photo src={img.poolCourtyard} alt="Poolside courtyard" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
