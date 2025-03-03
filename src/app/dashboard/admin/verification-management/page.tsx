import dynamic from "next/dynamic";
import DashboardPageHeader from "../../_components/dash-page-header";
const PendingVerifications = dynamic(
  () => import("./_components/PendingVerifications"),
  { ssr: false },
);

const Page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Verification Management"
        desc="Streamline approvals and secure authentication with ease."
      />
      <PendingVerifications />
    </div>
  );
};

export default Page;
