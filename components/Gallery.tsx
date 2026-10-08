"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { galleryItems } from "@/lib/site";

// Mixed crops of the same landscape photos give the columns their uneven, masonry rhythm.
const shapes = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/5]", "aspect-[3/2]", "aspect-[3/5]"];

const categories = ["All", ...Array.from(new Set(galleryItems.map((g) => g.cat)))];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const items = galleryItems.filter((g) => cat === "All" || g.cat === cat);
  const current = active !== null ? items[active] : null;

  const open = (i: number) => {
    setActive(i);
    dialog.current?.showModal();
  };
  const step = (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={c === cat}
            onClick={() => setCat(c)}
            className={`rounded-full px-6 py-2.5 text-[13px] uppercase tracking-[0.22em] transition-colors ${
              c === cat ? "bg-gold text-ink" : "border border-white/20 text-white/80 hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-2 gap-3 md:columns-3 lg:gap-4">
        {items.map((g, i) => (
          <li key={g.src} className="mb-3 break-inside-avoid lg:mb-4">
            <button type="button" onClick={() => open(i)} className={`group relative block w-full overflow-hidden bg-surface ${shapes[i % shapes.length]}`}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto w-[min(92vw,1100px)] bg-ink p-0 text-white backdrop:bg-black/80"
      >
        {current && (
          <div className="relative">
            <div className="relative aspect-[3/2] w-full">
              <Image src={current.src} alt={current.alt} fill sizes="92vw" className="object-contain" />
            </div>
            <p className="px-4 py-3 text-sm text-white/80">{current.alt}</p>
            <button type="button" aria-label="Close" onClick={() => dialog.current?.close()} className="absolute right-2 top-2 bg-ink/70 px-3 py-1 text-2xl">
              ×
            </button>
            <button type="button" aria-label="Previous image" onClick={() => step(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/70 px-3 py-2 text-2xl">
              ‹
            </button>
            <button type="button" aria-label="Next image" onClick={() => step(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/70 px-3 py-2 text-2xl">
              ›
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
