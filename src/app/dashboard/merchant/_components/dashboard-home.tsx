"use client";

import DashboardRevenue from "./revenue";
import EarningsDynamicChart from "./earning";
import ReferralTracking from "./ReferralTracking";
import TopMerchantBoard from "../../_components/TopMerchantBoard";
import { MerchantLeaderBoardData } from "@/data/top-merchant";
import DashboardHeading from "./dashboard-heading";

export default function Dashboard() {
  return (
    <div className="space-y-10 md:space-y-14">
      <DashboardHeading
        title="Dashboard"
        subTitle="Get an overview of your performance, earnings, and progress"
      />
      <DashboardRevenue />

      <EarningsDynamicChart />
      <ReferralTracking />
      <TopMerchantBoard LeaderBoardData={MerchantLeaderBoardData} />
    </div>
  );
}
