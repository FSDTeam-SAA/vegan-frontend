"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import { Badge } from "@/components/ui/badge";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { VendorProfileResponse } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";
import PendingVerificationsCard from "./pending-verification-card";

const PendingVerifications = () => {
  const { isLoading, data, isError, error } = useQuery<VendorProfileResponse>({
    queryKey: ["vendorManagement"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/fetch-data?isVerified=pending&role=all&page=1&limit=10`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="flex flex-col gap-y-5">
        {[1, 2, 3].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <PendingVerificationsCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  } else if (data) {
    content = (
      <div className="flex flex-col gap-y-5">
        {data.data.map((vendor) => (
          <PendingVerificationsCard key={vendor._id} data={vendor} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="mb-[72px] mt-[20px] rounded-[16px] bg-[#F8F5F2] px-6 py-8 md:mb-[81px] md:mt-[46px] lg:p-10">
        <h4 className="pb-[32px] text-lg font-medium leading-[21px] text-[#1F2937] md:pb-[26px] md:text-xl md:leading-[24px]">
          Pending Verifications{" "}
          {data && (
            <Badge
              className="ml-2 rounded-full border-none bg-[#FEFCE8] pb-[2px] pl-[9px] pr-[8px] pt-[3px] text-base font-medium leading-[23px] text-[#EAB308]"
              variant="outline"
            >
              {data.data.length}
            </Badge>
          )}
        </h4>
        {content}
      </div>

      {/* Review vendor Application modal  */}
    </>
  );
};

export default PendingVerifications;
