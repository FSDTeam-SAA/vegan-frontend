"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import ApproveApplication from "./ApproveApplication";
import RequestAdditionalInformation from "./RequestAdditionalInformation";
import DeclineApplication from "./DeclineApplication";

const ReviewVendorApplication = ({
  setIsOpen,
}: {
  setIsOpen: (open: boolean) => void;
}) => {
  const [variant, setVariant] = useState<"destructive" | "ghost">(
    "destructive",
  );

  const [approveModalOpen, setApproveModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [declineModalOpen, setDeclineModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVariant("ghost"); // Small screens
      } else {
        setVariant("destructive"); // Large screens
      }
    };

    // Set initial variant
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="rounded-[16px] bg-[#F8F5F2] pt-8 md:bg-white md:py-10">
      <div className="itmes-center flex justify-between px-6 md:px-8">
        <p className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl">
          Review Vendor Application
        </p>
        <div className="-mr-2 -mt-1 md:-mt-2">
          <X
            onClick={() => setIsOpen(false)}
            className="h-5 w-5 cursor-pointer text-[#1F2937] md:h-6 md:w-6"
          />
        </div>
      </div>
      <ScrollArea className="h-[550px] w-[327px] md:h-[590px] md:w-[700px]">
        <div className="px-6 md:px-8">
          {/* second part  */}
          <div className="mt-[42px] flex w-full flex-col items-start justify-between gap-[43px] md:mt-[49px] md:flex-row lg:mt-[56px]">
            <div className="w-full md:w-1/2">
              <h4 className="mg:leading-[26px] text-base font-medium leading-[23px] text-[#1F2937] md:text-lg">
                Green Eats Cafe
              </h4>
              <p className="pt-4 text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                Contact: John Smith
              </p>
              <p className="py-4 text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                Email: hello@vegandelights.com
              </p>
              <p className="text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                Loaction: San Francisco. CA
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-start justify-center md:items-end">
                <h4 className="mb-4 text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
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
          <div className="flex flex-col items-start justify-start gap-4 rounded-[8px] bg-white p-[14px] md:flex-row md:items-center md:justify-between md:gap-0 md:bg-[#F9FAFB] md:p-4">
            <div>
              <div className="flex items-center justify-start gap-[12px]">
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
            <div className="flex w-full flex-col items-start gap-6 md:w-auto md:flex-row md:items-center md:gap-[32px]">
              <button className="rounded-full border border-[#FEF9C3] bg-[#FEFCE8] p-3 text-base font-normal leading-[19px] text-[#EAB308]">
                Pending Review
              </button>
              <Button
                className="w-full rounded-[8px] border border-[#F3F4F6] bg-white px-[19px] py-3 text-sm font-medium leading-[16px] text-[#1F2937] shadow-none md:w-auto"
                variant="outline"
                size="xl"
              >
                View
              </Button>
            </div>
          </div>
          {/* card second  */}

          <div className="mt-4 flex flex-col items-start justify-start gap-4 rounded-[8px] bg-white p-[14px] md:flex-row md:items-center md:justify-between md:gap-0 md:bg-[#F9FAFB] md:p-4">
            <div>
              <div className="flex items-center justify-start gap-[12px]">
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
            <div className="flex w-full flex-col items-start gap-6 md:w-auto md:flex-row md:items-center md:gap-[32px]">
              <button className="rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-[27px] py-2 text-base font-normal leading-[19px] text-[#22C55E] md:p-3">
                Verified
              </button>
              <Button
                className="w-full rounded-[8px] border border-[#F3F4F6] bg-white px-[19px] py-3 text-sm font-medium leading-[16px] text-[#1F2937] shadow-none md:w-auto"
                variant="outline"
                size="xl"
              >
                View
              </Button>
            </div>
          </div>

          {/* button part  */}

          <div className="mt-10 grid grid-cols-1 gap-4 pb-[42px] md:mt-[48px] md:grid-cols-3 md:pb-0 lg:mt-[56px]">
            <Button
              onClick={()=>setRequestModalOpen(!requestModalOpen)}
              className="order-2 rounded-[10px] border border-[#D1D5DB] px-[52px] py-[14px] text-base font-medium leading-[19px] text-[#6B7280] shadow-none md:order-1 md:col-span-1"
              size="xl"
              variant="outline"
            >
              Request Info
            </Button>
            <Button
              onClick={()=>setDeclineModalOpen(!declineModalOpen)}
              className="order-3 rounded-[10px] px-[71px] py-[14px] text-base font-semibold leading-[19px] text-[#EF4444] shadow-none md:order-2 md:col-span-1 md:font-medium md:text-white"
              size="xl"
              variant={variant}
            >
              Decline
            </Button>
            <Button
              onClick={() => setApproveModalOpen(!approveModalOpen)}
              className="order-1 rounded-[10px] px-[67px] py-[14px] text-base font-medium leading-[19px] text-white shadow-none md:order-3 md:col-span-1"
              size="xl"
            >
              Approve
            </Button>
          </div>
        </div>
      </ScrollArea>

      {/* Approve modal part  */}
      <div>
        {approveModalOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <ApproveApplication setApproveModalOpen={setApproveModalOpen}/>
          </section>
        )}
      </div>

      {/* Request info modal part  */}
      <div>
        {requestModalOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <RequestAdditionalInformation setRequestModalOpen={setRequestModalOpen}/>
          </section>
        )}
      </div>

      {/* Approve modal part  */}
      <div>
        {declineModalOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <DeclineApplication setDeclineModalOpen={setDeclineModalOpen}/>
          </section>
        )}
      </div>

    </div>
  );
};

export default ReviewVendorApplication;
