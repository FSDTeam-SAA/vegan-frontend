import VideoTutorialsContainer from "@/app/dashboard/_components/VideoTutorialsContainer";
import DashboardHeading from "../dashboard-heading";
import SubmittedTicket from "./_components/SubmittedTicket";
import { MerchantVideoTutorialsData } from "@/data/VideoTutorialsData";

export default function MerchantSupportCenter() {
  return (
    <div>
      <DashboardHeading
        title="Support & Help Center"
        subTitle="Find everything you need to succeed on our platform."
      />
      <SubmittedTicket />
      <VideoTutorialsContainer
        VideoTutorialsData={MerchantVideoTutorialsData}
      />
    </div>
  );
}
