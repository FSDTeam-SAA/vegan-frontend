"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DemoTableItemsType } from "@/data/StoreListData";
import { Box } from "lucide-react";
import { ImInfinite } from "react-icons/im";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const StoreListColumn: ColumnDef<DemoTableItemsType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
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
    header: "Verification",
    cell: ({ row }) => {
      return (
        <div>
          <Image
            src={row.original.verification}
            height={14}
            width={14}
            alt="img"
          />
        </div>
      );
    },
  },
  {
    header: "Profile",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={row.original.image}
              height={142}
              width={110}
              alt="img"
              className="rounded-[8px]"
            />
          </div>
          <div className=" w-[250px] ">
            <h4 className="text-[18px] text-gradient font-semibold">
              {row.original.name}
            </h4>
            <h5 className="text-[16px] font-normal text-gradient py-2">
              @<span className="text-[#3D3D3D]"> {row.original.userName}</span>
            </h5>
            <p className="text-[16px] font-normal text-wrap text-gradient">
              {row.original.userStatus}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    header: "Box",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Box />
          <div className="flex items-center">
            <span className="text-[16px] text-[#E10E0E] font-normal flex items-center gap-2">
              {row.original.remainingBox}
            </span>{" "}
            /
            <span className="text-[16px] text-[#444444] font-normal flex items-center gap-2">
              {row.original.totalBox}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    header: "Gross Sales",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="text-[16px] text-[#E10E0E] font-normal">
            {row.original.grossSales}
          </span>
          <span>/MB/</span>
          <ImInfinite className="text-[16px]" />
        </div>
      );
    },
  },
  {
    header: "Admin Fees",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">
            ${row.original.adminFees}
          </span>
        </div>
      );
    },
  },
  {
    header: "Paid Fees",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">
            ${row.original.paidFees}
          </span>
        </div>
      );
    },
  },
  {
    header: "Total Fees",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">
            ${row.original.totalFees}
          </span>
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
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
            >
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                Details
              </DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
