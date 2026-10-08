"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

const links = [...nav.filter((n) => n.href !== "/"), { href: "/contact-us", label: "Book Now" }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled && !open ? "bg-ink/75 py-1 backdrop-blur-xl" : "bg-transparent py-3"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 lg:px-10">
          <Link href="/" aria-label="Raas by Vrindavan home" onClick={() => setOpen(false)} className="relative z-50">
            <Image src="/images/Raas-logo.png" alt="Raas by Vrindavan" width={88} height={52} priority />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {nav
              .filter((n) => n.href !== "/")
              .map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative py-1 text-[13px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-gold"
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            <Link
              href="/contact-us"
              className="rounded-full border border-gold/70 px-6 py-2.5 text-[13px] uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Book Now
            </Link>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-7">
              <span className={`absolute left-0 h-px w-full bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-full bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-full bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 lg:hidden"
          >
            <ul className="space-y-1">
              {links.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block font-display text-5xl leading-tight ${pathname === item.href ? "text-gold" : "text-white"}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/50">
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
