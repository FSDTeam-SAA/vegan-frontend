import VendorManagementFilter, {
  VendorManagementFilterMobile,
} from "./vendor-management-filter";
import VendorManagementTable from "./vendor-management-table";

const VendorManagementContainer = () => {
  return (
    <div className="mt-[56px]">
      <div className="hidden md:block">
        <VendorManagementFilter />
      </div>
      <div className="md:hidden">
        <VendorManagementFilterMobile />
      </div>

      <div className="mt-[24px] pb-[152px] md:pb-0">
        <VendorManagementTable />
      </div>
    </div>
  );
};

export default VendorManagementContainer;
