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

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Social links: mee real page URLs tho marchandi. Levu ante aa object ni delete cheyandi.
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
    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
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

function Svg({ children, size = 18, className = "" }) {
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

const PhoneIcon = ({ size, className }) => (
  <Svg size={size} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </Svg>
);

// WhatsApp style icon: chat bubble + phone
const WhatsAppIcon = ({ size, className }) => (
  <Svg size={size} className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    <path d="M9.2 8.6c.2-.4.6-.4.9 0l.8 1.2c.2.3.1.6-.1.8l-.5.5c.5 1 1.3 1.8 2.3 2.3l.5-.5c.2-.2.5-.3.8-.1l1.2.8c.4.3.4.7 0 .9-.6.5-1.4.7-2.2.4a8 8 0 0 1-4.1-4.1c-.3-.8-.1-1.6.4-2.2z" />
  </Svg>
);

const MailIcon = () => (
  <Svg className="mt-0.5 shrink-0 text-amber-700">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Svg>
);

function ColHeading({ children }) {
  return (
    <div className="mb-6">
      <h4 className="inline-block font-serif text-lg font-bold tracking-wide text-amber-700">{children}</h4>
      <div className="mt-2 flex items-center justify-center gap-1 sm:justify-start">
        <span className="h-[3px] w-10 rounded-full bg-amber-500" />
        <span className="h-[3px] w-3 rounded-full bg-amber-700" />
      </div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 transition hover:text-amber-700"
    >
      <span className="text-amber-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        →
      </span>
      <span className="-ml-5 transition-all duration-300 group-hover:ml-0">{children}</span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 bg-white text-stone-600">
      {/* Brand gradient line */}
      <div className="h-1 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />

      {/* CTA strip */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl text-stone-900 md:text-3xl">Planning a new home or office?</h2>
            <p className="mt-1 text-sm text-stone-500">Get a free consultation and quote from our design team.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-6 py-3 text-xs uppercase tracking-widest text-white shadow-md transition hover:-translate-y-0.5 hover:bg-amber-800"
            >
              <PhoneIcon size={16} /> Call now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-xs uppercase tracking-widest text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-700"
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center">
              <img src={LOGO} alt="GK Home Interiors logo" className="h-full w-full object-contain" />
            </span>
            <h3 className="font-serif text-2xl text-stone-900">
              GK <span className="text-amber-600">Home Interiors</span>
            </h3>
          </div>
          <p className="mb-6 text-sm leading-relaxed">
            Homes and offices designed around the way you live and work. Beautiful, practical and
            built to last.
          </p>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-stone-900">Follow us</p>
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

        {/* Quick links */}
        <div>
          <ColHeading>Quick Links</ColHeading>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <FooterLink href={l.href}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <ColHeading>Services</ColHeading>
          <ul className="space-y-3 text-sm">
            {serviceList.map((s) => (
              <li key={s.slug}>
                <FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <ColHeading>Get In Touch</ColHeading>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-center gap-3 sm:justify-start">
              <PhoneIcon className="mt-0.5 shrink-0 text-amber-700" />
              <a href={`tel:${PHONE_LINK}`} className="transition hover:text-amber-700">
                {PHONE}
              </a>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <MailIcon />
              <a href={`mailto:${EMAIL}`} className="break-all transition hover:text-amber-700">
                {EMAIL}
              </a>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <Svg className="mt-0.5 shrink-0 text-amber-700">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Svg>
              <address className="not-italic leading-relaxed">
                301/4, 4th Floor, Alluri Trade Centre,<br />
                KPHB Rd, Bhagya Nagar Colony,<br />
                Hyderabad, Telangana 500072
              </address>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <Svg className="mt-0.5 shrink-0 text-amber-700">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </Svg>
              <span>{HOURS}</span>
            </li>
          </ul>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-700 px-5 py-2 text-xs uppercase tracking-widest text-amber-700 transition hover:bg-amber-700 hover:text-white"
          >
            Get directions ↗
          </a>
        </div>
      </div>

      {/* Bottom bar: copyright center, back-to-top arrow only */}
      <div className="border-t border-stone-200">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 pb-20 pt-6 text-center text-xs text-stone-500 md:pb-6">
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-600 transition hover:-translate-y-1 hover:border-amber-700 hover:bg-amber-700 hover:text-white md:absolute md:left-5 md:top-1/2 md:-translate-y-1/2 md:hover:-translate-y-[60%]"
          >
            ↑
          </a>
          <p>© 2026 GK Home Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}