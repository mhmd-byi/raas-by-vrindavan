import type { Metadata } from "next";
import { CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
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
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((r) => (
            <article key={r.slug} id={r.slug}>
              <Photo src={r.image} alt={r.alt} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
              <h2 className="mt-5 text-3xl">{r.name}</h2>
              <p className="mt-2 opacity-80">{r.blurb}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
