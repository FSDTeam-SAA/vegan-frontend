import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GoLive from "../_components/go-live/go-live";

export default async function page() {
  const currentUser = await auth();
  if (!currentUser) redirect("/");
  return (
    <div className="px-9 py-11">
      <GoLive userId={currentUser.user.userId} />
    </div>
  );
}
