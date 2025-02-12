"use client";

import type { ColumnDef, TableMeta } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  type: string;
  revenue: number;
  attendees: number;
  date: string;
  time: string;
}

// Extend TableMeta to include onViewAttendees
declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData> {
    onViewAttendees: (eventTitle: string) => void;
  }
}

type EventTableMeta = TableMeta<Event>;

export const eventColumns: ColumnDef<Event, EventTableMeta>[] = [
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
    header: "Actions",
    cell: ({ row, table }) => {
      return (
        <Button
          variant="link"
          className="p-0 text-[#1a2b4b] underline hover:text-[#243a64]"
          onClick={() =>
            table.options.meta?.onViewAttendees(row.original.title)
          }
        >
          View Attendees
        </Button>
      );
    },
  },
];
