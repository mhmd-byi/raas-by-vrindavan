import Link from "next/link";
import HeroBackdrop from "@/components/fx/HeroBackdrop";
import Reveal from "@/components/fx/Reveal";
import SplitText from "@/components/fx/SplitText";
import { img } from "@/lib/site";

// "Choose your path": the three reasons people visit, each going where they need to.
const paths = [
  { label: "Weddings & events", href: "/banquets" },
  { label: "Corporate events", href: "/contact-us?occasion=Corporate%20event" },
  { label: "Stays", href: "/rooms" },
];

export default function HeroV2() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <HeroBackdrop src={img.poolNight} alt="The Raas by Vrindavan poolside entrance glowing at night" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/25" />

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-28 pt-40 lg:px-10 lg:pb-24">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Indore · Weddings · Events · Stays</p>
        </Reveal>

        <h1 className="text-[56px] leading-[0.95] text-white sm:text-[96px] lg:text-[112px]">
          <span className="block">
            <SplitText text="Where memories" delay={0.4} />
          </span>
          <span className="block">
            <SplitText text="are made in" delay={0.75} dim={[0, 1]} />
          </span>
          <span className="block italic text-gold">
            <SplitText text="royal splendour" delay={1.05} />
          </span>
        </h1>

        <Reveal delay={1.4} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            <Link
              href="/contact-us"
              className="rounded-full bg-gold px-9 py-4 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-white"
            >
              Enquire Now
            </Link>
            <Link
              href="/property"
              className="text-[13px] uppercase tracking-[0.22em] text-white/80 underline-offset-8 hover:text-gold hover:underline"
            >
              Explore the property
            </Link>
          </div>

          <div className="glass mt-10 flex max-w-full flex-col gap-4 rounded-2xl p-4 sm:inline-flex sm:flex-row sm:items-center sm:gap-5 sm:py-3 sm:pl-6 sm:pr-3">
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">I&apos;m planning</span>
            <div className="flex flex-wrap gap-2">
              {paths.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="rounded-full border border-white/25 px-5 py-2.5 text-sm transition-colors hover:border-gold hover:bg-gold hover:text-ink"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
