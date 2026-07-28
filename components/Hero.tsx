"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400 text-green-100 px-5 py-3 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
            🌿 Trusted by Farmers Across India
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Protect Every Fruit.
            <br />
            <span className="text-green-300">
              Increase Every Harvest.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">
            Premium biodegradable fruit protection covers designed to protect
            bananas, guavas, pomegranates and other fruits from insects, birds,
            dust, rain and harsh weather while improving fruit quality and
            market value.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <Link
              href="#products"
              className="bg-green-600 hover:bg-green-700 hover:scale-105 px-8 py-4 rounded-xl text-white text-lg font-semibold shadow-xl transition-all duration-300"
            >
              Explore Products
            </Link>

            <a
              href="https://wa.me/919834234638"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/95 backdrop-blur-sm text-green-700 hover:bg-white hover:scale-105 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-white">

            <div className="flex items-center gap-2">
              ✅ <span>100% Biodegradable</span>
            </div>

            <div className="flex items-center gap-2">
              🛡️ <span>Protects from Insects & Birds</span>
            </div>

            <div className="flex items-center gap-2">
              💧 <span>Water Resistant</span>
            </div>

            <div className="flex items-center gap-2">
              🚚 <span>Fast Delivery Across India</span>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-green-200 mt-2">Biodegradable</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
              <h3 className="text-3xl font-bold text-white">45 GSM</h3>
              <p className="text-green-200 mt-2">Premium Paper</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center">
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-green-200 mt-2">Customer Support</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}