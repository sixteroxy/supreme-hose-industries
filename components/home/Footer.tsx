
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Catalogue", href: "#catalogue" },
  { name: "Contact", href: "#contact" },
];

const products = [
  "Hydraulic Hoses",
  "Industrial Hoses",
  "PTFE Hoses",
  "Stainless Steel Corrugated Hoses",
  "Hose Assemblies",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-8 pt-16 sm:px-10 lg:px-14">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">

          {/* COMPANY INFORMATION */}
          <div>
            <Link
              href="#home"
              className="inline-flex items-center gap-4"
            >
              {/* Visible company logo */}
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-lg">
                <Image
                  src="/logos/logo.png"
                  alt="Supreme Hose Industries Logo"
                  width={64}
                  height={64}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Company name */}
              <div>
                <h2 className="text-2xl font-black leading-none tracking-tight sm:text-[27px]">
                  <span className="text-red-600">SUPREME</span>{" "}
                  <span className="text-white">HOSE</span>
                </h2>

                <p className="mt-2 text-[10px] font-medium tracking-[4px] text-gray-400">
                  INDUSTRIES
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-gray-400">
              Supreme Hose Industries manufactures premium hydraulic,
              industrial, PTFE and stainless steel corrugated hose
              assemblies engineered for demanding industrial applications.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 font-bold text-red-500 transition hover:text-red-400"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-black">
              Quick Links
            </h3>

            <div className="mt-6 h-1 w-12 rounded-full bg-red-600" />

            <ul className="mt-7 space-y-5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition duration-300 hover:pl-1 hover:text-red-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-black">
              Our Products
            </h3>

            <div className="mt-6 h-1 w-12 rounded-full bg-red-600" />

            <ul className="mt-7 space-y-5">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-sm text-gray-400 transition duration-300 hover:pl-1 hover:text-red-500"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="text-lg font-black">
              Contact Us
            </h3>

            <div className="mt-6 h-1 w-12 rounded-full bg-red-600" />

            <div className="mt-7 space-y-7">

              {/* PHONE */}
              <a
                href="tel:+919810038683"
                className="flex items-start gap-4"
              >
                <Phone
                  className="mt-1 shrink-0 text-red-500"
                  size={20}
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-200">
                    +91 9810038683
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:supremehose@gmail.com"
                className="flex items-start gap-4"
              >
                <Mail
                  className="mt-1 shrink-0 text-red-500"
                  size={20}
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-semibold text-gray-200">
                    supremehose@gmail.com
                  </p>
                </div>
              </a>

              {/* FACTORY ADDRESS */}
              <a
                href="https://maps.app.goo.gl/1Wcsb8sBhqQ1iftv6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <MapPin
                  className="mt-1 shrink-0 text-red-500"
                  size={20}
                />

                <div>
                  <p className="text-xs text-gray-500">
                    Factory Address
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-200">
                    A-74, Naraina Industrial Area,
                    Phase-1, New Delhi - 110028
                  </p>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-red-500">
                    Get Directions
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Supreme Hose Industries.
            All Rights Reserved.
          </p>

          <a
            href="https://wa.me/919810038683"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-red-800"
          >
            WhatsApp Us
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </footer>
  );
}
