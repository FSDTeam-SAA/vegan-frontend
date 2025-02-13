"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { orders } from "./orderData";
import { AnimatePresence, motion } from "framer-motion";

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNo: string;
  vendorName: string;
  items: OrderItem[];
  orderDate: string;
  totalAmount: number;
  shippingStatus: "delivered" | "shipped" | "pending";
}

export function OrderManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const toggleExpand = (orderId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId);
    } else {
      newExpanded.clear(); // Close all other expanded rows
      newExpanded.add(orderId);
    }
    setExpandedRows(newExpanded);
  };

  const toggleSelectRow = (orderId: string | "all") => {
    if (orderId === "all") {
      if (selectAll) {
        setSelectedRows(new Set());
        setSelectAll(false);
      } else {
        setSelectedRows(new Set(filteredOrders.map((order) => order.id)));
        setSelectAll(true);
      }
    } else {
      const newSelected = new Set(selectedRows);
      if (newSelected.has(orderId)) {
        newSelected.delete(orderId);
        setSelectAll(false);
      } else {
        newSelected.add(orderId);
        if (newSelected.size === filteredOrders.length) {
          setSelectAll(true);
        }
      }
      setSelectedRows(newSelected);
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.vendorName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.shippingStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Order["shippingStatus"]) => {
    const variants = {
      delivered: "bg-[#F0FDF4] text-[#16A34A] rounded-full",
      shipped: "bg-[#EFF6FF] text-[#2563EB] rounded-full",
      pending: "bg-[#FEFCE8] text-[#EAB308] rounded-full",
    };
    return (
      <Badge className={variants[status]} variant="outline">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Product Order Management</div>
      <p className="text-sm text-gray-500">
        Efficiently manage and track all your product orders in one place.
      </p>

      <div className="flex gap-4">
        <Input
          placeholder="Search by name, order no..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm border border-[#9CA3AF]"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] border border-[#9CA3AF]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table Head  */}
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#FFFFFF]">
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={() => toggleSelectRow("all")}
                />
              </TableHead>
              <TableHead>Order No</TableHead>
              <TableHead>Vendor Name</TableHead>
              <TableHead>Items Purchased</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Shipping Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Body Content  */}
          <TableBody className="bg-[#F8F5F2]">
            {filteredOrders.map((order) => (
              <>
                <TableRow key={order.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(order.id)}
                      onCheckedChange={() => toggleSelectRow(order.id)}
                    />
                  </TableCell>
                  <TableCell>{order.orderNo}</TableCell>
                  <TableCell>{order.vendorName}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => toggleExpand(order.id)}
                      className="flex items-center gap-2"
                    >
                      {order.items.length} Items
                      {expandedRows.has(order.id) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </TableCell>
                  <TableCell>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(order.shippingStatus)}</TableCell>
                  <TableCell>
                    <button className="underline">Reorder</button>
                  </TableCell>
                </TableRow>

                {/* Show Item purchased  */}
                {expandedRows.has(order.id) && (
                  <TableRow>
                    <TableCell colSpan={8}>
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="bg-gray-50 p-4">
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Item Name</TableHead>
                                  <TableHead>Quantity</TableHead>
                                  <TableHead>Price</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {order.items.map((item) => (
                                  <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>
                                      ${item.price.toFixed(2)}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
