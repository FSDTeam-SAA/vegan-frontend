"use client";
import {
  Briefcase,
  CircleHelp,
  CreditCard,
  Info,
  LayoutDashboard,
  ListVideo,
  PhoneCallIcon,
  Truck,
  Users,
  Video,
  Wallet,
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

export const professionalTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional",
    icon: LayoutDashboard,
    linkText: "Overview",
    roles: ["professional"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional/service-management",
    icon: Briefcase,
    linkText: "Service Management",
    roles: ["professional"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional/client-mnagement",
    icon: Users,
    linkText: "Client Management",
    roles: ["professional"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional/go-live",
    icon: Video,
    linkText: "Go Live",
    roles: ["professional"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional/payment",
    icon: Wallet,
    linkText: "Payment",
    roles: ["professional"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/professional/help",
    icon: CircleHelp,
    linkText: "Help Center & Support",
    roles: ["professional"],
  },
];
