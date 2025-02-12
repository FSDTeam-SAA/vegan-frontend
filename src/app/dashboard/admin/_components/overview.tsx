"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import StatsCard from "./stats-card";

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
              <span className="md:hidden">Life</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-[24px] grid w-full grid-cols-1 gap-[16px] rounded-[10px] bg-[#F8F5F2] p-[20px] md:grid-cols-3 lg:rounded-[16px] lg:px-[40px] lg:py-[33px]">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>

      <div className="mt-[56px] space-y-[24px] rounded-[10px] bg-[#F8F5F2] p-[20px] lg:rounded-[16px] lg:px-[40px] lg:py-[33px]">
        <h3 className="text-[20px] font-medium leading-[24.2px]">
          Earnings Breakdown
        </h3>
        <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-3">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewStats;
