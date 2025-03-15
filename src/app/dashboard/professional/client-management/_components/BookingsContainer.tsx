"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ServiceBooking, ServiceBookingResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { BookingColumn } from "./BookingColumn";

interface Props {
  userId: string;
}

const BookingsContainer = ({ userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { isLoading, data, isError, error } = useQuery<ServiceBookingResponse>({
    queryKey: ["service-booking-table", currentPage],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/user-bookings?userID=${userId}&page=${currentPage}&limit=10`,
      ).then((res) => res.json()),
  });

  if (isError) {
    return (
      <ErrorContainer message={error.message ?? "Failed to retrieve data."} />
    );
  }

  return (
    <section className="w-full">
      <SkeletonWrapper isLoading={isLoading}>
        <div className="h-auto w-full rounded-t-[12px]">
          <TableContainer data={data?.data ?? []} columns={BookingColumn} />
        </div>
        {data?.pagination && data?.pagination?.totalPages > 1 && (
          <PacificPagination
            currentPage={currentPage}
            totalPages={data?.pagination.totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </SkeletonWrapper>
    </section>
  );
};

export default BookingsContainer;

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
