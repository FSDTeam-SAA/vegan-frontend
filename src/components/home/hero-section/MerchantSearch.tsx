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
    <div className="mx-auto flex w-full max-w-[572px] items-center gap-2 rounded-lg bg-white p-1.5 shadow-sm">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="rounded-none border-r-[.5px] border-[#4B5563] py-[25px]"
        >
          <Button
            variant="ghost"
            className="max-w-[113px] gap-2 text-[14px] font-[14px] leading-[16px] text-[#4B5563]"
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
        className="flex-1 border-0 bg-transparent text-xs text-[#9CA3AF] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 md:text-sm"
      />
      <Button className="bg-[#1D3557] py-[12px] font-medium hover:bg-[#263c5f] md:px-[31px]">
        Search
      </Button>
    </div>
  );
}
