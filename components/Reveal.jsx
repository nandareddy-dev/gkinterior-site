"use client";
import { useEffect, useRef, useState } from "react";

// Mobile: paiki matrame slide (side overflow raadu). Desktop (md+): left/right slide.
const hidden = {
  up: "translate-y-10",
  left: "translate-y-10 md:translate-y-0 md:-translate-x-10",
  right: "translate-y-10 md:translate-y-0 md:translate-x-10",
  none: "",
};

export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden[from]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}