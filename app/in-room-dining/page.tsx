import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/fx/Reveal";
import Tilt from "@/components/fx/Tilt";
import { ButtonLink, CtaBand, Heading, PageHero, Section } from "@/components/ui";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "In-Room Dining",
  description:
    "Enjoy meals, snacks and drinks served in the comfort of your room at Raas by Vrindavan, Indore. Order through reception or WhatsApp.",
};

const steps = [
  { title: "Ask", text: "Request the in-room dining menu from reception when you check in, or message us beforehand." },
  { title: "Order", text: `Call ${site.phones.map((p) => p.number).join(" / ")} or send us a WhatsApp message with what you would like.` },
  { title: "Enjoy", text: "Your order is brought to your room, so you can eat in comfort at your own pace." },
];

const dishes = [
  { src: img.diningSpread, alt: "A spread of wraps, paneer, snacks and a brownie sundae", className: "lg:row-span-2" },
  { src: img.diningDrinks, alt: "A red and a green mocktail", className: "lg:row-span-2" },
  { src: img.diningPaneer, alt: "Grilled paneer tikka with noodles", className: "" },
  { src: img.diningBrownie, alt: "Brownie with ice cream and chocolate sauce", className: "" },
];

export default function InRoomDiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Dine in comfort"
        title="In-Room Dining"
        image="/images/suite-1.jpg"
        alt="Suite bedroom with a slatted timber ceiling"
      />

      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Heading eyebrow="Room service" title="Your table, wherever you stay">
            A quiet breakfast before the wedding, a late bite after the celebrations, or a family
            dinner without leaving your room. Our in-room dining brings meals, snacks and drinks
            straight to your door.
          </Heading>
          <Reveal>
            <Tilt max={5}>
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 sm:aspect-[4/3]">
                <Image
                  src={img.diningWrap}
                  alt="Crisp wraps served with dips on a ceramic plate"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Tilt>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <Heading center eyebrow="How it works" title="Three simple steps" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="h-full">
              <div className="h-full border border-white/10 bg-surface-2 p-8 lg:p-10">
                <span className="font-display text-6xl text-gold/50">0{i + 1}</span>
                <h3 className="mt-6 text-4xl text-gold">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-4">
          <ButtonLink href={site.phoneHref}>Call reception</ButtonLink>
          <ButtonLink href={site.whatsappHref} variant="outline">
            WhatsApp us
          </ButtonLink>
        </Reveal>
      </Section>

      <Section>
        <Heading center eyebrow="From the kitchen" title="Food and drinks, made to order" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {dishes.map((d, i) => (
            <Reveal key={d.src} delay={(i % 4) * 0.08} className={d.className}>
              <div className="relative aspect-[4/5] h-full min-h-64 overflow-hidden bg-surface lg:aspect-auto">
                <Image
                  src={d.src}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-white/50">
          Menu and service hours are available on request. Please ask reception for the latest.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
