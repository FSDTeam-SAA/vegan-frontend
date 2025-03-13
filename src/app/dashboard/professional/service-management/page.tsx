import { auth } from "@/auth";
import { StripeConnectionAlert } from "@/components/ui/stripe-connect-alert";
import dynamic from "next/dynamic";
import ServiceManagementHeader from "./_components/ServiceManagementHeader";
const Service = dynamic(() => import("./_components/Service"), { ssr: false });

const Page = async () => {
  const session = await auth();

  if (!session?.user) return;

  const id = session.user.userId || "";
  return (
    <div className="mt-5 min-h-[102vh] px-6 pb-[24px] md:px-8 md:pb-[40px] lg:px-10 lg:pb-[56px]">
      <StripeConnectionAlert
        role="professional"
        rediretTo="/dashboard/professional/payment"
        message="Connect your Stripe account to start receiving payments for your professional services."
        userId={id}
      />
      <ServiceManagementHeader userId={id} />
      <Service id={id} />
    </div>
  );
};

export default Page;
