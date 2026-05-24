"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link href="/#home" className="flex items-center gap-3 sm:gap-4" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Sowaka Remedies"
            width={72}
            height={72}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
            priority
          />
          <div className="hidden sm:block">
            <span className="font-serif text-xl font-bold tracking-wide text-forest lg:text-2xl">
              SOWAKA
            </span>
            <span className="block font-serif text-sm text-gold lg:text-base">Remedies</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-forest/80 transition-colors hover:text-gold lg:text-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="rounded-full bg-gold px-6 py-2.5 text-base font-semibold text-white shadow-md transition-all hover:bg-gold-dark hover:shadow-lg lg:px-7 lg:py-3 lg:text-lg"
          >
            Shop All
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-lg text-forest md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-sage/20 bg-white px-4 py-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-forest/80 transition-colors hover:bg-cream hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={closeMenu}
              className="rounded-lg bg-gold px-3 py-3 text-center text-base font-semibold text-white"
            >
              Shop All
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
