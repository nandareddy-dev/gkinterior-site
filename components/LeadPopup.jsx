"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// ContactForm.jsx lo vaadina same Formspree URL pettandi
const FORM_URL = "https://formspree.io/f/YOUR_FORM_ID";
const DELAY_MS = 5000;
const KEY = "gk-lead-popup";

const types = ["Full Home", "Kitchen", "Bedroom / Living", "Office", "Other"];

const field =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm placeholder:text-stone-400 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20";

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({});

  // 5 seconds tarvata open (session ki okasari matrame)
  useEffect(() => {
    if (pathname === "/contact") return;
    try {
      if (sessionStorage.getItem(KEY)) return;
    } catch {}
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
  }

  // Esc tho close + page scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    const found = {};
    if (!data.get("name")?.toString().trim()) found.name = "Enter your name";
    const phone = data.get("phone")?.toString().replace(/\D/g, "").slice(-10);
    if (!phone || !/^[6-9]\d{9}$/.test(phone)) found.phone = "Enter a valid 10 digit mobile number";
    setErrors(found);
    if (Object.keys(found).length) return;

    data.set("project_type", type || "Not selected");
    data.set("source", "Website popup");
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(close, 3000);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Get a free quote"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up relative w-full max-w-md overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="h-1.5 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700" />

        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center rounded-full text-lg text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="p-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white">
              ✓
            </div>
            <h3 className="mb-2 font-serif text-2xl">Thank you!</h3>
            <p className="text-sm text-stone-600">Our team will call you shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4 p-6 sm:p-8">
            <div className="pr-8">
              <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-amber-700">Free consultation</p>
              <h3 className="font-serif text-2xl leading-tight">Get your free design quote</h3>
              <p className="mt-1 text-sm text-stone-500">Share your details and we will call you back.</p>
            </div>

            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div>
              <input name="name" placeholder="Your name *" autoComplete="name" className={field} />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Mobile number *"
                className={field}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div className="flex flex-wrap gap-2">
              {types.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(type === t ? "" : t)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                    type === t
                      ? "border-amber-700 bg-amber-700 text-white"
                      : "border-stone-300 hover:border-amber-700"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-600 py-3.5 text-sm uppercase tracking-widest text-white transition hover:bg-amber-700 disabled:opacity-70"
            >
              {status === "sending" && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              )}
              {status === "sending" ? "Sending..." : "Get Free Quote"}
            </button>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 p-3 text-xs text-red-700">
                Something went wrong. Please call us on +91 9742483054.
              </p>
            )}
            <p className="text-center text-[11px] text-stone-400">We respect your privacy. No spam.</p>
          </form>
        )}
      </div>
    </div>
  );
}