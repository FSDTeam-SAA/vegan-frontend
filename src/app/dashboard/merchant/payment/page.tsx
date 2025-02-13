import React from "react";
import DashboardHeading from "../_components/dashboard-heading";
import MerchantPayment from "../_components/payment/payment";

export default function page() {
  return (
    <div className="p-6">
      <DashboardHeading
        title="Payments & Revenue"
        subTitle="Keep track of your earnings, breakdowns, and payout preferences."
      />
      <MerchantPayment />
    </div>
  );
}
