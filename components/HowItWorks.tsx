export default function HowItWorks() {
  const steps = [
    {
      no: "01",
      title: "Cover the Fruit",
      desc: "Place the biodegradable cover over the young fruit and secure it properly.",
    },
    {
      no: "02",
      title: "Natural Protection",
      desc: "The cover protects against insects, birds, dust, sun damage and rain.",
    },
    {
      no: "03",
      title: "Healthy Growth",
      desc: "Fruits grow in a clean environment with better colour and quality.",
    },
    {
      no: "04",
      title: "Higher Profit",
      desc: "Harvest premium-quality fruits that attract better market prices.",
    },
  ];

  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-700 uppercase tracking-widest font-semibold">
            Simple Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            How Our Fruit Protection Covers Work
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            A simple four-step process that helps farmers reduce damage and improve fruit quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.no}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.no}
              </div>

              <h3 className="text-2xl font-bold text-green-700">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}