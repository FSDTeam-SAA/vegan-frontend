"use client";
import FaqEditCard from "@/components/shared/cards/Faq-Edit-Card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganModal from "@/components/ui/vegan-modal";
import { FAQResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FaqCreateForm from "./Faq-create-form";

interface Props {
  userId: string;
}

export default function QAForm({ userId }: Props) {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError, error } = useQuery<FAQResponse>({
    queryKey: ["faqs", userId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/faqs/${userId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div>
        <SkeletonWrapper isLoading={isLoading}>
          <FaqEditCard />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading={isLoading}>
          <FaqEditCard />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading={isLoading}>
          <FaqEditCard />
        </SkeletonWrapper>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to load faqs"} />
    );
  } else if (data && data.data.length == 0) {
    content = (
      <EmptyContainer message="No FAQ questions have been added yet. Start by creating commonly asked questions to help users find the answers they need quickly." />
    );
  } else if (data && data.data.length > 0) {
    content = (
      <div>
        {data.data.map((item) => (
          <FaqEditCard key={item._id} data={item} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="mt-[28px] flex justify-end">
        <Button className="h-[40px]" onClick={() => setOpen(true)}>
          Add a new Faq
        </Button>
      </div>
      <div className="mt-[48px] w-full rounded-lg bg-[#F8F5F2] p-6">
        {content}
      </div>

      <VeganModal open={open} onOpenChange={setOpen} className="">
        <FaqCreateForm userId={userId} onSuccess={() => setOpen(false)} />
      </VeganModal>
    </>
  );
}
