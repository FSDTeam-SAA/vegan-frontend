"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useState } from "react";
import { BookingColumn } from "./BookingColumn";
import { BookingData, BookingDataType } from "./bookingData";

const BookingsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="h-auto w-full rounded-t-[12px]">
        <TableContainer data={BookingData} columns={BookingColumn} />
      </div>

      <div className="hidden md:block">
        <div className="flex w-full items-center justify-between bg-[#F8F5F2] p-4">
          <p className="text-[16px] font-normal leading-[19.2px] text-[#444444]">
            Page 1 of 30
          </p>
          <div>
            <PacificPagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
          <div className="flex items-center gap-[16px]">
            <Button variant="outline">
              {" "}
              <MoveLeft />
              Previous
            </Button>
            <Button variant="outline">
              {" "}
              <MoveRight />
              Next
            </Button>
          </div>
        </div>
      </div>
      {/* small devices */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between bg-white p-[24px]">
          <ArrowLeft className="h-[20px] w-[20px] text-[#717680]" />
          <p className="text-sm font-medium leading-[20px] text-[#414651]">
            Page 1 of 10
          </p>
          <ArrowRight className="h-[20px] w-[20px] text-[#717680]" />
        </div>
      </div>
    </section>
  );
};

export default BookingsContainer;

const TableContainer = ({
  data,
  columns,
}: {
  data: BookingDataType[];
  columns: ColumnDef<BookingDataType>[];
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
