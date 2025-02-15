"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { AllBookedDataType } from "./AllBookedData";





export const AllBookedColumn: ColumnDef<AllBookedDataType>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            </div>

        ),
        cell: ({ row }) => (
            <Checkbox

                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        header: "Booking ID",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal leading-[16px] text-[#1F2937]">{row.original.bookingId}</span>
                </div>
            );
        },
    },
    {
        header: "Professional Name",
        cell: ({ row }) => {
            console.log(row)
            return (
                <div className="flex items-center gap-4">
                    <div>
                        <Image
                            src={row.original.img}
                            height={28}
                            width={28}
                            alt="img"
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-left" >
                        <h4 className="text-sm font-medium leading-[16px] text-[#1F2937]">{row.original.name}</h4>
                        <h4 className="text-xs font-normal leading-[14px] text-[#6B7280] pt-[8px]">{row?.original?.email}</h4>
                    </div>
                </div>
            );
        },
    },
    {
        header: "Service Title",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal leading-[16px] text-[#1F2937]">{row.original.serviceTitle}</span>
                </div>
            );
        },
    },
    {
        header: "Amount",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal leading-[16px] text-[#1F2937]">{row.original.amout}</span>
                </div>
            );
        },
    },
    {
        header: "Date",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal leading-[16px] text-[#1F2937]">{row.original.date}</span>
                </div>
            );
        },
    },
    {
        header: "Time",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal leading-[16px] text-[#1F2937]">{row.original.time}</span>
                </div>
            );
        },
    },
    {
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className={`${row?.original?.status === "Upcoming" ? "text-xs font-medium leading-[14px] text-[#2563EB] py-1 px-2 rounded-[20px] bg-[#EFF6FF]" : "text-xs font-medium leading-[14px] text-[#16A34A] py-1 px-2 rounded-[20px] bg-[#F0FDF4]"}`}>{row.original.status}</span>
                </div>
            );
        },
    },
    {
        header: "Actions",
        cell: () => {
            return (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                                <EllipsisVertical className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white h-auto w-[136px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
                            <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer text-xs font-normal leading-[14px] text-[#1F2937]">Reschedule Booking</DropdownMenuItem>
                            <DropdownMenuItem className="p-[8px] text-xs font-normal leading-[14px] text-[#EF4444]  hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer" >Cancel Booking</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    }
];