"use client";

// Packages
import { Download, Search } from "lucide-react";
import { useState } from "react";

// Local imports
import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { MerchantProduct, MerchantProductResponse } from "@/types/merchant";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dynamic from "next/dynamic";
import { BulkUploadDialog } from "./bulk-upload-dialog";
import { MerchantProductColumn } from "./merchant-product-column";
const AddProductDialog = dynamic(() => import("./add-product-dialog"), {
  ssr: false,
});

export default function ProductsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [bulkUploadOpen, setBulkUploadOpen] = useState(false);

  const { isLoading, isError, data, error } = useQuery<MerchantProductResponse>(
    {
      queryKey: ["merchantsProduct"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct`,
        ).then((res) => res.json()),
    },
  );

  let content;

  if (isLoading || data?.success) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <TableContainer
          columns={MerchantProductColumn}
          data={data?.data ?? []}
        />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer
        message={data?.message || error?.message || "Something went wrong"}
      />
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="relative w-[300px] rounded-lg border border-[#9CA3AF]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
          <Input
            placeholder="Search by product"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setBulkUploadOpen(true)}
          >
            <Download className="h-4 w-4" />
            Bulk Upload
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={() => setAddDialogOpen(true)}
          >
            Add Product
          </Button>
        </div>
      </div>

      {content}

      <AddProductDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} />
      <BulkUploadDialog
        open={bulkUploadOpen}
        onOpenChange={setBulkUploadOpen}
        onProductsUploaded={() => {}}
      />
    </div>
  );
}

interface TableContainerProps {
  data: MerchantProduct[];
  columns: ColumnDef<MerchantProduct>[];
}

const TableContainer = ({ data, columns }: TableContainerProps) => {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <DataTable table={table} columns={columns} />;
};
