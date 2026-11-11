import { site } from "@/lib/site";

// A quiet frosted bar on phones (the page gets matching bottom padding in the layout, so it never
// covers content) and two floating coloured pills on larger screens.
export default function FloatingActions() {
  const base =
    "flex h-14 flex-1 items-center justify-center text-sm font-medium sm:h-12 sm:flex-none sm:gap-2 sm:rounded-full sm:px-5 sm:shadow-lg sm:transition-transform sm:hover:scale-105";
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex max-sm:border-t max-sm:border-white/10 max-sm:bg-ink/75 max-sm:backdrop-blur-xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex-col sm:gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} text-white max-sm:border-r max-sm:border-white/10 sm:bg-[#25D366]`}
      >
        WhatsApp
      </a>
      <a href={site.phoneHref} className={`${base} text-gold sm:bg-gold sm:text-ink`}>
        Call us
      </a>
    </div>
  );
}
