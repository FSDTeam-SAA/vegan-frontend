"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { VendorProfile } from "@/types/admin";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ViewVendorDetails from "./ViewVendorDetails";

interface ViewDetailsProps {
  data: VendorProfile;
}

const ViewDetails = ({}: ViewDetailsProps) => {
  return (
    <div>
      <div className="flex justify-center">
        <Sheet>
          <div className="flex items-center justify-start">
            <SheetTrigger className="text-smtext-base font-medium leading-[19px] text-[#1D3557] underline">
              View Details
            </SheetTrigger>
          </div>

          <SheetContent>
            <ViewVendorDetails id={1} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ViewDetails;

// ActionsDropdown component  end

export const VendorManagementColumn: ColumnDef<VendorProfile>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && "indeterminate")
  //         }
  //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     </div>
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    header: "Business Name",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <h4 className="text-sm font-medium leading-[16px] text-[#1F2937]">
            {row.original.businessName || row.original.organizationName}
          </h4>
          <h4 className="pt-[8px] text-xs font-normal leading-[14px] text-[#6B7280]">
            {row?.original?.role}
          </h4>
        </div>
      );
    },
  },
  {
    header: "Onboarding Date ",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-[2px]">
          <span className="text-sm font-normal leading-[16px] text-[#1F2937]">
            {moment(row.original.createdAt).format("MMM D, YYYY")}
          </span>
        </div>
      );
    },
  },
  {
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-[2px]">
          <span
            className={`rounded-[20px] px-2 py-1 text-xs font-normal leading-[14px] ${row.original.isVerified === "approved" ? "bg-[#F0FDF4] text-[#16A34A]" : row.original.isVerified === "pending" ? "bg-[#FEFCE8] text-[#CA8A04]" : "bg-[#FEF2F2] text-[#DC2626]"}`}
          >
            {row.original.isVerified}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => <ViewDetails data={row.original} />,
  },
];
