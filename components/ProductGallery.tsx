"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>

      {/* Main Image */}
      <div
        className="cursor-pointer overflow-hidden rounded-xl"
        onClick={() => setOpen(true)}
      >
        <Image
          src={images[index]}
          alt="Product image"
          width={700}
          height={700}
          className="w-full object-cover hover:scale-105 transition"
        />
      </div>


      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto">

        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`border rounded-lg p-1 ${
              index === i
                ? "border-green-600"
                : "border-gray-200"
            }`}
          >

            <Image
              src={img}
              alt={`thumbnail ${i}`}
              width={80}
              height={80}
              className="rounded object-cover"
            />

          </button>
        ))}

      </div>


      {/* Zoom Viewer */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={
          images.map((src)=>({
            src
          }))
        }
      />

    </div>
  );
}