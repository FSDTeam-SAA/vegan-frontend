"use client";

import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReviewsResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Star } from "lucide-react";
import { useState } from "react";
import CreateOrganizationReview from "./create-organization-review-modal";

interface Props {
  userId: string;
  loggedinUserId?: string;
}

export function OrganizationReviewContainer({ userId, loggedinUserId }: Props) {
  const [sort, setSort] = useState<"lowest" | "highest">("highest");
  const { data, isLoading, isError, error } = useQuery<ReviewsResponse>({
    queryKey: ["organizationReviewGet", userId, sort],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organization/review/all/${userId}?page=1&limit=10&sort=${sort}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="flex min-h-[300px] w-full flex-col items-center justify-center">
        <Loader2 className="animate-spin" />
        <p>Please wait...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to load reviews"} />
    );
  } else if (data && data.reviews.length == 0) {
    content = <EmptyContainer message="No review found!" />;
  } else if (data && data.reviews.length > 0) {
    content = (
      <div className="space-y-4">
        {data.reviews.map((review, index) => (
          <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              {/* <Image
            src={review.avatar || "/placeholder.svg"}
            alt={review.author}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          /> */}
              <div>
                <h3 className="tracting-[3%] font-inter text-base font-semibold leading-[24px] text-[#1F2937]">
                  {review.userName}
                </h3>
                <div className="flex pt-[7px]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#FDE047] text-[#FDE047]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="font-inter text-base font-normal leading-[28px] text-[#374151]">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl">
        {/* Desktop Filters */}
        <div className="flex justify-between">
          <div className="mb-6 gap-3 md:flex">
            <Select
              onValueChange={(val) => setSort(val as "lowest" | "highest")}
            >
              <SelectTrigger className="border-primary/50">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highest">Highest Rating</SelectItem>
                <SelectItem value="lowest">Lowest Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {loggedinUserId && (
            <div>
              <CreateOrganizationReview
                reviewUserId={userId}
                loggedinUserId={loggedinUserId}
              />
            </div>
          )}
        </div>

        <h2 className="mb-6 font-lexend text-lg font-medium leading-[22.5px] text-[#1D3557] dark:text-white">
          Client Reviews
        </h2>
        {/* Reviews Grid */}
        {content}
      </div>
    </div>
  );
}
