
import Link from "next/link";
import { serviceList } from "@/data/servicesData";

const PHONE = "+91 9742483054";
const PHONE_LINK = "+919742483054";
const WHATSAPP = "919742483054";
const EMAIL = "info@gkhomeinteriors.in";
const HOURS = "Mon - Sat: 9:30 AM - 6:30 PM";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Alluri%20Trade%20Centre%2C%20KPHB%20Road%2C%20Hyderabad%20500072";

const LOGO = "/images/gk-logo.png";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    hover: "hover:border-pink-500 hover:bg-pink-500",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    hover: "hover:border-blue-600 hover:bg-blue-600",
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    hover: "hover:border-red-600 hover:bg-red-600",
    path: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    hover: "hover:border-sky-700 hover:bg-sky-700",
    path: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

function Svg({ children, size = 19, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const PhoneIcon = ({ className = "" }) => (
  <Svg className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </Svg>
);

const MailIcon = () => (
  <Svg className="shrink-0 text-blue-700">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Svg>
);

function ColHeading({ children }) {
  return (
    <div className="mb-4">
      <h4 className="inline-block font-serif text-xl font-bold tracking-wide text-blue-800">
        {children}
      </h4>

      <div className="mt-2 flex items-center justify-center gap-1 sm:justify-start">
        <span className="h-[3px] w-10 rounded-full bg-lime-500" />
        <span className="h-[3px] w-3 rounded-full bg-blue-700" />
      </div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 transition duration-300 hover:text-blue-700"
    >
      <span className="text-lime-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        →
      </span>
      <span className="-ml-5 transition-all duration-300 group-hover:ml-0">
        {children}
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-0 w-full shrink-0 bg-white text-stone-600">

      {/* Brand Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-lime-500 via-blue-700 to-lime-500" />

      {/* CTA Section */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-xl text-stone-900 md:text-2xl">
              Planning a new home or office?
            </h2>

            <p className="mt-1 text-sm text-stone-500">
              Get a free consultation and quote from our design team.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-xs uppercase tracking-widest text-white shadow-md transition hover:-translate-y-1 hover:bg-blue-800"
            >
              <PhoneIcon size={16} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-xs uppercase tracking-widest text-white shadow-md transition hover:-translate-y-1 hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer - Four Sections */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-7">

        {/* Section 1: Brand */}
        <div>
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center">
              <img
                src={LOGO}
                alt="GK Home Interiors"
                className="h-full w-full object-contain"
              />
            </span>

            <h3 className="font-serif text-2xl text-stone-900">
              GK <span className="text-lime-600">Home Interiors</span>
            </h3>
          </div>

          <p className="mb-4 text-sm leading-6">
            Homes and offices designed around the way you live and work.
            Beautiful, practical and built to last.
          </p>

          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-800">
            Follow Us
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${s.hover}`}
              >
                <Svg>{s.path}</Svg>
              </a>
            ))}
          </div>
        </div>

        {/* Section 2: Services */}
        <div>
          <ColHeading>Our Services</ColHeading>

          <ul className="space-y-3 text-sm">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <FooterLink href={`/services/${s.slug}`}>
                  {s.title}
                </FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <ColHeading>Get In Touch</ColHeading>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <PhoneIcon className="mt-0.5 shrink-0 text-blue-700" />

              <a
                href={`tel:${PHONE_LINK}`}
                className="transition hover:text-blue-700"
              >
                {PHONE}
              </a>
            </li>

            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <MailIcon />

              <a
                href={`mailto:${EMAIL}`}
                className="break-all transition hover:text-blue-700"
              >
                {EMAIL}
              </a>
            </li>

            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <Svg className="mt-0.5 shrink-0 text-blue-700">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Svg>

              <address className="not-italic leading-6">
                301/4, 4th Floor, Alluri Trade Centre,
                <br />
                KPHB Rd, Bhagya Nagar Colony,
                <br />
                Hyderabad, Telangana 500072
              </address>
            </li>
          </ul>
        </div>

        {/* Section 4: Visit Our Studio */}
        <div>
          <ColHeading>Visit Our Studio</ColHeading>

          <div className="space-y-4 text-sm">

            {/* Working Hours */}
            <div className="flex items-start justify-center gap-3 sm:justify-start">
              <Svg className="mt-0.5 shrink-0 text-blue-700">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </Svg>

              <div>
                <p className="mb-1 font-semibold text-stone-800">
                  Working Hours
                </p>

                <p className="leading-6">{HOURS}</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-2 flex items-center justify-center gap-2 text-blue-700 sm:justify-start">
                <Svg size={21}>
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </Svg>

                <span className="font-semibold text-stone-800">
                  Find Our Location
                </span>
              </div>

              <p className="mb-3 text-xs leading-5 text-stone-500">
                Visit our studio to discuss your dream home interior designs.
              </p>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-700 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 transition duration-300 hover:bg-blue-700 hover:text-white"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-stone-200 bg-stone-50">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-5 py-4 text-center text-xs text-stone-500 md:flex-row">

          <p>
            © 2026 GK Home Interiors. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-xl text-blue-700 transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700 hover:text-white md:absolute md:right-5"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
