"use client";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

const categories = [
  "All",
  "Fruit Covers",
  "Crop Protection",
  "Ground Protection",
];

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={
            selected === category
              ? "px-5 py-2 rounded-full font-medium bg-green-700 text-white"
              : "px-5 py-2 rounded-full font-medium border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}