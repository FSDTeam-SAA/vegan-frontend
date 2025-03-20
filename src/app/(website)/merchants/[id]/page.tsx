import { auth } from "@/auth";
import MerchantCTA from "../_components/cta/merchant_cta";
import MerchantProfileContainer from "./_components/merchant-profile-container";

const Page = async ({ params }: { params: { id: string } }) => {
  const currentUser = await auth();
  return (
    <div>
      <MerchantProfileContainer
        merchatId={params.id}
        loggedinUserId={currentUser?.user?.userId}
      />

      <div className="container">
        <MerchantCTA />
      </div>
    </div>
  );
};

export default Page;
