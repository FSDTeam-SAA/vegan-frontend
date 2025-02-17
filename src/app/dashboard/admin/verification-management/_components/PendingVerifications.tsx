"use client"
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import ReviewVendorApplication from "./ReviewVendorApplication";

interface pendingVerificationDataType {
  id: number;
  name: string;
  date: string;
}

const pendingVerificationData: pendingVerificationDataType[] = [
  { id: 1, name: "Green Eats", date: "2025-01-20" },
  { id: 2, name: "Green Eats", date: "2025-01-20" },
  { id: 3, name: "Green Eats", date: "2025-01-20" },
  { id: 4, name: "Green Eats", date: "2025-01-20" },
  { id: 5, name: "Green Eats", date: "2025-01-20" },
  { id: 6, name: "Green Eats", date: "2025-01-20" },
];

const PendingVerifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mb-[72px] mt-[20px] rounded-[16px] bg-[#F8F5F2] px-6 py-8 md:mb-[81px] md:mt-[46px] lg:p-10">
        <h4 className="pb-[32px] text-lg font-medium leading-[21px] text-[#1F2937] md:pb-[26px] md:text-xl md:leading-[24px]">
          Pending Verifications{" "}
          <Badge
            className="ml-2 rounded-full border-none bg-[#FEFCE8] pb-[2px] pl-[9px] pr-[8px] pt-[3px] text-base font-medium leading-[23px] text-[#EAB308]"
            variant="outline"
          >
            6
          </Badge>
        </h4>
        <div>
          {pendingVerificationData?.map((data, index) => {
            const isLastItem = index === pendingVerificationData.length - 1;
            return (
              <div
                key={data?.id}
                className={`flex flex-col items-start justify-start gap-4 rounded-[10px] bg-white p-4 md:flex-row md:items-center md:justify-between ${
                  isLastItem ? "mb-0" : "mb-10"
                }`}
              >
                <div>
                  <h6 className="text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
                    {data?.name}
                  </h6>
                  <p className="pt-2 text-sm font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
                    Submitted: {data?.date}
                  </p>
                </div>
                <div>
                  <h5
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer text-base font-medium leading-[19px] text-[#1D3557] underline"
                  >
                    Review Details
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review vendor Application modal  */}
      <div>
        {
            isOpen && (
                <section className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30 backdrop-blur-sm">
                    <div>
                        <ReviewVendorApplication setIsOpen ={setIsOpen}/>
                    </div>
                </section>
            )
        }
      </div>
    </>
  );
};

export default PendingVerifications;
