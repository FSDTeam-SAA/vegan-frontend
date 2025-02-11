import React from "react";
import EventsManagement from "../_components/go-live/events";
import DashboardHeading from "../_components/dashboard-heading";

export default function page() {
  return (
    <div>
      <DashboardHeading
        title="Events Management"
        subTitle="Manage your events"
      />
      <EventsManagement />
    </div>
  );
}
