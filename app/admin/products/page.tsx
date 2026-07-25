"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("id,name,slug,category")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setProducts(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function deleteProduct(id: string) {
    const ok = window.confirm("Are you sure you want to delete this product?");

    if (!ok) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product deleted successfully!");

    loadProducts();
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">
            Product Management
          </h1>

          <Link
            href="/admin/products/new"
            className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800"
          >
            + Add Product
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-4 text-left">Product</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-semibold">
                    {product.name}
                  </td>

                  <td className="p-4">
                    {product.slug}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4 text-center space-x-2">

                    <Link
                      href={`/admin/products/edit/${product.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                    <Link
                      href={`/products/${product.slug}`}
                      className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded"
                    >
                      View
                    </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {products.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No products found.
            </div>
          )}
        </div>

        <div className="mt-8">
          <Link
            href="/admin"
            className="text-green-700 hover:underline font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
}