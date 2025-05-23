import { auth } from "@/auth";
import { redirect } from "next/navigation";
import OrganizationTicketContainer from "../../support-center/_components/organization-ticket-container";
import VideoTutorials from "../shared/VideoTutorials";
import SupportForm from "./support-form";

const SupportCenter = async () => {
  const currentUser = await auth();
  if (!currentUser) redirect("/");

  const userId = currentUser.user.userId;
  return (
    <div className="space-y-10">
      <SupportForm userId={userId} />
      <OrganizationTicketContainer userId={userId} />
      <VideoTutorials />
    </div>
  );
};

export default SupportCenter;
