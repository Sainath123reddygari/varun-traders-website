import FadeIn from "./FadeIn";

const steps = [
  {
    title: "Raw Material Selection",
    description: "We carefully select high-quality materials for long-lasting fruit protection covers.",
  },
  {
    title: "Precision Manufacturing",
    description: "Our products are manufactured with consistent quality and attention to detail.",
  },
  {
    title: "Quality Inspection",
    description: "Every batch is checked to ensure it meets our quality standards.",
  },
  {
    title: "Packing",
    description: "Products are packed securely to maintain quality during transportation.",
  },
  {
    title: "Delivery",
    description: "Orders are delivered promptly to farmers, dealers, and distributors.",
  },
];

export default function Process() {
  return (
    <FadeIn>
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700">
            Our Manufacturing Process
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-12">
            We follow a systematic process to deliver reliable, high-quality products.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-6 bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
