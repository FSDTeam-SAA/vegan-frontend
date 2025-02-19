"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ColumnDef } from "@tanstack/react-table";
import { VendorManagementDataType } from "./vendor-management-data";
import ViewVendorDetails from "./ViewVendorDetails";

const ViewDetails = ({ id }: { id: number }) => {
  return (
    <div>
      <div>
        <Sheet>
          <div className="flex items-center justify-start">
            <SheetTrigger className="text-smtext-base font-medium text-[#1D3557] leading-[19px] underline">View Details</SheetTrigger>
          </div>
          
          <SheetContent>
            <ViewVendorDetails id={id}/>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ViewDetails;

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
            className={`rounded-[20px] px-2 py-1 text-xs font-normal leading-[14px] ${row.original.status === "Approved" ? "bg-[#F0FDF4] text-[#16A34A]" : row.original.status === "Pending" ? "bg-[#FEFCE8] text-[#CA8A04]" : "bg-[#FEF2F2] text-[#DC2626]"}`}
          >
            {row.original.status}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => <ViewDetails id={row?.original?.id} />,
  },
];
