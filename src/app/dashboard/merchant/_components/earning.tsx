"use client";

import type React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LuCloudDownload } from "react-icons/lu";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type TimeRange = "12 months" | "3 months" | "30 days" | "7 days" | "24 hours";

interface ChartData {
  month: string;
  "Product Sales": number;
  "Referral Earnings": number;
}

// Simulated API call
const fetchChartData = async (timeRange: TimeRange): Promise<ChartData[]> => {
  // In a real application, this would be an actual API call
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  const generateData = (count: number): ChartData[] => {
    return Array.from({ length: count }, (_, i) => ({
      month: `Month ${i + 1}`,
      "Product Sales": Math.floor(Math.random() * 1000) + 200,
      "Referral Earnings": Math.floor(Math.random() * 800) + 100,
    }));
  };

  switch (timeRange) {
    case "12 months":
      return generateData(12);
    case "3 months":
      return generateData(3);
    case "30 days":
      return generateData(30).map((d) => ({
        ...d,
        month: `Day ${d.month.split(" ")[1]}`,
      }));
    case "7 days":
      return generateData(7).map((d) => ({
        ...d,
        month: `Day ${d.month.split(" ")[1]}`,
      }));
    case "24 hours":
      return generateData(24).map((d) => ({
        ...d,
        month: `Hour ${d.month.split(" ")[1]}`,
      }));
    default:
      return generateData(12);
  }
};

const EarningsDynamicChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>("12 months");
  const chartConfig = {
    productSales: {
      label: "Product Sales",
      color: "#F56630",
    },
    referralEarnings: {
      label: "Referral Earnings",
      color: "#1671D9",
    },
  };
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery<ChartData[]>({
    queryKey: ["chartData", timeRange],
    queryFn: () => fetchChartData(timeRange),
  });

  const exportReport = () => {
    if (!chartData) return;

    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Period,Product Sales,Referral Earnings\n" +
      chartData
        .map(
          (row) =>
            `${row.month},${row["Product Sales"]},${row["Referral Earnings"]}`,
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `earnings_report_${timeRange}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="w-full">
      <CardHeader className="">
        <div className="flex flex-row items-center justify-between md:mb-10">
          <CardTitle>Earnings Breakdown</CardTitle>
          {/* Export report button */}
          <Button
            variant="outline"
            size="sm"
            onClick={exportReport}
            disabled={!chartData}
            className="px-4 py-3 font-inter text-base font-medium leading-[19.36px] text-[#374151]"
          >
            <LuCloudDownload className="h-6 w-6" />
            Export Report
          </Button>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: chartConfig.productSales.color }}
              />
              <span className="text-xs text-muted-foreground sm:text-sm">
                {chartConfig.productSales.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: chartConfig.referralEarnings.color }}
              />
              <span className="text-xs text-muted-foreground sm:text-sm">
                {chartConfig.referralEarnings.label}
              </span>
            </div>
          </div>
          <div className="flex gap-2 rounded-md bg-[#F9FAFB]">
            <ScrollArea className="w-40 whitespace-nowrap rounded-md border md:w-full md:border-none">
              {(
                [
                  "12 months",
                  "3 months",
                  "30 days",
                  "7 days",
                  "24 hours",
                ] as TimeRange[]
              ).map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className={
                    timeRange === range
                      ? "bg-white text-black hover:bg-transparent"
                      : "text-[#717680]"
                  }
                >
                  {range}
                </Button>
              ))}
              <ScrollBar orientation="horizontal" className="h-1" />
            </ScrollArea>
          </div>
        </div>
        {/* Time stamp navigation */}
      </CardHeader>
      <CardContent>
        <div className="mt-4 h-[300px]">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              Loading...
            </div>
          ) : isError ? (
            <div className="flex h-full items-center justify-center">
              Error loading data
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Product Sales"
                  stroke={chartConfig.productSales.color}
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Referral Earnings"
                  stroke={chartConfig.referralEarnings.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EarningsDynamicChart;
