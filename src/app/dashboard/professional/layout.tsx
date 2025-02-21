// Packages
import { redirect } from "next/navigation";
import { ReactNode } from "react";

// Local Imports
import { auth } from "@/auth";
import { professionalTabsList } from "@/data/dashboard";
import { Sidebar } from "../_components/sidebar";
import DashboardNavbar from "../merchant/_components/DashboardNavbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session || session.user.accountType !== "professional") {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={professionalTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6]">
        <DashboardNavbar />
        <div className="md:ml-[272px]">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
