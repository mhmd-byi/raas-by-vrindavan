export default function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap">
          <span className="px-8">{t}</span>
          <span className="text-gold">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <p className="sr-only">{items.join(", ")}</p>
      <div className="marquee flex shrink-0">
        {row}
        {row}
      </div>
      <div className="marquee flex shrink-0" aria-hidden>
        {row}
        {row}
      </div>
    </div>
  );
}
