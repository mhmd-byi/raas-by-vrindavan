import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Heading, PageHero, Section } from "@/components/ui";
import { img, site } from "@/lib/site";

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
                <a href={site.phoneHref} className="text-maroon underline underline-offset-4">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-maroon underline underline-offset-4">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-maroon underline underline-offset-4">
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
    </>
  );
}
