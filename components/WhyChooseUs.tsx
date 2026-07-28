import {
  Award,
  Leaf,
  ShieldCheck,
  Truck,
  Users,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Premium Quality",
    text: "Manufactured using high-quality materials for long-lasting protection.",
  },
  {
    icon: Leaf,
    title: "100% Biodegradable",
    text: "Eco-friendly products that are safe for farmers and the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Superior Protection",
    text: "Protects fruits from insects, birds, dust, rain and sun damage.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Reliable delivery across India.",
  },
  {
    icon: Users,
    title: "Farmer Trusted",
    text: "Helping farmers improve fruit quality and increase market value.",
  },
  {
    icon: BadgeCheck,
    title: "Excellent Support",
    text: "Dedicated assistance before and after your purchase.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Trusted Agricultural Solutions
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We manufacture premium fruit protection covers that help farmers
            produce healthier fruits with better quality and higher market value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-100 bg-gray-50 p-8 hover:bg-green-700 hover:text-white transition-all duration-300 shadow-lg"
              >
                <Icon size={42} />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 opacity-90">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}