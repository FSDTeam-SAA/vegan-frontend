"use client";

import { OrganizationEvent } from "@/types/organization";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ViewAttendees from "./view-attendees";

export const organizationEventColumns: ColumnDef<OrganizationEvent>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <div>
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     /></div>
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
    accessorKey: "eventTitle",
    header: "Event Title",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <p>{row.original.eventTitle}</p>
      </div>
    ),
  },
  {
    accessorKey: "eventType",
    header: "Event type",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "Attendees",
    header: "Attendees",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <p>{moment(row.original.date).format("MMM D, YYYY")}</p>,
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ViewAttendees data={row.original} />,
  },
];
