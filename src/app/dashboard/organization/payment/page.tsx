import { auth } from "@/auth";
import AccountSetup from "@/components/shared/features/stripe-account-setup/page";
import PaymentMethod from "../../professional/payment/_components/PaymentMethod";

const Page = async () => {
  const currentUser = await auth();
  if (!currentUser?.user) return;
  return (
    <div>
      <PaymentMethod
        isPaymentAdded={currentUser.user.paymentAdded}
        userId={currentUser.user.userId}
      />

      <AccountSetup />
    </div>
  );
};

export default Page;
