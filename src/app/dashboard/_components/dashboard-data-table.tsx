"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
// Import components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface Order {
  id: number;
  orderNo: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  orderDate: string;
  amount: number;
  trackingNumber: string | null;
  status: "Delivered" | "Shipped";
  isChecked: boolean;
}

const PAGE_SIZE = 10;
const INITIAL_PAGE = 1;
const STATUS_OPTIONS = ["all", "delivered", "shipped"] as const;

export default function DashboardDataTable() {
  const [isMounted, setIsMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<(typeof STATUS_OPTIONS)[number]>("all");

  // Memoized data calculations
  const filteredOrders = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return orders.filter((order) => {
      const matchesSearch =
        order.orderNo.toLowerCase().includes(query) ||
        order.customer.name.toLowerCase().includes(query) ||
        order.customer.email.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" || order.status.toLowerCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchQuery, statusFilter]);

  const totalPages = useMemo(
    () => Math.ceil(filteredOrders.length / PAGE_SIZE) || 1,
    [filteredOrders.length],
  );

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredOrders.slice(start, start + PAGE_SIZE);
  }, [filteredOrders, currentPage]);

  const currentPageOrdersSelected = useMemo(
    () => paginatedOrders.every((order) => order.isChecked),
    [paginatedOrders],
  );

  // Data initialization
  useEffect(() => {
    setOrders(
      Array.from({ length: 35 }).map((_, i) => ({
        id: i + 1,
        orderNo: `ORD-00${i + 1}`,
        customer: {
          name: "Sarah James",
          email: "Sarah@gmail.com",
          avatar:
            "https://res.cloudinary.com/dw5wizivl/image/upload/v1739163409/gnl8oocgsdnp7pauyqqo.png",
        },
        orderDate: "Jan 6, 2025",
        amount: i % 2 === 0 ? 150.0 : 200.0,
        trackingNumber: i % 3 === 0 ? "TRK123456789" : null,
        status: i % 2 === 0 ? "Delivered" : "Shipped",
        isChecked: false,
      })),
    );
    setIsMounted(true);
  }, []);

  // Selection handlers
  const toggleAllCurrentPageSelection = useCallback(
    (checked: boolean) => {
      const currentPageIds = new Set(paginatedOrders.map((order) => order.id));
      setOrders((prev) =>
        prev.map((order) =>
          currentPageIds.has(order.id)
            ? { ...order, isChecked: checked }
            : order,
        ),
      );
    },
    [paginatedOrders],
  );

  const toggleSingleSelection = useCallback(
    (orderId: number, checked: boolean) => {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, isChecked: checked } : order,
        ),
      );
    },
    [],
  );

  // Pagination controls
  const getPaginationRange = useCallback(() => {
    const maxVisiblePages = 5;
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    if (currentPage > 3) pages.push("...");
    if (currentPage > 2 && currentPage < totalPages - 1)
      pages.push(currentPage - 1);
    if (currentPage > 1 && currentPage < totalPages) pages.push(currentPage);
    if (currentPage < totalPages - 1) pages.push(currentPage + 1);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);

  if (!isMounted) {
    return (
      <div className="p-6">
        <div className="flex h-[600px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="">
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

      <div className="rounded-lg border bg-white">
        <Table>
          <TableHeader className="">
            <TableRow className="font-inter leading-[17px] *:text-sm *:text-[#6B7280]">
              <TableHead className="py-4">
                <Checkbox
                  checked={currentPageOrdersSelected}
                  onCheckedChange={toggleAllCurrentPageSelection}
                  aria-label="Select all orders on current page"
                  className="mx-6 border-[#6B7280]"
                />
              </TableHead>
              <TableHead>Order No</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Tracking Number</TableHead>
              <TableHead>Shipping Status</TableHead>
              <TableHead className="flex items-center justify-center px-[56px]">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order) => (
                <OrderRow
                  key={order.id}
                  order={order}
                  onSelect={toggleSingleSelection}
                />
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="py-4 text-center text-muted-foreground"
                >
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        getPaginationRange={getPaginationRange}
      />
    </div>
  );
}

interface OrderRowProps {
  order: Order;
  onSelect: (orderId: number, checked: boolean) => void;
}

const OrderRow = ({ order, onSelect }: OrderRowProps) => (
  <TableRow className="bg-[#F8F5F2]">
    <TableCell className="">
      <Checkbox
        checked={order.isChecked}
        onCheckedChange={(checked) => onSelect(order.id, !!checked)}
        aria-label={`Select order ${order.orderNo}`}
        className={`mx-6 ${order.isChecked ? "" : ""}`}
      />
    </TableCell>
    <TableCell>{order.orderNo}</TableCell>
    <TableCell>
      <div className="flex items-center justify-end gap-2 py-4">
        <Avatar className="h-8 w-8">
          <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
          <AvatarFallback>
            {order.customer.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{order.customer.name}</span>
          <span className="text-sm text-muted-foreground">
            {order.customer.email}
          </span>
        </div>
      </div>
    </TableCell>
    <TableCell>{order.orderDate}</TableCell>
    <TableCell>${order.amount.toFixed(2)}</TableCell>
    <TableCell>
      {order.trackingNumber || (
        <span className="text-muted-foreground">No tracking available</span>
      )}
    </TableCell>
    <TableCell>
      <StatusBadge status={order.status} />
    </TableCell>
    <TableCell className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open actions menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {!order.trackingNumber && (
            <DropdownMenuItem>Add Tracking</DropdownMenuItem>
          )}
          <DropdownMenuItem>Update Status</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
);

interface StatusBadgeProps {
  status: Order["status"];
}

const StatusBadge = ({ status }: StatusBadgeProps) => (
  <div
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
      status === "Delivered"
        ? "bg-green-100 text-green-800"
        : "bg-blue-100 text-blue-800"
    } `}
  >
    {status}
  </div>
);

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  getPaginationRange: () => (number | string)[];
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  getPaginationRange,
}: PaginationControlsProps) => (
  <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
    <span className="text-sm text-muted-foreground">
      Page {currentPage} of {totalPages}
    </span>

    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>

      {getPaginationRange().map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ),
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  </div>
);
