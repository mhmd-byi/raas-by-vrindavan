import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import GettingHere from "@/components/GettingHere";
import ScrollWords from "@/components/fx/ScrollWords";
import Reveal from "@/components/fx/Reveal";
import Chapter from "@/components/home-v2/Chapter";
import FactsBand from "@/components/home-v2/FactsBand";
import HeroV2 from "@/components/home-v2/HeroV2";
import Proof from "@/components/home-v2/Proof";
import RoomCarousel from "@/components/home-v2/RoomCarousel";
import SectionHead from "@/components/home-v2/SectionHead";
import { Section, TextLink } from "@/components/ui";
import { img, map, rooms, site } from "@/lib/site";

// A draft for comparison with the current home page. Not in the menu or sitemap, and hidden from search.
export const metadata: Metadata = {
  title: "Home v2 (draft)",
  robots: { index: false, follow: false },
};

const statement =
  "Every momentous day deserves an indelible celebration. At Raas by Vrindavan we tailor each occasion to your vision, from Turkish bath-inspired showers to palatial banquets and an otherworldly poolside.";

export default function HomeV2() {
  return (
    <>
      <HeroV2 />
      <FactsBand />

      <Section>
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-gold">A splendid destination</p>
        </Reveal>
        <ScrollWords text={statement} className="max-w-5xl font-display text-4xl leading-[1.15] sm:text-6xl lg:text-7xl" />
        <Reveal className="mt-12">
          <TextLink href="/property">Discover the property</TextLink>
        </Reveal>
      </Section>

      <Chapter
        eyebrow="Banquets"
        title="Raas Mahal"
        image={img.mahal1}
        alt="Raas Mahal banquet hall beneath a crystal chandelier"
        href="/banquets"
        cta="Explore banquets"
      >
        A grand hall beneath a crystal chandelier, ready for weddings, receptions and corporate gatherings.
      </Chapter>

      <Chapter
        eyebrow="Outdoors"
        title="Lawn and poolside"
        image={img.poolDecor}
        alt="Poolside decorated for an evening celebration"
        href="/banquets"
        cta="Explore the venues"
      >
        An open lawn with a stage and a decked poolside, for ceremonies and celebrations under the open sky.
      </Chapter>

      <Chapter
        eyebrow="In-room dining"
        title="Dining, brought to you"
        image={img.diningSpread}
        alt="A spread of snacks, paneer and a brownie sundae"
        href="/in-room-dining"
        cta="Explore in-room dining"
      >
        Meals, snacks and drinks served in the comfort of your room.
      </Chapter>

      <Section tone="surface">
        <SectionHead eyebrow="Rooms" title="Seven ways to stay">
          With 130+ rooms across seven categories, from suites with their own living areas to well-appointed
          standard rooms.
        </SectionHead>
        <div className="mt-12">
          <RoomCarousel rooms={rooms} />
        </div>
      </Section>

      <Proof />

      <Section tone="surface" className="relative overflow-hidden">
        {/* Soft brand-coloured glows: the glass form card needs something behind it to blur. */}
        <div aria-hidden className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-maroon/60 blur-[110px]" />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-1/3 h-[320px] w-[320px] rounded-full bg-gold/15 blur-[110px]" />

        <div className="relative grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead eyebrow="Enquire" title="Plan your occasion">
              Tell us what you are planning and our team will help you shape it.
            </SectionHead>
            <address className="mt-8 space-y-1 not-italic">
              {site.address.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
            <ul className="mt-6 space-y-2">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-gold underline underline-offset-4">
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <TextLink href={map.directionsUrl}>Get directions</TextLink>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-10">
            <EnquiryForm compact />
            <p className="mt-4 text-xs text-white/60">
              We&apos;ll call or message you about this enquiry. Read our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="relative mt-20">
          <h3 className="mb-8 text-center text-4xl">Getting here</h3>
          <GettingHere />
        </div>
      </Section>
    </>
  );
}
