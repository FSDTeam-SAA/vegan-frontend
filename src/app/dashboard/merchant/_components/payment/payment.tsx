import React from "react";
import ProfitSharing from "./_components/ProfitSharing";
import PaymentMethod from "@/app/dashboard/merchant/_components/payment/_components/PaymentMethod";
import RevenueOverview from "./_components/RevenueOverview";

export default function MerchantPayment() {
  return (
    <div>
      <ProfitSharing />
      <PaymentMethod />
      <RevenueOverview />
    </div>
  );
}
