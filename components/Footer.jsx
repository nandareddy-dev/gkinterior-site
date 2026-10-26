import Link from "next/link";

const PHONE = "+91 9742483054";
const PHONE_LINK = "+919742483054";
const WHATSAPP = "919742483054";
const EMAIL = "info@gkhomeinteriors.in";
const HOURS = "Mon - Sat: 9:30 AM - 6:30 PM";

// Transparent logo ready ayithe "/images/gk-logo.png", lekapothe ee file vaadandi
const LOGO = "/images/gk-logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Residential Interiors",
  "Modular Kitchens",
  "Commercial Interiors",
  "Furniture & Decor",
];

// Social links: mee real page URLs tho marchandi. Levu ante aa object ni delete cheyandi.
const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
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
    path: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    path: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" />
      </>
    ),
  },
];

function Icon({ children }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-amber-700"
    >
      {children}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-white text-stone-600">
      {/* CTA strip */}
      <div className="border-b border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl text-stone-900 md:text-3xl">Planning a new home or office?</h2>
            <p className="mt-1 text-sm text-stone-500">Get a free consultation and quote from our design team.</p>
          </div>
          <div className="flex justify-center gap-3">
            <a
              href={`tel:${PHONE_LINK}`}
              className="rounded-lg bg-amber-700 px-6 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-amber-800"
            >
              Call now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-stone-400 px-6 py-3 text-xs uppercase tracking-widest text-stone-800 transition hover:border-amber-700 hover:text-amber-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main columns: mobile lo center, sm+ lo left */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
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
          <p className="mb-5 text-sm leading-relaxed">
            Homes and offices designed around the way you live and work.
          </p>
          <div className="flex justify-center gap-3 sm:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition hover:border-amber-700 hover:bg-amber-700 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-stone-900">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-amber-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-stone-900">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="transition hover:text-amber-700">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest text-stone-900">Get In Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex justify-center gap-3 sm:justify-start">
              <Icon>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </Icon>
              <a href={`tel:${PHONE_LINK}`} className="transition hover:text-amber-700">{PHONE}</a>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <Icon>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </Icon>
              <a href={`mailto:${EMAIL}`} className="break-all transition hover:text-amber-700">{EMAIL}</a>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <Icon>
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Icon>
              <address className="not-italic leading-relaxed">
                301/4, 4th Floor, Alluri Trade Centre,<br />
                KPHB Rd, Bhagya Nagar Colony,<br />
                Hyderabad, Telangana 500072
              </address>
            </li>
            <li className="flex justify-center gap-3 sm:justify-start">
              <Icon>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </Icon>
              <span>{HOURS}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar: pb-20 (mobile) and md:pr-40 (desktop) floating WhatsApp button kosam space */}
      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 pb-20 pt-5 text-center text-xs text-stone-500 sm:flex-row sm:text-left md:pb-5 md:pr-40">
          <p>© 2026 GK Home Interiors. All rights reserved.</p>
          <a
            href="#top"
            className="rounded-full border border-stone-300 px-3 py-1 transition hover:border-amber-700 hover:text-amber-700"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}