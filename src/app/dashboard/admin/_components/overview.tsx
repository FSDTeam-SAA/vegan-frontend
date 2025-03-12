"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";

type statsOption = "1m" | "3m" | "6m" | "1y" | "lifetime";

const AdminOverviewStats = () => {
  const [active, setActive] = useState<statsOption>("1m");
  return (
    <div className="mt-[40px]">
      <div className="flex w-full justify-end">
        <Tabs
          defaultValue={active}
          onValueChange={(tab) => setActive(tab as statsOption)}
        >
          <TabsList>
            <TabsTrigger value="1m">
              <span className="hidden md:block">1 months</span>
              <span className="md:hidden">1m</span>
            </TabsTrigger>
            <TabsTrigger value="3m">
              <span className="hidden md:block">3 months</span>
              <span className="md:hidden">3m</span>
            </TabsTrigger>
            <TabsTrigger value="6m">
              <span className="hidden md:block">6 months</span>
              <span className="md:hidden">6m</span>
            </TabsTrigger>
            <TabsTrigger value="1y">
              <span className="hidden md:block">1 Year</span>
              <span className="md:hidden">1y</span>
            </TabsTrigger>
            <TabsTrigger value="lifetime">
              <span className="hidden md:block">Lifetime</span>
              <span className="md:hidden">LifeT</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* first part  */}
      <div className="mt-[56px] rounded-[16px] bg-[#F8F5F2] px-6 md:px-[40px] py-8 md:py-[33px]">
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Total Earnings{" "}
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $5800
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Verified Vendors
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              24
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Pending Verifications{" "}
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              5
            </p>
          </div>
        </div>
      </div>

      {/* second part  */}

      <div className="mt-6 rounded-[16px] bg-[#F8F5F2] p-6 md:p-8 lg:p-10">
        <h3 className="text-[20px] font-medium leading-[24.2px] mb-6">
          Earnings Breakdown
        </h3>
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Verification Fees
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            $3200.00
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Onboarding Commission
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            $1800.00
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Referral Bonus
              <EllipsisVertical className="h-[24px] w-[24px] cursor-pointer" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            $800.00
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminOverviewStats;
