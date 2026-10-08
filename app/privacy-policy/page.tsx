import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Raas by Vrindavan collects and uses personal information.",
};

const sections = [
  {
    title: "Information we collect",
    text: "When you submit an enquiry we collect the details you provide, such as your name, phone number, email address, event date and message. Our hosting provider may also log basic usage data such as IP address, browser type and pages visited.",
  },
  {
    title: "How we use it",
    text: "We use your details only to respond to your enquiry, plan your event or stay, and operate and secure this website.",
  },
  {
    title: "Sharing",
    text: "We do not sell your personal data. We share it only with service providers who help us run the website and handle enquiries, or where required by law.",
  },
  {
    title: "Retention and security",
    text: "We keep enquiry details only as long as needed for the purposes above and take reasonable measures to protect them, though no method of transmission is completely secure.",
  },
  {
    title: "Children",
    text: "This website is not intended for children under 13.",
  },
  {
    title: "Contact",
    text: `Questions about this policy can be sent to ${site.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl">Privacy Policy</h1>
        {sections.map((s) => (
          <div key={s.title} className="mt-8">
            <h2 className="text-3xl">{s.title}</h2>
            <p className="mt-2 leading-relaxed opacity-85">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
