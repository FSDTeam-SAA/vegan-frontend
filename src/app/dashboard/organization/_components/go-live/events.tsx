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
import {
  OrganizationEvent,
  OrganizationEventResponse,
} from "@/types/organization";
import { EventCard } from "./EventCard";

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
  const organizationID = session?.data?.user?.userId;

  const { isLoading, data, isError, error } =
    useQuery<OrganizationEventResponse>({
      queryKey: ["eventsByOrganization", activeTab],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationGoLive?type=${activeTab}&organizationID=${organizationID}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.success) {
    if (data?.data?.length === 0) {
      content = <EmptyContainer message="No Event found" />;
    } else if ((data?.data?.length ?? 0) > 0) {
      content = (
        <SkeletonWrapper isLoading={isLoading}>
          <div className="space-y-6 rounded-lg bg-[#F8F5F2] p-10">
            {data?.data?.map((item: OrganizationEvent) => (
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
    <div>
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
