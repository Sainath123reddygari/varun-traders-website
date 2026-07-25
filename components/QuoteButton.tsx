"use client";

export default function QuoteButton() {
  return (
    <a
      href="https://wa.me/919834234638?text=Hello%20Varun%20Traders,%20I%20would%20like%20to%20request%20a%20price%20quotation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full shadow-xl font-semibold transition-all duration-300"
    >
      💰 Request a Quote
    </a>
  );
}