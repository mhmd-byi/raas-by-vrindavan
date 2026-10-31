import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import Tilt from "@/components/fx/Tilt";
import { CtaBand, Heading, PageHero, Photo, Section, TextLink } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property",
  description:
    "Explore the Raas by Vrindavan property in Indore: spacious rooms, royal banquets, in-room dining and a poolside party area.",
};

const amenities = [
  { title: "Spacious Rooms", text: "130+ suites and rooms with Turkish bath-inspired showers and luxuriously snug furniture.", href: "/rooms", image: "/images/deluxe-villa-1.jpg", alt: "Deluxe room" },
  { title: "Royal Banquets", text: "Raas Mahal and more: palatial halls with high ceilings, chandeliers and a sophisticated sound system.", href: "/banquets", image: img.mahal1, alt: "Raas Mahal banquet hall" },
  { title: "In-Room Dining", text: "Meals, snacks and drinks served in the comfort of your room.", href: "/in-room-dining", image: img.diningSpread, alt: "A spread of snacks and desserts" },
  { title: "Pool-side Party Area", text: "An open-air setting for celebrations under the stars.", href: "/banquets", image: img.poolDecor, alt: "Poolside decorated for an event" },
];

export default function PropertyPage() {
  return (
    <>
      <PageHero eyebrow="Raas by Vrindavan" title="The Property" image={img.poolNight} alt="Poolside entrance at night" />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Heading eyebrow="An architectural marvel" title="Refined luxuries, grand celebrations, one address">
            Every momentous day necessitates an indelible celebration, and Raas by Vrindavan is a
            destination designed for exactly that. We have customised everything to create an
            unmatched experience for you and your guests.
          </Heading>
          <Photo src={img.entrance} alt="Resort entrance" />
        </div>
      </Section>

      <Section tone="surface">
        <Heading center eyebrow="Our amenities" title="Everything for your occasion" />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.12} className="h-full">
              <Tilt className="h-full" max={6}>
                <article className="h-full border border-white/10 bg-surface-2">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={a.image} alt={a.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="space-y-3 p-7">
                    <h3 className="text-3xl">{a.title}</h3>
                    <p className="text-white/65">{a.text}</p>
                    <TextLink href={a.href}>Details</TextLink>
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
