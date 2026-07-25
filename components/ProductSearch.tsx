"use client";

import { useState } from "react";

interface ProductSearchProps {
  onSearch: (value: string) => void;
}

export default function ProductSearch({
  onSearch,
}: ProductSearchProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}