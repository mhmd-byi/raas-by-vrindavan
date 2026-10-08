import { site } from "@/lib/site";

export default function FloatingActions() {
  const base =
    "flex h-12 items-center gap-2 rounded-full px-5 text-sm font-medium shadow-lg transition-transform hover:scale-105";
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
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
