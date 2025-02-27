import { auth } from "@/auth";
import { redirect } from "next/navigation";
import HelpCenterSupportHeader from "./_components/HelpCenterSupportHeader";
import SubmittedTicket from "./_components/SubmittedTicket";
import VideoTutorials from "./_components/VideoTutorials";
import ProfessionalTicketContainer from "./_components/professional-ticket-container";

const Page = async () => {
  const currentUser = await auth();

  if (!currentUser) redirect("/");

  const userId = currentUser.user.userId;
  return (
    <div className="space-y-[40px] px-[24px] md:px-[32px] lg:px-[40px]">
      <HelpCenterSupportHeader />

      <div className="space-y-[40px] rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <SubmittedTicket userId={userId} />

        <div className="border-b border-[#E8DFD6] pt-[40px] md:pt-[48px] lg:pt-[56px]" />
        <ProfessionalTicketContainer userId={userId} />
      </div>

      <VideoTutorials />
    </div>
  );
};

export default Page;
