import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GoLive from "../_components/go-live/go-live";

export default async function page() {
  const session = await auth();

  if (!session?.user) redirect("/onboarding");
  return (
    <div className="px-9 py-11">
      <GoLive
        userId={session.user.userId}
        email={session.user.email as string}
      />
    </div>
  );
}
