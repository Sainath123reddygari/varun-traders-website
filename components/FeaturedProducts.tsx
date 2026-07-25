import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";

export default async function FeaturedProducts() {
  const products = await getAllProducts();

  return (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
        Our Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="bg-white rounded-2xl shadow overflow-hidden"
          >

            <div className="relative h-64">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {product.name}
              </h3>

              <p className="text-gray-600 mt-3">
                {product.description}
              </p>
            </div>

          </Link>
        ))}

      </div>

    </div>
  </section>
);
}