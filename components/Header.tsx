"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink/95 text-ivory backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
        <Link href="/" aria-label="Raas by Vrindavan home" onClick={() => setOpen(false)}>
          <Image src="/images/Raas-logo.png" alt="Raas by Vrindavan" width={96} height={57} priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className="border border-gold px-5 py-2 text-sm uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Book Now
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {[...nav, { href: "/contact-us", label: "Book Now" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-sm uppercase tracking-[0.18em] ${
                    pathname === item.href ? "text-gold" : "text-white/85"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
