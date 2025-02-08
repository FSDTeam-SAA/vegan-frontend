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

export type NavigationItem = {
  id: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  linkText: string;
  roles: string[];
};

export const merchantTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant",
    icon: LayoutDashboard,
    linkText: "Dashboard Overview",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/products-management",
    icon: FaProductHunt,
    linkText: "Product Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/delivery-management",
    icon: Truck,
    linkText: "Delivery Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/go-live",
    icon: ListVideo,
    linkText: "Go Live & Streaming",
    roles: ["admin", "user", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/sales-management",
    icon: FaSalesforce,
    linkText: "Sales & Revenue",
    roles: ["admin", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/payment",
    icon: CreditCard,
    linkText: "Payments & Transactions",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/customer-management",
    icon: PhoneCallIcon,
    linkText: "Customer Relations",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/support-center",
    icon: Info,
    linkText: "Help & Support Center",
    roles: ["admin", "delivery man"],
  },
] as NavigationItem[];

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
] as NavigationItem[];
