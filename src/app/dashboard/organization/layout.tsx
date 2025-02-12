import { auth } from "@/auth";
import { organizationTabsList } from "@/data/dashboard";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();

  if (!user) redirect("/onboarding");
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={organizationTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#F5F1ED] p-2 pt-[80px] md:ml-[240px] lg:p-[50px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
