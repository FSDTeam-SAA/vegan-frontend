import { Attendee } from "@/types/organization";
import { ColumnDef } from "@tanstack/react-table";

export const attendeeColumns: ColumnDef<Attendee>[] = [
  {
    header: "Full Name",
    cell: ({ row }) => <p>{row.original.fullName}</p>,
  },
  {
    accessorKey: "email",
    cell: ({ row }) => (
      <div>
        <p>{row.original.email}</p>
        <p>{row.original.phoneNumber}</p>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Registered Date",
  },
];
