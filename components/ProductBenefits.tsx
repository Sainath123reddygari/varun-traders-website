import {
  ShieldCheck,
  Droplets,
  Bug,
  Sun,
  Leaf,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Pest Protection",
    description:
      "Protects fruits from insects, birds and external damage.",
  },
  {
    icon: Droplets,
    title: "Rain Protection",
    description:
      "Reduces fruit damage caused by rain and moisture.",
  },
  {
    icon: Bug,
    title: "Less Chemical Usage",
    description:
      "Helps farmers reduce pesticide dependency.",
  },
  {
    icon: Sun,
    title: "Sun Damage Protection",
    description:
      "Maintains better fruit colour and quality.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description:
      "Made with biodegradable material safe for farming.",
  },
  {
    icon: TrendingUp,
    title: "Better Market Value",
    description:
      "Produces cleaner, premium quality fruits with higher selling potential.",
  },
];

export default function ProductBenefits() {
  return (
    <section className="bg-green-50 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        Why Farmers Choose Our Fruit Protection Covers
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition"
            >

              <Icon
                className="text-green-600 mb-4"
                size={40}
              />

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}