"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { VendorManagementDataType } from "./vendor-management-data";
import ViewVendorDetails from "./ViewVendorDetails";

// ActionsDropdown component  start

const ActionsDropdown = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormData = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-start">
              <span className="cursor-pointer text-left text-base font-medium leading-[19px] text-[#1D3557] underline">
                View Details
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="h-auto w-[136px] rounded-lg bg-white shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
          >
            <DropdownMenuItem
              onClick={handleFormData}
              className="cursor-pointer p-[8px] text-xs font-normal leading-[14px] text-[#1F2937] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              Reschedule Booking
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer rounded-b-[8px] p-[8px] text-xs font-normal leading-[14px] text-[#EF4444] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              Cancel Booking
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Reschedule Booking modal  */}

      <div>
        {isOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            {/* Modal content */}
            <div className="relative z-10">
              <ViewVendorDetails setIsOpen={setIsOpen} bookingId={id} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ActionsDropdown;

// ActionsDropdown component  end

export const VendorManagementColumn: ColumnDef<VendorManagementDataType>[] = [
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
    header: "Business Name",
    cell: ({ row }) => {
      console.log(row);
      return (
        <div className="text-left">
          <h4 className="text-sm font-medium leading-[16px] text-[#1F2937]">
            {row.original.businessName}
          </h4>
          <h4 className="pt-[8px] text-xs font-normal leading-[14px] text-[#6B7280]">
            {row?.original?.businessType}
          </h4>
        </div>
      );
    },
  },
  {
    header: "Onboarding Date ",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
            {row.original.onBoardingDate}
          </span>
        </div>
      );
    },
  },
  {
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span
            className={`rounded-[20px] px-2 py-1 text-xs font-normal leading-[14px] ${row.original.status === "Approved" ? "bg-[#F0FDF4] text-[#16A34A]" : row.original.status === "Pending" ? "bg-[#FEFCE8] text-[#CA8A04] " : "text-[#DC2626] bg-[#FEF2F2]"}`}
          >
            {row.original.status}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => <ActionsDropdown id={row?.original?.id} />,
  },
];
