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
  Legend,
} from "recharts";

const data = [
  { month: "Jan", Donations: 220, Referrals: 250, "Fundraising Events": 850 },
  { month: "Feb", Donations: 280, Referrals: 270, "Fundraising Events": 200 },
  { month: "Mar", Donations: 300, Referrals: 290, "Fundraising Events": 680 },
  { month: "Apr", Donations: 320, Referrals: 310, "Fundraising Events": 400 },
  { month: "May", Donations: 350, Referrals: 280, "Fundraising Events": 600 },
  { month: "Jun", Donations: 400, Referrals: 260, "Fundraising Events": 500 },
  { month: "Jul", Donations: 450, Referrals: 390, "Fundraising Events": 750 },
  { month: "Aug", Donations: 480, Referrals: 420, "Fundraising Events": 700 },
  { month: "Sep", Donations: 500, Referrals: 460, "Fundraising Events": 720 },
  { month: "Oct", Donations: 520, Referrals: 490, "Fundraising Events": 650 },
  { month: "Nov", Donations: 540, Referrals: 500, "Fundraising Events": 300 },
  { month: "Dec", Donations: 900, Referrals: 600, "Fundraising Events": 450 },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="mb-4 flex gap-4">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function EarningsBreakdown() {
  return (
    <Card className="mt-[56px]">
      <CardHeader className="">
        <CardTitle>Earnings Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <div />
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Export Report
            </Button>
            <div className="flex gap-2 text-sm">
              <button className="rounded-full bg-black px-3 py-1 text-white">
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
        </div>
        <div className="mt-4 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              {/* <Legend
                verticalAlign="top"
                align="left"
                wrapperStyle={{
                  transform: "translateY(-45px)",
                }}
              /> */}
              <Legend
                verticalAlign="top"
                align="left"
                wrapperStyle={{
                  transform: "translateY(-45px)",
                }}
                content={renderLegend}
              />
              <Line
                type="monotone"
                dataKey="Donations"
                stroke="#FF6B6B"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Referrals"
                stroke="#4ECDC4"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="Fundraising Events"
                stroke="#F4A261"
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
