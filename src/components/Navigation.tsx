"use client";

import { useEffect, useRef } from "react";
import ArrowIcon from "./ArrowIcon";

interface NavigationProps {
  onContact: () => void;
}

export default function Navigation({ onContact }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          MDM<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#expertises">Expertises</a>
          </li>
          <li>
            <a href="#work">Projets</a>
          </li>
          <li>
            <a href="#about">&Agrave; propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="btn-primary" onClick={onContact}>
          Me contacter
          <ArrowIcon />
        </button>
      </div>
    </header>
  );
}
