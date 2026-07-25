import { ShieldCheck, Leaf, Award, Truck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Superior Protection",
    description:
      "Protects fruits from insects, birds, dust, and harsh weather conditions.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Made using high-quality materials that support healthy fruit growth.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Manufactured with strict quality standards for durability and performance.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Timely delivery and dependable service for farmers and distributors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700">
          Why Choose Varun Traders?
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          We are committed to helping farmers protect their crops with reliable,
          high-quality fruit protection covers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
              >
                <Icon className="w-12 h-12 mx-auto text-green-700 mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}