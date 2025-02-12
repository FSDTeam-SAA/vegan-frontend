import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const PendingVerificationContainer = () => {
  return (
    <div className="mt-[56px] rounded-[10px] bg-[#F8F5F2] p-[40px] lg:rounded-[16px]">
      <div className="flex items-center justify-between">
        <h3 className="font-inter text-[20px] font-medium leading-[24.2px] text-[#1F2937]">
          Pending Verifications
        </h3>
        <Link
          href="/professionals"
          className="group flex h-[30px] w-[150px] items-center gap-[2px] gap-x-2 border-0 border-[#1D3557] py-[4px] text-[14px] text-[#1D3557] transition-all duration-300 md:h-auto md:w-fit md:text-[16px]"
        >
          Browse all
          <FaArrowRight className="relative transform transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>

      <ScrollArea className="mt-[40px] h-[347px] w-full border-0">
        <div className="grid grid-cols-1 gap-y-[40px] py-[20px]">
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
    <div className="flex items-center justify-between rounded-[10px] border-[1px] border-[#F4F0EB] bg-white p-[16px]">
      <div>
        <h3 className="font-inter text-[18px] font-medium leading-[26.1px] text-[#1F2937]">
          Green Eats
        </h3>
        <h5 className="mt-[8px] font-inter text-[16px] font-normal leading-[23.2px] text-[#4B5563]">
          Submitted: 2025-01-20
        </h5>
      </div>
      <div>
        <Button variant="link">Review Details</Button>
      </div>
    </div>
  );
};
