import { CheckCircle } from "lucide-react";

interface ProductSpecsProps {
  specs: {
    title: string;
    value: string;
  }[];
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-green-700 mb-8">
        Product Specifications
      </h2>

      <div className="overflow-hidden rounded-xl border">

        <table className="w-full">

          <tbody>
            {(specs || []).map((spec) => (
              <tr
                key={spec.title}
                className="border-b last:border-b-0 hover:bg-green-50 transition"
              >

                <td className="p-5 flex items-center gap-3 font-semibold text-gray-800">

                  <CheckCircle
                    className="text-green-600 flex-shrink-0"
                    size={22}
                  />

                  {spec.title}

                </td>


                <td className="p-5 text-gray-600">
                  {spec.value}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}