import { Button } from "@/components/ui/button";
import { EllipsisVertical, Share2 } from "lucide-react";

const ReferralTracking = () => {
  return (
    <div className="">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[32px] text-lg font-medium leading-[21px] text-[#1F2937] md:pb-[40px] md:text-xl md:leading-[24px]">
          Referral Tracking
        </h4>

        <div className="grid grid-cols-1 gap-[16px] pb-[56px] md:grid-cols-3">
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Total Referrals <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              68
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Amount Deducted For Charity{" "}
              <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $100.00
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Commission Paid <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $524.00
            </p>
          </div>
        </div>

        <div>
          <h6 className="text-lg font-semibold leading-[21px] text-[#1F2937]">
            Refer People To Vegan Collective
          </h6>
          <p className="pt-[8px] text-base font-normal leading-[19px] text-[#4B5563]">
            Click this button to invite people and earn more rewards
          </p>
          <div className="pb-[78px] pt-[32px] md:pb-0">
            <Button
              size="xl"
              className="flex items-center gap-[8px] px-[16px] py-[14px] text-base font-semibold leading-[19px] text-white"
            >
              <Share2 className="block h-[18px] w-[18px] text-white md:hidden" />{" "}
              Share QR Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTracking;
