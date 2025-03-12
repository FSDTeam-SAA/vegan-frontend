"use client";
import TicketCard from "@/components/shared/cards/ticket-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { OrganizationTicketResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import MerchantTicketCard from "./merchant-ticket-card";

interface Props {
  userId: string;
}

const OrganizationTicketContainer = ({ userId }: Props) => {
  const { isLoading, data, isError, error } =
    useQuery<OrganizationTicketResponse>({
      queryKey: ["support-tickets-organization"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationsupport/organization/${userId}`,
        ).then((res) => res.json()),
    });

  let content;
  if (isLoading) {
    content = (
      <div className="space-y-5">
        {[1, 2, 3].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <TicketCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error.message || "Something went wrong."} />
    );
  } else if (data && data.data?.length === 0) {
    content = <EmptyContainer message="You didn't open support ticket yet" />;
  } else if (data && data.data?.length > 0) {
    content = (
      <div className="space-y-5">
        {data.data.map((item) => (
          <MerchantTicketCard data={item} key={item.ticketSlug} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-[24px] rounded-[16px] bg-[#F8F5F2] p-[40px]">
      <h3 className="font-inter text-[16px] font-medium leading-[24px] text-[#1F2937] md:text-[20px]">
        Submitted Tickets:{" "}
      </h3>
      {content}
    </div>
  );
};

export default OrganizationTicketContainer;
