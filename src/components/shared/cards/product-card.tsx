import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="h-[539px] w-full space-y-[24px] rounded-[16px] bg-white p-[24px] md:h-[484px] lg:w-[400px]">
      <div className="relative h-[232px] w-full rounded-[12px]">
        <Image
          alt="product"
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738734198/pexels-misolo-cosmetic-2588316-6847880_fahwlo.png"
          fill
          className="rounded-[12px] object-cover"
        />
      </div>
      <div className="flex h-[235px] flex-col justify-between md:h-[180px]">
        <div>
          <div className="flex justify-between">
            <h3 className="font-lexend text-[18px] font-normal leading-[22.2px] text-[#1D3557]">
              Organic Quinoa
            </h3>
            <Button
              size="icon"
              variant="outline"
              className="flex-initial border-none"
            >
              <Heart />
            </Button>
          </div>
          <p className="mt-[8px] font-inter text-[16px] font-normal leading-[24px] text-[#4B5563]">
            Premium organic quinoa sourced from sustainable farms
          </p>
          <div className="mt-[12px] flex items-center gap-x-[4px] text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            <Heart
              fill="#FACC15"
              stroke="#FACC15"
              className="h-[18px] w-[19.02px]"
            />
            <span>4.8 (127)</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-y-[25px] md:flex-row md:items-center">
          <h3 className="font-inter text-[22px] font-medium leading-[26.63px] text-[#4B5563]">
            $19.99
          </h3>
          <Button className="h-[48px] w-full rounded-[8px] bg-[#1D3557] font-inter text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90 md:w-auto">
            <ShoppingCart />
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
