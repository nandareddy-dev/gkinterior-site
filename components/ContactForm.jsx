"use client";
import { useState } from "react";

const FORM_URL = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP = "919876543210";

const projectTypes = [
  "Full Home Interiors",
  "Modular Kitchen",
  "Bedroom / Living Room",
  "Office / Commercial",
  "Other",
];

const budgets = ["Below ₹5 Lakhs", "₹5 - 10 Lakhs", "₹10 - 20 Lakhs", "₹20 Lakhs +", "Not sure yet"];

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm placeholder:text-stone-400 transition focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20";

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">{label}</label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [projectType, setProjectType] = useState("");
  const [errors, setErrors] = useState({});

  function validate(data) {
    const e = {};
    if (!data.get("name")?.toString().trim()) e.name = "Please enter your name";
    const phone = data.get("phone")?.toString().replace(/\D/g, "").slice(-10);
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) e.phone = "Enter a valid 10 digit mobile number";
    const email = data.get("email")?.toString().trim();
    if (email && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (!projectType) e.projectType = "Please select a project type";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: bots fill this, humans never see it
    if (data.get("website")) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    data.set("project_type", projectType);
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setProjectType("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-2">Thank you!</h3>
        <p className="text-stone-600 text-sm mb-6">
          We received your details. Our team will call you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm uppercase tracking-widest text-amber-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 shadow-lg shadow-stone-200/60 space-y-6"
    >
      <div>
        <h2 className="font-serif text-2xl">Get a free quote</h2>
        <p className="text-sm text-stone-500 mt-1">Fill in the details and we will call you back.</p>
      </div>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" error={errors.name}>
          <input name="name" placeholder="Your full name" className={inputClass} />
        </Field>
        <Field label="Phone *" error={errors.phone}>
          <input name="phone" type="tel" inputMode="numeric" placeholder="98765 43210" className={inputClass} />
        </Field>
      </div>

      <Field label="Email (optional)" error={errors.email}>
        <input name="email" type="email" placeholder="you@example.com" className={inputClass} />
      </Field>

      <Field label="What are you planning? *" error={errors.projectType}>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setProjectType(t)}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                projectType === t
                  ? "border-amber-700 bg-amber-700 text-white"
                  : "border-stone-300 hover:border-amber-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget">
          <select name="budget" defaultValue="" className={inputClass}>
            <option value="" disabled>Select budget</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field label="Best time to call">
          <select name="call_time" defaultValue="Anytime" className={inputClass}>
            <option>Anytime</option>
            <option>Morning (10 AM - 1 PM)</option>
            <option>Afternoon (1 PM - 4 PM)</option>
            <option>Evening (4 PM - 7 PM)</option>
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project">
        <textarea
          name="message"
          rows={4}
          placeholder="Location, size (2BHK / 3BHK), style you like, timeline..."
          className={inputClass}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-700 px-8 py-3.5 text-sm uppercase tracking-widest text-white transition hover:bg-amber-800 disabled:opacity-70"
      >
        {status === "sending" && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        )}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again, or message us directly on{" "}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline"
          >
            WhatsApp
          </a>
          .
        </div>
      )}

      <p className="text-center text-xs text-stone-400">We respect your privacy. No spam, ever.</p>
    </form>
  );
}