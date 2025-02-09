"use client";

import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const ChoseStoresList = [
  { id: 1, name: "Chose stores", value: "Chose stores" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];
const FilterByCtegoryList = [
  { id: 1, name: "Chose Date Range", value: "Filter By category" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];

function StoreFilter() {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [stores, setStores] = useState<string>("Chose stores"); // Default to "auctions"
  const [ctegorys, setCtegorys] = useState<string>("Filter By category"); // Default to "auctions"

  return (
    <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] bg-white p-[8px]">
      {/* Dropdown for "Show" */}
      <div className="flex gap-x-[28px]">
        <div className="flex h-full w-fit items-center gap-x-[9px]">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Show
          </span>
          <PacificDropdownSelector
            list={showList}
            selectedValue={show}
            onValueChange={setShow}
          />
        </div>
        {/* Dropdown for "Categories" */}
        <div className="flex h-full items-center gap-2">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Entries
          </span>
          <PacificDropdownSelector
            list={ChoseStoresList}
            selectedValue={stores}
            onValueChange={setStores}
          />
        </div>
        <div className="flex h-full items-center gap-2">
          <PacificDropdownSelector
            list={FilterByCtegoryList}
            selectedValue={ctegorys}
            onValueChange={setCtegorys}
          />
        </div>
      </div>
      <div>
        <button className="rounded-lg bg-primary px-[20px] py-[9px] text-[#F5F5F5]">
          Bulk Delete
        </button>
      </div>
    </div>
  );
}

export default StoreFilter;
