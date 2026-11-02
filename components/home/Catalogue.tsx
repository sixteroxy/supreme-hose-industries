
"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, FileText, ShieldCheck } from "lucide-react";

export default function Catalogue() {
  return (
    <section
      id="catalogue"
      className="w-full overflow-hidden bg-gray-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: CATALOGUE INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-red-500">
              Product Catalogue
            </span>

            <div className="mt-3 mb-6 h-1 w-16 rounded-full bg-red-600" />

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find the Right Hose{" "}
              <span className="text-red-500">for Your Industry</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Explore the Supreme Hose Industries product catalogue to learn
              about our hydraulic and industrial hose solutions, product
              categories and hose assembly offerings.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/catalogue/supreme-hose-catalogue.pdf"
                download="supreme-hose-catalogue.pdf"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-700 px-6 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-600"
              >
                <ArrowDownToLine size={20} />
                Download Catalogue
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 font-semibold text-white transition duration-300 hover:border-red-500 hover:bg-white/5"
              >
                Request a Quote
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <ShieldCheck size={20} className="shrink-0 text-red-500" />
              <span>Product information to help guide your selection</span>
            </div>
          </motion.div>

          {/* RIGHT: CATALOGUE PREVIEW CARD */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[32px] bg-red-700/20 blur-2xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white p-6 text-gray-950 shadow-2xl sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-red-50 p-4">
                    <FileText size={34} className="text-red-700" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-red-700">
                      Supreme Hose Industries
                    </p>
                    <h3 className="mt-1 text-xl font-black sm:text-2xl">
                      Product Catalogue
                    </h3>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                  PDF
                </span>
              </div>

              <div className="my-8 h-px bg-gray-200" />

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                Browse our catalogue for an overview of our hose products
                and industrial solutions.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Hydraulic and industrial hose solutions",
                  "PTFE and stainless steel hose options",
                  "Hose assemblies for industrial applications",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-red-700"
                    />
                    <span className="text-sm font-medium leading-6 text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="/catalogue/supreme-hose-catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-4 font-bold text-gray-950 transition hover:border-red-700 hover:text-red-700"
              >
                Preview Catalogue
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
