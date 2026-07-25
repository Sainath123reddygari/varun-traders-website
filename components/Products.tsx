"use client";

import Link from "next/link";
import Image from "next/image";

const products = [
  {
   name: "Banana Fruit Cover",
   image: "/products/banana.jpg",
   description: "Protects bananas from insects, birds, dust and harsh weather.",
   badge: "Best Seller",
   link: "/products/banana",
  },
  {
   name: "Pomegranate Fruit Cover",
   image: "/products/pomegranate.jpg",
   description: "Improves fruit quality and reduces pest damage.",
   badge: "Premium",
   link: "/products/pomegranate",
  },
  {
   name: "Guava Fruit Cover",
   image: "/products/guava.jpg",
   description: "Provides excellent airflow while protecting fruits.",
   badge: "Popular",
   link: "/products/guava",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700">
          Our Products
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Premium biodegradable fruit protection covers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              <div className="relative h-72">

                <span className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {product.badge}
                </span>

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-green-700">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href={product.link}
                    className="block text-center bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
                  >
                    View Details
                  </Link>

                  <a
                href={'https://wa.me/919834234638?text=Hello, I want to buy ${product.name}'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}