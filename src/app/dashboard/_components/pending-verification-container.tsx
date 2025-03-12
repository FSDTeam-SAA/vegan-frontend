import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PendingVerificationContainer = () => {
  return (
    <div className="mt-[56px] rounded-[10px] bg-[#F8F5F2] p-[40px] lg:rounded-[16px]">
      <div className="flex items-center justify-between">
        <h3 className="font-inter text-lg font-medium leading-[21px] text-[#1F2937] md:text-[20px] md:leading-[24.2px]">
          Pending Verifications
        </h3>
        <div>
          <Link
            href="/professionals"
            className="flex items-center gap-2 text-base font-medium text-[#1D3557] leading-[19px] underline md:no-underline"
          >
            View all
            <ArrowRight className=" text-[#1D3557]"/>
          </Link>
        </div>
      </div>

      <ScrollArea className="mt-10 h-[347px] w-full border-0">
        <div className="grid grid-cols-1 gap-10">
          <PendingVerificationCard />
          <PendingVerificationCard />
          <PendingVerificationCard />
          <PendingVerificationCard />
          <PendingVerificationCard />
          <PendingVerificationCard />
        </div>
      </ScrollArea>
    </div>
  );
};

export default PendingVerificationContainer;

const PendingVerificationCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-startj md:justify-between rounded-[10px] border-[1px] border-[#F4F0EB] bg-white p-[16px]">
      <div>
        <h3 className="font-inter text-base md:text-lg font-medium leading-[23px] md:leading-[26.1px] text-[#1F2937]">
          Green Eats
        </h3>
        <h5 className="mt-[8px] font-inter text-sm md:text-[16px] font-normal leading-[20px] md:leading-[23.2px] text-[#4B5563]">
          Submitted: 2025-01-20
        </h5>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="text-base font-medium text-[#1D3557] leading-[19px] underline cursor-pointer" >Review Details</button>
      </div>
    </div>
  );
};
