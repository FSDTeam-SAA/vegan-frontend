import { auth } from "@/auth";
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
    </div>
  );
};

export default Page;
