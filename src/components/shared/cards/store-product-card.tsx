"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const StoreProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="relative max-h-[447px] w-[400px] overflow-hidden rounded-[16px] bg-white p-[24px]">
      <Button
        size="icon"
        onClick={() => setIsLiked(!isLiked)}
        className="absolute right-[36px] top-[36px] z-10 rounded-lg bg-[#99A1AF99]/60 p-1.5 shadow-sm hover:bg-[#99A1AF99]/90"
      >
        <Heart
          className={`h-4 w-4 ${isLiked ? "fill-[#1D3557] stroke-[#1D3557]" : "stroke-white"}`}
        />
      </Button>
      <div className="p-0">
        <div className="h-[232px] w-full rounded-[12px]">
          <Image
            width={200}
            height={100}
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-[232px] w-[352px] rounded-[12px] object-cover transition-transform hover:scale-[102%]"
          />
        </div>
      </div>
      <div className="mt-[24px] flex flex-col gap-2 px-0">
        <div className="flex w-full items-start justify-between">
          <div>
            <h3 className="text-[18px] font-normal text-[#1D3557]">
              {product.title}
            </h3>
            <p className="mb-[16px] text-[16px] text-[#4B5563]">
              {product.description}
            </p>
          </div>
          <span className="text-[22px] font-medium leading-[26.63px] text-[#1E2939]">
            ${product.price}
          </span>
        </div>
        <Button className="h-[40px] w-full rounded-[8px] bg-[#1D3557] transition-colors duration-300 hover:bg-[#1D3557]/90 md:h-[46px]">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default StoreProductCard;
