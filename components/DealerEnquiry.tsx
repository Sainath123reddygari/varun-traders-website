"use client";

import { useState } from "react";

export default function DealerEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const message = '🏢 Dealer Enquiry'

    'Company: ${data.get("company")}'
    'Contact Person: ${data.get("name")}'
    'Mobile: ${data.get("phone")}'
    'City: ${data.get("city")}'
    'Requirement: ${data.get("requirement")}'
    ;
    window.open(
      'https://wa.me/919834234638?text=${encodeURIComponent(message)}',
      "_blank"
    );

    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section
      id="dealer"
      className="bg-green-700 text-white py-16 rounded-2xl my-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Become Our Dealer / Distributor
        </h2>

        <p className="mb-8">
          Join Varun Traders and grow your agricultural business with our premium products.
        </p>

        {submitted ? (
          <div className="bg-white text-green-700 rounded-xl p-6 font-semibold">
            Thank you! Your enquiry has been sent.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              name="company"
              placeholder="Company Name"
              className="p-3 rounded text-black"
              required
            />

            <input
              name="name"
              placeholder="Contact Person"
              className="p-3 rounded text-black"
              required
            />

            <input
              name="phone"
              placeholder="Mobile Number"
              className="p-3 rounded text-black"
              required
            />

            <input
              name="city"
              placeholder="City"
              className="p-3 rounded text-black"
              required
            />

            <textarea
              name="requirement"
              placeholder="Tell us about your requirement..."
              className="p-3 rounded text-black"
              rows={4}
            />

            <button
              type="submit"
              className="bg-white text-green-700 font-bold py-3 rounded-lg"
            >
              Send Dealer Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}