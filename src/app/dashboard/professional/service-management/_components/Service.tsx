"use client";

// Packages
import { useQuery } from "@tanstack/react-query";

// Local imports
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import {
  ProfessionalService,
  ProfessionalServiceResponse,
} from "@/types/professional";
import ProfessionalServiceCard from "./professional-service-card";

interface Props {
  id: string;
}

export default function Service({ id }: Props) {
  const { data, isLoading, isError, error } =
    useQuery<ProfessionalServiceResponse>({
      queryKey: ["professional-services", id],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/allservices/${id}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data) {
    if (data?.data?.length === 0) {
      content = (
        <EmptyContainer message={data.messasge || "No Services found"} />
      );
    } else if ((data?.data && data.data.length > 0) || isLoading) {
      content = (
        <SkeletonWrapper isLoading={isLoading}>
          <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
            <div className="space-y-5">
              {data?.data &&
                data.data.map((item: ProfessionalService) => (
                  <ProfessionalServiceCard
                    key={item._id}
                    data={item}
                    id={item._id}
                  />
                ))}
            </div>
          </div>
        </SkeletonWrapper>
      );
    }
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  }

  return content;
}
