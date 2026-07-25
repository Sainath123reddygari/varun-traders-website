"use client";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [specs, setSpecs] = useState([
  { title: "", value: "" }
]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    let uploadedImageUrl = "";

    if (imageFile) {
      const fileName = `${uuidv4()}-${imageFile.name}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, imageFile);

      if (uploadError) {
        setLoading(false);
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("product-images")
        .getPublicUrl(fileName);

      uploadedImageUrl = data.publicUrl;
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        slug,
        category,
        description,
        image_url: uploadedImageUrl,
        specs: specs.filter(
          (s) => s.title.trim() !== "" && s.value.trim() !== ""
        ),
        brochure: "",
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product saved successfully!");

    setName("");
    setSlug("");
    setCategory("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Banana Fruit Protection Cover"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="banana"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Fruit Covers"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Description
            </label>
            <textarea
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Write product description..."
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Product image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
            setImageFile(e.target.files[0]);
                }
              }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-4">
              Product Specifications
            </label>

            {specs.map((spec, index) => (
              <div key={index} className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Title (e.g. Material)"
                  value={spec.title}
                  onChange={(e) => {
                    const updated = [...specs];
                    updated[index].title = e.target.value;
                    setSpecs(updated);
                  }}
                  className="w-1/2 border rounded-lg p-3"
                />

                <input
                  type="text"
                  placeholder="Value (e.g. 45 GSM Paper)"
                  value={spec.value}
                  onChange={(e) => {
                    const updated = [...specs];
                    updated[index].value = e.target.value;
                    setSpecs(updated);
                  }}
                  className="w-1/2 border rounded-lg p-3"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setSpecs([...specs, { title: "", value: "" }])
              }
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Specification
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Save Product"}
          </button>

        </form>
      </div>
    </main>
  );
}