import ProfileCartButton from "@/app/(website)/professionals/[id]/_components/tabs/profile-cart-button";
import { Star } from "lucide-react";

const MerchantHeader = () => {
  return (
    <div className="container my-[58px] flex h-[71px] items-center justify-between">
      <div className="space-y-[8px] lg:space-y-[12px]">
        <div className="flex items-center gap-x-[32px]">
          <h1 className="font-lexend text-[18px] font-medium leading-[26.1px] text-[#1D3557] lg:text-[24px] lg:leading-[34.8px]">
            Green Earth Organics
          </h1>
          <div className="hidden md:block">
            <Review />
          </div>
        </div>
        <p className="font-inter text-[16px] font-normal leading-[24.2px] text-[#4B5563] lg:text-[20px]">
          Sustainable and ethical vegan products for conscious consumers
        </p>

        <div className="md:hidden">
          <Review />
        </div>
      </div>

      <div>
        <ProfileCartButton />
      </div>
    </div>
  );
};

export default MerchantHeader;

const Review = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Star
        fill="#FACC15"
        stroke="#FACC15"
        className="h-[19.02px] w-[19.02px]"
      />
      <span className="font-inter text-[14px] font-normal leading-[24.2px] text-[#4B5563] lg:text-[20px]">
        4.8 (127 Reviews)
      </span>
    </div>
  );
};
