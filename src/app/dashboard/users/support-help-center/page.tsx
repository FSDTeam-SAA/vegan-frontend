import React from "react";
import SupportHelpForm from "../_components/SupportHelpCenter/SupportHelpForm";

export default function page() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-[ #1F2937] mb-2 text-2xl font-semibold">
          Support & Help Center
        </h1>
        <p className="text-gray-600">
          Find everything you need to succeed on our platform.
        </p>
      </div>
      <SupportHelpForm />
    </div>
  );
}
