import { auth } from "@/auth";
import { redirect } from "next/navigation";
import VideoTutorials from "../shared/VideoTutorials";
import SupportForm from "./support-form";

const SupportCenter = async () => {
  const currentUser = await auth();
  if (!currentUser) redirect("/");

  const userId = currentUser.user.userId;
  return (
    <div>
      <SupportForm userId={userId} />
      <VideoTutorials />
    </div>
  );
};

export default SupportCenter;
