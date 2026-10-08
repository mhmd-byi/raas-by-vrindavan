import Hero from "@/components/home/Hero";
import OfferingsRail from "@/components/home/OfferingsRail";
import RoomStack from "@/components/home/RoomStack";
import Marquee from "@/components/fx/Marquee";
import Reveal from "@/components/fx/Reveal";
import ScrollWords from "@/components/fx/ScrollWords";
import Tilt from "@/components/fx/Tilt";
import { ButtonLink, CtaBand, Heading, Section } from "@/components/ui";
import { img, pillars, rooms, testimonials } from "@/lib/site";

const offerings = [
  { title: "Luxurious Banquet Halls", blurb: "Three palatial halls for weddings, receptions and corporate evenings.", href: "/banquets", image: img.banquet, alt: "Banquet hall with chandeliers" },
  { title: "Spacious Rooms", blurb: "Distinctly designed rooms and suites with Turkish bath-inspired showers.", href: "/rooms", image: img.roomMirror, alt: "Deluxe guest room" },
  { title: "Poolside Pavilion", blurb: "An open-air stage for celebrations under the night sky.", href: "/property", image: img.poolCourtyard, alt: "Poolside courtyard at night" },
  { title: "Fine Dining", blurb: "Multi-cuisine plates from chefs who have refined their craft for decades.", href: "/restaurants", image: img.foodVilla, alt: "Vrindavan Food Villa at night" },
];

const statement =
  "Every momentous day deserves an indelible celebration. At Raas by Vrindavan we tailor each occasion to your vision, from Turkish bath-inspired showers to palatial banquets and an otherworldly poolside.";

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee
        className="border-y border-white/10 bg-ink py-6 font-display text-3xl italic text-white/80 sm:text-5xl"
        items={["Weddings", "Corporate Events", "Poolside Celebrations", "Royal Banquets", "Luxurious Stays"]}
      />

      <Section>
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-gold">A splendid destination</p>
        </Reveal>
        <ScrollWords text={statement} className="max-w-5xl font-display text-4xl leading-[1.15] sm:text-6xl lg:text-7xl" />
        <Reveal className="mt-12">
          <ButtonLink href="/property" variant="outline">
            Discover the property
          </ButtonLink>
        </Reveal>
      </Section>

      <OfferingsRail items={offerings} />

      <section className="bg-background pt-24 lg:pt-36">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Heading eyebrow="Luxurious stay" title="Rooms made for rest">
            Elegant interiors and modern architecture, designed for comfortable stays during weddings,
            meetings, events and getaways.
          </Heading>
        </div>
        <div className="mt-16">
          <RoomStack rooms={rooms.slice(0, 4)} />
        </div>
      </section>

      <Section tone="surface">
        <Heading center eyebrow="Why Raas" title="A legacy of luxury, rooted in trust" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12} className="h-full">
              <Tilt className="h-full">
                <div className="h-full border border-white/10 bg-surface-2 p-8 lg:p-10">
                  <span className="font-display text-6xl text-gold/50">0{i + 1}</span>
                  <h3 className="mt-6 text-4xl text-gold">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-white/65">{p.text}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Heading center eyebrow="Testimonials" title="What people speak about us" />
        <ul className="-mx-5 mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0">
          {testimonials.map((t, i) => (
            <li key={t.name} className="w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-auto">
              <Reveal delay={(i % 2) * 0.12} className="h-full">
                <Tilt className="h-full" max={5}>
                  <figure className="flex h-full flex-col justify-between border border-white/10 bg-surface p-8 lg:p-10">
                    <div>
                      <span className="font-display text-7xl leading-none text-gold/60">“</span>
                      <blockquote className="-mt-4 leading-relaxed text-white/80">{t.quote}</blockquote>
                    </div>
                    <figcaption className="mt-8">
                      <span className="font-display text-2xl text-gold">{t.name}</span>
                      <span className="block text-sm text-white/50">{t.role}</span>
                    </figcaption>
                  </figure>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
