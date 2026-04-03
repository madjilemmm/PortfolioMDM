"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const onMove = (e: MouseEvent) => {
      cur.style.left = e.clientX + "px";
      cur.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    const addBig = () => {
      cur.classList.add("big");
      ring.classList.add("big");
    };
    const removeBig = () => {
      cur.classList.remove("big");
      ring.classList.remove("big");
    };

    document.addEventListener("mousemove", onMove);

    const selectors = "a, button, .wcard, .hcard, .brand-item";
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", addBig);
      el.addEventListener("mouseleave", removeBig);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addBig);
        el.removeEventListener("mouseleave", removeBig);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
