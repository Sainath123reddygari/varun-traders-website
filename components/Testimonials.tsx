export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Mahabubnagar, Telangana",
      review:
        "The fruit protection covers significantly reduced insect damage. My pomegranates were cleaner and fetched a better market price.",
    },
    {
      name: "Suresh Reddy",
      location: "Nagarkurnool, Telangana",
      review:
        "Excellent product quality. The covers are durable, easy to use, and helped protect my guava crop throughout the season.",
    },
    {
      name: "Mahesh Naik",
      location: "Wanaparthy, Telangana",
      review:
        "Very satisfied with the product and support from Varun Traders. I highly recommend these covers to other farmers.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-700 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            What Farmers Say
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Farmers across Telangana trust our fruit protection covers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-bold text-green-700">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}