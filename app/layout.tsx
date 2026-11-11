import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/fx/SmoothScroll";
import FloatingActions from "@/components/FloatingActions";
import { img, map, site } from "@/lib/site";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Raas by Vrindavan | Resort, Banquets & Weddings in Indore",
    template: "%s | Raas by Vrindavan",
  },
  description:
    "Raas by Vrindavan is a luxury resort in Indore for weddings, corporate events and celebrations, with 130+ elegant rooms, royal banquet halls, a poolside party area and in-room dining.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    images: ["/images/AG7_9274.jpg"],
  },
};

// Structured data for search engines. Only facts already published on the site.
// Keep the address in sync with `site.address`.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: site.name,
  url: site.url,
  description: "Resort in Indore for weddings, corporate events and celebrations, with banquet halls, a poolside party area and in-room dining.",
  image: `${site.url}${img.poolNight}`,
  telephone: site.phones.map((p) => p.number),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Californea Citi, Near LNCT Medical College & Sewa Kunj Hospital, Kanadiya Road",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452016",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: map.lat, longitude: map.lng },
  hasMap: map.placeUrl,
  numberOfRooms: { "@type": "QuantitativeValue", minValue: 130 },
  sameAs: [site.instagram.split("?")[0]],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="flex min-h-svh flex-col max-sm:pb-14">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
