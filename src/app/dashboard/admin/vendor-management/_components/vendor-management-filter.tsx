"use client";
// Packages

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
import {
  useVendorManagementState,
  VendorProfileType,
  VendorStatus,
} from "@/zustand/admin/vendor-management";
import { ListFilter } from "lucide-react";

const sortByLists = [
  {
    id: 1,
    name: "Ascending",
    value: "asc",
  },
  {
    id: 2,
    name: "Descending",
    value: "desc",
  },
] as DropDownItem[];

interface StatusLists {
  id: number;
  name: string;
  value: VendorStatus;
}

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
    value: "rejected",
  },
  {
    id: 4,
    name: "All",
    value: "all",
  },
] as StatusLists[];

interface ProfileTypeList {
  id: number;
  name: string;
  value: VendorProfileType;
}

const profileTypeList = [
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
  {
    id: 4,
    name: "All",
    value: "all",
  },
] as ProfileTypeList[];
const VendorManagementFilter = () => {
  const {
    value,
    setValue,
    profile,
    setProfile,
    status,
    setStatus,
    sortBy,
    setSortBy,
  } = useVendorManagementState();
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
          list={profileTypeList}
          selectedValue={profile}
          onValueChange={(val: string) => setProfile(val as VendorProfileType)}
          placeholder="Type"
        />
        <VeganSelector
          list={statusLists}
          selectedValue={status}
          onValueChange={(val) => setStatus(val as VendorStatus)}
          placeholder="Status"
        />
        <VeganSelector
          list={sortByLists}
          selectedValue={sortBy}
          onValueChange={(val) => setSortBy(val)}
          placeholder="Sort By: Latest"
        />
      </div>
    </div>
  );
};

export default VendorManagementFilter;

export const VendorManagementFilterMobile = () => {
  const {
    profile,
    setProfile,
    status,
    setStatus,
    value,
    setValue,
    sortBy,
    setSortBy,
  } = useVendorManagementState();
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
              onValueChange={(val) => setStatus(val as VendorStatus)}
              placeholder="Status"
            />
            <VeganSelector
              list={profileTypeList}
              selectedValue={profile}
              onValueChange={(val) => setProfile(val as VendorProfileType)}
              placeholder="Type"
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
