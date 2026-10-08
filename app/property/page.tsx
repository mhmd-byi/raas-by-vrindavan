import type { Metadata } from "next";
import { ButtonLink, CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property",
  description:
    "Explore the Raas by Vrindavan property in Indore: spacious rooms, royal banquets, a multi-cuisine restaurant and a poolside party area.",
};

const amenities = [
  { title: "Spacious Rooms", text: "Suites and rooms with Turkish bath-inspired showers and luxuriously snug furniture.", href: "/rooms", image: img.roomMirror, alt: "Deluxe room" },
  { title: "Royal Banquets", text: "Palatial halls with high ceilings, chandeliers and a sophisticated sound system.", href: "/banquets", image: img.banquetStairs, alt: "Banquet hall" },
  { title: "Multi-cuisine Restaurant", text: "Menus from chefs who have refined their craft over decades.", href: "/restaurants", image: img.foodVilla, alt: "Vrindavan Food Villa" },
  { title: "Pool-side Party Area", text: "An open-air setting for celebrations under the stars.", href: "/banquets", image: img.poolCourtyard, alt: "Poolside courtyard" },
];

export default function PropertyPage() {
  return (
    <>
      <PageHero eyebrow="Raas by Vrindavan" title="The Property" image={img.poolNight} alt="Poolside entrance at night" />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading eyebrow="An architectural marvel" title="Refined luxuries, fine dining, one address">
            Every momentous day necessitates an indelible celebration, and Raas by Vrindavan is a
            destination designed for exactly that. We have customised everything to create an
            unmatched experience for you and your guests.
          </Heading>
          <Photo src={img.entrance} alt="Resort entrance" className="aspect-[4/3]" />
        </div>
      </Section>

      <Section tone="sand">
        <Heading center eyebrow="Our amenities" title="Everything for your occasion" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {amenities.map((a) => (
            <article key={a.title} className="bg-ivory">
              <Photo src={a.image} alt={a.alt} sizes="(min-width: 640px) 50vw, 100vw" />
              <div className="p-6">
                <h3 className="text-3xl">{a.title}</h3>
                <p className="mt-2 opacity-80">{a.text}</p>
                <div className="mt-5">
                  <ButtonLink href={a.href} variant="outline">
                    Details
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
