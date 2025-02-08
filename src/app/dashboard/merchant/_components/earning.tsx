import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
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

export default function EarningsBreakdown() {
  return (
    <Card className="mt-[56px]">
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
  );
}
