"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Fuel,
  Building2,
  Droplets,
  Truck,
  Cog,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
  },
  {
    icon: Fuel,
    title: "Oil & Gas",
  },
  {
    icon: Building2,
    title: "Construction",
  },
  {
    icon: Droplets,
    title: "Water Treatment",
  },
  {
    icon: Truck,
    title: "Automotive",
  },
  {
    icon: Cog,
    title: "Heavy Engineering",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-700 uppercase tracking-widest font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-5xl font-black text-black">
            Trusted Across Multiple Industries
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-gray-700">
            Our hose assemblies are trusted across various industries where
            reliability, safety and consistent performance are essential.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
              >

                <Icon
                  className="mx-auto text-red-700"
                  size={50}
                />

                <h3 className="mt-5 text-xl font-bold text-black">
                  {industry.title}
                </h3>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}