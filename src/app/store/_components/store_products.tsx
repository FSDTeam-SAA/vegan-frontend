"use client";
import StoreProductCard from "@/components/shared/cards/store-product-card";
import VeganSelector from "@/components/ui/vegan-selector";
import { products } from "@/data/StoreProducts";
import { DropDownItem } from "@/types";
import { useState } from "react";

export const productCategoryList = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "T-shirt",
    value: "tshirt",
  },
  {
    id: 3,
    name: "Pant",
    value: "pant",
  },
  {
    id: 4,
    name: "Shoes",
    value: "shoes",
  },
] as DropDownItem[];

const StoreProducts = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className="">
      <div className="mb-[40px] mt-[80px] flex w-full justify-between">
        <h3 className="font-lexend text-[32px] font-medium leading-[46.4px] text-[#1E2939]">
          Shop Our Products
        </h3>
        <VeganSelector
          list={productCategoryList}
          selectedValue={category}
          onValueChange={(val) => setCategory(val)}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 pb-[72px] sm:grid-cols-2 lg:grid-cols-3 lg:pb-[152px]">
        {products.map((product) => (
          <StoreProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StoreProducts;
