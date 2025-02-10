"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

import DashboardRevenue from "./revenue";
import EarningsBreakdown from "./earning";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">
          Get an overview of your performance, earnings, and progress
        </p>
      </div>

      <DashboardRevenue />
      <EarningsBreakdown />
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Referral Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Total Referrals</span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-2xl font-semibold">68</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Amount Deducted For Charity
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-2xl font-semibold">$100.00</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Commission Paid</span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-2xl font-semibold">$524.00</p>
              </div>
            </div>
            <div className="space-y-4">
              <Button className="w-full bg-[#1E2A3B] hover:bg-[#2A3B4F]">
                Refer People To Vegan Collective
              </Button>
              <p className="text-center text-sm text-gray-500">
                Click this button to invite people and earn more rewards
              </p>
              <Button variant="outline" className="w-full">
                Share QR Code
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leader Board Of Top Merchants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  rank: 1,
                  name: "Dr Sarah Johnson",
                  earnings: 5200,
                  referrals: 100,
                },
                {
                  rank: 2,
                  name: "David Wilson",
                  earnings: 5200,
                  referrals: 100,
                },
                {
                  rank: 3,
                  name: "Lisa Anderson",
                  earnings: 5200,
                  referrals: 100,
                },
                {
                  rank: 4,
                  name: "Michael Chen",
                  earnings: 5200,
                  referrals: 100,
                },
              ].map((merchant) => (
                <div
                  key={merchant.rank}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold">
                      #{merchant.rank}
                    </span>
                    <div>
                      <p className="font-medium">{merchant.name}</p>
                      <p className="text-sm text-gray-500">
                        ${merchant.earnings.toLocaleString()} •{" "}
                        {merchant.referrals} Referrals
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
