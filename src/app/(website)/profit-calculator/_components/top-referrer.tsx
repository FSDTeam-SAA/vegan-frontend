"use client";
import TopReferrersCard from "@/components/shared/cards/top-referrers-card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ReferralLeaderboard() {
  const [activeTab, setActiveTab] = useState<"local" | "regional" | "national">(
    "regional",
  );

  return (
    <div className="container">
      <div className="">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-[28px] font-medium leading-[45px] text-[#1D3557] lg:text-[32px]">
            Top Referrers in the Community
          </h1>
          <p className="text-medium text-[18px] text-[#374151]">
            Join the ranks of our top earners and see your name here
          </p>
        </div>

        <div className="flex w-full justify-center gap-[10px]">
          <button
            className={cn(
              "rounded-[30px] px-[16px] py-[8px] transition-colors duration-300",
              activeTab === "local"
                ? "bg-[#1D3557] text-white"
                : "border-[1px] border-[#99A1AF] text-[#99A1AF] hover:bg-[#1D3557]/10",
            )}
            onClick={() => setActiveTab("local")}
          >
            Local
          </button>
          <button
            className={cn(
              "rounded-[30px] px-[16px] py-[8px] transition-colors duration-300",
              activeTab === "regional"
                ? "bg-[#1D3557] text-white"
                : "border-[1px] border-[#99A1AF] text-[#99A1AF] hover:bg-[#1D3557]/10",
            )}
            onClick={() => setActiveTab("regional")}
          >
            Regional
          </button>
          <button
            className={cn(
              "rounded-[30px] px-[16px] py-[8px] transition-colors duration-300",
              activeTab === "national"
                ? "bg-[#1D3557] text-white"
                : "border-[1px] border-[#99A1AF] text-[#99A1AF] hover:bg-[#1D3557]/10",
            )}
            onClick={() => setActiveTab("national")}
          >
            National
          </button>
        </div>

        <div className="mt-[48px] grid grid-cols-1 gap-[24px] md:grid-cols-2 lg:mt-[80px] lg:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <TopReferrersCard key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
