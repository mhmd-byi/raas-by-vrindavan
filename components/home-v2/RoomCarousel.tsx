"use client";

import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextLink } from "@/components/ui";
import type { Room } from "@/lib/site";

const hideScrollbar = "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

/**
 * Swipeable room categories. The track is plain scroll-snap, so momentum and edge resistance are the
 * browser's own. The tabs and arrows scroll the same track, and swiping updates the active tab.
 */
export default function RoomCarousel({ rooms }: { rooms: Room[] }) {
  const track = useRef<HTMLUListElement>(null);
  const tabs = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

  // The slide that is mostly in view is the active one.
  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root, threshold: 0.6 },
    );
    Array.from(root.children).forEach((slide) => io.observe(slide));
    return () => io.disconnect();
  }, []);

  // Keep the active tab in view inside its own row.
  useEffect(() => {
    const row = tabs.current;
    const tab = row?.children[active] as HTMLElement | undefined;
    if (!row || !tab) return;
    row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior });
  }, [active, behavior]);

  function goTo(i: number) {
    const root = track.current;
    const slide = root?.children[i] as HTMLElement | undefined;
    if (!root || !slide) return;
    root.scrollTo({ left: slide.offsetLeft - parseFloat(getComputedStyle(root).paddingLeft), behavior });
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <nav
          ref={tabs}
          aria-label="Room categories"
          className={`relative -mx-5 flex min-w-0 flex-1 gap-2 overflow-x-auto px-5 lg:mx-0 lg:px-0 ${hideScrollbar}`}
        >
          {rooms.map((r, i) => (
            <button
              key={r.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-current={i === active ? "true" : undefined}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition-colors ${
                i === active
                  ? "border-gold bg-gold text-ink"
                  : "border-white/20 text-white/70 hover:border-gold hover:text-gold"
              }`}
            >
              {r.name}
            </button>
          ))}
        </nav>

        <div className="hidden shrink-0 gap-2 md:flex">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => goTo(active + dir)}
              disabled={active + dir < 0 || active + dir >= rooms.length}
              aria-label={dir < 0 ? "Previous room" : "Next room"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-gold hover:text-gold disabled:opacity-30"
            >
              {dir < 0 ? "←" : "→"}
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={track}
        tabIndex={0}
        aria-label="Rooms"
        className={`relative -mx-5 mt-8 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-4 focus-visible:outline-2 focus-visible:outline-gold lg:mx-0 lg:scroll-pl-0 lg:gap-6 lg:px-0 ${hideScrollbar}`}
      >
        {rooms.map((r, i) => (
          <li key={r.slug} data-index={i} className="w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-[62%]">
            <article>
              <div className="relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-[16/10]">
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  sizes="(min-width: 1024px) 62vw, (min-width: 640px) 70vw, 86vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <span className="font-display text-3xl text-gold/60">0{i + 1}</span>
                <h3 className="text-4xl lg:text-5xl">{r.name}</h3>
                <p className="max-w-xl leading-relaxed text-white/65">{r.blurb}</p>
                <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3">
                  <TextLink href={`/rooms#${r.slug}`}>Explore</TextLink>
                  <TextLink href={`/contact-us?room=${r.slug}`}>Enquire about {r.name}</TextLink>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
