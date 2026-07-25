"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "What fruits are these covers suitable for?",
    answer:
      "Our covers are suitable for guava, pomegranate, banana, mango, and many other fruits.",
  },
  {
    question: "Are the covers eco-friendly?",
    answer:
      "Yes. We offer biodegradable fruit protection covers made from quality materials.",
  },
  {
    question: "Do you accept bulk orders?",
    answer:
      "Yes. We supply farmers, dealers, distributors, and agricultural businesses across India.",
  },
  {
    question: "Can I request custom sizes?",
    answer:
      "Yes. Custom sizes and specifications are available for bulk orders.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <FadeIn>
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-xl bg-white shadow"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full text-left p-5 font-semibold flex justify-between"
                >
                  {faq.question}
                  <span>{open === index ? "−" : "+"}</span>
                </button>

                {open === index && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}