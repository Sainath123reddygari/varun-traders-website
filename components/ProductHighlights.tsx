import {
  ShieldCheck,
  Leaf,
  Droplets,
  Sun,
  Bird,
  Bug,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Manufactured using high-quality biodegradable paper.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    desc: "100% biodegradable and environmentally safe.",
  },
  {
    icon: Bug,
    title: "Insect Protection",
    desc: "Protects fruits from fruit flies and harmful insects.",
  },
  {
    icon: Bird,
    title: "Bird Protection",
    desc: "Reduces damage caused by birds and animals.",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    desc: "Designed to withstand rain and moisture.",
  },
  {
    icon: Sun,
    title: "Sun Protection",
    desc: "Helps reduce sunburn and improves fruit quality.",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Product Highlights
          </h2>

          <p className="mt-4 text-gray-600">
            Designed for better fruit protection and higher profits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
              >
                <Icon
                  className="text-green-700"
                  size={42}
                />

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}