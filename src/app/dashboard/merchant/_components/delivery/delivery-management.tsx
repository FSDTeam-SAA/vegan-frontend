import React from "react";
import DashboardDataTable from "@/app/dashboard/_components/dashboard-data-table";
import DashboardHeading from "../dashboard-heading";

export default function DeliveryManagement() {
  return (
    <div className="p-10">
      <DashboardHeading
        title="Delivery Management"
        subTitle="Track and manage order fulfilment and delivery."
      />
      <DashboardDataTable />
    </div>
  );
}
