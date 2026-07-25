"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images?.[0] || "/placeholder.png"
);

  return (
    <div>
      {/* Main Image */}
      <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt="Product"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {(images || []).map((img) => (
          <button
            key={img}
            onClick={() => setSelectedImage(img)}
            className="relative h-28 rounded-xl overflow-hidden border-2 hover:border-green-600"
          >
            <Image
              src={img}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}