import { auth } from "@/auth";
import { StripeConnectionAlert } from "@/components/ui/stripe-connect-alert";
import dynamic from "next/dynamic";
import PaymentHeader from "./_components/PaymentHeader";
import PaymentMethod from "./_components/PaymentMethod";
import ProfitSharing from "./_components/ProfitSharing";
import RevenueOverview from "./_components/RevenueOverview";
const AccountSetup = dynamic(
  () =>
    import(
      "@/components/shared/features/stripe-account-setup/stripe-account-setup"
    ),
  { ssr: false },
);

const Page = async () => {
  const currentUser = await auth();

  if (!currentUser?.user) return;
  return (
    <div className="px-6 pb-[24px] pt-[32px] md:px-8 md:pb-[40px] md:pt-[40px] lg:px-10 lg:pb-[56px]">
      <StripeConnectionAlert
        rediretTo="#accountSetup"
        message="Connect your Stripe account to enable payments."
        userId={currentUser.user.userId}
        role="professional"
      />
      <PaymentHeader />
      <ProfitSharing />
      <PaymentMethod
        isPaymentAdded={currentUser.user.paymentAdded}
        userId={currentUser.user.userId}
      />
      <AccountSetup userId={currentUser.user.userId} />
      <RevenueOverview />
    </div>
  );
};

export default Page;
