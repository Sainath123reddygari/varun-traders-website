"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-green-700">
          Varun Traders
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/dealer">Become Dealer</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/919834234638"
          target="_blank"
          className="bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}