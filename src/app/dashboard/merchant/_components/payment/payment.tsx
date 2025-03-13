import PaymentMethod from "@/app/dashboard/professional/payment/_components/PaymentMethod";
import { auth } from "@/auth";
import AccountSetup from "@/components/shared/features/stripe-account-setup/stripe-account-setup";
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

      <AccountSetup userId={currentUser.user.userId} />
      <RevenueOverview />
    </div>
  );
}
