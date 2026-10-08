import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import { ButtonLink, CtaBand, Heading, Photo, Section } from "@/components/ui";
import { img, pillars, rooms, testimonials } from "@/lib/site";

const offerings = [
  { title: "Luxurious Banquet Halls", href: "/banquets", image: img.banquet, alt: "Banquet hall with chandeliers" },
  { title: "Spacious, Distinctly Designed Rooms", href: "/rooms", image: img.roomMirror, alt: "Deluxe guest room" },
  { title: "Poolside Pavilion", href: "/property", image: img.poolCourtyard, alt: "Poolside courtyard at night" },
  { title: "Gallery", href: "/gallery", image: img.lobby, alt: "Lobby lounge with chandeliers" },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading eyebrow="Welcome to Raas" title="A splendid destination for marvelous celebrations">
              Every momentous day in your life deserves an indelible celebration. At Raas by Vrindavan
              we tailor every occasion to your vision, from Turkish bath-inspired showers to palatial
              banquets and an otherworldly poolside.
            </Heading>
            <div className="mt-8">
              <ButtonLink href="/property">Discover the property</ButtonLink>
            </div>
          </div>
          <Photo src={img.entrance} alt="Resort entrance walkway at night" className="aspect-[4/3]" />
        </div>
      </Section>

      <Section tone="sand">
        <Heading center eyebrow="What we offer" title="Our Offerings" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((o) => (
            <Link key={o.title} href={o.href} className="group relative block aspect-[3/4] overflow-hidden bg-ink">
              <Image
                src={o.image}
                alt={o.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 text-2xl text-white">{o.title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo src={rooms[0].image} alt={rooms[0].alt} className="order-2 aspect-[4/3] lg:order-1" />
          <div className="order-1 lg:order-2">
            <Heading eyebrow="Luxurious stay" title="Rooms made for rest">
              Elegant interiors and modern architecture come together in rooms and suites designed
              for comfortable stays during weddings, meetings, events and getaways.
            </Heading>
            <div className="mt-8">
              <ButtonLink href="/rooms">Explore our rooms</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <Heading center eyebrow="Why Raas" title="A legacy of luxury, rooted in trust" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-gold/60 pt-6">
              <h3 className="text-3xl text-gold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-white/75">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <Heading center eyebrow="Testimonials" title="What people speak about us" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-ivory p-8">
              <blockquote className="leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-display text-xl text-maroon">{t.name}</span>
                <span className="block text-foreground/60">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
