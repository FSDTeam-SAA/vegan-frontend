import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

const ApproveApplication = ({
    setApproveModalOpen,
}: {
    setApproveModalOpen: (open: boolean) => void;
}) => {
  return (
    <div className="h-[221px] md:h-[239px] w-[327px] md:w-[490px] rounded-[16px] bg-white py-8 px-6">
      <div className="flex items-center justify-between">
        <h4 className="text-base md:text-lg lg:text-xl font-medium text-[#1F2937] leading-[19px] md:leading-[24px]">Approve Application</h4>
        <X
          className="h-6 w-6 cursor-pointer text-[#1F2937]"
          onClick={() => setApproveModalOpen(false)}
        />
      </div>
      <p className="text-sm md:text-base font-normal text-[#4B5563] leading-[21px] md:leading-[23px] pt-2 md:pt-3 lg:pt-4">Are you sure you want to approve this vendor application?</p>
      <div className="flex items-center justify-end gap-4 pt-10 md:pt-[52px] lg:pt-[64px]">
        <Button onClick={()=>setApproveModalOpen(false)} size="xl" variant="outline" className="shadow-none py-[14px] px-[23px] md:px-[35px] lg:px-[48px] text-base font-medium text-[#6B7280] leading-[19px]">Cancel</Button>
        <Button type="submit" size="xl" className="shadow-none py-[14px] px-[44px] text-base font-medium text-white leading-[19px]">Confirm</Button>
      </div>
    </div>
  );
};

export default ApproveApplication;
