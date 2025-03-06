import EventCard from "@/components/shared/cards/event-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import VeganPagination from "@/components/ui/vegan-pagination";
import { OrganizationEventResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Props {
  organizationId: string;
}

const OrganizationEventContainer = ({ organizationId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, data, isError, error } =
    useQuery<OrganizationEventResponse>({
      queryKey: ["eventsByOrganizations", currentPage],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationeventsbytype/type-both?&page=${currentPage}&limit=6&organizationID=${organizationId}`,
        ).then((res) => res.json()),
    });

  let content;
  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <EventCard key={n} />
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div>
        <ErrorContainer message={error?.message ?? "Something went wrong"} />
      </div>
    );
  } else if (data && data.data.length === 0) {
    content = <EmptyContainer message="No Events found" />;
  } else if (data && data.data.length > 0) {
    content = (
      <div className="grid grid-cols-1 gap-[32px] pb-[50px] md:grid-cols-2 md:pb-[87px]">
        {data?.data.map((item) => <EventCard key={item._id} data={item} />)}
      </div>
    );
  }
  return (
    <div className="pb-[50px] md:pb-[87px]">
      {content}
      {data && data.pagination.totalPages > 1 && (
        <div>
          <VeganPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={data?.pagination.totalPages ?? 1}
          />
        </div>
      )}
    </div>
  );
};

export default OrganizationEventContainer;
