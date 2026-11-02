
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Premium Quality Hose Assemblies",
    description:
      "Quality-focused products built for demanding industrial applications.",
  },
  {
    title: "Modern Manufacturing Standards",
    description:
      "Careful assembly processes and attention to product consistency.",
  },
  {
    title: "Experienced Technical Team",
    description:
      "Practical support to help identify suitable hose solutions.",
  },
  {
    title: "Reliable Pan India Supply",
    description:
      "Industrial hose solutions for customers across India.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* LEFT: FACTORY IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
              <Image
                src="/images/about-factory-new.png"
                alt="Industrial hose manufacturing workshop"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* RIGHT: ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex w-full min-w-0 flex-col"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-red-700">
              About Us
            </span>

            <div className="mb-5 mt-3 h-1 w-16 rounded-full bg-red-700" />

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-5xl xl:text-6xl">
              Building Reliable Industrial{" "}
              <span className="text-red-700">
                Hose Solutions
              </span>
            </h2>

            <p className="mt-4 text-base font-semibold leading-7 text-gray-800 sm:text-lg">
              Trusted Manufacturer of Hydraulic &amp; Industrial Hose Assemblies
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              Supreme Hose Industries is a trusted manufacturer of premium
              hydraulic, industrial, PTFE and stainless steel corrugated hose
              assemblies engineered for demanding industrial applications.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Our commitment to quality, precision engineering and customer
              satisfaction makes us a reliable partner for industries across
              India, including manufacturing, oil and gas, construction,
              automotive and heavy engineering.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex min-w-0 items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-red-700"
                  />

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-6 text-gray-950 sm:text-base">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-red-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-red-800"
              >
                Learn More
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
