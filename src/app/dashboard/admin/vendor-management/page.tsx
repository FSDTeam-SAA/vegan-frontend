import DashboardPageHeader from "../../_components/dash-page-header";
import VendorManagementContainer from "./_components/vendor-management-container";

const Page = () => {
  return (
    <div>
      <DashboardPageHeader
        title="Vendor Management"
        desc="Efficiently manage and streamline vendor operations."
      />

      <VendorManagementContainer />
    </div>
  );
};

export default Page;
