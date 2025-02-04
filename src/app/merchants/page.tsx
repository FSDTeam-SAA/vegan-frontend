import VeganHeader from "@/components/shared/sections/VeganHeader";
import HowWeVerify from "../professionals/_components/how-we-verify/how-we-verify";
import MerchantCTA from "./_components/cta/merchant_cta";
import MerchantContainer from "./_components/merchant-container";
import MerchantFilterContainer, {
  MerchantFilterContainerMobile,
} from "./_components/merchants-filter-container";

const Page = () => {
  return (
    <div>
      <VeganHeader
        img="https://res.cloudinary.com/dgnustmny/image/upload/v1738649578/vegan-header_ufz7o8.png"
        heading="Find a Merchant"
        subheading="Connect with expert vegan professionals for personalized guidiance"
      />
      <div className="container mb-[109px] mt-[70px] hidden lg:block">
        <MerchantFilterContainer />
      </div>
      <div className="mb-[40px] mt-[24px] lg:hidden">
        <MerchantFilterContainerMobile />
      </div>
      <MerchantContainer />

      <div>
        <HowWeVerify />
        <MerchantCTA />
      </div>
    </div>
  );
};

export default Page;
