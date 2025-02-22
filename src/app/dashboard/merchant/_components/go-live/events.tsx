"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";

// Local imports

import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganTabs from "@/components/ui/Vegan-Tab";
import { MerchantEvent, MerchantEventResponse } from "@/types/merchant";
import { EventCard } from "./EventCard";
import { Header } from "./header";

const tabs = [
  {
    id: "upcoming",
    label: "Upcoming Events",
  },
  {
    id: "past",
    label: "Past Events",
  },
];

export default function EventsMangement() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const session = useSession();
  const merchantID = session?.data?.user?.userId;

  const { isLoading, data, isError, error } = useQuery<MerchantEventResponse>({
    queryKey: ["eventsbyMerchant", activeTab],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantGoLive?type=${activeTab}&merchantID=${merchantID}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading || data?.success) {
    if (data?.events?.length === 0) {
      content = <EmptyContainer message="No Event found" />;
    } else if ((data?.events?.length ?? 0) > 0) {
      content = (
        <SkeletonWrapper isLoading={isLoading}>
          <div className="space-y-6 rounded-lg bg-[#F8F5F2] p-10">
            {data?.events.map((item: MerchantEvent) => (
              <EventCard key={item._id} data={item} />
            ))}
          </div>
        </SkeletonWrapper>
      );
    }
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "something went wrong!"} />
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="overflow-x-auto md:mb-12">
        <VeganTabs
          tabs={tabs}
          defaultActiveTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </div>
      <div>{content}</div>
    </div>
  );
}
