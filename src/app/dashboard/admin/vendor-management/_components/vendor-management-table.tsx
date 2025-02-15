"use client";
import { DataTable } from "@/components/ui/data-table";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Business, businesses } from "./vendor-data";
import { VendorManagementColumns } from "./vendor-management-column";

const VendorManagementTable = () => {
  return (
    <div>
      <TableContainer data={businesses} columns={VendorManagementColumns} />
    </div>
  );
};

export default VendorManagementTable;

interface Props {
  data: Business[];
  columns: ColumnDef<Business>[];
}
const TableContainer = ({ data, columns }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div>
      <DataTable columns={columns} table={table} />
      {/* {data?.length > 10 && (
          <div className="mt-4">
            <DataTablePagination table={table} />
          </div>
        )} */}
    </div>
  );
};
