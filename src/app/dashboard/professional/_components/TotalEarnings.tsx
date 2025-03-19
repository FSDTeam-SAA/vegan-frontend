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
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import { ChartLine } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
const chartConfig = {
  service: {
    label: "service",
    color: "#2A9D90", // Teal
  },
  reffer: {
    label: "reffer",
    color: "#1E3A8A", // Blue
  },
  goLive: {
    label: "GoLive",
    color: "#F97316", // Orange
  },
} satisfies ChartConfig;

type GraphResponse = {
  success: boolean;
  data: Array<{
    month: string;
    service: number;
    reffer: number;
    GoLive: number;
  }>;
};

interface Props {
  loggedInUserId: string;
}

const TotalEarnings = ({ loggedInUserId }: Props) => {
  const { data, isLoading } = useQuery<GraphResponse>({
    queryKey: ["professional-graph"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/get/professional/graph/${loggedInUserId}`,
      ).then((res) => res.json()),
  });

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
        <SkeletonWrapper isLoading={isLoading}>
          <Card className="mt-[40px]">
            <CardHeader className="">
              <CardTitle className="flex w-full items-center gap-[6px] border-b border-[#E4E4E7] pb-[20px] pt-[1px] text-sm font-normal leading-[19px] text-[#71717A] md:pt-[8px]">
                <ChartLine className="h-[14px] w-[14px] text-[#71717A]" />
                Line Chart
              </CardTitle>
              <CardDescription className="pt-[36px] text-sm font-normal leading-[20px] text-[#71717A] md:pt-[46px]">
                {data?.data[0].month} - {data?.data[data.data.length - 1].month}{" "}
                {2025}
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <ChartContainer config={chartConfig} className="h-[195px] w-full">
                <LineChart
                  accessibilityLayer
                  data={data?.data ?? []}
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
                    stroke="var(--color-reffer)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="GoLive"
                    type="natural"
                    stroke="var(--color-goLive)"
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
        </SkeletonWrapper>
      </div>
    </div>
  );
};

export default TotalEarnings;
