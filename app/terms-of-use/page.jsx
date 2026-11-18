import Link from "next/link";

export const metadata = {
  title: "Terms of Use | GK Home Interiors",
  description:
    "Terms and conditions for using the GK Home Interiors website and services.",
  alternates: { canonical: "https://www.gkhomeinteriors.in/terms-of-use" },
};

const UPDATED = "November 18, 2026";

const sections = [
  {
    title: "1. Our services",
    paras: [
      "We provide residential and commercial interior design, modular kitchens, false ceilings, furniture and décor, and related execution services. The website gives information about our work and lets you request a consultation or quote. Details of any project are fixed only in the written quotation or agreement we both sign.",
    ],
  },
  {
    title: "2. Enquiries, quotations and estimates",
    list: [
      "Consultations and first quotations are free.",
      "Quotations are valid for the period stated in them. Prices may change after that, or if the scope, materials or site conditions change.",
      "Timelines on the website, such as “45 to 75 days” for a full home, are estimates. The confirmed timeline is the one in your agreement and starts after design approval and receipt of the agreed advance.",
    ],
  },
  {
    title: "3. Payments",
    paras: [
      "Payment stages, advances and due dates are set out in your quotation or agreement. Work and material orders begin once the agreed advance is received. Delays in payment may delay the project.",
    ],
  },
  {
    title: "4. Cancellation and refunds",
    paras: [
      "Terms for cancellation, change of scope and refunds depend on the work already done and materials already ordered. They are stated in your project agreement. Please contact us as early as possible if you wish to cancel or change a project.",
    ],
  },
  {
    title: "5. Client responsibilities",
    list: [
      "Give accurate information, measurements and site access.",
      "Take timely decisions and approvals on designs, materials and changes.",
      "Arrange society or landlord permissions, utilities and a safe working site.",
    ],
  },
  {
    title: "6. Designs and intellectual property",
    paras: [
      "All designs, drawings, 2D/3D renders, photos, logos and website content belong to GK Home Interiors unless stated otherwise. You may not copy, reuse or share them for another project or for commercial use without our written permission. We may show completed projects in our portfolio and marketing unless you ask us not to.",
    ],
  },
  {
    title: "7. Materials, brands and warranty",
    paras: [
      "We work with third-party brands for plywood, laminates, hardware, ceilings and lighting. Brand names and logos belong to their owners and appear only to show the materials we use. Product warranties are given by the manufacturers, and any workmanship warranty from us is described in your agreement. Normal wear and tear, misuse, water damage, termites from external causes and changes made by others are not covered.",
    ],
  },
  {
    title: "8. Images and content",
    paras: [
      "Images and examples on the website are for illustration. Finished colours, textures and appearance can vary slightly from photos and screens depending on material, lighting and site conditions.",
    ],
  },
  {
    title: "9. Acceptable use",
    paras: [
      "You agree not to misuse the website, attempt unauthorised access, send harmful code, submit false enquiries or use the content unlawfully.",
    ],
  },
  {
    title: "10. Limitation of liability",
    paras: [
      "We try to keep the website accurate and available, but we provide it “as is”. To the extent permitted by law, GK Home Interiors is not liable for indirect or consequential losses arising from use of the website, or from delays caused by events beyond our control, such as weather, strikes, supply shortages, permission delays or government orders.",
    ],
  },
  {
    title: "12. Changes to these terms",
    paras: [
      "We may update these terms from time to time. The updated version applies from the date shown above.",
    ],
  },
  {
    title: "13. Governing law",
    paras: [
      "These terms are governed by the laws of India. Courts in Hyderabad, Telangana have exclusive jurisdiction over any dispute.",
    ],
  },
];

function Block({ s }) {
  return (
    <section className="mt-9">
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
  );
}

export default function TermsOfUsePage() {
  const before = sections.slice(0, 10);
  const after = sections.slice(10);

  return (
    <main className="bg-white text-stone-600">
      <div className="h-1 bg-gradient-to-r from-lime-500 via-blue-700 to-lime-500" />

      <section className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
          <h1 className="font-serif text-3xl text-stone-900 md:text-4xl">
            Terms of Use
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
          Welcome to www.gkhomeinteriors.in, operated by GK Home Interiors,
          Hyderabad, Telangana, India. By using this website or requesting our
          services, you agree to these terms. If you do not agree, please do not
          use the website.
        </p>

        {before.map((s) => (
          <Block key={s.title} s={s} />
        ))}

        <section className="mt-9">
          <h2 className="mb-3 font-serif text-xl font-bold text-blue-800">
            11. Privacy
          </h2>
          <p className="leading-7">
            Our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-700 underline hover:text-blue-800"
            >
              Privacy Policy
            </Link>{" "}
            explains how we handle your personal information.
          </p>
        </section>

        {after.map((s) => (
          <Block key={s.title} s={s} />
        ))}

        <section className="mt-9">
          <h2 className="mb-3 font-serif text-xl font-bold text-blue-800">
            14. Contact us
          </h2>
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
        </section>
      </article>
    </main>
  );
}