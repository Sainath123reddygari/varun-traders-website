"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/products/banana.jpg",
  "/products/guava.jpg",
  "/products/pomegranate.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <FadeIn>
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700">
            Product Gallery
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-12">
            Click on any image to view it in full screen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((image, i) => (
              <div
                key={i}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <Image
                  src={image}
                  alt={'Gallery ${i + 1}'}
                  fill
                  sizes="(max-width:768px)100vw,33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((img) => ({ src: img }))}
          />
        </div>
      </section>
    </FadeIn>
  );
}