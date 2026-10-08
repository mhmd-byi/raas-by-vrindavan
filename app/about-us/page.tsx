import type { Metadata } from "next";
import { CtaBand, Heading, PageHero, Photo, Section } from "@/components/ui";
import { img, pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Raas by Vrindavan treats hospitality as an art form, guided by mindfulness in everything we create.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="About Us" image={img.poolCourtyard} alt="Poolside courtyard at night" />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Heading eyebrow="Hospitality as an art" title="Mindfulness in everything we create">
            For us, hospitality is an art form that we work to keep perfecting. Mindfulness is our
            guiding principle, and it shapes every space and every service, with the aim of creating
            memorable experiences for you and your loved ones, from family outings to grand
            celebrations.
          </Heading>
          <Photo src={img.lobby} alt="Lobby lounge" className="aspect-[4/3]" />
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-gold/60 pt-6">
              <h2 className="text-3xl text-gold">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-white/75">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
