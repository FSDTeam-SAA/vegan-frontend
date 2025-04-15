"use client";

import ReferralTracking from "@/app/dashboard/merchant/_components/ReferralTracking";
import StatsDashboard from "./StatsDashboard";

interface Props {
  userId: string;
}

const Dashboard = ({ userId }: Props) => {
  return (
    <div className="space-y-8 p-2">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Overview</h1>
        <p className="text-gray-600">
          Get an overview of your performance, earnings, and progress
        </p>
      </div>

      {/* Dashboard Status  */}
      <StatsDashboard userId={userId} />

      <ReferralTracking userId={userId} />

      {/* <ReferralEarningsChart /> */}
    </div>
  );
};

export default Dashboard;
