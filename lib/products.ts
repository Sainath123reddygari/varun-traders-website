import { supabase } from "@/lib/supabase";

export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Products:", data);
  console.log("Error:", error);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((product) => ({
    ...product,
    images: product.image_url ? [product.image_url] : [],
    specs:
      typeof product.specs === "string"
        ? JSON.parse(product.specs || "[]")
        : product.specs ?? [],
        brochure: product.brochure ?? "",
      }));
    }

export async function getProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return {
    ...data,
    images: data.image_url ? [data.image_url] : [],
    specs:
      typeof data.specs === "string"
        ? JSON.parse(data.specs || "[]")
        : data.specs ?? [],
    brochure: data.brochure ?? "",
  };
}