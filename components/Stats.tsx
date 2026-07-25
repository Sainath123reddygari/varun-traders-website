"use client";

export default function Stats() {
  const stats = [
    { number: "1000+", label: "Happy Farmers" },
    { number: "10+", label: "Products" },
    { number: "100%", label: "Biodegradable" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="mt-2 text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}