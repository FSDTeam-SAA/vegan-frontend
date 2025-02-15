import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Business } from "./vendor-data";

export const VendorManagementColumns: ColumnDef<Business>[] = [
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
      <div className="flex items-start">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Business Name",
    accessorKey: "businessName",
    cell: ({ row }) => (
      <div className="flex justify-start">
        <p className="font-inter text-[14px] font-normal leading-[16.94px] text-[#1F2937]">
          {row.original.businessName}
        </p>
      </div>
    ),
  },
  {
    header: "Onboarding Date",
    accessorKey: "onBoardingDate",
    cell: ({ row }) => (
      <div className="flex justify-start">
        <p className="font-inter text-[14px] font-normal leading-[16.94px] text-[#1F2937]">
          {moment(row.original.onBoardingDate).format("MMM D, YYYY")}
        </p>
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const data = row.original.status;
      return (
        <div className="flex justify-start">
          <p
            className={cn(
              "rounded-[20px] px-[8px] py-[4px] font-inter text-[12px] font-normal leading-[16.94px]",
              data === "Approved"
                ? "bg-[#F0FDF4] text-[#16A34A]"
                : data === "Pending"
                  ? "bg-[#FEFCE8] text-[#CA8A04]"
                  : "bg-[#FEF2F2] text-[#DC2626]",
            )}
          >
            {data}
          </p>
        </div>
      );
    },
  },
];
