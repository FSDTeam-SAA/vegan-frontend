"use client";

import type { ColumnDef } from "@tanstack/react-table";

export type Attendee = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  skill?: string;
  registeredDate: string;
};

export const getAttendeesColumns = (
  eventType: "paid" | "free" | "volunteer",
): ColumnDef<Attendee>[] => {
  const baseColumns: ColumnDef<Attendee>[] = [
    {
      accessorKey: "fullName",
      header: "Full Name",
    },
    {
      accessorKey: "contactInfo",
      header: "Contact Info",
      cell: ({ row }) => {
        return (
          <div className="space-y-1">
            <div className="text-sm font-medium">{row.original.email}</div>
            <div className="text-sm text-muted-foreground">
              {row.original.phone}
            </div>
          </div>
        );
      },
    },
  ];

  // Add skill column only for volunteers, before registeredDate
  if (eventType === "volunteer") {
    return [
      ...baseColumns,
      { accessorKey: "skill", header: "Skill/Experience" },
      { accessorKey: "registeredDate", header: "Registered Date" },
    ];
  }

  return [
    ...baseColumns,
    { accessorKey: "registeredDate", header: "Registered Date" },
  ];
};
