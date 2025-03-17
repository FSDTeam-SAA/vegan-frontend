"use client";
import ClientManagementServiceBookingAction from "@/app/dashboard/professional/client-management/_components/ClientManagementServiceBookingAction";
import { Button } from "@/components/ui/button";
import { toWellFormed } from "@/lib/helper";
import { ServiceBooking } from "@/types/professional";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import BookingDetailsForm from "./BookingDetailsForm";

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
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <EllipsisVertical className="h-4 w-4" />
            </Button>
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
              <BookingDetailsForm setIsOpen={setIsOpen} bookingId={id} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ActionsDropdown;

// ActionsDropdown component  end

export const BookingManagementColumn: ColumnDef<ServiceBooking>[] = [
  {
    header: "Booking ID",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
            {row.original.bookingID}
          </span>
        </div>
      );
    },
  },
  {
    header: "Professional Name",
    cell: ({ row }) => {
      console.log(row);
      return (
        <div className="flex items-center gap-4">
          <div>
            {/* <Image
                src={row.original.img}
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
    header: "Service Title",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
            {row.original.professionalServicesId?.serviceName ??
              "NO SERVICE NAME FOUND"}
          </span>
        </div>
      );
    },
  },
  {
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div className="flex justify-start gap-[2px]">
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
            {row.original.amount}
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
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
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
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
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
