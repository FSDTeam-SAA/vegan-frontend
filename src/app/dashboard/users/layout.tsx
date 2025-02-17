// Packages
import { redirect } from "next/navigation";
import { ReactNode } from "react";

// Local imports

import { auth } from "@/auth";
import { usersTabsList } from "@/data/dashboard";
import { Sidebar } from "../_components/sidebar";
import DashboardNavbar from "../merchant/_components/DashboardNavbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  // Fetch the current user's authentication details
  const currentUser = await auth();

  // If the user is not authenticated, redirect them to the onboarding page
  if (!currentUser) redirect("/onboarding");

  // Extract the user object from the authentication response
  const user = currentUser.user;

  // If the user's role is not "user", redirect them to the homepage
  if (user["role"] !== "user") redirect("/");
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={usersTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6]">
        <DashboardNavbar />
        <div className="p-4 md:ml-[272px] md:p-10">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
