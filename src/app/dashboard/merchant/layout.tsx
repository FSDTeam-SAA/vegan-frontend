// Packages
import { redirect } from "next/navigation";
import { ReactNode } from "react";

// Local imports
import { auth } from "@/auth";
import { merchantTabsList } from "@/data/dashboard";
import { Sidebar } from "../_components/sidebar";
import DashboardNavbar from "./_components/DashboardNavbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session || session.user.accountType !== "merchant") {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={merchantTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6]">
        <DashboardNavbar />
        <div className="p-4 md:ml-[272px] md:p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
