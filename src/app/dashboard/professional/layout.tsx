import { professionalTabsList } from "@/data/dashboard";
import { ReactNode } from "react";
import { Sidebar } from "../_components/sidebar";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar lists={professionalTabsList} />
      <main className="md:ml-[272px] min-h-screen flex-1 overflow-y-auto bg-[#E8DFD6] p-[24px] md:p-[32px] lg:p-[40px]">
        {children}
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