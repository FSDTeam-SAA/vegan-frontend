import { professionalTabsList } from "@/data/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={professionalTabsList} />
      <main className="ml-[272px] min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6] p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
