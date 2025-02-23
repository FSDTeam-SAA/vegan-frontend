"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
import VeganPagination from "@/components/ui/vegan-pagination";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { useDebounce } from "@/hooks/useDebounce";
import {
  OrganizationEvent,
  OrganizationEventResponse,
} from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Upload } from "lucide-react";
import dynamic from "next/dynamic";
import { organizationEventColumns } from "./organizationEventColumns";
const AddEventDialog = dynamic(() => import("./add-event-dialog"), {
  ssr: false,
});

const tabs = [
  {
    id: "paid event",
    label: "Paid Events",
  },
  {
    id: "free event",
    label: "Free Events",
  },
  {
    id: "volunteer event",
    label: "Volunteer Events",
  },
] as VeganTab[];

export default function EventManaging() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [selectedTab, setSelectedTab] = useState<
    "paid event" | "free events" | "volunteer events"
  >("paid event");
  const [category, setCategory] = useState("all");

  const { isLoading, data, isError, error } =
    useQuery<OrganizationEventResponse>({
      queryKey: [
        "eventsByOrganizations",
        selectedTab,
        currentPage,
        debouncedQuery,
        category,
      ],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationevents?eventType=${selectedTab}&page=${currentPage}&limit=5&search=${debouncedQuery}&eventCategory=${category}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.success) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <TableContainer
          data={data?.data || []}
          columns={organizationEventColumns}
          totalPages={data?.pagination?.totalPages || 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something is wrong"} />
    );
  }

  return (
    <div className="min-h-screen rounded-xl bg-[#f5f0eb] p-6">
      <div className="mb-5 flex flex-wrap items-start justify-between">
        <div className="mb-8">
          <h1 className="mb-1 text-2xl font-semibold">Event Management</h1>
          <p className="text-muted-foreground">
            Efficiently manage and track all your events in one place.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-[40px] gap-2">
            <Upload className="h-4 w-4" />
            Bulk Upload
          </Button>
          <AddEventDialog />
        </div>
      </div>

      <div className="mb-8 flex justify-between">
        <VeganTabs
          tabs={tabs}
          defaultActiveTab={selectedTab}
          onTabChange={(tab) =>
            setSelectedTab(
              tab as "paid event" | "free events" | "volunteer events",
            )
          }
        />
      </div>
      <div>
        <div className="space-around mb-5 flex gap-4">
          <Input
            type="search"
            placeholder="Search by name, ord no..."
            className="max-w-md border-black/10 shadow-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Select
            defaultValue={category}
            onValueChange={(val) => setCategory(val)}
          >
            <SelectTrigger className="w-[180px] border-black/10">
              <SelectValue placeholder="Event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="onsite">On-Site</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {content}
    </div>
  );
}

interface TableContainerProps {
  data: OrganizationEvent[];
  columns: ColumnDef<OrganizationEvent>[];
  setCurrentPage: (v: number) => void;
  currentPage: number;
  totalPages: number;
}

const TableContainer = ({
  data,
  columns,
  setCurrentPage,
  currentPage,
  totalPages,
}: TableContainerProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <DataTable columns={columns} table={table} />
      <div className="my-5 flex justify-end">
        <VeganPagination
          currentPage={currentPage || 1}
          totalPages={totalPages || 1}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
