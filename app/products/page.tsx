import { getAllProducts } from "@/lib/products";
import ProductSearch from "@/components/ProductSearch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            Our Products
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Premium Fruit Protection Covers
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
            Browse our complete range of high-quality biodegradable fruit
            protection covers for different crops.
          </p>
        </div>

        <ProductSearch products={products} />

      </div>
    </main>
  );
}