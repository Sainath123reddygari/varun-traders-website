import EnquiryTable from "@/components/admin/EnquiryTable";
import { supabase } from "@/lib/supabase";

export default async function FarmerEnquiriesPage() {

  const { data: enquiries } = await supabase
    .from("farmer_enquiries")
    .select("*")
    .order("created_at", {
      ascending: false,
    });


  return (

    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Farmer Enquiries
      </h1>
      <EnquiryTable enquiries={enquiries || []} />

      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

        <table className="w-full">

          <thead className="bg-green-700 text-white">

            <tr>

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Phone
              </th>

              <th className="p-3 text-left">
                Location
              </th>

              <th className="p-3 text-left">
                Crop
              </th>

              <th className="p-3 text-left">
                Acres
              </th>

              <th className="p-3 text-left">
                Status
              </th>

            </tr>

          </thead>


          <tbody>

          {enquiries?.map((item)=>(
            
            <tr 
              key={item.id}
              className="border-b"
            >

              <td className="p-3">
                {item.name}
              </td>

              <td className="p-3">
                {item.phone}
              </td>

              <td className="p-3">
                {item.village}, {item.mandal}
              </td>

              <td className="p-3">
                {item.crop}
              </td>

              <td className="p-3">
                {item.acreage}
              </td>

              <td className="p-3">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                  {item.status}
                </span>
              </td>


            </tr>

          ))}

          </tbody>


        </table>

      </div>

    </main>

  );
}