"use client";

import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VeganModal from "@/components/ui/vegan-modal";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Star } from "lucide-react";
import { useEffect, useState } from "react";
import MerchantReviewCreateForm from "./create-merchant-review";

type ProductReview = {
  _id: string;
  productID: string;
  productName: string;
  rating: number;
  comment: string;
  userID: string;
  fullName: string;
};

type ProductReviewResponse = {
  success: boolean;
  message: string;
  reviews: ProductReview[];
};

interface Props {
  userId: string;
  loggedinUserId?: string;
}

export function MerchantReviewContainer({ userId, loggedinUserId }: Props) {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState<"lowest" | "highest">("highest");
  const { data, isLoading, isError, error } = useQuery<ProductReviewResponse>({
    queryKey: ["merchantReviewGet", userId, sort],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantProductsreviews/merchant/${userId}?page=1&limit=2&sort=${sort}`,
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.documentElement.style.overflow = "hidden";
      }, 100);
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [open]);

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
    <>
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
                <Button
                  variant="outline"
                  className="h-[40px]"
                  onClick={() => setOpen(true)}
                >
                  Send Feedback
                </Button>
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

      {loggedinUserId && (
        <VeganModal open={open} onOpenChange={setOpen} className="">
          <MerchantReviewCreateForm
            merchantId={userId}
            userId={loggedinUserId}
            onClose={() => setOpen(false)}
          />
        </VeganModal>
      )}
    </>
  );
}
