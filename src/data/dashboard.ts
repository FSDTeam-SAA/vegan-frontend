"use client";
import {
  CreditCard,
  Info,
  LayoutDashboard,
  ListVideo,
  PhoneCallIcon,
  Truck,
} from "lucide-react";
import { FaProductHunt, FaSalesforce } from "react-icons/fa";

export const dashboardTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/",
    icon: LayoutDashboard,
    linkText: "Dashboard Overview",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/products-management",
    icon: FaProductHunt,
    linkText: "Product Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/delivery-management",
    icon: Truck,
    linkText: "Delivery Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/go-live",
    icon: ListVideo,
    linkText: "Go Live & Streaming",
    roles: ["admin", "user", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/sales-management",
    icon: FaSalesforce,
    linkText: "Sales & Revenue",
    roles: ["admin", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/payment",
    icon: CreditCard,
    linkText: "Payments & Transactions",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/customer-management",
    icon: PhoneCallIcon,
    linkText: "Customer Relations",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/support-center",
    icon: Info,
    linkText: "Help & Support Center",
    roles: ["admin", "delivery man"],
  },
];
