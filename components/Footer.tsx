import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold">Varun Traders</h2>

            <p className="mt-5 text-green-100">
              Premium biodegradable fruit protection covers helping farmers
              produce healthier, cleaner and higher-value fruits.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-3">
              <Link href="/">Home</Link><br />
              <Link href="/products">Products</Link><br />
              <a href="#dealer">Become Dealer</a><br />
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 9834234638</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@varuntraders.in</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Mahabubnagar, Telangana</span>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Business Hours
            </h3>

            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>

            <a
              href="https://wa.me/919834234638"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-200">
          © 2026 Varun Traders. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}