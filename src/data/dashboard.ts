"use client";
import {
  BadgeCheck,
  Box,
  Briefcase,
  Calendar,
  CalendarCheck,
  CircleDotDashed,
  CircleHelp,
  HandHeart,
  Heart,
  Info,
  LayoutDashboard,
  ListVideo,
  Newspaper,
  Package,
  PhoneCallIcon,
  Target,
  Truck,
  User,
  Users,
  Video,
  Wallet,
} from "lucide-react";
import { BsCreditCard } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LuVideo } from "react-icons/lu";
import { MdStorefront } from "react-icons/md";

export type NavigationItem = {
  id: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  linkText: string;
  roles: string[];
};

export const adminDashboardTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/dashboard/admin",
    icon: LayoutDashboard,
    linkText: "Overview",
    roles: ["admin"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/admin/vendor-management",
    icon: User,
    linkText: "Vendor Management",
    roles: ["admin"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/admin/verification-management",
    icon: BadgeCheck,
    linkText: "Verification Management",
    roles: ["admin"],
  },
  // {
  //   id: crypto.randomUUID(),
  //   path: "/dashboard/admin/go-live",
  //   icon: Video,
  //   linkText: "Go Live",
  //   roles: ["admin"],
  // },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/admin/support",
    icon: CircleHelp,
    linkText: "Support & Help Center",
    roles: ["admin"],
  },
] as NavigationItem[];

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
    path: "/dashboard/professional/client-management",
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
    path: "/dashboard/professional/help-center-support",
    icon: CircleHelp,
    linkText: "Help Center & Support",
    roles: ["professional"],
  },
] as NavigationItem[];

export const organizationTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization",
    icon: LayoutDashboard,
    linkText: "Overview",
    roles: ["admin"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/update-and-news",
    icon: Newspaper,
    linkText: "Update & News",
    roles: ["admin"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/event-management",
    icon: Calendar,
    linkText: "Event Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/fundraising-management",
    icon: Target,
    linkText: "Fundraising Management",
    roles: ["admin", "user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/go-live",
    icon: ListVideo,
    linkText: "Go Live",
    roles: ["admin", "user", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/payment",
    icon: Wallet,
    linkText: "Payment",
    roles: ["admin", "user", "delivery man"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/organization/support-center",
    icon: Info,
    linkText: "Support & Help Center",
    roles: ["admin", "delivery man"],
  },
] as NavigationItem[];

// User Dashboard Menu Item
export const usersTabsList = [
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users",
    icon: LayoutDashboard,
    linkText: "Overview",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/bookings-management",
    icon: CalendarCheck,
    linkText: "Bookings Management",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/wishlist-management",
    icon: Heart,
    linkText: "Wishlist Management",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/go-live",
    icon: Video,
    linkText: "Go Live",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/product-order-management",
    icon: Package,
    linkText: "Product Order Management",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/Volunteering-management",
    icon: HandHeart,
    linkText: "Volunteering Management",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/profile-settings",
    icon: CircleDotDashed,
    linkText: "Profile & Settings",
    roles: ["user"],
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard/users/support-help-center",
    icon: Info,
    linkText: "Support & Help Center",
    roles: ["user"],
  },
] as NavigationItem[];
