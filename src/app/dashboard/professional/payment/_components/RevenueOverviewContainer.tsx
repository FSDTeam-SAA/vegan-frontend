
"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const RevenueOverviewContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="w-full  h-auto rounded-t-[12px]">
        <TableContainer data={RevenueOverviewData} columns={RevenueOverviewColumn} />
      </div>
      <PacificPagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={(page) => setCurrentPage(page)}
      />

    </section>
  );
};

export default RevenueOverviewContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
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
      <div className="mt-[24px]">
        <DataTable table={table} columns={columns} />
      </div>

    </>
  );
};
