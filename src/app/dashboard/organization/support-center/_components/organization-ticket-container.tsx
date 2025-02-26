"use client";
import TicketCard from "@/components/shared/cards/ticket-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { SupportTicketResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";

interface Props {
  userId: string;
}

const OrganizationTicketContainer = ({ userId }: Props) => {
  const { isLoading, data, isError, error } = useQuery<SupportTicketResponse>({
    queryKey: ["support-tickets-professional"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/support-tickets/professional/${userId}`,
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
  } else if (data && data.tickets?.length === 0) {
    content = <EmptyContainer message="You didn't open support ticket yet" />;
  } else if (data && data.tickets?.length > 0) {
    content = (
      <div className="space-y-5">
        {data.tickets.map((item) => (
          <TicketCard data={item} key={item._id} />
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
