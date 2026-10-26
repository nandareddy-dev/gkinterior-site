"use client";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({ images = [], title = "Project" }) {
  const [open, setOpen] = useState(null); // index leda null

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setOpen((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  if (!images.length) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden bg-stone-200 ${
              i === 0 ? "col-span-2 row-span-2" : ""
            }`}
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={src}
              alt={`${title} photo ${i + 1}`}
              className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                i === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
              }`}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-3xl text-white opacity-0 transition group-hover:bg-black/35 group-hover:opacity-100">
              ⤢
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl text-white transition hover:bg-white hover:text-black"
          >
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-xl text-white transition hover:bg-white hover:text-black md:left-8"
              >
                ←
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-xl text-white transition hover:bg-white hover:text-black md:right-8"
              >
                →
              </button>
            </>
          )}

          <img
            src={images[open]}
            alt={`${title} photo ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl"
          />

          <p className="absolute bottom-5 text-sm tracking-widest text-stone-300">
            {open + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}