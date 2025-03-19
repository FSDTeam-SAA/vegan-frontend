import { auth } from "@/auth";
import dynamic from "next/dynamic";
import LeaderBoard from "./_components/LeaderBoard";
import TotalEarnings from "./_components/TotalEarnings";
const ReferralTracking = dynamic(
  () => import("../merchant/_components/ReferralTracking"),
  { ssr: false },
);

const Page = async () => {
  const user = await auth();

  if (!user) return;
  return (
    <div className="p-10">
      <div className="pb-[40px] md:pb-[48px] lg:pb-[56px]">
        <h4 className="text-xl font-semibold leading-[29px] text-[#1F2937] md:text-2xl md:leading-[34px]">
          Dashboard
        </h4>
        <p className="pt-[4px] text-base font-normal leading-[23px] text-[#4B5563]">
          Get an overview of your performance, earnings, and progress
        </p>
      </div>

      <TotalEarnings loggedInUserId={user.user.userId} />
      <div className="mt-10">
        <ReferralTracking userId={user.user.userId} />
      </div>
      <LeaderBoard />
    </div>
  );
};

export default Page;
