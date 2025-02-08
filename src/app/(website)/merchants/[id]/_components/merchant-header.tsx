import CartModal from "@/provider/CartModal";
import { Star } from "lucide-react";
import { BiShoppingBag } from "react-icons/bi";

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
        <CartModal
          trigger={
            <div className="relative hidden pr-0 *:text-[#1D3557] md:flex">
              View Cart
              <BiShoppingBag className="h-[15.5px] w-[19.1px] text-white" />
              <span className="absolute -right-2 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#1D3557] text-[7.5px] font-light !text-white">
                2
              </span>
            </div>
          }
        />
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
