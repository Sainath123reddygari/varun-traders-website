"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "100% Biodegradable",
      description: "Eco-friendly fruit protection covers that are safe for the environment.",
      icon: "🌱",
    },
    {
      title: "Premium Quality",
      description: "Manufactured using high-quality materials for long-lasting protection.",
      icon: "⭐",
    },
    {
      title: "Trusted by Farmers",
      description: "Helping farmers improve fruit quality and increase market value.",
      icon: "🤝",
    },
    {
      title: "Direct Manufacturer",
      description: "Competitive pricing with reliable customer support.",
      icon: "🏭",
    },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-700">
          Why Choose Varun Traders?
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide premium fruit protection solutions designed to help farmers
          produce healthier fruits with better market value.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-bold text-green-700">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}