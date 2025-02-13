import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import React from "react";

export default function DashboardRevenue() {
  return (
    <div>
      <div className="grid gap-6 rounded-xl bg-[#F8F5F2] p-6 md:grid-cols-3 md:p-10">
        <Card className="bg-transparent shadow-none">
          <CardHeader className="flex flex-row items-center justify-between px-4 pb-2 pt-4">
            <CardTitle className="text-sm font-normal text-[#6B7280] md:pb-4">
              Total Earnings
            </CardTitle>
            <button className="hidden text-gray-400 hover:text-gray-500 md:block">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent className="p-4 pb-3 md:pt-0">
            <div className="mb-[26px] font-inter text-[30px] font-medium leading-[36.31px] text-[#1F2937]">
              $9,705.21
            </div>
            <Button className="font-base w-full bg-[#1D3557] py-[13px] font-inter font-medium leading-[19.36px] hover:bg-[#13243b]">
              Withdraw Earnings
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-between bg-transparent shadow-none">
          <CardHeader className="flex flex-row items-center justify-between px-4 pb-2 pt-4">
            <CardTitle className="pb-4 text-sm font-normal text-[#6B7280]">
              Product Sales Earnings
            </CardTitle>
            <button className="hidden text-gray-400 hover:text-gray-500 md:block">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent className="px-4">
            <div className="font-inter text-[30px] font-medium leading-[36.31px] text-[#1F2937]">
              $8,459.32
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <p className="text-sm font-normal text-[#6B7280]">
              +15% from last month
            </p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-between bg-transparent shadow-none">
          <CardHeader className="flex flex-row items-center justify-between px-4 pb-2 pt-4">
            <CardTitle className="pb-4 text-sm font-normal text-[#6B7280]">
              Referral Earnings
            </CardTitle>
            <button className="hidden text-gray-400 hover:text-gray-500 md:block">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent className="px-4">
            <div className="font-inter text-[30px] font-medium leading-[36.31px] text-[#1F2937]">
              $1,245.89
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <p className="text-sm font-normal text-[#6B7280]">
              32 active referrals
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
