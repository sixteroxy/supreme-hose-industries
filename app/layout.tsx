
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Supreme Hose Industries | Industrial Hose Manufacturer",
    template: "%s | Supreme Hose Industries",
  },
  description:
    "Supreme Hose Industries is a manufacturer and supplier of industrial hoses in India. Explore our range of high-pressure hoses and industrial hose solutions. Contact us for enquiries and quotations.",
  keywords: [
    "Supreme Hose Industries",
    "industrial hose manufacturer",
    "industrial hoses India",
    "high pressure hoses",
    "hydraulic hoses",
    "industrial hose supplier Delhi",
  ],
  authors: [{ name: "Supreme Hose Industries" }],
  openGraph: {
    title: "Supreme Hose Industries | Industrial Hose Manufacturer",
    description:
      "Explore industrial hose solutions from Supreme Hose Industries. Contact us for product enquiries and quotations.",
    siteName: "Supreme Hose Industries",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
