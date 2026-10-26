import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Vercel deploy ayyaka, mee real domain ikkada pettandi
const SITE_URL = "https://www.gkhomeinteriors.in";
const SITE_NAME = "GK Home Interiors";
const DESCRIPTION =
  "Residential and commercial interior design, modular kitchens and full home interiors in Hyderabad. Free consultation and 3D designs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GK Home Interiors | Interior Designers in Hyderabad",
    template: "%s | GK Home Interiors",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "interior designers in Hyderabad",
    "home interiors Hyderabad",
    "modular kitchen Hyderabad",
    "interior designers KPHB",
    "full home interiors",
    "commercial interiors Hyderabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "GK Home Interiors | Interior Designers in Hyderabad",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GK Home Interiors, interior designers in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GK Home Interiors | Interior Designers in Hyderabad",
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b4ea2",
};

// Google ki mee business details (local SEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/images/gk-ledger-logo.png`,
  description: DESCRIPTION,
  telephone: "+919742483054",
  email: "info@gkhomeinteriors.in",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "301/4, 4th Floor, Alluri Trade Centre, KPHB Rd, Bhagya Nagar Colony",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  areaServed: "Hyderabad",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="top"
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {/* Keyboard users ki: Tab nokkithe "Skip to content" vastundi */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber-700 focus:px-5 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}