"use client";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import { ScrollArea } from "@/components/ui/scroll-area";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";

// Define the type for the merchant data
type MerchantData = {
  totalParticipants: number;
  totalPaid: number;
  totalRemain: number;
  merchantID: string;
  totalAmount: number;
  businessName: string;
  profilePhoto: string;
  about: string;
  shortDescriptionOfStore: string;
  address: string;
  fullName: string;
};

// Define the type for the pagination object
type Pagination = {
  currentPage: number;
  totalPages: number;
  totalMerchants: number;
  limit: number;
};

// Define the type for the overall response structure
type ApiResponse = {
  success: boolean;
  data: MerchantData[];
  pagination: Pagination;
};

const TopMerchantBoard = () => {
  const { data, isLoading, isError, error } = useQuery<ApiResponse>({
    queryKey: ["topMerchants"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/top-merchants/byReferrals`,
      ).then((res) => res.json()),
  });

  let content;
  if (isLoading) {
    content = (
      <div>
        {[1, 2, 3].map((n, i) => (
          <SkeletonWrapper isLoading key={n}>
            <MerchantCard index={i} />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error?.message} />;
  } else if (data && data.data.length === 0) {
    content = (
      <EmptyContainer message="currently no top found from merchants" />
    );
  } else if (data && data.data.length > 0) {
    content = (
      <ScrollArea className="h-[400px] w-full">
        {data.data.map((data, index) => {
          return (
            <MerchantCard key={data.merchantID} data={data} index={index} />
          );
        })}
      </ScrollArea>
    );
  }
  return (
    <div className="pb-[98px] md:pb-[105px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[32px] text-lg font-medium leading-[24px] text-[#1F2937] md:pb-[40px] md:text-xl">
          Leader Board Of Top Merchant
        </h4>
        {content}
      </div>
    </div>
  );
};

export default TopMerchantBoard;

interface Props {
  data?: MerchantData;
  index: number;
}

const MerchantCard = ({ data, index }: Props) => {
  return (
    <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-3 md:p-4">
      <div className="flex flex-col items-start gap-[16px] md:flex-row md:items-center">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[60px] border border-[#F4F0EB] bg-white">
          <span className="text-2xl font-medium leading-[29px] text-[#1F2937]">
            #{index + 1}
          </span>
        </div>
        <div>
          <h5 className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
            {data?.fullName}
          </h5>
          <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
            {data?.businessName}
          </p>
        </div>
      </div>
      <div>
        <h5 className="text-right text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[26px] lg:text-[22px]">
          ${data?.totalAmount}
        </h5>
        <p className="pt-[8px] text-right text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
          {data?.totalParticipants} Referrals
        </p>
      </div>
    </div>
  );
};
