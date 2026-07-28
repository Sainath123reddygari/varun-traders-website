import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "@/lib/products";

interface RelatedProductsProps {
  currentSlug: string;
}

export default async function RelatedProducts({
  currentSlug,
}: RelatedProductsProps) {
  const allProducts = await getAllProducts();

  const relatedProducts = allProducts
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-8">
        Related Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative h-56">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500">
                  No Image
                </div>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-green-700">
                {product.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}