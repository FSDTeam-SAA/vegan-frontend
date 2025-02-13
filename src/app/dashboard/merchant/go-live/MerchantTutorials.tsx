import React from "react";
import { MerchantTutiorialsData } from "./MerchantTutiorialsData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const MerchantTutiorials = () => {
  return (
    <div className="pb-[23px] md:pb-[50px] lg:pb-[76px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[40px] pt-[0px] text-xl font-medium leading-[24px] text-[#1F2937] md:pt-[8px] lg:pt-[16px]">
          Video Tutorials
        </h4>
        <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2">
          {MerchantTutiorialsData?.map((data) => {
            return (
              <div
                key={data?.id}
                className="rounded-[18px] border border-[#E8DFD6] px-[16px] pb-[18px] pt-[16px]"
              >
                <Image
                  src={data?.img}
                  alt={data?.name}
                  width={486}
                  height={220}
                  className="h-[220px] w-full md:h-auto"
                />
                <p className="py-[16px] text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                  {data?.name}
                </p>
                <div className="flex flex-col items-start justify-start gap-[16px] md:flex-row md:items-center md:justify-between">
                  <button className="rounded-[20px] bg-white px-[12px] py-[6px] text-sm font-normal leading-[16px] text-[#4B5563]">
                    {data?.status}
                  </button>
                  <Button
                    size="xl"
                    className="text-base font-medium leading-[19px] text-white"
                  >
                    Watch Video
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MerchantTutiorials;
