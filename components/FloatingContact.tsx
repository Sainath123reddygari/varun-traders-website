"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
        href="tel:+919834234638"
        className="bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-2xl transition"
      >
        <Phone size={24} />
      </a>

      <a
        href="https://wa.me/919834234638"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition"
      >
        <MessageCircle size={24} />
      </a>

    </div>
  );
}