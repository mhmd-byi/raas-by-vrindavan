import { site } from "@/lib/site";

// A bottom bar on phones (the page gets matching bottom padding in the layout, so it never
// covers content) and two floating pills on larger screens.
export default function FloatingActions() {
  const base =
    "flex h-14 flex-1 items-center justify-center text-sm font-medium sm:h-12 sm:flex-none sm:gap-2 sm:rounded-full sm:px-5 sm:shadow-lg sm:transition-transform sm:hover:scale-105";
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex sm:inset-x-auto sm:bottom-5 sm:right-5 sm:flex-col sm:gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] text-white`}
      >
        WhatsApp
      </a>
      <a href={site.phoneHref} className={`${base} bg-gold text-ink`}>
        Call us
      </a>
    </div>
  );
}
