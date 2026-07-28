"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo-dark.png"
            alt="Varun Traders"
            width={220}
            height={60}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-green-700 transition">
            Products
          </Link>

          <a href="#dealer" className="hover:text-green-700 transition">
            Become Dealer
          </a>

          <a href="#contact" className="hover:text-green-700 transition">
            Contact
          </a>
        </nav>

        {/* Desktop WhatsApp */}
        <a
          href="https://wa.me/919834234638"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          WhatsApp
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-6 gap-5 text-lg">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>

            <a href="#dealer" onClick={() => setOpen(false)}>
              Become Dealer
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

            <a
              href="https://wa.me/919834234638"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-white text-center py-3 rounded-xl font-semibold"
            >
              WhatsApp
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}