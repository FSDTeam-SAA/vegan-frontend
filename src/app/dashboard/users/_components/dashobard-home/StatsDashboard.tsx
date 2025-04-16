"use client";

import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import { StatCard } from "./StatCard";

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    producOrdered: number;
    servicesBooked: number;
    volunteerEvents: number;
  };
}

interface Props {
  userId: string;
}

export default function StatsDashboard({ userId }: Props) {
  const { data, isLoading } = useQuery<ApiResponse>({
    queryKey: ["users-overview"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/overview/${userId}`,
      ).then((res) => res.json()),
  });

  // This could come from an API or database
  const stats = [
    { title: "Products Ordered", value: data?.data?.producOrdered ?? 0 },
    { title: "Services Booked", value: data?.data?.servicesBooked ?? 0 },
    { title: "Volunteer Events", value: data?.data?.volunteerEvents ?? 0 },
  ];

  return (
    <div className="mx-auto w-full rounded-[16px] bg-[#F8F5F2] p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <SkeletonWrapper isLoading={isLoading} key={stat.title}>
            <StatCard
              title={stat.title}
              value={stat.value}
              onMenuClick={() => console.log(`${stat.title} menu clicked`)}
            />
          </SkeletonWrapper>
        ))}
      </div>
    </div>
  );
}
