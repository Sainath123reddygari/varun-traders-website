import { CheckCircle } from "lucide-react";

interface ProductSpecsProps {
  specs: {
    title: string;
    value: string;
  }[];
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Product Specifications
      </h2>

      <div className="space-y-4">
        {(specs || []).map((spec) => (
          <div
            key={spec.title}
            className="flex items-center gap-3 border-b pb-3"
          >
            <CheckCircle className="text-green-600" size={22} />

            <div>
              <p className="font-semibold text-gray-800">
                {spec.title}
              </p>

              <p className="text-gray-600">
                {spec.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}