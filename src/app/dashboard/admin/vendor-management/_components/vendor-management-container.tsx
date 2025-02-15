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

      <div className="mt-[24px]">
        <VendorManagementTable />
      </div>
    </div>
  );
};

export default VendorManagementContainer;
