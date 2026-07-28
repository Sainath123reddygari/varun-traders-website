export default function WhyChooseUs() {
  const features = [
    {
      icon: "🛡️",
      title: "Superior Protection",
      desc: "Protects fruits from insects, birds, dust and harsh weather.",
    },
    {
      icon: "🌿",
      title: "100% Biodegradable",
      desc: "Eco-friendly paper that naturally decomposes without harming the environment.",
    },
    {
      icon: "💧",
      title: "Water Resistant",
      desc: "Designed to withstand rain and moisture while maintaining airflow.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      desc: "Made with high-quality 45 GSM paper for long-lasting performance.",
    },
    {
      icon: "📈",
      title: "Higher Market Value",
      desc: "Cleaner, healthier fruits help farmers achieve better selling prices.",
    },
    {
      icon: "🤝",
      title: "Farmer Support",
      desc: "Dedicated support before and after every purchase.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-700 uppercase tracking-widest font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Why Farmers Trust Varun Traders
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-lg">
            We manufacture premium biodegradable fruit protection covers
            designed to improve fruit quality while reducing losses caused by
            pests and environmental damage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-100 bg-gray-50 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-green-700">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}