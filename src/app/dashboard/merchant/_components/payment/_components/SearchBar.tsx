"use client";

import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchHeader() {
  return (
    <div className="flex w-[495px] gap-2 p-2 md:pt-10">
      <div className="relative flex-1 rounded-lg">
        <Search className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Search by name, ord no..."
          className="h-10 w-full rounded-lg border-[1px] border-[#9CA3AF] bg-transparent py-4 pl-10 pr-4 font-inter text-sm leading-[17px] text-[#6B7280] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>
      <Select defaultValue="this-week">
        <SelectTrigger className="flex h-10 w-[140px] items-center justify-between rounded-lg border border-[#9CA3AF] px-4 font-inter text-sm leading-[17px] text-[#6B7280]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="last-week">Last Week</SelectItem>
          <SelectItem value="this-month">This Month</SelectItem>
          <SelectItem value="last-month">Last Month</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
