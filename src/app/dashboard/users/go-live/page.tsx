import { auth } from "@/auth";
import { redirect } from "next/navigation";
import VideoTutorials from "../../professional/help-center-support/_components/VideoTutorials";
import GoLive from "../_components/go-live/Go-live";
export default async function page() {
  const session = await auth();

  if (!session?.user) redirect("/login");
  return (
    <div>
      <GoLive userId={session.user.userId} />
      <div className="mt-[26px]">
        <VideoTutorials />
      </div>
    </div>
  );
}
