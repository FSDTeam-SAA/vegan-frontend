"use client";
// Packages
import { useState } from "react";

// Local imports
import Search from "@/components/ui/search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import VeganSelector from "@/components/ui/vegan-selector";
import { DropDownItem } from "@/types";
import { ListFilter } from "lucide-react";

const sortByLists = [
  {
    id: 1,
    name: "Latest",
    value: "latest",
  },
  {
    id: 2,
    name: "A-Z",
    value: "a-z",
  },
] as DropDownItem[];

const statusLists = [
  {
    id: 1,
    name: "Approved",
    value: "approved",
  },
  {
    id: 2,
    name: "Pending",
    value: "pending",
  },
  {
    id: 3,
    name: "Declined",
    value: "declined",
  },
] as DropDownItem[];

const typeLists = [
  {
    id: 1,
    name: "Merchant",
    value: "merchant",
  },
  {
    id: 2,
    name: "Professional",
    value: "professional",
  },
  {
    id: 3,
    name: "Organization",
    value: "organization",
  },
] as DropDownItem[];

const VendorManagementFilter = () => {
  const [value, setValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="flex items-center gap-x-[8px]">
      <div className="relative w-[300px] rounded-lg border border-[#9CA3AF]">
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputClassName="bg-transparent"
        />
      </div>
      <div className="hidden items-center gap-x-[8px] md:flex">
        <VeganSelector
          list={sortByLists}
          selectedValue={sortBy}
          onValueChange={(val) => setSortBy(val)}
          placeholder="Sort By: Latest"
        />
        <VeganSelector
          list={statusLists}
          selectedValue={status}
          onValueChange={(val) => setStatus(val)}
          placeholder="Status"
        />
        <VeganSelector
          list={typeLists}
          selectedValue={type}
          onValueChange={(val) => setType(val)}
          placeholder="Type"
        />
      </div>
    </div>
  );
};

export default VendorManagementFilter;

export const VendorManagementFilterMobile = () => {
  const [value, setValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="container flex w-full justify-between gap-[15px] p-0">
      <Search
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full"
        inputClassName="h-[46px] flex-1 "
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
              list={sortByLists}
              selectedValue={sortBy}
              onValueChange={(val) => setSortBy(val)}
              placeholder="Sort By: Latest"
            />
            <VeganSelector
              list={statusLists}
              selectedValue={status}
              onValueChange={(val) => setStatus(val)}
              placeholder="Status"
            />
            <VeganSelector
              list={typeLists}
              selectedValue={type}
              onValueChange={(val) => setType(val)}
              placeholder="Type"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
