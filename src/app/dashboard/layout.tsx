import { auth } from "@/auth";
import Footer from "@/components/home/footer/footer";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await auth();

  if (!user) redirect("/onboarding");
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

// test commit
