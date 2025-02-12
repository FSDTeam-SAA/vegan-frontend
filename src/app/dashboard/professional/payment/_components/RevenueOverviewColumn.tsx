"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { RevenueOverviewDataType } from "./RevenueOverviewData";





export const RevenueOverviewColumn: ColumnDef<RevenueOverviewDataType>[] = [
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
        header: "Order No",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-normal md:font-medium leading-[16px] text-[#1F2937]">{row.original.orderNo}</span>
                </div>
            );
        },
    },
    {
        header: "Client Nmae",
        cell: ({ row }) => {
            console.log(row)
            return (
                <div className="flex items-center gap-4">
                    <div>
                        <Image
                            src={row.original.image}
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
        header: "Description",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-medium leading-[16px] text-[#1F2937]">{row.original.description}</span>
                </div>
            );
        },
    },
    {
        header: "Amount",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-medium leading-[16px] text-[#1F2937]">{row.original.amount}</span>
                </div>
            );
        },
    },
    {
        header: "Date",
        cell: ({ row }) => {
            return (
                <div className="flex justify-start gap-[2px]">
                    <span className="text-sm font-medium leading-[16px] text-[#1F2937]">{row.original.date}</span>
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
                        <DropdownMenuContent align="end" className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
                            <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default">Edit</DropdownMenuItem>
                            <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default" >Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    }
];