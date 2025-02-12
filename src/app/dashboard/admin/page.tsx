import DashboardPageHeader from "../_components/dash-page-header";
import PendingVerificationContainer from "../_components/pending-verification-container";
import AdminOverviewStats from "./_components/overview";

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
