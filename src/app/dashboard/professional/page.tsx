import LeaderBoard from "./_components/LeaderBoard";
import ReferralTracking from "./_components/ReferralTracking";
import TotalEarnings from "./_components/TotalEarnings";

const Page = () => {
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

      <TotalEarnings />
      <ReferralTracking />
      <LeaderBoard />
    </div>
  );
};

export default Page;
