import { auth } from "@/auth";
import { merchantTabsList } from "@/data/dashboard";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();

  if (!user) redirect("/onboarding");
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={merchantTabsList} />
      <main className="ml-[272px] min-h-screen flex-1 overflow-y-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
