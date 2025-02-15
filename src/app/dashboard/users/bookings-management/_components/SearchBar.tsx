import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-[367px]">
      <div className="relative flex-1 rounded-lg">
        <Search className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Search by name, ord no..."
          className="h-10 w-full rounded-lg border-[1px] border-[#9CA3AF] bg-transparent py-[13px] pl-10 pr-4 font-inter text-sm leading-[17px] text-[#6B7280] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
