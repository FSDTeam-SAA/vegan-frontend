// "use client"
// import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"
// const chartData = [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },
// ]
// const chartConfig = {
//     desktop: {
//         label: "Desktop",
//         color: "#2A9D90",
//     },
// } satisfies ChartConfig

// const TotalEarnings = () => {
//     return (
//         <div className="bg-[#F8F5F2] rounded-[16px] p-[40px]">
//             <Card className=" max-h-[418px] w-full">
//                 <CardHeader>
//                     <CardTitle>Line Chart</CardTitle>
//                     <CardDescription>January - June 2024</CardDescription>
//                 </CardHeader>
//                 <CardContent className=" max-h-[285px] w-full">
//                     <ChartContainer config={chartConfig}>
//                         <div className="max-h-[165px]">
//                             <LineChart
//                                 width={1450}
//                                 height={165}
//                                 className="w-full "
//                                 accessibilityLayer
//                                 data={chartData}
//                                 margin={{
//                                     left: 12,
//                                     right: 12,
//                                 }}
//                             >
//                                 <CartesianGrid vertical={false} />
//                                 <XAxis
//                                     dataKey="month"
//                                     tickLine={false}
//                                     axisLine={false}
//                                     tickMargin={8}
//                                     tickFormatter={(value) => value.slice(0, 3)}
//                                 />
//                                 <ChartTooltip
//                                     cursor={false}
//                                     content={<ChartTooltipContent hideLabel />}
//                                 />
//                                 <Line
//                                     dataKey="desktop"
//                                     type="natural"
//                                     stroke="var(--color-desktop)"
//                                     strokeWidth={2}
//                                     dot={false}
//                                 />
//                             </LineChart>
//                         </div>

//                     </ChartContainer>
//                 </CardContent>
//                 <CardFooter className="flex-col items-start gap-2 text-sm">
//                     <div className="leading-none text-muted-foreground">
//                         Showing earning overview for the last 6 months
//                     </div>
//                 </CardFooter>
//             </Card>
//         </div>
//     );
// };

// export default TotalEarnings;



"use client"

import { Line, LineChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer  } from "@/components/ui/chart"
import { useMediaQuery } from "react-responsive"
import { ChartLine } from "lucide-react"

const data = [
    { date: "2024-01-01", earnings: 3200 },
    { date: "2024-02-01", earnings: 7800 },
    { date: "2024-03-01", earnings: 4000 },
    { date: "2024-04-01", earnings: 2500 },
    { date: "2024-05-01", earnings: 7000 },
    { date: "2024-06-01", earnings: 5240 },
]

export default function TotalEarnings() {
    const isMobile = useMediaQuery({ maxWidth: 640 })
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 })

    // Adjust chart dimensions based on screen size
    const getChartHeight = () => {
        if (isMobile) return 200
        if (isTablet) return 250
        return 300
    }

    // Adjust chart margins based on screen size
    const getChartMargins = () => {
        if (isMobile) {
            return { top: 10, right: 10, bottom: 10, left: 20 }
        }
        if (isTablet) {
            return { top: 12, right: 12, bottom: 12, left: 22 }
        }
        return { top: 16, right: 16, bottom: 16, left: 24 }
    }

    return (
        <>
            <div className="bg-[#F8F5F2] rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]">
                <p className="text-sm font-normal text-[#6B7280] leading-[16px]">Total Earnings</p>
                <h4 className="text-3xl font-medium text-[#1F2937] leading-[36px] pt-[16px] pb-[8px]">$5,240.00</h4>
                <p className="text-base font-normal text-[#6B7280] leading-[19px]">Last updated: Today at 12:00 PM</p>
                <Card className="w-full mx-auto mt-[40px]">
                    <CardHeader className="">
                        <CardTitle className="pt-[1px] md:pt-[8px] pb-[20px] md:px-[16px] w-full  flex items-center gap-[6px] text-sm font-normal leading-[19px] text-[#71717A] border-b border-[#E4E4E7]"><ChartLine className="w-[14px] h-[14px] text-[#71717A]" /> Line Chart</CardTitle>
                        <CardDescription className="text-sm font-normal text-[#71717A] leading-[20px] pt-[36px] md:pt-[46px] md:pl-[24px]">January - June 2024</CardDescription>
                        
                        
                    </CardHeader>
                    <CardContent className="p-2 sm:p-4 lg:p-6">
                        <ChartContainer
                            config={{
                                earnings: {
                                    label: "Earnings",
                                    color: "#2A9D90",
                                },
                            }}
                            className={`h-[${getChartHeight()}px] w-full`}
                        >
                            <LineChart data={data} margin={getChartMargins()}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} className="opacity-50" />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fontSize: isMobile ? 10 : 12 }}
                                    tickFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: isMobile ? "short" : "long",
                                        })
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="earnings"
                                    strokeWidth={isMobile ? 1.5 : 2}
                                    dot={{
                                        r: isMobile ? 3 : 4,
                                        fill: "#2A9D90",
                                        strokeWidth: isMobile ? 1.5 : 2,
                                    }}
                                />
                                {/* <ChartTooltip
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            const data = payload[0].payload
                                            return (
                                                <ChartTooltipContent
                                                    content={
                                                        <div className="flex flex-col gap-1 sm:gap-2">
                                                            <div className="flex items-center justify-between gap-4 sm:gap-8">
                                                                <span className="text-xs sm:text-sm text-muted-foreground">
                                                                    {new Date(data.date).toLocaleDateString("en-US", {
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    })}
                                                                </span>
                                                                <span className="text-sm sm:text-base font-bold">${data.earnings.toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                    }
                                                />
                                            )
                                        }
                                        return null
                                    }}
                                /> */}
                            </LineChart>
                        </ChartContainer>
                        <div className="text-sm font-normal text-[#71717A] leading-[21px] pt-[30px] pl-[10px] pb-[5px]">
                            Showing earning overview for the last 6 months
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}



