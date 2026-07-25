import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { getAllProducts } from "@/lib/products";

export default async function AdminDashboard() {
  const products = await getAllProducts();

  const { count: farmerCount } = await supabase
    .from("farmer_enquiries")
    .select("*", {
      count: "exact",
      head: true,
    });

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Varun Traders Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Products */}
          <Link
            href="/admin/products"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition block"
          >
            <h2 className="text-xl font-bold">📦 Products</h2>
            <p className="text-3xl font-bold mt-4">
              {products.length}
            </p>
            <p className="text-green-700 mt-2">
              Manage Products →
            </p>
          </Link>

          {/* Farmer Enquiries */}
          <Link
            href="/admin/enquiries/farmers"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition block"
          >
            <h2 className="text-xl font-bold">
              👨‍🌾 Farmer Enquiries
            </h2>

            <p className="text-3xl font-bold mt-4">
              {farmerCount || 0}
            </p>

            <p className="text-green-700 mt-2">
              View Enquiries →
            </p>

          </Link>

          {/* Dealer Enquiries */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">🏢 Dealer Enquiries</h2>
            <p className="text-3xl font-bold mt-4">0</p>
          </div>

          {/* Website Visitors */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold">🌐 Website Visitors</h2>
            <p className="text-3xl font-bold mt-4">0</p>
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Latest Products
            </h2>

            <div className="space-y-3">
              {products.slice(0, 5).map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="font-semibold">{product.name}</span>
                  <span className="text-gray-500">{product.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}