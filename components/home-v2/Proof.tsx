import Reveal from "@/components/fx/Reveal";
import { Section } from "@/components/ui";
import { testimonials } from "@/lib/site";
import SectionHead from "./SectionHead";

// The guest's own first sentence is the pull-quote; the full review opens on request.
function firstSentence(quote: string) {
  return quote.split(/(?<=[.!?])\s+/)[0];
}

export default function Proof() {
  return (
    <Section>
      <SectionHead center eyebrow="Testimonials" title="What guests say" />
      <ul className="mt-16 grid gap-x-20 gap-y-14 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <li key={t.name}>
            <Reveal delay={(i % 2) * 0.12}>
              <figure className="border-t border-white/10 pt-8">
                <blockquote className="font-display text-3xl leading-snug sm:text-4xl">
                  “{firstSentence(t.quote)}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-display text-2xl text-gold">{t.name}</span>
                  <span className="block text-sm text-white/50">{t.role}</span>
                </figcaption>
                <details className="mt-5">
                  <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.22em] text-gold [&::-webkit-details-marker]:hidden">
                    Read the full review
                  </summary>
                  <p className="mt-4 leading-relaxed text-white/65">{t.quote}</p>
                </details>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
