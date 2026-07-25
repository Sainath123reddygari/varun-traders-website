"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FarmerEnquiryForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    village: "",
    mandal: "",
    district: "",
    crop: "",
    acreage: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }


  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("farmer_enquiries")
      .insert([
        {
          ...form,
          acreage: Number(form.acreage),
          status: "New",
        },
      ]);


    if(error){
      alert(error.message);
    }
    else{
      setSuccess("Enquiry submitted successfully!");
      
      setForm({
        name:"",
        phone:"",
        village:"",
        mandal:"",
        district:"",
        crop:"",
        acreage:"",
        message:"",
      });
    }

    setLoading(false);
  }


  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-5">
        Farmer Enquiry
      </h2>


      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        {[
          ["name","Farmer Name"],
          ["phone","Mobile Number"],
          ["village","Village"],
          ["mandal","Mandal"],
          ["district","District"],
          ["crop","Crop"],
          ["acreage","Land Area (Acres)"],
        ].map(([name,label]) => (

          <input
            key={name}
            name={name}
            value={(form as any)[name]}
            onChange={handleChange}
            placeholder={label}
            className="w-full border rounded-lg p-3"
          />

        ))}


        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full border rounded-lg p-3"
        />


        <button
          disabled={loading}
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >

          {loading ? "Submitting..." : "Submit Enquiry"}

        </button>


        {
          success &&
          <p className="text-green-600">
            {success}
          </p>
        }


      </form>

    </div>

  );
}