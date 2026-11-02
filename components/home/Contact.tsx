
"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ArrowUpRight,
} from "lucide-react";

type ContactForm = {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-4 !text-gray-900 placeholder:!text-gray-400 !opacity-100 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100";

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);

  const phoneNumber = "919810038683";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enquiry = `Hello Supreme Hose Industries!

Name: ${form.name}
Company: ${form.company || "Not provided"}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Product Interested In: ${form.product}

Message:
${form.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      enquiry
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-red-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-red-100 px-5 py-2.5 text-sm font-bold tracking-wide text-red-700">
            GET IN TOUCH
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Let's Discuss Your{" "}
            <span className="text-red-700">Requirements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Looking for reliable hydraulic and industrial hose solutions?
            Contact our team for product enquiries, technical assistance
            and quotations.
          </p>
        </div>

        {/* CONTACT INFORMATION + FORM */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* LEFT: CONTACT INFORMATION */}
          <div className="flex flex-col rounded-3xl bg-gray-950 p-7 text-white sm:p-10">

            <h3 className="text-2xl font-black sm:text-3xl">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              Get in touch with Supreme Hose Industries. Our team is
              ready to assist with your industrial hose requirements.
            </p>

            <div className="mt-10 space-y-8">

              {/* PHONE */}
              <a
                href="tel:+919810038683"
                className="group flex items-start gap-4"
              >
                <div className="shrink-0 rounded-xl bg-red-700 p-3 transition group-hover:bg-red-600">
                  <Phone size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    +91 9810038683
                  </p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919810038683"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="shrink-0 rounded-xl bg-green-600 p-3 transition group-hover:bg-green-500">
                  <MessageCircle size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    +91 9810038683
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:supremehose@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="shrink-0 rounded-xl bg-red-700 p-3 transition group-hover:bg-red-600">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p className="mt-1 break-all text-lg font-bold text-white">
                    supremehose@gmail.com
                  </p>
                </div>
              </a>

              {/* FACTORY ADDRESS */}
              <a
                href="https://maps.app.goo.gl/1Wcsb8sBhqQ1iftv6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="shrink-0 rounded-xl bg-red-700 p-3 transition group-hover:bg-red-600">
                  <MapPin size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400">Factory Address</p>

                  <p className="mt-1 text-base font-bold leading-7 text-white">
                    A-74, Naraina Industrial Area,
                    Phase-1, New Delhi - 110028
                  </p>

                  <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-red-400">
                    Get Directions <ArrowUpRight size={15} />
                  </p>
                </div>
              </a>

            </div>

            {/* BUSINESS ENQUIRIES BOX */}
            <div className="mt-auto pt-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Clock className="text-red-400" size={22} />
                  <p className="font-bold text-white">
                    Business Enquiries
                  </p>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Contact us by phone, email or WhatsApp for product
                  information and quotation requests.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-10">

            <h3 className="text-2xl font-black text-gray-950">
              Send Us an Enquiry
            </h3>

            <p className="mt-2 text-gray-600">
              Fill in your details and we'll help with your requirements.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">

              {/* NAME + COMPANY */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={fieldClass}
                    style={{
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      opacity: 1,
                      colorScheme: "light",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Company Name
                  </label>

                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className={fieldClass}
                    style={{
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      opacity: 1,
                      colorScheme: "light",
                    }}
                  />
                </div>

              </div>

              {/* PHONE + EMAIL */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={fieldClass}
                    style={{
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      opacity: 1,
                      colorScheme: "light",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-bold text-gray-800"
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClass}
                    style={{
                      color: "#111827",
                      backgroundColor: "#ffffff",
                      opacity: 1,
                      colorScheme: "light",
                    }}
                  />
                </div>

              </div>

              {/* PRODUCT SELECT */}
              <div>
                <label
                  htmlFor="contact-product"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Product Interested In *
                </label>

                <select
                  id="contact-product"
                  name="product"
                  required
                  value={form.product}
                  onChange={handleChange}
                  className={fieldClass}
                  style={{
                    color: "#111827",
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    colorScheme: "light",
                  }}
                >
                  <option value="" disabled>
                    Select a product
                  </option>
                  <option value="Hydraulic Hoses">Hydraulic Hoses</option>
                  <option value="Industrial Hoses">Industrial Hoses</option>
                  <option value="PTFE Hoses">PTFE Hoses</option>
                  <option value="Stainless Steel Corrugated Hoses">
                    Stainless Steel Corrugated Hoses
                  </option>
                  <option value="Hose Assemblies">Hose Assemblies</option>
                  <option value="Other Requirements">Other Requirements</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your product requirements, quantity, specifications, etc."
                  className={`${fieldClass} min-h-[150px] resize-y`}
                  style={{
                    color: "#111827",
                    backgroundColor: "#ffffff",
                    opacity: 1,
                    colorScheme: "light",
                  }}
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex min-h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-red-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-700/20 transition duration-300 hover:-translate-y-1 hover:bg-red-800"
              >
                Send Enquiry on WhatsApp
                <Send size={20} />
              </button>

              <p className="text-center text-sm text-gray-500">
                Your enquiry will open in WhatsApp for you to review and send.
              </p>

            </form>
          </div>

        </div>

        {/* GOOGLE MAP SECTION */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 shadow-xl">

          <div className="flex flex-col justify-between gap-4 bg-gray-950 px-7 py-7 sm:flex-row sm:items-center sm:px-9">

            <div>
              <h3 className="text-2xl font-black text-white">
                Find Our Factory
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-300">
                A-74, Naraina Industrial Area, Phase-1,
                New Delhi - 110028
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/1Wcsb8sBhqQ1iftv6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-800"
            >
              Open in Google Maps
              <ArrowUpRight size={18} />
            </a>

          </div>

          <iframe
            title="Supreme Hose Industries Factory Location"
            src="https://maps.google.com/maps?q=A-74%20Naraina%20Industrial%20Area%20Phase%201%20New%20Delhi%20110028&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

        </div>

      </div>
    </section>
  );
}
