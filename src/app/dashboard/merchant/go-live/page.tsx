import { auth } from "@/auth";
import { StripeConnectionAlert } from "@/components/ui/stripe-connect-alert";
import { redirect } from "next/navigation";
import GoLive from "../_components/go-live/go-live";

export default async function page() {
  const currentUser = await auth();
  if (!currentUser) redirect("/");
  return (
    <div className="p-8">
      <StripeConnectionAlert
        message="Connect your Stripe account to enable recieve payment"
        userId={currentUser.user.userId}
        rediretTo="/dashboard/merchant/payment"
        role="merchant"
      />
      <GoLive userId={currentUser.user.userId} />
    </div>
  );
}
