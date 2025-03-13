import PaymentMethod from "@/app/dashboard/professional/payment/_components/PaymentMethod";
import { auth } from "@/auth";
import RevenueOverview from "./_components/RevenueOverview";
import ProfitSharing from "./_components/profit-sharing";

export default async function MerchantPayment() {
  const currentUser = await auth();

  if (!currentUser?.user) return;
  return (
    <div>
      <ProfitSharing />
      <PaymentMethod
        isPaymentAdded={currentUser.user.paymentAdded}
        userId={currentUser.user.userId}
      />
      <RevenueOverview />
    </div>
  );
}
