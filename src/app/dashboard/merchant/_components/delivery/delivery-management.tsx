"use client";

import { useState, useEffect, useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
// import { AddTrackingDialog } from "./add-tracking-dialog";
// import { UpdateStatusDialog } from "./update-status-dialog";
// import { useToast } from "@/components/ui/use-toast";

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
  status: string;
}

const generateInitialOrders = (): Order[] => {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    orderNo: `ORD-00${i + 1}`,
    customer: {
      name: "Sarah James",
      email: "Sarah@gmail.com",
      avatar: "/placeholder.svg",
    },
    orderDate: "Jan 6, 2025",
    amount: i % 2 === 0 ? 150.0 : 200.0,
    trackingNumber: i % 3 === 0 ? "TRK123456789" : null,
    status: i % 2 === 0 ? "Delivered" : "Shipped",
  }));
};

export default function DeliveryManagement() {
  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(3);
  // const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  // const [isAddTrackingOpen, setIsAddTrackingOpen] = useState(false);
  // const [isUpdateStatusOpen, setIsUpdateStatusOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const totalPages = 30;
  // const { toast } = useToast();

  useEffect(() => {
    setOrders(generateInitialOrders());
    setMounted(true);
  }, []);
  // const handleOpenAddTracking = (order: Order) => {
  //   setSelectedOrder(order);
  //   setIsAddTrackingOpen(true);
  // };

  // const handleCloseAddTracking = () => {
  //   setIsAddTrackingOpen(false);
  //   setTimeout(() => setSelectedOrder(null), 300); // Ensures reactivity issues are avoided
  // };

  // const handleAddTracking = useCallback(
  //   async (trackingNumber: string) => {
  //     if (!selectedOrder) return;

  //     setIsLoading(true);
  //     try {
  //       // Simulating an API call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       setOrders((prevOrders) =>
  //         prevOrders.map((order) =>
  //           order.id === selectedOrder.id
  //             ? { ...order, trackingNumber }
  //             : order,
  //         ),
  //       );
  //       toast({
  //         title: "Tracking number added",
  //         description: `Tracking number ${trackingNumber} has been added to order ${selectedOrder.orderNo}.`,
  //       });
  //     } catch (error) {
  //       console.error("Error adding tracking number:", error);
  //       toast({
  //         title: "Error",
  //         description: "Failed to add tracking number. Please try again.",
  //         variant: "destructive",
  //       });
  //     } finally {
  //       setIsLoading(false);
  //       setIsAddTrackingOpen(false);
  //       setSelectedOrder(null);
  //     }
  //   },
  //   [selectedOrder, toast], // Added toast to dependencies
  // );

  // const handleUpdateStatus = useCallback(
  //   async (status: string) => {
  //     if (!selectedOrder) return;

  //     setIsLoading(true);
  //     try {
  //       // Simulating an API call
  //       await new Promise((resolve) => setTimeout(resolve, 1000));

  //       setOrders((prevOrders) =>
  //         prevOrders.map((order) =>
  //           order.id === selectedOrder.id ? { ...order, status } : order,
  //         ),
  //       );
  //       toast({
  //         title: "Status updated",
  //         description: `Order ${selectedOrder.orderNo} status has been updated to ${status}.`,
  //       });
  //     } catch (error) {
  //       console.error("Error updating status:", error);
  //       toast({
  //         title: "Error",
  //         description: "Failed to update status. Please try again.",
  //         variant: "destructive",
  //       });
  //     } finally {
  //       setIsLoading(false);
  //       setIsUpdateStatusOpen(false);
  //       setSelectedOrder(null);
  //     }
  //   },
  //   [selectedOrder, toast], // Added toast to dependencies
  // );

  const renderPaginationNumbers = useCallback(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1) ||
        i === 10 ||
        i === 11 ||
        i === 12
      ) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Button>,
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <span key={i} className="px-2">
            ...
          </span>,
        );
      }
    }
    return pages;
  }, [currentPage]);

  if (!mounted) {
    return (
      <div className="p-6">
        <div className="flex h-[600px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative w-[300px]">
            <Input placeholder="Search by name, item..." className="pl-4" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Order No</TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Tracking Number</TableHead>
              <TableHead>Shipping Status</TableHead>
              <TableHead className="w-[60px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={order.customer.avatar} />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {order.customer.name}
                      </span>
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
                    <span className="text-muted-foreground">
                      No tracking available
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </div>
                </TableCell>

                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!order.trackingNumber && (
                        <DropdownMenuItem
                        // onClick={() => handleOpenAddTracking(order)}
                        >
                          Add Tracking
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                      // onClick={() => {
                      //   setSelectedOrder(order);
                      //   setIsUpdateStatusOpen(true);
                      // }}
                      >
                        Update Status
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <div className="flex items-center">{renderPaginationNumbers()}</div>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* <AddTrackingDialog
        open={isAddTrackingOpen}
        onOpenChange={handleCloseAddTracking} // Updated to use the function
        onAddTracking={handleAddTracking}
        isLoading={isLoading}
      />

      <UpdateStatusDialog
        open={isUpdateStatusOpen}
        onOpenChange={setIsUpdateStatusOpen}
        onUpdateStatus={handleUpdateStatus}
        currentStatus={selectedOrder?.status || "Shipped"}
        isLoading={isLoading}
      /> */}
    </div>
  );
}
