"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold">Varun Traders</h2>
          <p className="mt-4 text-green-100">
            Premium biodegradable fruit protection covers for healthier crops,
            better quality, and higher yields.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Products</h3>

          <ul className="space-y-2">
            <li>🍌 Banana Covers</li>
            <li>🍈 Guava Covers</li>
            <li>❤️ Pomegranate Covers</li>
            <li>🥭 Mango Covers</li>
            <li>🌱 Seedling Covers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <p>📞 +91 9834234638</p>

          <p className="mt-2">
            📧 info@varuntraders.in
          </p>

          <p className="mt-2">
            📍 Andhra Pradesh, India
          </p>

          <a
            href="https://wa.me/919834234638"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-white text-green-800 px-5 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      <div className="border-t border-green-700 mt-12 pt-6 text-center text-green-200">
        © {new Date().getFullYear()} Varun Traders. All Rights Reserved.
      </div>
    </footer>
  );
}