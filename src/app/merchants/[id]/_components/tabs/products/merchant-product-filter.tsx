"use client";
import Search from "@/components/ui/search";
import VeganSelector from "@/components/ui/vegan-selector";
import { useState } from "react";
import { categoryList, reviewsList } from "./data";

const MerchantProductFilter = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("expertise");
  const [reviews, setReviews] = useState("5_star");
  return (
    <div className="container flex justify-start gap-x-[24px]">
      <div>
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full"
          inputClassName="h-[40px] max-w-[222px]"
          iconClassName="top-3"
        />
      </div>
      <VeganSelector
        list={categoryList}
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
        className="max-w-[150px]"
      />
      <VeganSelector
        list={reviewsList}
        selectedValue={reviews}
        onValueChange={(value) => setReviews(value)}
        className="max-w-fit"
      />
    </div>
  );
};

export default MerchantProductFilter;
