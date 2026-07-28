import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Varun Traders
          </h2>

          <p className="mt-4 leading-7">
            Premium biodegradable fruit protection covers helping farmers
            produce cleaner, healthier and higher-value fruits.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#dealer">Become Dealer</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Products
          </h3>

          <ul className="space-y-3">
            <li>Banana Covers</li>
            <li>Mango Covers</li>
            <li>Guava Covers</li>
            <li>Pomegranate Covers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <p>📍 Mahabubnagar, Telangana</p>
          <p className="mt-3">📞 +91 98342 34638</p>
          <p className="mt-3">✉️ varuntraders1985@gmail.com</p>

          <a
            href="https://wa.me/919834234638"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-600 px-6 py-3 rounded-xl text-white hover:bg-green-700 transition"
          >
            WhatsApp Us
          </a>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Varun Traders. All Rights Reserved.
      </div>
    </footer>
  );
}