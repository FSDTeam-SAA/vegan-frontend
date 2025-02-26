"use client";

import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganPagination from "@/components/ui/vegan-pagination";
import { AttendeeResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { attendeeColumns } from "./attendees-column";

interface Props {
  eventId: string;
}

const AttendeeContainer = ({ eventId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { isLoading, data, isError, error } = useQuery<AttendeeResponse>({
    queryKey: ["ViewAttendeesByOrganization", currentPage],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/bookings/event/${eventId}?page=${currentPage}&limit=10`,
      ).then((res) => res.json()),
  });

  const table = useReactTable({
    data: data?.data || [],
    columns: attendeeColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  let content;

  if (isLoading || data) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <DataTable columns={attendeeColumns} table={table} />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error.message || "something went wrong"} />
    );
  }
  return (
    <div>
      <div className="py-6">
        <Button variant="link" onClick={() => router.back()}>
          <ArrowLeft /> Back Now
        </Button>
      </div>
      {content}{" "}
      <div className="flex w-full justify-end">
        {!isError && data && data.pagination.totalPages > 1 && (
          <VeganPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={data.pagination.totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default AttendeeContainer;
