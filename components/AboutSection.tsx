export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="text-green-700 font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Helping Farmers Protect Every Harvest
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Varun Traders manufactures premium biodegradable fruit protection
            covers that help farmers protect fruits from insects, birds, dust,
            sun damage and harsh weather. Our products improve fruit quality,
            reduce crop losses and help farmers achieve better market prices.
          </p>

          <div className="mt-8 space-y-4">
            <div>✅ Premium 45 GSM Paper</div>
            <div>✅ 100% Biodegradable Material</div>
            <div>✅ Water Resistant Design</div>
            <div>✅ Suitable for Multiple Fruit Crops</div>
            <div>✅ Trusted Quality & Reliable Support</div>
          </div>
        </div>

        <div className="bg-green-700 rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold">
            Our Mission
          </h3>

          <p className="mt-6 text-green-100 leading-8">
            To provide innovative and eco-friendly fruit protection solutions
            that help farmers increase productivity, reduce losses and grow
            higher-quality fruits sustainably.
          </p>
        </div>

      </div>
    </section>
  );
}