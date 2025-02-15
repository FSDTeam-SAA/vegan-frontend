import React from "react";
import DashboardProfileSettings from "../_components/profile-settings/dashboard-profile";
import DashboardHeading from "../../merchant/_components/dashboard-heading";

export default function page() {
  return (
    <div>
      <DashboardHeading
        title="Profile & Settings"
        subTitle="Manage your account details and personalize your experience."
      />
      <DashboardProfileSettings />
    </div>
  );
}
