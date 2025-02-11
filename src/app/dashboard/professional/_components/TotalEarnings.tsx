"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2A9D90",
    },
} satisfies ChartConfig

const TotalEarnings = () => {
    return (
        <div className="bg-[#F8F5F2] rounded-[16px] p-[40px]">
            <Card className=" max-h-[418px] w-full">
                <CardHeader>
                    <CardTitle>Line Chart</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent className=" max-h-[285px] w-full">
                    <ChartContainer config={chartConfig}>
                        <div className="max-h-[165px]">
                            <LineChart
                                width={1450}
                                height={165}
                                className="w-full "
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
                                    dataKey="desktop"
                                    type="natural"
                                    stroke="var(--color-desktop)"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </div>

                    </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="leading-none text-muted-foreground">
                        Showing earning overview for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TotalEarnings;

