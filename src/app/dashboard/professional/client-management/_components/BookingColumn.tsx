"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { toWellFormed } from "@/lib/helper";
import { ServiceBooking } from "@/types/professional";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ClientManagementServiceBookingAction from "./ClientManagementServiceBookingAction";

export const BookingColumn: ColumnDef<ServiceBooking>[] = [
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
    header: "Client Nmae",
    cell: ({ row }) => {
      console.log(row);
      return (
        <div className="flex items-center gap-4">
          <div>
            {/* <Image
              src={row.original.image}
              height={28}
              width={28}
              alt="img"
              className="rounded-full"
            /> */}
          </div>
          <div className="text-left">
            <h4 className="text-sm font-medium leading-[16px] text-[#1F2937]">
              {row.original.userID.fullName}
            </h4>
            <h4 className="pt-[8px] text-xs font-normal leading-[14px] text-[#6B7280]">
              {row?.original?.userID.email}
            </h4>
          </div>
        </div>
      );
    },
  },
  {
    header: "Service",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-medium leading-[16px] text-[#1F2937]">
            {row.original.professionalServicesId.serviceName}
          </span>
        </div>
      );
    },
  },
  {
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-medium leading-[16px] text-[#1F2937]">
            {moment(row.original.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      );
    },
  },
  {
    header: "Time",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-medium leading-[16px] text-[#1F2937]">
            {row.original.serviceBookingTime}
          </span>
        </div>
      );
    },
  },
  {
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className="flex justify-start gap-[2px]">
          <span
            className={`rounded-[20px] px-[8px] py-[4px] text-sm font-medium leading-[16px] ${status === "confirmed" ? "bg-[#F0FDF4] text-[#16A34A]" : "bg-[#F8F5F2] text-[#CA8A04]"}`}
          >
            {toWellFormed(status)}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => (
      <ClientManagementServiceBookingAction data={row.original} />
    ),
  },
];
