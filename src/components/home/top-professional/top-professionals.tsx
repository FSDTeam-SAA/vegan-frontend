"use client";

import TopProfessionaCard from "@/components/shared/cards/top-professional-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import { MoveRight } from "lucide-react";
import Link from "next/link";

type ProfessionalData = {
  success: boolean;
  message: string;
  data: TopProfessional[];
};

export type TopProfessional = {
  professionalID: string;
  businessName: string;
  about: string;
  profilePhoto: string;
  address: string;
  averageRating: string;
  totalReviews: number;
};

const TopProfessionals = () => {
  const { data, isLoading, isError, error } = useQuery<ProfessionalData>({
    queryKey: ["top-professional"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/top-professionals`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="mt-[54px] grid grid-cols-1 gap-[24px] md:mt-[80px] md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <TopProfessionaCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="mt-5">
        <ErrorContainer
          message={error?.message ?? "Failed to load top professional"}
        />
      </div>
    );
  } else if (data && data.data.length === 0) {
    content = (
      <EmptyContainer message="No Top professional found on vegan collective" />
    );
  } else if (data) {
    content = (
      <div className="mt-[54px] grid grid-cols-1 gap-[24px] md:mt-[80px] md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((item) => (
          <TopProfessionaCard key={item.professionalID} data={item} />
        ))}
      </div>
    );
  }
  return (
    <div className="container py-[48px] md:py-[80px]">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-lexend text-[24px] font-medium leading-[30px] text-[#1D3557] md:text-[32px] md:leading-[40px]">
          Some Of Our Top Professionals
        </h1>
        <Link
          href="/professionals"
          className="group flex h-[30px] w-[150px] gap-[2px] border-b-[2px] border-[#1D3557] py-[4px] text-[14px] text-[#1D3557] transition-all duration-300 md:h-auto md:w-fit md:text-[16px]"
        >
          Browse all
          <MoveRight className="relative transform transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>

      {content}
    </div>
  );
};

export default TopProfessionals;
