
"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const RevenueOverviewContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="w-full  h-auto rounded-t-[12px]">
        <TableContainer data={RevenueOverviewData} columns={RevenueOverviewColumn} />
      </div>
      {/* large device  */}
      <div className="hidden md:block">
        <div className="bg-[#F8F5F2] w-full flex items-center justify-between p-4">
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
          <div className="flex items-center gap-[16px]">
            <Button variant="outline"> <MoveLeft />Previous</Button>
            <Button variant="outline"> <MoveRight />Next</Button>
          </div>
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between bg-white p-[24px]">
          <ArrowLeft className="w-[20px] h-[20px] text-[#717680]"/>
          <p className="text-sm font-medium leading-[20px] text-[#414651]">Page 1 of 10</p>
          <ArrowRight className="w-[20px] h-[20px] text-[#717680]"/>
        </div>
      </div>
    </section>
  );
};

export default RevenueOverviewContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { RevenueOverviewData, RevenueOverviewDataType } from "./RevenueOverviewData";
import { RevenueOverviewColumn } from "./RevenueOverviewColumn";



const TableContainer = ({
  data,
  columns,
}: {
  data: RevenueOverviewDataType[];
  columns: ColumnDef<RevenueOverviewDataType>[];
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
