import Image from "next/image";

const images = [
  "/gallery/banana.jpg",
  "/gallery/mango.jpg",
  "/gallery/guava.jpg",
  "/gallery/pomegranate.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-700 uppercase tracking-widest font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Our Products in Action
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            See how our fruit protection covers help farmers produce cleaner,
            healthier and premium-quality fruits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image}
              className="relative h-80 rounded-3xl overflow-hidden shadow-lg group"
            >
              <Image
                src={image}
                alt="Fruit Protection Cover"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}