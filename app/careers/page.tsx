import type { Metadata } from "next";
import { Heading, PageHero, Section } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Raas by Vrindavan hospitality team in Indore.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Join us" title="Careers" image={img.corridor} alt="Guest-room corridor" />
      <Section>
        <Heading eyebrow="Work with us" title="Be part of the Raas family">
          We are always glad to hear from people who care about hospitality. Send your resume to{" "}
          <a href={`mailto:${site.email}?subject=Job%20application`} className="text-gold underline underline-offset-4">
            {site.email}
          </a>{" "}
          or call {site.phone}.
        </Heading>
      </Section>
    </>
  );
}
