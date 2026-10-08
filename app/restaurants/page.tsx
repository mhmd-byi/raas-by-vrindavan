import type { Metadata } from "next";
import { CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Restaurants",
  description:
    "Vrindavan Food Villa, the multi-cuisine restaurant at Raas by Vrindavan, Indore, and in-house catering for every event.",
};

export default function RestaurantsPage() {
  return (
    <>
      <PageHero eyebrow="Dine" title="Restaurants" image={img.foodVilla} alt="Vrindavan Food Villa at night" />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading eyebrow="Vrindavan Food Villa" title="A multi-cuisine restaurant in Indore">
            Our chefs have refined their recipes over decades, and every dish is presented as a
            small work of art. The same kitchen caters your wedding, corporate event or celebration.
          </Heading>
          <Photo src={img.foodVilla} alt="Open-air seating at Vrindavan Food Villa" className="aspect-[4/3]" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
