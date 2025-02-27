"use client";
import Search from "@/components/ui/search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import VeganSelector from "@/components/ui/vegan-selector";
import { useMerchantProductFilter } from "@/zustand/merchant/merchant-product-filter";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import { categoryList, reviewsList } from "./data";

const MerchantProductFilter = () => {
  // state handle
  const { value, setValue, category, setCategory } = useMerchantProductFilter();

  return (
    <div className="container flex justify-start gap-x-[24px]">
      <div>
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
          inputClassName="h-[40px] min-w-[222px] md:min-w-[335px]"
          iconClassName="top-3"
        />
      </div>
      <VeganSelector
        list={categoryList}
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
        className="max-w-[150px]"
      />
      {/* <VeganSelector
        list={reviewsList}
        selectedValue={reviews}
        onValueChange={(value) => setReviews(value)}
        className="max-w-fit"
      /> */}
    </div>
  );
};

export default MerchantProductFilter;

export const MerchantProductFilterMobile = () => {
  const [reviews, setReviews] = useState("5_star");
  const { value, setValue, category, setCategory } = useMerchantProductFilter();
  return (
    <div className="container flex justify-start gap-x-[24px]">
      <div>
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
          inputClassName="h-[40px] w-full w-[277px] md:w-auto md:max-w-[222px]"
          iconClassName="top-3"
        />
      </div>

      <Sheet>
        <SheetTrigger>
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] border-[0.8px] border-[#F3F4F6] bg-white hover:bg-white/90">
            <ListFilter className="text-[#000000]" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Filter</SheetTitle>
          </SheetHeader>

          <div className="space-y-6 pt-[20px]">
            <VeganSelector
              list={categoryList}
              selectedValue={category}
              onValueChange={(value) => setCategory(value)}
              className="w-full md:max-w-[150px]"
            />
            <VeganSelector
              list={reviewsList}
              selectedValue={reviews}
              onValueChange={(value) => setReviews(value)}
              className="w-full md:max-w-fit"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
