"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfitCalculator() {
  const [profit, setProfit] = useState("100");
  const [referrals, setReferrals] = useState("0");

  // Calculate estimated earnings
  const calculateEarnings = () => {
    const profitPerTransaction = parseFloat(profit);
    const numberOfReferrals = parseFloat(referrals);
    const profitLevel = 0.06; // 6% as the average of 5-7%

    if (isNaN(profitPerTransaction) || isNaN(numberOfReferrals)) {
      return 0;
    }

    return (profitPerTransaction * numberOfReferrals * profitLevel).toFixed(2);
  };

  const estimatedEarnings = calculateEarnings();

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="py-[80px]">
        {/* bg-dotts */}

        <Image
          src="/assets/Ornament-left.png"
          alt="from_bottom"
          width={300}
          height={300}
          className="absolute left-[-25px] top-0 hidden lg:block lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px]"
        />
        <Image
          src="/assets/Ornament-left.png"
          alt="from_bottom"
          width={300}
          height={300}
          className="absolute bottom-0 left-[-25px] hidden lg:block lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px]"
        />
        <Image
          src="/assets/Ornament-right.png"
          alt="from_bottom"
          width={300}
          height={300}
          className="absolute right-[-25px] top-0 hidden lg:block lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px]"
        />
        <Image
          src="/assets/Ornament-right.png"
          alt="from_bottom"
          width={300}
          height={300}
          className="absolute bottom-0 right-[-25px] hidden lg:block lg:h-[200px] lg:w-[100px] xl:h-[300px] xl:w-[150px]"
        />
        <div className="mb-[100px] text-center">
          <h2 className="text-[28px] font-medium text-[#1D3557] lg:text-[32px]">
            Calculate Your Earnings
          </h2>
          <p className="text-[16px] text-[#374151] lg:text-[18px]">
            See how much you could earn through our referral program
          </p>
        </div>
        <Card className="mx-auto px-[40px] py-[29px] shadow-none lg:max-w-[1042px]">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="profit" className="text-[18px]">
                  Average company profit per transaction
                </Label>
                <div className="relative h-[66px] bg-[#F9FAFB]">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-gray-500">
                    $
                  </span>
                  <Input
                    id="profit"
                    type="number"
                    min="0"
                    value={profit}
                    onChange={(e) => setProfit(e.target.value)}
                    className="h-[66px] border-none pl-7"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="referrals" className="text-[18px]">
                  Number of Referral
                </Label>
                <div className="relative h-[66px] rounded-[10px] bg-[#F9FAFB]">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[18px] text-gray-500" />
                  <Input
                    id="referrals"
                    type="number"
                    min="0"
                    value={referrals}
                    onChange={(e) => setReferrals(e.target.value)}
                    className="h-[66px] border-none pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[18px]">Profit Level</Label>
                <div className="flex h-[66px] items-center rounded-md bg-gray-50 p-3 text-sm">
                  5 - 7%
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center space-y-2">
              <div className="mb-1 text-sm font-medium">Estimated Earnings</div>

              <div className="h-[200px] w-[247px] rounded-lg bg-gray-50 p-6 md:w-[332px] lg:h-[271px]">
                <div className="flex h-full items-center text-[40px] font-normal lg:text-[49px]">
                  ${estimatedEarnings}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
