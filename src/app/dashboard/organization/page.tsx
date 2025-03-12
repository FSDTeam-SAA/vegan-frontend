// import Dashboard from "./_components/dashboard/dashboard";

import { auth } from "@/auth";
import Dashboard from "./_components/dashobard-home/dashboard-home";

export default async function page() {
  const user = await auth();

  if (!user) return;
  return (
    <div>
      <Dashboard userId={user.user.userId} />
    </div>
  );
}
