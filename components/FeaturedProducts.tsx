import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";

export default async function FeaturedProducts() {
  const products = await getAllProducts();

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Our Products
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Premium Fruit Protection Covers
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
            High-quality biodegradable fruit protection covers designed to
            protect crops from insects, birds, dust, rain and harsh weather
            while improving fruit quality and market value.
          </p>
        </div>

        {products?.length === 0 ? (
          <p className="text-center text-gray-500">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products?.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">

                  <span className="absolute top-4 left-4 z-10 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </span>

                  <span className="absolute top-4 right-4 z-10 bg-white text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                    🌿 Biodegradable
                  </span>

                  <Image
                    src={product.images?.[0] || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-6 flex justify-between items-center">

                    <span className="text-green-700 font-bold">
                      Premium Quality
                    </span>

                    <span className="bg-green-700 text-white px-5 py-2 rounded-xl group-hover:bg-green-800 transition">
                      View →
                    </span>

                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}