"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FORM_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

const NAV_ITEMS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#conditions", label: "Conditions" },
  { href: "#why-nomad", label: "Why Nomad" },
  { href: "#meet-the-team", label: "Meet the team" },
  { href: "#providers", label: "Providers" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <>
      <header className={`nm-header${solid ? " is-solid" : ""}${open ? " is-open" : ""}`}>
        <div className="nm-header-inner">
          <Link href="/" className="nm-header-logo" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="Nomad Therapeutics"
              width={260}
              height={52}
              className="h-10 w-auto object-contain object-left sm:h-11"
              priority
              unoptimized
            />
          </Link>

          <nav className="nm-header-nav" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nm-header-meta">
            <a href={PHONE_HREF} className="nm-header-phone">
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
          </div>

          <button
            type="button"
            className="nm-header-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="nm-mobile-panel" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nm-mobile-link" onClick={close}>
                {item.label}
              </a>
            ))}
            <div className="nm-mobile-meta">
              <a href={PHONE_HREF} onClick={close}>
                Call {PHONE_NUMBER}
              </a>
            </div>
            <a href={`#${FORM_SECTION_ID}`} className="nm-mobile-cta" onClick={close}>
              Find Out If You Qualify
            </a>
          </div>
        )}
      </header>

      {open && (
        <button
          type="button"
          className="nm-mobile-backdrop"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
