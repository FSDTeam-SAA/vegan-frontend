import ServiceCard from "@/components/shared/cards/service-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ProfessionalServiceResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";

interface Props {
  professionalId: string;
}

export default function ServicesTab({ professionalId }: Props) {
  const { isLoading, data, isError, error } =
    useQuery<ProfessionalServiceResponse>({
      queryKey: ["professionalServices"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/offline/${professionalId}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <SkeletonWrapper isLoading={isLoading} key={index}>
            <ServiceCard />
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
  } else if (data && data.data?.length == 0) {
    content = (
      <EmptyContainer message="NO Service published this professional" />
    );
  } else if (data && data.data?.length > 0) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((item, index) => (
          <ServiceCard data={item} key={index} />
        ))}
      </div>
    );
  }

  return content;
}
