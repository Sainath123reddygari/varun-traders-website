import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <FadeIn>
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700">
            What Farmers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p>
                "Excellent quality fruit covers. My guava crop had much less pest damage."
              </p>
              <h4 className="mt-4 font-bold text-green-700">
                ★★★★★ Farmer
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p>
                "Very strong and biodegradable. Easy to use and improved fruit quality."
              </p>
              <h4 className="mt-4 font-bold text-green-700">
                ★★★★★ Grower
              </h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p>
                "Highly recommended for pomegranate and banana orchards."
              </p>
              <h4 className="mt-4 font-bold text-green-700">
                ★★★★★ Customer
              </h4>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}