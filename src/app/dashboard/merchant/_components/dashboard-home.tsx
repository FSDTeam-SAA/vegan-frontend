"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", "Product Sales": 250, "Referral Earnings": 200 },
  { month: "Feb", "Product Sales": 300, "Referral Earnings": 250 },
  { month: "Mar", "Product Sales": 280, "Referral Earnings": 220 },
  { month: "Apr", "Product Sales": 270, "Referral Earnings": 230 },
  { month: "May", "Product Sales": 320, "Referral Earnings": 280 },
  { month: "Jun", "Product Sales": 375, "Referral Earnings": 350 },
  { month: "Jul", "Product Sales": 400, "Referral Earnings": 380 },
  { month: "Aug", "Product Sales": 450, "Referral Earnings": 400 },
  { month: "Sep", "Product Sales": 500, "Referral Earnings": 420 },
  { month: "Oct", "Product Sales": 480, "Referral Earnings": 450 },
  { month: "Nov", "Product Sales": 460, "Referral Earnings": 480 },
  { month: "Dec", "Product Sales": 520, "Referral Earnings": 500 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-600">
          Get an overview of your performance, earnings, and progress
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Total Earnings
            </CardTitle>
            <button className="text-gray-400 hover:text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-2xl font-semibold">$9,705.21</div>
            <Button className="w-full bg-[#1E2A3B] hover:bg-[#2A3B4F]">
              Withdraw Earnings
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Product Sales Earnings
            </CardTitle>
            <button className="text-gray-400 hover:text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$8,459.32</div>
            <p className="text-sm text-green-500">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Referral Earnings
            </CardTitle>
            <button className="text-gray-400 hover:text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$1,245.89</div>
            <p className="text-sm text-gray-500">32 active referrals</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Earnings Breakdown</CardTitle>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Export Report
            </Button>
            <div className="flex gap-2 text-sm">
              <button className="rounded-full bg-[#1E2A3B] px-3 py-1 text-white">
                12 months
              </button>
              <button className="rounded-full px-3 py-1 hover:bg-gray-100">
                3 months
              </button>
              <button className="rounded-full px-3 py-1 hover:bg-gray-100">
                30 days
              </button>
              <button className="rounded-full px-3 py-1 hover:bg-gray-100">
                7 days
              </button>
              <button className="rounded-full px-3 py-1 hover:bg-gray-100">
                24 days
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Product Sales"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Referral Earnings"
                  stroke="#4ECDC4"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

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
