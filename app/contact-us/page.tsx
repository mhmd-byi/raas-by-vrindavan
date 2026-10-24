import type { Metadata } from "next";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/fx/Reveal";
import { ButtonLink, Heading, PageHero, Section } from "@/components/ui";
import { img, map, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us & Book Now",
  description: "Enquire about weddings, events, rooms and banquets at Raas by Vrindavan, Kanadiya Road, Indore. Call +91 98260 37001.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Book Now" title="Contact Us" image={img.entrance} alt="Resort entrance at night" />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Heading eyebrow="Get in touch" title="Let's plan your occasion" />
            <address className="mt-8 space-y-1 not-italic">
              {site.address.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </address>
            <ul className="mt-6 space-y-2">
              <li>
                <a href={site.phoneHref} className="text-gold underline underline-offset-4">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-gold underline underline-offset-4">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl">Enquire Now</h2>
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Heading center eyebrow="Location" title="Find us on the map">
          {site.address.join(", ")}.
        </Heading>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-surface-2 lg:aspect-auto lg:h-full lg:min-h-[460px]">
              <iframe
                src={map.embed}
                title="Map showing the location of Raas by Vrindavan, Kanadiya Road, Indore"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col items-center gap-6 border border-white/10 bg-surface-2 p-8 text-center">
              <h3 className="text-3xl">Scan for directions</h3>
              <div className="rounded-sm bg-white p-3">
                <Image src={map.qr} alt="QR code that opens Raas by Vrindavan in Google Maps" width={200} height={200} unoptimized />
              </div>
              <p className="max-w-xs text-sm text-white/60">
                Point your phone camera at the code to open our location in Google Maps.
              </p>
              <div className="mt-auto flex flex-wrap justify-center gap-3">
                <ButtonLink href={map.directionsUrl}>Get directions</ButtonLink>
                <ButtonLink href={map.placeUrl} variant="outline">
                  Open in Maps
                </ButtonLink>
              </div>
              <a href={map.qr} download="raas-by-vrindavan-location-qr.svg" className="text-xs uppercase tracking-[0.22em] text-gold underline underline-offset-4">
                Download QR code
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
