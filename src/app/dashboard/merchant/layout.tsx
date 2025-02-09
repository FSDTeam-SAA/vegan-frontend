import { merchantTabsList } from "@/data/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={merchantTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#F5F1ED] p-4 pt-[80px] md:ml-[240px] md:p-8 md:pt-8">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
