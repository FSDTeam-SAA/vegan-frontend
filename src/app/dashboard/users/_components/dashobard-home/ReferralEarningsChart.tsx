"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const initialData = [
  { month: "Jan", "Referral Earnings": 400 },
  { month: "Feb", "Referral Earnings": 600 },
  { month: "Mar", "Referral Earnings": 800 },
  { month: "Apr", "Referral Earnings": 500 },
  { month: "May", "Referral Earnings": 700 },
];

export default function ReferralEarningsChart() {
  const [data, setData] = useState(initialData);
  const [selectedRange, setSelectedRange] = useState("12 months");

  const fetchData = (range: string) => {
    let newData;
    switch (range) {
      case "12 months":
        newData = [
          { month: "Jan", "Referral Earnings": 400 },
          { month: "Feb", "Referral Earnings": 600 },
          { month: "Mar", "Referral Earnings": 800 },
          { month: "Apr", "Referral Earnings": 500 },
          { month: "May", "Referral Earnings": 700 },
          { month: "Jun", "Referral Earnings": 650 },
          { month: "Jul", "Referral Earnings": 720 },
          { month: "Aug", "Referral Earnings": 810 },
          { month: "Sep", "Referral Earnings": 590 },
          { month: "Oct", "Referral Earnings": 680 },
          { month: "Nov", "Referral Earnings": 740 },
          { month: "Dec", "Referral Earnings": 860 },
        ];
        break;
      case "3 months":
        newData = [
          { month: "Oct", "Referral Earnings": 680 },
          { month: "Nov", "Referral Earnings": 740 },
          { month: "Dec", "Referral Earnings": 860 },
        ];
        break;
      case "30 days":
        newData = [
          { month: "Week 1", "Referral Earnings": 200 },
          { month: "Week 2", "Referral Earnings": 400 },
          { month: "Week 3", "Referral Earnings": 600 },
          { month: "Week 4", "Referral Earnings": 800 },
        ];
        break;
      case "7 days":
        newData = [
          { month: "Day 1", "Referral Earnings": 100 },
          { month: "Day 2", "Referral Earnings": 150 },
          { month: "Day 3", "Referral Earnings": 200 },
          { month: "Day 4", "Referral Earnings": 250 },
          { month: "Day 5", "Referral Earnings": 300 },
          { month: "Day 6", "Referral Earnings": 350 },
          { month: "Day 7", "Referral Earnings": 400 },
        ];
        break;
      case "24 Hours":
        newData = [
          { month: "Hour 1", "Referral Earnings": 50 },
          { month: "Hour 6", "Referral Earnings": 100 },
          { month: "Hour 12", "Referral Earnings": 150 },
          { month: "Hour 18", "Referral Earnings": 200 },
          { month: "Hour 24", "Referral Earnings": 250 },
        ];
        break;
      default:
        newData = initialData;
    }
    setData(newData);
  };

  useEffect(() => {
    fetchData(selectedRange);
  }, [selectedRange]);

  return (
    <Card className="mx-auto w-full bg-[#F8F5F2] p-4">
      <CardHeader className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <CardTitle>Referral Earnings</CardTitle>
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <div className="flex flex-wrap gap-2 text-sm">
            {["12 months", "3 months", "30 days", "7 days", "24 Hours"].map(
              (range) => (
                <button
                  key={range}
                  className={`px-3 py-1 ${selectedRange === range ? "rounded-[8px] border-[1px] border-gray-100 bg-white shadow-sm" : "hover:bg-gray-100"}`}
                  onClick={() => setSelectedRange(range)}
                >
                  {range}
                </button>
              ),
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Referral Earnings"
                stroke="#1671D9"
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
