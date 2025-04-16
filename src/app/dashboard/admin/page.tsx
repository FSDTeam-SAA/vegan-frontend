import dynamic from "next/dynamic";
import DashboardPageHeader from "../_components/dash-page-header";
const AdminOverviewStats = dynamic(() => import("./_components/overview"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Overview"
        desc="Get an overview of your performance, earnings, and progress"
      />
      <AdminOverviewStats />

      {/* <div className="pb-2 md:pb-[30px]">
      <PendingVerificationContainer />
      </div> */}
    </div>
  );
};

export default Page;
