import { auth } from "@/auth";
import { redirect } from "next/navigation";
import StatsDashboard from "./StatsDashboard";

export default async function Overview() {
  const cs = await auth();
  if (!cs?.user) redirect("/");
  return (
    <div className="space-y-8 p-2">
      <div>
        <h1 className="mb-2 text-2xl font-semibold">Overview</h1>
        <p className="text-gray-600">
          Get an overview of your performance, earnings, and progress
        </p>
      </div>

      {/* Dashboard Status  */}
      <StatsDashboard userId={cs.user.id as string} />

      {/* <ReferralEarningsChart /> */}
    </div>
  );
}
