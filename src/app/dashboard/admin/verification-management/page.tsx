import React from "react";
import DashboardPageHeader from "../../_components/dash-page-header";
import PendingVerifications from "./_components/PendingVerifications";

const Page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Verification Management"
        desc="Streamline approvals and secure authentication with ease."
      />
      <PendingVerifications/>
    </div>
  );
};

export default Page;
