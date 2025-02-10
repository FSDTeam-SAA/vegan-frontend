import { merchantTabsList } from "@/data/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={merchantTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6] p-4 pt-[80px] md:ml-[272px] md:p-4">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
