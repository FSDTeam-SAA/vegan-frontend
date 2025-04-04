"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatePresence, motion } from "framer-motion"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { Apiresponse, Order } from "./orderData"



export function OrderManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  const session = useSession()
  const userId = session.data?.user?.userId || "67deae8faa8957c847080c8b" // Fallback ID for testing

  const { data, isLoading, isError, error } = useQuery<Apiresponse>({
    queryKey: ["orders", userId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/product-order-management?userID=67deae8faa8957c847080c8b`,
        )
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }
        return response.json()
      } catch (err) {
        console.error("Error fetching orders:", err)
        throw err
      }
    },
  })

  // Define filteredOrders with robust error handling
  const filteredOrders = React.useMemo(() => {
    if (!data?.data || !Array.isArray(data.data)) return []

    return data.data.filter((order) => {
      // Safely check for order properties
      const orderNumber = order?.orderNumber || ""
      const businessName = order?.sellerID?.businessName || ""
      const status = order?.shippingStatus || ""

      // Case-insensitive search
      const lowerSearchQuery = searchQuery.toLowerCase().trim()

      // Check if order matches search query
      const matchesSearch =
        lowerSearchQuery === "" ||
        orderNumber.toLowerCase().includes(lowerSearchQuery) ||
        businessName.toLowerCase().includes(lowerSearchQuery)

      // Check if order matches status filter
      const matchesStatus = statusFilter === "all" || status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [data?.data, searchQuery, statusFilter])

  const toggleExpand = (orderId: string) => {
    const newExpanded = new Set(expandedRows)
    if (newExpanded.has(orderId)) {
      newExpanded.delete(orderId)
    } else {
      newExpanded.clear() // Close all other expanded rows
      newExpanded.add(orderId)
    }
    setExpandedRows(newExpanded)
  }

  const toggleSelectRow = (orderId: string | "all") => {
    if (orderId === "all") {
      if (selectAll) {
        setSelectedRows(new Set())
        setSelectAll(false)
      } else {
        setSelectedRows(new Set(filteredOrders?.map((order) => order?._id)))
        setSelectAll(true)
      }
    } else {
      const newSelected = new Set(selectedRows)
      if (newSelected.has(orderId)) {
        newSelected.delete(orderId)
        setSelectAll(false)
      } else {
        newSelected.add(orderId)
        if (newSelected.size === filteredOrders?.length) {
          setSelectAll(true)
        }
      }
      setSelectedRows(newSelected)
    }
  }

  const getStatusBadge = (status: Order["shippingStatus"]) => {
    const variants = {
      delivered: "bg-[#F0FDF4] text-[#16A34A] rounded-full",
      shipped: "bg-[#EFF6FF] text-[#2563EB] rounded-full",
      pending: "bg-[#FEFCE8] text-[#EAB308] rounded-full",
    }
    return (
      <Badge className={variants[status]} variant="outline">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Add loading state
  if (isLoading) {
    return <div className="flex justify-center p-8">Loading orders...</div>
  }

  // Add error handling
  if (isError) {
    return (
      <div className="p-8 text-red-500">
        Error loading orders: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-xl font-semibold">Product Order Management</div>
      <p className="text-sm text-gray-500">Efficiently manage and track all your product orders in one place.</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by order number or vendor name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="max-w-sm border border-[#9CA3AF]"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] border border-[#9CA3AF]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
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
                <Checkbox checked={selectAll} onCheckedChange={() => toggleSelectRow("all")} />
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
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <React.Fragment key={order._id}>
                  <TableRow>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.has(order?._id)}
                        onCheckedChange={() => toggleSelectRow(order?._id)}
                      />
                    </TableCell>
                    <TableCell>{order?.orderNumber || "N/A"}</TableCell>
                    <TableCell>{order?.sellerID?.businessName || "N/A"}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => toggleExpand(order?._id)}
                        className="flex items-center gap-2"
                        aria-label={expandedRows.has(order?._id) ? "Collapse order details" : "Expand order details"}
                      >
                        {order?.productId?.length || 0} Items
                        {expandedRows.has(order?._id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </TableCell>
                    <TableCell>{order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}</TableCell>
                    <TableCell>${order?.amount?.toFixed(2) || "0.00"}</TableCell>
                    <TableCell>{getStatusBadge(order?.shippingStatus)}</TableCell>
                    <TableCell>
                      <button className="underline">Reorder</button>
                    </TableCell>
                  </TableRow>

                  {/* Show Item purchased  */}
                  {expandedRows.has(order?._id) && (
                    <TableRow>
                      <TableCell colSpan={8}>
                        <AnimatePresence>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
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
                                  {Array.isArray(order?.productId) && order.productId.length > 0 ? (
                                    order.productId.map((item) => (
                                      <TableRow key={item?._id}>
                                        <TableCell>{item?.productName || "N/A"}</TableCell>
                                        <TableCell>{item?.stockQuantity || 0}</TableCell>
                                        <TableCell>${(item?.price || 0).toFixed(2)}</TableCell>
                                      </TableRow>
                                    ))
                                  ) : (
                                    <TableRow>
                                      <TableCell colSpan={3} className="text-center py-2">
                                        No items found for this order.
                                      </TableCell>
                                    </TableRow>
                                  )}
                                </TableBody>
                              </Table>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-4">
                  No orders found matching your search criteria. Please try a different search term or filter.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

