"use client";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { BookingManagementData, BookingManagementDataTypes } from "./BookingManagementData";
import { BookingManagementColumn } from "./BookingManagementColumn";

const BookingManagementContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="h-auto w-full rounded-t-[12px]">
        <TableContainer data={BookingManagementData} columns={BookingManagementColumn} />
      </div>

      <PacificPagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </section>
  );
};

export default BookingManagementContainer;

const TableContainer = ({
  data,
  columns,
}: {
  data: BookingManagementDataTypes[];
  columns: ColumnDef<BookingManagementDataTypes>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="mt-[48px]">
        <DataTable table={table} columns={columns} />
      </div>
    </>
  );
};
