import PaymentMethod from "@/app/dashboard/merchant/_components/payment/_components/PaymentMethod";
import RevenueOverview from "./_components/RevenueOverview";
import ProfitSharing from "./_components/profit-sharing";

export default async function MerchantPayment() {
  return (
    <div>
      <ProfitSharing />
      <PaymentMethod />
      <RevenueOverview />
    </div>
  );
}
