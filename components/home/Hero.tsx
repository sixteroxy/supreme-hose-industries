
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  Package,
  ShieldCheck,
} from "lucide-react";

const stats = [
  { number: "20+", label: "Product Categories", icon: Package },
  { number: "100%", label: "Quality Focused", icon: CheckCircle2 },
  { number: "Pan India", label: "Supply Network", icon: MapPin },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white"
    >
      
{/* RIGHT-SIDE DESKTOP HERO IMAGE */}
<div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[76%] lg:block">
  <Image
    src="/images/hero-industrial.png"
    alt="Industrial hydraulic hoses in front of a refinery"
    fill
    priority
    sizes="76vw"
    className="object-cover object-right"
  />


        {/* Smooth white blend behind the heading */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, white 0%, rgba(255,255,255,0.98) 34%, rgba(255,255,255,0.88) 45%, rgba(255,255,255,0.25) 61%, transparent 72%)",
          }}
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 lg:hidden bg-gradient-to-b from-white via-white to-red-50/30" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] items-center px-6 py-28 sm:px-10 lg:px-[5.5%] lg:py-32">

        <div className="w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-[940px]"
          >
            {/* Trust label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100/90 px-5 py-3 text-sm font-bold text-red-800">
              <ShieldCheck size={21} />
              Trusted Hydraulic Hose Manufacturer
            </div>

            {/* Main heading */}
            <h1 className="mt-10 text-[clamp(3.2rem,5.1vw,5.4rem)] font-black leading-[0.99] tracking-[-0.045em] text-black">
              Premium{" "}
              <span className="text-red-700">Hydraulic</span>
              <br />
              &amp; Industrial Hose
              <br />
              Solutions
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[780px] text-base leading-8 text-gray-600 sm:text-lg">
              Supreme Hose Industries manufactures premium hydraulic,
              industrial, PTFE and stainless steel corrugated hose assemblies
              engineered for demanding industrial applications with
              exceptional reliability, durability and performance.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex min-h-[66px] items-center justify-center gap-4 rounded-xl bg-red-700 px-9 py-5 text-lg font-bold text-white shadow-xl shadow-red-700/20 transition duration-300 hover:-translate-y-1 hover:bg-red-800"
              >
                Explore Products
                <ArrowRight size={23} />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[66px] items-center justify-center gap-4 rounded-xl border-2 border-red-700 bg-white/90 px-9 py-5 text-lg font-bold text-red-700 transition duration-300 hover:-translate-y-1 hover:bg-red-50"
              >
                <FileText size={22} />
                Request Quote
              </a>
            </div>

            {/* MOBILE PRODUCT IMAGE */}
            <div className="relative mt-10 h-[270px] w-full overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/images/hero-industrial.png"
                alt="Hydraulic and industrial hose assemblies"
                fill
                sizes="100vw"
                className="object-cover object-[70%_center]"
              />
            </div>

            {/* Statistics */}
            <div className="mt-12 grid max-w-[900px] grid-cols-1 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3 sm:gap-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex min-w-0 items-center gap-4 sm:border-r sm:border-gray-200 sm:last:border-r-0 sm:pr-4"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-700">
                      <Icon size={27} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-black leading-tight text-red-700 sm:text-3xl">
                        {item.number}
                      </h2>
                      <p className="mt-1 text-sm text-gray-600">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FLOATING ISO BADGE - DESKTOP */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[49%] top-[42%] z-20 hidden items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-2xl ring-1 ring-gray-100 lg:flex"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-700">
          <ShieldCheck size={30} />
        </div>

        <div>
          <p className="text-3xl font-black leading-tight text-red-700">
            ISO
          </p>
          <p className="text-sm text-gray-600">Quality Standards</p>
        </div>
      </motion.div>

      {/* FLOATING INDUSTRIAL BADGE - DESKTOP */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-[22%] right-[5%] z-20 hidden rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-gray-100 lg:block"
      >
        <p className="text-xl font-black text-gray-950">
          Industrial
        </p>
        <p className="text-sm font-bold text-red-700">
          Hose Solutions
        </p>
      </motion.div>
    </section>
  );
}
