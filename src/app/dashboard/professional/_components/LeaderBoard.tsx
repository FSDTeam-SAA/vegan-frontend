"use client";

import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { TopRefferResponse } from "@/types/refferel";
import { useQuery } from "@tanstack/react-query";
import TopProfessionalLeaderBoardCard from "./top-professional-leaderboard-card";

const LeaderBoard = () => {
  const { isLoading, data, isError, error } = useQuery<TopRefferResponse>({
    queryKey: ["toprefferleaderboard"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/topprofessionalsbyreffer`,
      ).then((res) => res.json()),
  });

  let content;
  if (isLoading) {
    content = (
      <div>
        {[1, 2, 3, 4].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <TopProfessionalLeaderBoardCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to load data"} />
    );
  } else if (data) {
    content = (
      <div>
        {data?.data.map((item, index) => (
          <TopProfessionalLeaderBoardCard
            key={index}
            data={item}
            index={index}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="pb-[98px] pt-[40px] md:pb-[105px] md:pt-[48px] lg:pt-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[32px] text-lg font-medium leading-[24px] text-[#1F2937] md:pb-[40px] md:text-xl">
          Leader Board Of Top Professionals
        </h4>
        {content}
      </div>
    </div>
  );
};

export default LeaderBoard;
