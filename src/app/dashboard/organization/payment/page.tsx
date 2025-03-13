import { auth } from "@/auth";
import dynamic from "next/dynamic";
import PaymentMethod from "../../professional/payment/_components/PaymentMethod";
const AccountSetup = dynamic(
  () =>
    import(
      "@/components/shared/features/stripe-account-setup/stripe-account-setup"
    ),
  {
    ssr: false,
  },
);

const Page = async () => {
  const currentUser = await auth();
  if (!currentUser?.user) return;
  return (
    <div>
      <PaymentMethod
        isPaymentAdded={currentUser.user.paymentAdded}
        userId={currentUser.user.userId}
      />

      <AccountSetup userId={currentUser.user.userId} />
    </div>
  );
};

export default Page;
