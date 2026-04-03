"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const srEls = document.querySelectorAll(".sr");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    srEls.forEach((el) => observer.observe(el));

    // Hero: trigger on load
    document.querySelectorAll(".hero .sr").forEach((el, i) => {
      setTimeout(() => el.classList.add("vis"), 100 + i * 160);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
