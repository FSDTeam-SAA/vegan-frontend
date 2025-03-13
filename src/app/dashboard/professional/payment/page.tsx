import { auth } from "@/auth";
import PaymentHeader from "./_components/PaymentHeader";
import PaymentMethod from "./_components/PaymentMethod";
import ProfitSharing from "./_components/ProfitSharing";
import RevenueOverview from "./_components/RevenueOverview";

const Page = async () => {
  const currentUser = await auth();

  if (!currentUser?.user) return;
  return (
    <div className="px-6 pb-[24px] pt-[32px] md:px-8 md:pb-[40px] md:pt-[40px] lg:px-10 lg:pb-[56px]">
      <PaymentHeader />
      <ProfitSharing />
      <PaymentMethod
        isPaymentAdded={currentUser.user.paymentAdded}
        userId={currentUser.user.userId}
      />
      <RevenueOverview />
    </div>
  );
};

export default Page;
