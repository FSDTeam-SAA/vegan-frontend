import React from "react";
import DashboardHeading from "../dashboard-heading";
import DashboardDataTable from "@/app/dashboard/_components/dashboard-data-table";

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
