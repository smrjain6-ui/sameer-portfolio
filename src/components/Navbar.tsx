"use client";

import { Flame, Menu, Mountain, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean) as HTMLElement[];

      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${section.id}`);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-borderSoft bg-bgPrimary shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="content-wrap flex h-16 items-center justify-between">
        <a
          href="#home"
          className="max-w-[72%] font-serif text-base italic leading-snug tracking-tight text-textPrimary md:max-w-none md:text-[1.15rem]"
        >
          If there is no struggle, there is no progress.
          <span className="ml-2 inline-flex items-center gap-1 align-middle text-accent">
            <Flame size={16} />
            <Mountain size={16} />
          </span>
        </a>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline pb-0.5 ${
                  active === link.href ? "text-accent" : "text-textSecondary hover:text-textPrimary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <div className="border-b border-borderSoft bg-bgPrimary md:hidden">
          <ul className="content-wrap flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm ${active === link.href ? "text-accent" : "text-textSecondary"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
