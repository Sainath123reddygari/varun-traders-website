"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919834234638"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-3xl">💬</span>
    </a>
  );
}