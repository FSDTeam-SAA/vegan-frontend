"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Local imports
import MerchantCard from "@/components/shared/cards/merchant-card";
import OrganizationCard from "@/components/shared/cards/organization-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganPagination from "@/components/ui/vegan-pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { OrganizationProfileResponse } from "@/types/organization";
import { useOrganizationState } from "@/zustand/organization";

const OrganizationContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { value, sortBy } = useOrganizationState();

  const debounceValue = useDebounce(value);

  const { data, isLoading, isError, error } =
    useQuery<OrganizationProfileResponse>({
      queryKey: ["merchants", currentPage, debounceValue, sortBy],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organization?page=${currentPage}&limit=6&search=${debounceValue}&sortBy=organizationName&order=${sortBy}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading) {
    content = (
      <div className="container mb-[40px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:mb-[104px] lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SkeletonWrapper key={n} isLoading={isLoading}>
            <MerchantCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="container w-full">
        <ErrorContainer message={error.message || "Something is wrong!"} />
      </div>
    );
  } else if (data?.data?.length === 0) {
    content = (
      <div className="container w-full">
        <EmptyContainer
          message="No data available for the selected criteria. Please try different
                  filters or check your connection!"
        />
      </div>
    );
  } else if (data && data.data && data.data.length > 0) {
    content = (
      <div className="container mb-[40px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:mb-[104px] lg:grid-cols-3">
        {data.data.map((item) => (
          <OrganizationCard data={item} key={item._id} />
        ))}
      </div>
    );
  }

  return (
    <>
      <p className="container mb-[24px] text-[14px] font-normal leading-[20.3px] text-[#000000] md:hidden">
        Showing 6 professionals
      </p>
      {content}
      {data?.pagination && data.pagination.totalPages > 1 && (
        <div className="container mb-[55px] flex h-[52px] w-full items-center justify-between lg:mb-[93px]">
          <p className="font-inter text-[16px] font-semibold leading-[23.2px] text-[#1E2939]">
            Page {currentPage} of {data?.pagination?.totalPages}
          </p>
          <div className="h-full">
            <VeganPagination
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
              totalPages={data?.pagination?.totalPages}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationContainer;
