"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  images?: string[];
};

export default function ProductSearch({
  products,
}: {
  products: Product[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <>
      <div className="mb-10 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 pl-12 pr-4 py-4 shadow-sm focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-3 rounded-full font-medium transition ${
                category === cat
                  ? "bg-green-700 text-white"
                  : "bg-white border border-gray-300 hover:bg-green-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-gray-600 font-medium">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative h-56">
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

              <p className="mt-3 text-gray-600 line-clamp-2">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}