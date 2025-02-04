"use client";

//Packages
import { useState } from "react";

// Local imports
import { PriceRangeSelector } from "@/components/ui/price-range-selector";
import Search from "@/components/ui/search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import VeganSelector from "@/components/ui/vegan-selector";
import { ListFilter } from "lucide-react";
import { categoryList, LocationList, SortByList } from "./data";

const ProfessionalFilterContainer = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("expertise");
  const [location, setLocation] = useState("washington");
  const [sortBy, setSortBy] = useState("newest");
  const [price, setPrice] = useState<number[]>([0, 50]);
  return (
    <div className="flex items-center gap-x-[32px]">
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full min-w-[353px]"
        inputClassName="h-[40px] "
      />
      <VeganSelector
        list={categoryList}
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
      />
      <VeganSelector
        list={LocationList}
        selectedValue={location}
        onValueChange={(value) => setLocation(value)}
      />
      <PriceRangeSelector
        minPrice={20}
        maxPrice={800}
        step={10}
        defaultValue={[price[0], price[1]]}
        onRangeChange={(range) => setPrice(range)}
      />
      <VeganSelector
        list={SortByList}
        selectedValue={sortBy}
        onValueChange={(value) => setSortBy(value)}
      />
    </div>
  );
};

export default ProfessionalFilterContainer;

export const ProfessionalFilterContainerMobile = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("expertise");
  const [location, setLocation] = useState("washington");
  const [sortBy, setSortBy] = useState("newest");
  const [price, setPrice] = useState<number[]>([0, 50]);
  return (
    <div className="container flex w-full items-center gap-[5px]">
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full"
        inputClassName="h-[46px] max-w-[353px]"
        iconClassName="top-3.5"
      />
      <Sheet>
        <SheetTrigger>
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[8px] border-[0.8px] border-[#F3F4F6] bg-white hover:bg-white/90">
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
            />
            <VeganSelector
              list={LocationList}
              selectedValue={location}
              onValueChange={(value) => setLocation(value)}
            />
            <PriceRangeSelector
              minPrice={20}
              maxPrice={800}
              step={10}
              defaultValue={[price[0], price[1]]}
              onRangeChange={(range) => setPrice(range)}
            />
            <VeganSelector
              list={SortByList}
              selectedValue={sortBy}
              onValueChange={(value) => setSortBy(value)}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
