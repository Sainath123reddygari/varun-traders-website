export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-green-800 to-green-600 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-widest text-green-200 font-semibold">
          Contact Us
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Ready to Protect Your Fruits?
        </h2>

        <p className="mt-6 text-lg text-green-100 max-w-3xl mx-auto">
          Get premium biodegradable fruit protection covers for bananas,
          mangoes, guavas, pomegranates and more. Contact our team today for
          pricing, dealership enquiries, or bulk orders.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="https://wa.me/919834234638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            💬 Chat on WhatsApp
          </a>

          <a
            href="/products"
            className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-700 transition"
          >
            View Products
          </a>

        </div>

      </div>
    </section>
  );
}