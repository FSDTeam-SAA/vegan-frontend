import React from "react";
import DashboardDataTable from "../../_components/dashboard-data-table";
import DashboardHeading from "../_components/dashboard-heading";

export default function page() {
  return (
    <div className="p-10">
      <DashboardHeading
        title="Sales Management"
        subTitle="Track and manage your sale orders."
      />
      <DashboardDataTable />
    </div>
  );
}
