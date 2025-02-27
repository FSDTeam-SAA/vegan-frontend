import VideoTutorialsContainer from "@/app/dashboard/_components/VideoTutorialsContainer";
import { auth } from "@/auth";
import { MerchantVideoTutorialsData } from "@/data/VideoTutorialsData";
import { redirect } from "next/navigation";
import DashboardHeading from "../dashboard-heading";
import SubmittedTicket from "./_components/SubmittedTicket";

export default async function MerchantSupportCenter() {
  const currentUser = await auth();
  if (!currentUser) redirect("/");

  const userId = currentUser.user.userId;
  return (
    <div>
      <DashboardHeading
        title="Support & Help Center"
        subTitle="Find everything you need to succeed on our platform."
      />
      <SubmittedTicket userId={userId} />
      <VideoTutorialsContainer
        VideoTutorialsData={MerchantVideoTutorialsData}
      />
    </div>
  );
}
