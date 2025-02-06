"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const StoreProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card className="relative max-h-[447px] min-w-[400px] overflow-hidden p-[24px]">
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute right-[36px] top-[36px] z-10 rounded-lg bg-[#99A1AF99]/60 p-1.5 shadow-sm"
      >
        <Heart
          className={`h-4 w-4 ${isLiked ? "fill-[#1D3557] stroke-[#1D3557]" : "stroke-white"}`}
        />
      </button>
      <CardContent className="p-0">
        <div className="h-[232px] w-[352px]">
          <Image
            width={200}
            height={100}
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="h-[232px] w-[352px] rounded-[12px] object-cover transition-transform hover:scale-[102%]"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 px-0 py-2">
        <div className="flex w-full items-start justify-between">
          <div>
            <h3 className="text-[18px] font-normal text-[#1D3557]">
              {product.title}
            </h3>
            <p className="mb-[12px] text-sm text-gray-500">
              {product.description}
            </p>
          </div>
          <span className="text-sm font-semibold">${product.price}</span>
        </div>
        <Button className="w-full bg-[#1a2c4e] hover:bg-[#1a2c4e]/90">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoreProductCard;
