"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function MerchantSearch() {
  return (
    <div className="mx-auto flex w-full max-w-[572px] items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="rounded-none border-r-[.5px] border-[#4B5563]"
        >
          <Button
            variant="ghost"
            className="max-w-[113px] gap-2 text-[14px] font-normal leading-[16px] text-[#4B5563]"
          >
            Merchants
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Merchants</DropdownMenuItem>
          <DropdownMenuItem>Featured Merchants</DropdownMenuItem>
          <DropdownMenuItem>New Merchants</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        type="text"
        placeholder="search merchants..."
        className="flex-1 border-0 bg-transparent text-sm font-light leading-[16.94px] tracking-[-3%] text-[#9CA3AF] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm"
      />
      <Button className="bg-[#1D3557] py-[12px] font-inter text-base font-medium leading-[19.36px] hover:bg-[#263c5f] md:px-[31px]">
        Search
      </Button>
    </div>
  );
}
