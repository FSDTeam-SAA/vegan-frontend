
"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const BookingsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="w-full  h-auto rounded-[24px] bg-white">
        <TableContainer data={BookingData} columns={BookingColumn} />
      </div>
      <div className="mt-[30px]  w-full pb-[208px]  flex justify-between">
        <p className="font-normal text-[16px] leading-[19.2px] text-[#444444]">
        Page 1 of 30
        </p>
        <div>
          <PacificPagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div  className="flex items-center gap-[16px]">
          <Button variant="outline"> <MoveLeft />Previous</Button>
          <Button variant="outline"> <MoveRight />Next</Button>
        </div>
      </div>
    </section>
  );
};

export default BookingsContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import { BookingData, BookingDataType } from "./bookingData";
import { BookingColumn } from "./BookingColumn";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";



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
