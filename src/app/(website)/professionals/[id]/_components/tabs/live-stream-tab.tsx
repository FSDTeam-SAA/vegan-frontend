import LiveStreamCard from "@/components/shared/cards/live-stream-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { MerchantEventResponse } from "@/types/merchant";
import { useQuery } from "@tanstack/react-query";

interface Props {
  professionalId: string;
}

export default function LiveStreamTab({ professionalId }: Props) {
  const { isLoading, data, isError, error } = useQuery<MerchantEventResponse>({
    queryKey: ["eventsByProfessional"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/goLive?type=upcoming&userID=${professionalId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <SkeletonWrapper isLoading={isLoading} key={index}>
            <LiveStreamCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer
        message={error?.message ?? "Failed to load professionals data"}
      />
    );
  } else if (data && data.events?.length == 0) {
    content = (
      <EmptyContainer message="NO Live stream published this professional" />
    );
  } else if (data && data.events?.length > 0) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.events.map((item, index) => (
          <LiveStreamCard data={item} key={index} />
        ))}
      </div>
    );
  }

  return content;
}
