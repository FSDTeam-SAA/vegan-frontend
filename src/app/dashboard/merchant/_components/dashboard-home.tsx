import { auth } from "@/auth";
import { MerchantLeaderBoardData } from "@/data/top-merchant";
import TopMerchantBoard from "../../_components/TopMerchantBoard";
import DashboardHeading from "./dashboard-heading";
import EarningsDynamicChart from "./earning";
import ReferralTracking from "./ReferralTracking";
import DashboardRevenue from "./revenue";

export default async function Dashboard() {
  const user = await auth();
  if (!user) return;
  return (
    <div className="space-y-10 md:space-y-14">
      <DashboardHeading
        title="Dashboard"
        subTitle="Get an overview of your performance, earnings, and progress"
      />
      <DashboardRevenue />

      <EarningsDynamicChart />
      <ReferralTracking userId={user.user.userId} />
      <TopMerchantBoard LeaderBoardData={MerchantLeaderBoardData} />
    </div>
  );
}
