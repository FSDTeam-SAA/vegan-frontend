import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();

  if (!user) redirect("/onboarding");
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-[240px] min-h-screen flex-1 overflow-y-auto bg-[#F5F1ED] p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
