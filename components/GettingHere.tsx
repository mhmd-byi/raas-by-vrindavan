import Reveal from "@/components/fx/Reveal";
import { gettingHere } from "@/lib/site";

export default function GettingHere() {
  return (
    <>
      <ul className="grid gap-6 md:grid-cols-3">
        {gettingHere.map((g, i) => (
          <li key={g.place}>
            <Reveal delay={i * 0.12} className="h-full">
              <div className="flex h-full flex-col gap-3 border border-white/10 bg-surface-2 p-8">
                <h3 className="text-2xl">{g.place}</h3>
                <p className="font-display text-6xl text-gold">{g.distance}</p>
                <p className="text-white/65">About {g.time} by road</p>
                <a
                  href={g.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm uppercase tracking-[0.22em] text-gold underline underline-offset-4"
                >
                  Directions
                </a>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-sm text-white/50">
        Distances are approximate, and drive times vary with traffic.
      </p>
    </>
  );
}
