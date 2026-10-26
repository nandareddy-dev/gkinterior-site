import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Contact | GK Home Interiors",
  description:
    "Get a free consultation and quote for your home or office interiors in Hyderabad.",
};

// Mee real details ikkada marchandi
const PHONE = "+91 97424 83054";
const PHONE_LINK = "+919742483054";
const WHATSAPP = "919742483054";
const EMAIL = "info@gkhomeinteriors.in";
const ADDRESS = [
  "301/4, 4th Floor, Alluri Trade Centre,",
  "KPHB Rd, Bhagya Nagar Colony,",
  "Hyderabad, Telangana 500072",
];
const HOURS = "Mon - Sat: 9:30 AM - 6:30 PM";
const MAP_QUERY =
  "Alluri Trade Centre, KPHB Road, Bhagya Nagar Colony, Hyderabad 500072";

const Icon = ({ children }: { children: ReactNode }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </Icon>
);
const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Icon>
);
const PinIcon = () => (
  <Icon>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Icon>
);

function InfoCard({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-700/10 text-amber-700">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-xs uppercase tracking-widest text-stone-500">{label}</h3>
        <div className="text-stone-800">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <Hero
        crumb="Contact"
        title="Let's design your space"
        subtitle="Tell us about your home or office and we will get back to you within 24 hours."
      />

      {/* Form + info */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info */}
          <aside className="space-y-4 lg:col-span-2">
            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3 text-sm text-white transition hover:bg-stone-700"
              >
                <PhoneIcon /> Call now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi GK Home Interiors, I want to know about your interior design services"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>

            <InfoCard icon={<PhoneIcon />} label="Phone">
              <a href={`tel:${PHONE_LINK}`} className="text-lg hover:text-amber-700">
                {PHONE}
              </a>
            </InfoCard>

            <InfoCard icon={<MailIcon />} label="Email">
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-amber-700">
                {EMAIL}
              </a>
            </InfoCard>

            <InfoCard icon={<PinIcon />} label="Studio address">
              <address className="text-sm not-italic leading-relaxed">
                {ADDRESS.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </InfoCard>

            <InfoCard icon={<ClockIcon />} label="Working hours">
              <p className="text-sm">{HOURS}</p>
              <p className="mt-1 text-xs text-stone-500">Sunday: by appointment</p>
            </InfoCard>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-3xl">Visit our studio</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest text-amber-700 hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-lg shadow-stone-200/60">
          <iframe
            title="Studio location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
            className="h-80 w-full border-0 md:h-96"
            loading="lazy"  
          />
        </div>
      </section>
    </>
  );
}