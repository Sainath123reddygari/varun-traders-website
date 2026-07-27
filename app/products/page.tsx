export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";
import { getAllProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold">{product.name}</h2>

              <p className="text-gray-600 mt-2">
                {product.category}
              </p>

              <Link
                href={`/products/${product.slug}`}
                className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center mt-8 text-gray-500">
            No products available.
          </p>
        )}
      </div>
    </main>
  );
}