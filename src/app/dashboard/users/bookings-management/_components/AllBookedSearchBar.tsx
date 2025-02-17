"use client";

import { AlignCenter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AllBookedSearchBar() {
  return (
    <div className="flex w-[327px] md:w-[495px] gap-2 pt-6 md:pt-8 lg:pt-10">
      <div className="relative flex-1 rounded-lg">
        <Search className="absolute left-3 top-1/2 h-[22px] w-[22px] -translate-y-1/2 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Search by name, ord no..."
          className="h-10 w-full rounded-lg border-[1px] border-[#9CA3AF] bg-transparent py-4 pl-10 pr-4 font-inter text-sm leading-[17px] text-[#6B7280] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="hidden md:block">
        <Select defaultValue="status">
          <SelectTrigger className="flex h-10 w-[140px] items-center justify-between rounded-lg border border-[#9CA3AF] px-4 font-inter text-sm leading-[17px] text-[#6B7280]">
            <SelectValue placeholder="status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="upcoming">UpComing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="block md:hidden bg-white p-[11px] rounded-[8px]">
      <AlignCenter className="w-[20px] h-[20px] "/>
      </div>

    </div>
  );
}
