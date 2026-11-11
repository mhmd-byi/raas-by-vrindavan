import Reveal from "@/components/fx/Reveal";
import { rooms } from "@/lib/site";

const stats = [
  { value: "130+", label: "Rooms and suites" },
  { value: String(rooms.length), label: "Room categories" },
];

/** At-a-glance facts as glass cards that straddle the bottom edge of the hero. Add more as the client confirms figures. */
export default function FactsBand() {
  return (
    <section className="relative z-10 -mt-14 px-5 lg:px-10">
      <ul className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 lg:gap-6">
        {stats.map((s, i) => (
          <li key={s.label} className="glass rounded-2xl px-4 py-8 text-center lg:py-10">
            <Reveal delay={i * 0.12}>
              <p className="font-display text-5xl text-gold sm:text-6xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70">{s.label}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
