import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import DeliveryManagementAction from "./delivery-management-action";
import { Booking } from "./delivery-management-table-container";

export const DeliveryManagementColumn: ColumnDef<Booking>[] = [
  {
    header: "Order No",
    accessorKey: "orderNo",
  },
  {
    header: "Customer Name",
    accessorKey: "customerName",
  },

  {
    header: "Order Date",
    cell: ({ row }) => {
      return <p>{moment(row.original.orderDate).format("MMM D, YYYY")}</p>;
    },
  },
  {
    header: "Amount",
    cell: ({ row }) => {
      return <p>${row.original.amount}</p>;
    },
  },
  {
    header: "Tracking Number",
    accessorKey: "trackingNumber",
  },
  {
    header: "Shipping Status",
    cell: ({ row }) => {
      const status = row.original.shippingStatus;
      return <StatusBadge status={status} />;
    },
  },
  {
    header: "Action",
    cell: ({ row }) => <DeliveryManagementAction data={row.original} />,
  },
];

const StatusBadge = ({ status }: { status: string }) => (
  <div
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
      status === "delivered"
        ? "bg-green-100 text-green-800"
        : "bg-blue-100 text-blue-800"
    } `}
  >
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </div>
);
