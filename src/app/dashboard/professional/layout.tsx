import { professionalTabsList } from "@/data/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";
import DashboardNavbar from "../merchant/_components/DashboardNavbar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={professionalTabsList} />
      <main className="min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6]">
        <DashboardNavbar />
        <div className="p-4 md:ml-[272px] md:p-4">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;

// import { usersTabsList } from "@/data/dashboard";
// import { ReactNode } from "react";
// import { Sidebar } from "../_components/sidebar";

// const DashboardLayout = async ({ children }: { children: ReactNode }) => {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar lists={usersTabsList} />

//       <main className="min-h-screen flex-1 overflow-y-auto bg-[#F5F1ED] p-2 pt-[80px] md:ml-[240px] lg:p-[50px]">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
