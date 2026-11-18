export const metadata = {
  title: "Privacy Policy | GK Home Interiors",
  description:
    "How GK Home Interiors collects, uses and protects your personal information.",
  alternates: { canonical: "https://www.gkhomeinteriors.in/privacy-policy" },
};

const UPDATED = "November 18, 2026";

const sections = [
  {
    title: "1. Information we collect",
    list: [
      "Details you give us: your name, phone number, email address, property location, project type, budget and any message you send through our contact form, WhatsApp, email or phone.",
      "Project information: floor plans, photos, measurements and site details you share so we can prepare designs and quotations.",
      "Usage data: pages visited, device and browser type, approximate location and referring site, collected through standard analytics tools.",
    ],
  },
  {
    title: "2. How we use your information",
    list: [
      "To respond to enquiries and arrange free consultations and site visits.",
      "To prepare 2D/3D designs, quotations and project timelines.",
      "To deliver, manage and support your project and after-service.",
      "To send updates about your enquiry or project. We send promotional messages only if you agree.",
      "To improve our website, services and advertising.",
      "To meet legal, tax and accounting requirements in India.",
    ],
  },
  {
    title: "3. Cookies and analytics",
    paras: [
      "Our website may use cookies and similar technologies, including analytics and advertising tools such as Google Analytics or the Meta Pixel, to understand how visitors use the site and to measure our advertising. You can block or delete cookies in your browser settings. The site will still work, though some features may be affected.",
    ],
  },
  {
    title: "4. Sharing your information",
    paras: ["We do not sell or rent your personal information. We share it only with:"],
    list: [
      "Contractors, carpenters, suppliers and installers who need it to carry out your project.",
      "Service providers who help us run the website, communications, analytics and payments.",
      "Authorities, when required by Indian law, court order or a government request.",
    ],
  },
  {
    title: "5. Data security",
    paras: [
      "We take reasonable steps to protect your information, including secure (HTTPS) connections and limiting access to team members who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Data retention",
    paras: [
      "We keep your information for as long as needed to respond to your enquiry, complete your project, provide warranty and after-service, and meet legal obligations. After that, we delete or anonymise it.",
    ],
  },
  {
    title: "7. Your rights",
    paras: [
      "You may ask us to access, correct or delete your personal information, withdraw your consent, or stop promotional messages at any time. Write to us at the email below and we will respond within a reasonable time.",
    ],
  },
  {
    title: "8. Third-party links",
    paras: [
      "Our website links to third-party sites, such as brand partners, WhatsApp, Google Maps and social media. We are not responsible for their privacy practices, so please read their policies.",
    ],
  },
  {
    title: "9. Children",
    paras: [
      "Our services are meant for adults. We do not knowingly collect personal information from anyone under 18.",
    ],
  },
  {
    title: "10. Changes to this policy",
    paras: [
      "We may update this policy from time to time. The “Last updated” date shows the latest version. Continued use of the website means you accept the changes.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-stone-600">
      <div className="h-1 bg-gradient-to-r from-lime-500 via-blue-700 to-lime-500" />

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <h1 className="font-serif text-3xl text-stone-900 md:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-3 flex items-center gap-1">
            <span className="h-[3px] w-10 rounded-full bg-lime-500" />
            <span className="h-[3px] w-3 rounded-full bg-blue-700" />
          </div>
          <p className="mt-4 text-sm text-stone-500">Last updated: {UPDATED}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <p className="leading-7">
          GK Home Interiors (“we”, “us”) is an interior design studio based in
          Hyderabad, Telangana, India. This policy explains what personal
          information we collect through www.gkhomeinteriors.in, how we use it,
          and the choices you have. By using our website you agree to this
          policy.
        </p>

        {sections.map((s) => (
          <section key={s.title} className="mt-9">
            <h2 className="mb-3 font-serif text-xl font-bold text-blue-800">
              {s.title}
            </h2>
            {s.paras?.map((p) => (
              <p key={p} className="mb-3 leading-7">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="ml-5 list-disc space-y-2 leading-7 marker:text-lime-600">
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-9">
          <h2 className="mb-3 font-serif text-xl font-bold text-blue-800">
            11. Contact and grievances
          </h2>
          <p className="mb-3 leading-7">
            For privacy questions or complaints, contact our Grievance Officer:
          </p>
          <address className="not-italic leading-7">
            <strong className="text-stone-800">GK Home Interiors</strong>
            <br />
            301/4, 4th Floor, Alluri Trade Centre, KPHB Rd, Bhagya Nagar Colony,
            Hyderabad, Telangana 500072
            <br />
            Email:{" "}
            <a
              href="mailto:info@gkhomeinteriors.in"
              className="text-blue-700 underline hover:text-blue-800"
            >
              info@gkhomeinteriors.in
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+917330952166"
              className="text-blue-700 underline hover:text-blue-800"
            >
              +91 7330952166
            </a>{" "}
            (Mon - Sat, 9:30 AM - 6:30 PM)
          </address>
          <p className="mt-3 leading-7">
            We aim to acknowledge complaints within 48 hours and resolve them
            within 30 days.
          </p>
        </section>
      </article>
    </main>
  );
}