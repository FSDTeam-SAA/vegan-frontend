"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type React from "react";
import { useState } from "react";
import { LuCloudDownload } from "react-icons/lu";

import ErrorContainer from "@/components/shared/sections/error-container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TimeRange = "12 months" | "3 months" | "30 days" | "7 days" | "24 hours";

interface ChartData {
  month: string;
  "Product Sales": number;
  "Referral Earnings": number;
}

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
    data: resData,
    isLoading,
    isError,
    error,
  } = useQuery<{ success: boolean; message: string; data: ChartData[] }>({
    queryKey: ["chartData", timeRange],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/get/merchant/graph/67dbcbac5db094504c4a134e?filter=7days`,
      ).then((res) => res.json()),
  });

  const chartData = resData?.data ?? [];

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

  let content;

  if (isLoading || resData) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <CardContent>
          <div className="mt-4 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Referral Earnings") {
                      return [`$${value}`, name]; // Adds a dollar sign
                    } else if (name === "Product Sales") {
                      return [`$${value}`, name]; // Adds a dollar sign
                    }
                    return [value, name]; // Keeps other values unchanged
                  }}
                />
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
          </div>
        </CardContent>
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Something went wrong"} />
    );
  }

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
      {content}
    </Card>
  );
};

export default EarningsDynamicChart;
