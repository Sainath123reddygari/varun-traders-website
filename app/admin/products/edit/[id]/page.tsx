"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        alert(error.message);
        return;
      }

      setName(data.name);
      setSlug(data.slug);
      setCategory(data.category ?? "");
      setDescription(data.description ?? "");
      setImageUrl(data.image_url ?? "");
      setLoading(false);
    }

    if (id) {
      loadProduct();
    }
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase
      .from("products")
      .update({
        name,
        slug,
        category,
        description,
        image_url: imageUrl,
      })
      .eq("id", id)
      .select();

    console.log("Updated rows:", data);
    console.log("Update error:", error);

    if (error) {
      alert(error.message);
      return;
    }

  alert("Product updated successfully!");
  router.push("/products");
}

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Edit Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            className="w-full border rounded-lg p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
          />

          <input
            className="w-full border rounded-lg p-3"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Slug"
          />

          <input
            className="w-full border rounded-lg p-3"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
          />

          <textarea
            className="w-full border rounded-lg p-3"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <input
            className="w-full border rounded-lg p-3"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-lg"
          >
            Update Product
          </button>

        </form>
      </div>
    </main>
  );
}