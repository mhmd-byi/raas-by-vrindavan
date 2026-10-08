import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import { Heading, PageHero, Section } from "@/components/ui";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of the rooms, lobby, banquet halls, poolside and dining at Raas by Vrindavan, Indore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="A glimpse" title="Gallery" image={img.lobby} alt="Lobby lounge with chandeliers" />
      <Section>
        <Heading center title="Moments at Raas" />
        <div className="mt-10">
          <Gallery />
        </div>
      </Section>
    </>
  );
}
