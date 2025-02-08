"use client";
import {
  Box,
  Briefcase,
  CircleHelp,
  LayoutDashboard,
  PhoneCallIcon,
  Truck,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { LuVideo } from "react-icons/lu";
import { MdStorefront } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";

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
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/products-management",
    icon: Box,
    linkText: "Product Management",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/delivery-management",
    icon: Truck,
    linkText: "Delivery Management",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/go-live",
    icon: LuVideo,
    linkText: "Go Live",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/sales-management",
    icon: MdStorefront,
    linkText: "Sales & Revenue",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/payment",
    icon: BsCreditCard,
    linkText: "Payments & Transactions",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/customer-management",
    icon: PhoneCallIcon,
    linkText: "Customer Management",
    roles: ["merchant"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/merchant/support-center",
    icon: IoIosHelpCircleOutline,
    linkText: "Help & Support Center",
    roles: ["merchant"],
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
