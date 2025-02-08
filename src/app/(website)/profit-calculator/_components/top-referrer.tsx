import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopReferrersCard from "@/components/shared/cards/top-referrers-card";
import React from "react";

export default function ReferralLeaderboard() {
  const tabKeys = ["local", "regional", "national"]; // Static tab values

  return (
    <div className="p-6 lg:mt-[40px]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-[28px] font-medium leading-[45px] text-[#1D3557] lg:text-[32px]">
            Top Referrers in the Community
          </h1>
          <p className="text-medium text-[18px] text-[#374151]">
            Join the ranks of our top earners and see your name here
          </p>
        </div>

        <Tabs defaultValue="local" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 gap-5">
            <TabsTrigger className="border border-[#99A1AF]" value="local">
              Local
            </TabsTrigger>
            <TabsTrigger className="border border-[#99A1AF]" value="regional">
              Regional
            </TabsTrigger>
            <TabsTrigger className="border border-[#99A1AF]" value="national">
              National
            </TabsTrigger>
          </TabsList>
          <div className="lg:my-[70px]">
            {tabKeys.map((key) => (
              <TabsContent key={key} value={key}>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <TopReferrersCard />
                    <TopReferrersCard />
                    <TopReferrersCard />
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
