import dynamic from "next/dynamic";
import DashboardPageHeader from "../_components/dash-page-header";
const PendingVerificationContainer = dynamic(
  () => import("../_components/pending-verification-container"),
  { ssr: false },
);
const AdminOverviewStats = dynamic(() => import("./_components/overview"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Dashboard"
        desc="Get an overview of your performance, earnings, and progress"
      />
      <AdminOverviewStats />

      <PendingVerificationContainer />
    </div>
  );
};

export default Page;
