import React from "react";
import DashboardDataTable from "@/app/dashboard/_components/dashboard-data-table";

export default function DeliveryManagement() {
  return (
    <div className="p-10">
      <header className="md:mb-[56px]">
        <h1 className="font-inter text-xl font-semibold leading-[29px] text-[#1F2937] md:text-2xl md:leading-[34.8px]">
          Delivery Management
        </h1>
        <h3 className="font-inter text-sm font-normal leading-[20.3px] text-[#475367] md:text-base md:leading-6">
          Track and manage order fulfilment and delivery.
        </h3>
      </header>
      <DashboardDataTable />
    </div>
  );
}
