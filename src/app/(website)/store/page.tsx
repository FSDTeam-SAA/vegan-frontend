import EarnMoreCard from "../profit-calculator/_components/earn-more-card";
import StoreHeader from "./_components/store-header";
import StoreProducts from "./_components/store_products";
import StoreVideo from "./_components/store_video";

const Page = () => {
  
  return (
    <>
      <StoreHeader />
      <div className="container">
        <StoreVideo />
        <StoreProducts />

        <div className="py-[50px] lg:py-[80px]">
          <EarnMoreCard />
        </div>
      </div>
    </>
  );
};

export default Page;
