"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartLine } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
const chartData = [
  { month: "January", service: 186, reffer: 150, GoLive: 200 },
  { month: "February", service: 305, reffer: 150, GoLive: 200 },
  { month: "March", service: 237, reffer: 150, GoLive: 200 },
  { month: "April", service: 73, reffer: 150, GoLive: 200 },
  { month: "May", service: 209, reffer: 150, GoLive: 200 },
  { month: "June", service: 214, reffer: 150, GoLive: 200 },
];
const chartConfig = {
  service: {
    label: "service",
    color: "#2A9D90",
  },
} satisfies ChartConfig;

const TotalEarnings = () => {
  return (
    <div>
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <p className="text-sm font-normal leading-[16px] text-[#6B7280]">
          Total Earnings
        </p>
        <h4 className="pb-[8px] pt-[16px] text-3xl font-medium leading-[36px] text-[#1F2937]">
          $5,240.00
        </h4>
        <p className="text-base font-normal leading-[19px] text-[#6B7280]">
          Last updated: Today at 12:00 PM
        </p>
        <Card className="mt-[40px]">
          <CardHeader className="">
            <CardTitle className="flex w-full items-center gap-[6px] border-b border-[#E4E4E7] pb-[20px] pt-[1px] text-sm font-normal leading-[19px] text-[#71717A] md:pt-[8px]">
              <ChartLine className="h-[14px] w-[14px] text-[#71717A]" />
              Line Chart
            </CardTitle>
            <CardDescription className="pt-[36px] text-sm font-normal leading-[20px] text-[#71717A] md:pt-[46px]">
              January - June 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <ChartContainer config={chartConfig} className="h-[195px] w-full">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="service"
                  type="natural"
                  stroke="var(--color-service)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="reffer"
                  type="natural"
                  stroke="var(--color-service)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="GoLive"
                  type="natural"
                  stroke="var(--color-service)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="pt-[15px]">
            <p className="text-sm font-normal leading-[21px] text-[#71717A]">
              Showing earning overview for the last 6 months
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TotalEarnings;
