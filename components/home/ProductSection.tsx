"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Gauge,
  Wind,
  Factory,
  Wrench,
  Flame,
} from "lucide-react";

const products = [
  {
    icon: Gauge,
    title: "High & Medium Pressure Hoses",
    description:
      "Reliable hydraulic hose assemblies designed for high-performance industrial applications.",
  },
  {
    icon: Droplets,
    title: "Low Pressure Hoses",
    description:
      "Durable low-pressure hose solutions suitable for multiple industrial requirements.",
  },
  {
    icon: Wrench,
    title: "Super High Pressure Hoses",
    description:
      "Engineered for demanding environments where maximum pressure handling is required.",
  },
  {
    icon: Wind,
    title: "PTFE (Teflon) Hoses",
    description:
      "Chemical-resistant PTFE hose assemblies offering superior flexibility and durability.",
  },
  {
    icon: Factory,
    title: "Stainless Steel Corrugated Hoses",
    description:
      "Robust stainless steel hose assemblies built for high-temperature and heavy-duty applications.",
  },
  {
    icon: Flame,
    title: "Steam Hose Assemblies",
    description:
      "Safe and efficient hose assemblies specially designed for steam transfer applications.",
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-700 uppercase tracking-widest font-semibold">
            Our Products
          </span>

          <h2 className="mt-4 text-4xl font-black text-black">
            Industrial Hose Solutions
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We manufacture a wide range of hydraulic and industrial hose
            assemblies engineered for performance, safety and long service life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <Icon className="text-red-700" size={30} />
                </div>

                <h3 className="text-xl font-bold text-black mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {product.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}