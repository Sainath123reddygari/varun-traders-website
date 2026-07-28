"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which fruits can use these protection covers?",
    answer:
      "Our covers are suitable for banana, mango, guava, pomegranate and many other fruit crops.",
  },
  {
    question: "Are the covers biodegradable?",
    answer:
      "Yes. They are made from eco-friendly biodegradable paper that naturally decomposes.",
  },
  {
    question: "Do they protect against insects and birds?",
    answer:
      "Yes. They help reduce damage from fruit flies, insects, birds, dust and harsh weather.",
  },
  {
    question: "Can I place bulk orders?",
    answer:
      "Absolutely. We supply both small and bulk quantities for farmers, dealers and distributors.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-green-700 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 rounded-2xl border border-gray-200 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left font-semibold"
            >
              <span>{faq.question}</span>

              <ChevronDown
                className={`transition-transform ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}