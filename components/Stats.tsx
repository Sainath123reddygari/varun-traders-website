"use client";

import { Award, Users, Leaf, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    title: "Happy Farmers",
  },
  {
    icon: Leaf,
    value: "100%",
    title: "Biodegradable",
  },
  {
    icon: Award,
    value: "45 GSM",
    title: "Premium Quality",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <Icon size={48} className="mx-auto mb-5" />

                <h2 className="text-5xl font-bold">
                  {item.value}
                </h2>

                <p className="mt-3 text-lg">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}