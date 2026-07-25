"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero/hero.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">

          <span className="inline-block bg-green-600/20 border border-green-400 text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🌿 Trusted by Farmers
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Protect Every Fruit.
            <br />
            Increase Every Harvest.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">
            Premium biodegradable fruit protection covers designed to protect
            bananas, guavas, pomegranates and other fruits from insects, birds,
            dust, rain and harsh weather while improving fruit quality and
            market value.
          </p>

          <div className="mt-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="#products"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-white text-lg font-semibold transition"
            >
              Explore Products
            </Link>

            <a
              href="https://wa.me/919834234638"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-green-100 px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-gray-300 text-sm">Biodegradable</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">45 GSM</h3>
              <p className="text-gray-300 text-sm">Premium Paper</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-gray-300 text-sm">Customer Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}