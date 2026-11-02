
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Catalogue", href: "#catalogue" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12">

        {/* LOGO */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logos/logo.png"
            alt="Supreme Hose Industries"
            width={52}
            height={52}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-xl font-black leading-none sm:text-2xl lg:text-3xl">
              <span className="text-red-700">SUPREME</span>{" "}
              <span className="text-black">HOSE</span>
            </h1>

            <p className="mt-1 text-[9px] uppercase tracking-[3px] text-gray-500 sm:text-[10px]">
              Industries
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-red-700 xl:text-[15px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl bg-red-700 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-red-800 lg:inline-flex"
        >
          Get Quote
          <ArrowRight size={17} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gray-900 transition hover:bg-red-50 hover:text-red-700 lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-5 pb-6 pt-3 shadow-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1400px] flex-col">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-base font-semibold text-gray-800 transition hover:pl-2 hover:text-red-700"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-4 font-bold text-white shadow-md transition hover:bg-red-800"
            >
              Request a Quote
              <ArrowRight size={18} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
