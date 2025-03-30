import DashboardHeading from "../../_components/dashboard-heading";
import DeliveryManagementTableContainer from "./delivery-management-table-container";

export default function DeliveryManagement() {
  return (
    <div className="p-10">
      <DashboardHeading
        title="Delivery Management"
        subTitle="Track and manage order fulfilment and delivery."
      />
      <DeliveryManagementTableContainer />
    </div>
  );
}
