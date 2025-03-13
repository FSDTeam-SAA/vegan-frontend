import { auth } from "@/auth";
import { StripeConnectionAlert } from "@/components/ui/stripe-connect-alert";
import { redirect } from "next/navigation";
import VideoTutorials from "../help-center-support/_components/VideoTutorials";
import GoLive from "./_components/go-live";

const Page = async () => {
  const currentUser = await auth();
  if (!currentUser) redirect("/onboarding");
  return (
    <div className="mt-5 px-[24px] md:px-[32px] lg:px-[40px]">
      <StripeConnectionAlert
        rediretTo="/dashboard/professional/payment"
        message="Connect your Stripe account to enable payments and start receiving payments seamlessly."
        userId={currentUser.user.userId}
        role="professional"
      />
      <div className="mt-[48px]">
        <GoLive />
      </div>

      <div className="mt-[56px]">
        <VideoTutorials />
      </div>
    </div>
  );
};

export default Page;
