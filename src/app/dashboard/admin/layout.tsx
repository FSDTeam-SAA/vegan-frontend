import { auth } from "@/auth";
import { adminDashboardTabsList } from "@/data/dashboard";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";
import DashboardNavbar from "../merchant/_components/DashboardNavbar";

const AdminDashboardLayout = async ({ children }: { children: ReactNode }) => {
  const currentUser = await auth();

  if (!currentUser) redirect("/onboarding");
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={adminDashboardTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6]">
        <DashboardNavbar />
        <div className="p-4 md:ml-[272px] md:p-10">{children}</div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
