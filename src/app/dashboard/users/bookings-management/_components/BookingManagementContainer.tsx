"use client";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useDebounce } from "@/hooks/useDebounce";
import { ServiceBooking, ServiceBookingResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { BookingManagementColumn } from "./BookingManagementColumn";

interface Props {
  tab: string;
  searchQuery: string;
  userId: string;
}

const BookingManagementContainer = ({ tab, searchQuery, userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchValue = useDebounce(searchQuery);
  const { data, isLoading } = useQuery<ServiceBookingResponse>({
    queryKey: ["bookings", currentPage, tab, userId, searchValue],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/user-bookings?userID=${userId}&page=${currentPage}&limit=10&filter=${tab}`,
      ).then((res) => res.json()),
  });
  return (
    <SkeletonWrapper isLoading={isLoading}>
      <section className="w-full">
        <div className="h-auto w-full rounded-t-[12px]">
          <TableContainer
            data={data?.data ?? []}
            columns={BookingManagementColumn}
          />
        </div>

        {data && data.pagination.totalPages > 1 && (
          <PacificPagination
            currentPage={currentPage}
            totalPages={data?.pagination.totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </section>
    </SkeletonWrapper>
  );
};

export default BookingManagementContainer;

const TableContainer = ({
  data,
  columns,
}: {
  data: ServiceBooking[];
  columns: ColumnDef<ServiceBooking>[];
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
