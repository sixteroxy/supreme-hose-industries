"use client";

import { Award, Truck, ShieldCheck, Headset } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Manufacturing high-quality hydraulic and industrial hose assemblies engineered for long-lasting performance.",
  },
  {
    icon: Truck,
    title: "Pan India Supply",
    description:
      "Serving customers across India with reliable delivery and timely product availability.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Performance",
    description:
      "Products designed to perform efficiently under demanding industrial conditions.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Expert assistance to help customers choose the right hose solutions for their applications.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-700 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-black text-black">
            Why Choose Supreme Hose Industries?
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            We deliver dependable hydraulic and industrial hose solutions
            backed by quality manufacturing, industry expertise and reliable
            customer support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center"
              >

                <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">

                  <Icon className="text-red-700" size={30} />

                </div>

                <h3 className="text-xl font-bold text-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}