"use client";
import MerchantCard from "@/components/shared/cards/merchant-card";
import VeganPagination from "@/components/ui/vegan-pagination";
import { useState } from "react";

const MerchantContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <p className="container mb-[24px] text-[14px] font-normal leading-[20.3px] text-[#000000] md:hidden">
        Showing 10 professionals
      </p>
      <div className="container mb-[40px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:mb-[104px] lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <MerchantCard key={n} />
        ))}
      </div>
      <div className="container mb-[55px] flex h-[52px] w-full items-center justify-between lg:mb-[93px]">
        <p className="font-inter text-[16px] font-semibold leading-[23.2px] text-[#1E2939]">
          Page 1 of 30
        </p>
        <div className="h-full">
          <VeganPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={5}
          />
        </div>
      </div>
    </>
  );
};

export default MerchantContainer;
