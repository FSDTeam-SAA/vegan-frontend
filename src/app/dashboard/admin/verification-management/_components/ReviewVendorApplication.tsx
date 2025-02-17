import { Button } from "@/components/ui/button";
import { FileText, X } from "lucide-react";
import React from "react";

const ReviewVendorApplication = ({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <div className="h-[678px] w-[700px] rounded-[16px] bg-white px-8 py-10">
      <div className="itmes-center flex justify-between">
        <p>Review Vendor Application</p>
        <div className="-mr-2 -mt-2">
          <X
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 cursor-pointer text-[#1F2937]"
          />
        </div>
      </div>
      {/* second part  */}
      <div className="mt-[56px] flex w-full flex-col items-start justify-between md:flex-row">
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-medium leading-[26px] text-[#1F2937]">
            Green Eats Cafe
          </h4>
          <p className="pt-4 text-base font-normal leading-[24px] text-[#4B5563]">
            Contact: John Smith
          </p>
          <p className="py-4 text-base font-normal leading-[24px] text-[#4B5563]">
            Email: hello@vegandelights.com
          </p>
          <p className="text-base font-normal leading-[24px] text-[#4B5563]">
            Loaction: San Francisco. CA
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-end justify-center">
            <h4 className="mb-4 text-lg font-medium leading-[26px] text-[#1F2937]">
              Application Status
            </h4>
            <button className="rounded-[8px] bg-[#FEFCE8] p-2 text-base font-normal leading-[19px] text-[#CA8A04]">
              Pending Review
            </button>
          </div>
        </div>
      </div>
      <h4 className="pb-4 pt-[56px] text-lg font-medium leading-[26px] text-[#1F2937]">
        Submitted Documents
      </h4>

      {/* card first  */}
      <div className="flex items-center justify-between rounded-[8px] bg-[#F9FAFB] p-4">
        <div>
          <div className="flex items-center gap-[12px]">
            <FileText className="h-6 w-6 text-[#4B5563]" />
            <div>
              <p className="text-sm font-medium leading-[20px] text-[#1F2937]">
                Government ID
              </p>
              <p className="pt-[5px] text-sm font-normal leading-[20px] text-[#6B7280]">
                id.pdf
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[32px]">
          <button className="rounded-[12px] border border-[#FEF9C3] bg-[#FEFCE8] p-3 text-base font-normal leading-[19px] text-[#EAB308]">
            Pending Review
          </button>
          <Button
            className="rounded-[8px] border border-[#F3F4F6] bg-white px-[19px] py-3 text-sm font-medium leading-[16px] text-[#1F2937] shadow-none"
            variant="outline"
            size="xl"
          >
            View
          </Button>
        </div>
      </div>
      {/* card second  */}
      <div className="mt-4 flex items-center justify-between rounded-[8px] bg-[#F9FAFB] p-4">
        <div>
          <div className="flex items-center gap-[12px]">
            <FileText className="h-6 w-6 text-[#4B5563]" />
            <div>
              <p className="text-sm font-medium leading-[20px] text-[#1F2937]">
                Food Safety Certificate
              </p>
              <p className="pt-[5px] text-sm font-normal leading-[20px] text-[#6B7280]">
                cert.pdf
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[32px]">
          <button className="rounded-[12px] border border-[#DCFCE7] bg-[#F0FDF4] p-3 text-base font-normal leading-[19px] text-[#22C55E]">
            Verified
          </button>
          <Button
            className="rounded-[8px] border border-[#F3F4F6] bg-white px-[19px] py-3 text-sm font-medium leading-[16px] text-[#1F2937] shadow-none"
            variant="outline"
            size="xl"
          >
            View
          </Button>
        </div>
      </div>

      {/* button part  */}

      <div className="flex items-center justify-between gap-4 mt-[56px]">
        <Button className="shadow-none text-base font-medium leading-[19px] text-[#6B7280] py-[14px] px-[52px] rounded-[10px] border border-[#D1D5DB]" size="xl" variant="outline">
          Request Info
        </Button>
        <Button className="shadow-none text-base font-medium leading-[19px] text-white rounded-[10px] py-[14px] px-[71px]" size="xl" variant="destructive">
          Decline
        </Button>
        <Button className="shadow-none text-base font-medium leading-[19px] text-white rounded-[10px] py-[14px] px-[67px]" size="xl">Approve</Button>
      </div>
    </div>
  );
};

export default ReviewVendorApplication;
