"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

// export type Event = {
//   id: number;
//   title: string;
//   type: "Live" | "On-Site";
//   revenue: number;
//   attendees: number;
//   date: string;
//   time: string;
// };

export const eventColumns: ColumnDef<unknown, unknown>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: "title",
    header: "Event Title",
  },
  {
    accessorKey: "type",
    header: "Event type",
  },
  {
    accessorKey: "revenue",
    header: "Revenue",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("revenue"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return formatted;
    },
  },
  {
    accessorKey: "attendees",
    header: "Attendees",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({}) => {
      return (
        <Button
          variant="link"
          className="p-0 text-[#1a2b4b] underline hover:text-[#243a64]"
        >
          View Attendees
        </Button>
      );
    },
  },
];
