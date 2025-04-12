import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import { StatCard } from "./StatCard";

interface Props {
  userId: string;
}

interface ApiProps {
  success: boolean;
  message: string;
  data: {
    "Free events": number;
    "Paid events": number;
    "Volunteer events": number;
  };
}

export default function StatsDashboard({ userId }: Props) {
  const { data, isLoading } = useQuery<ApiProps>({
    queryKey: ["organizationOverview"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/events/count/${userId}`,
      ).then((res) => res.json()),
  });
  // This could come from an API or database
  const stats = [
    { title: "Free Events", value: data?.data["Free events"] ?? 0 },
    { title: "Paid Events", value: data?.data["Paid events"] ?? 0 },
    { title: "Volunteer Events", value: data?.data["Volunteer events"] ?? 0 },
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
