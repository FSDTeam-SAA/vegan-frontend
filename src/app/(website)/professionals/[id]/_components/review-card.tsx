"use client";

import CreateReview from "@/components/shared/features/review/create-review";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VeganPagination from "@/components/ui/vegan-pagination";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Star } from "lucide-react";
import { useState } from "react";

type Review = {
  _id: string;
  userID: string;
  professionalID: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  fullName?: string; // Optional, as it's present in only one review
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};

type ReviewResponse = {
  success: boolean;
  message: string;
  data: {
    totalReviews: number;
    reviews: Review[];
  };
  pagination: Pagination;
};

interface Props {
  userId: string;
  loggedinUserId?: string;
}

export function ReviewCard({ userId, loggedinUserId }: Props) {
  const [sortBy, setSortBy] = useState<"mostRelevant" | "latest">("latest");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery<ReviewResponse>({
    queryKey: ["professional_reviews", sortBy, currentPage],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/professionalReview/67d98a1c31f54b9e5e04a438?page=${currentPage}&limit=10&filter=${sortBy}`,
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
  } else if (data && data.data.totalReviews == 0) {
    content = <EmptyContainer message="No review found!" />;
  } else if (data && data.data.totalReviews > 0) {
    content = (
      <div className="space-y-4">
        {data.data.reviews.map((review) => (
          <div key={review._id} className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              {/* <Image
                src={review. || "/placeholder.svg"}
                alt={review.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              /> */}
              <div>
                <h3 className="tracting-[3%] font-inter text-base font-semibold leading-[24px] text-[#1F2937]">
                  {review.fullName}
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
        <div className="hidden justify-between md:flex">
          <div className="mb-6 hidden gap-3 md:flex">
            <Select
              defaultValue={sortBy}
              onValueChange={(val) =>
                setSortBy(val as "mostRelevant" | "latest")
              }
            >
              <SelectTrigger className="border-primary/50">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mostRelevant">Most Relevant</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {loggedinUserId && (
            <div>
              <CreateReview
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

        {data?.pagination && data.pagination.totalPages > 1 && (
          <div className="mt-5">
            <VeganPagination
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
              totalPages={data.pagination.totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
