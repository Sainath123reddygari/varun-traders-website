"use client";

import { useState } from "react";

export default function EnquiryTable({ enquiries }: any) {

  const [search, setSearch] = useState("");

  const filteredEnquiries = enquiries.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.phone.includes(search) ||
    item.village?.toLowerCase().includes(search.toLowerCase()) ||
    item.crop?.toLowerCase().includes(search.toLowerCase())
  );

  async function updateStatus(id:string,status:string){

    const response = await fetch("/api/enquiries/status",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        id,
        status,
      }),
    });


    if(response.ok){
      window.location.reload();
    }

  }

  return (
    <div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search farmer, phone, village, crop..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3 mb-5"
      />


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

              <th className="p-3 text-left">
                Actions
              </th>

            </tr>

          </thead>


          <tbody>

          {filteredEnquiries.map((item:any)=>(

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

                <select
                  value={item.status}
                onChange={(e)=>updateStatus(item.id,e.target.value)}
                  className="border rounded p-2"
                >

                  <option>
                    New
                  </option>

                  <option>
                    Contacted
                  </option>

                  <option>
                    Interested
                  </option>

                  <option>
                    Order Placed
                  </option>

                  <option>
                    Closed
                  </option>

                </select>

              </td>

              <td className="p-3 flex gap-2">

                <a
                  href={`tel:${item.phone}`}
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                >
                  📞 Call
                </a>


                <a
              href={`https://wa.me/91${item.phone}?text=Hello ${item.name}, this is Varun Traders regarding your fruit protection cover enquiry.`}
                  target="_blank"
                  className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700"
                >
                  💬 WhatsApp
                </a>

              </td>


            </tr>
        
          ))}


          </tbody>

        </table>

      </div>

    </div>
  );
}