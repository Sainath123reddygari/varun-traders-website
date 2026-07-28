import Image from "next/image";

export default function Comparison() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-green-700 font-semibold">
            Why Fruit Protection Matters
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            See the Difference
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Compare fruits grown without protection and fruits protected using
            Varun Traders Fruit Protection Covers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-80">
              <Image
                src="/comparison/without-cover.jpg"
                alt="Without Protection"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-red-600">
                ❌ Without Protection
              </h3>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Fruit fly damage</li>
                <li>• Bird attacks</li>
                <li>• Dust and dirt</li>
                <li>• Sunburn marks</li>
                <li>• Lower market price</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-80">
              <Image
                src="/comparison/with-cover.jpg"
                alt="With Protection"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-green-700">
                ✅ With Varun Traders Cover
              </h3>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>• Cleaner fruits</li>
                <li>• Better appearance</li>
                <li>• Protection from insects & birds</li>
                <li>• Reduced pesticide use</li>
                <li>• Higher market value</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}