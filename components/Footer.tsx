import Image from "next/image";
import Link from "next/link";
import { footerNav, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Image src="/images/Raas-logo.png" alt="Raas by Vrindavan" width={120} height={71} />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A splendid destination for marvelous celebrations: weddings, corporate events, poolside
            parties and luxurious stays in Indore.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-gold">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[...nav.slice(1), ...footerNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-gold">Connect with us</h2>
          <address className="mt-4 space-y-1 text-sm not-italic">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="pt-2">
              <a href={site.phoneHref} className="hover:text-gold">
                Call: {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </p>
          </address>
          <p className="mt-4 flex gap-5 text-sm">
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Facebook
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © Raas by Vrindavan. All rights reserved.
      </div>
    </footer>
  );
}
