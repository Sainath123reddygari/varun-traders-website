import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductBenefits from "@/components/ProductBenefits";
import WhatsAppButton from "@/components/WhatsAppButton";
import FarmerEnquiryForm from "@/components/FarmerEnquiryForm";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import RelatedProducts from "@/components/RelatedProducts";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">

        <ProductGallery images={product.images} />

        <div>
          <h1 className="text-4xl font-bold text-green-700">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            {product.description}
          </p>

          <div className="mt-8">
            <WhatsAppButton />

            <a
              href={product.brochure}
              download
              className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-black transition"
            >
              📄 Download Brochure
            </a>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <ProductSpecs specs={product.specs} />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <ProductBenefits />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <FarmerEnquiryForm />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <RelatedProducts currentSlug={product.slug} />
      </section>

    </main>
  );
}