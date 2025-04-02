"use client";

import ErrorContainer from "@/components/shared/sections/error-container";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { DeliveryManagementColumn } from "./delivery-management-column";

// Interface for each booking item in the "data" array
export interface Booking {
  orderNo: string;
  customerName: string;
  orderDate: string; // Consider using Date if you want to parse it as a Date object
  amount: number;
  trackingNumber: string;
  shippingStatus: string;
  orderId: string;
}

// Interface for the pagination details
interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  filteredCount: number;
}

// Top-level response interface
interface ApiResponse {
  success: boolean;
  message: string;
  data: Booking[];
  pagination: Pagination;
}

const STATUS_OPTIONS = ["all", "delivered", "shipped"] as const;

const DeliveryManagementTableContainer = () => {
  const [statusFilter, setStatusFilter] =
    useState<(typeof STATUS_OPTIONS)[number]>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError, error } = useQuery<ApiResponse>({
    queryKey: ["productDelivery"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/booking/67de9b83f60e60110b667568?page=1&limit=5&search=ORD-001&shippingStatus=delivered`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <TableContainer data={[]} columns={DeliveryManagementColumn} />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = <ErrorContainer message={error?.message} />;
  } else if (data) {
    content = (
      <div>
        <div className="mb-6 flex flex-wrap gap-4 sm:justify-between">
          <div className="flex flex-1 gap-4">
            <Input
              placeholder="Search by name, order no..."
              className="w-full max-w-[300px] rounded-lg border border-[#9CA3AF] pl-4 shadow-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search orders"
            />

            <Select
              value={statusFilter}
              onValueChange={(v: (typeof STATUS_OPTIONS)[number]) =>
                setStatusFilter(v)
              }
            >
              <SelectTrigger className="w-[150px] rounded-lg border border-[#9CA3AF] pl-4 shadow-none">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {STATUS_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option === "all" ? "All Status" : option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <TableContainer
          data={data?.data ?? []}
          columns={DeliveryManagementColumn}
        />
      </div>
    );
  }

  return content;
};

export default DeliveryManagementTableContainer;

interface Props {
  data: Booking[];
  columns: ColumnDef<Booking>[];
}

const TableContainer = ({ data, columns }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <DataTable columns={columns} table={table} />
    </div>
  );
};
