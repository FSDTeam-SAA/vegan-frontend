import React from "react";
import CustomerCommunication from "../_components/customer/CustomerCommunication";
import DashboardHeading from "../_components/dashboard-heading";

export default function page() {
  return (
    <div className="min-h-screen p-6">
      <DashboardHeading
        title="Customer Communication"
        subTitle="Add contact options to make it easy for customers to reach out to you"
      />
      <CustomerCommunication />
    </div>
  );
}
