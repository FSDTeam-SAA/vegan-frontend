"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { VendorProfile, VendorProfileResponse } from "@/types/admin";
import { useVendorManagementState } from "@/zustand/admin/vendor-management";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { VendorManagementColumn } from "./vendor-management-column";

const VendorManagementTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { value, status, sortBy, profile } = useVendorManagementState();

  const { isLoading, data, isError, error } = useQuery<VendorProfileResponse>({
    queryKey: ["vendorManagement", currentPage, value, status, sortBy, profile],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/fetch-data?search=${value}&order=${sortBy}&isVerified=${status}&role=${profile}&page=${currentPage}&limit=10`,
      ).then((res) => res.json()),
  });

  let content;
  if (isLoading) {
    content = (
      <SkeletonWrapper isLoading={true}>
        <div className="h-[300px] w-full"></div>
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  } else if (data) {
    content = (
      <section className="w-full">
        <div className="h-auto w-full rounded-t-[12px]">
          <TableContainer
            data={data?.data as VendorProfile[]}
            columns={VendorManagementColumn}
          />
        </div>

        {data && data.meta.totalPages > 1 && (
          <PacificPagination
            currentPage={currentPage}
            totalPages={data.meta.totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </section>
    );
  }

  return content;
};

export default VendorManagementTable;

const TableContainer = ({
  data,
  columns,
}: {
  data: VendorProfile[];
  columns: ColumnDef<VendorProfile>[];
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
