import MerchantCTA from "../_components/cta/merchant_cta";
import MerchantProfileContainer from "./_components/merchant-profile-container";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <MerchantProfileContainer merchatId={params.id} />

      <div className="container">
        <MerchantCTA />
      </div>
    </div>
  );
};

export default Page;
