export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>

        <p className="mt-6 text-lg">
          📞 +91 9834234638
        </p>

        <p className="mt-2">
          📧 varuntraders@gmail.com
        </p>

        <p className="mt-2">
          📍 Varun Traders, India
        </p>

        <a
          href="https://wa.me/919834234638"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}