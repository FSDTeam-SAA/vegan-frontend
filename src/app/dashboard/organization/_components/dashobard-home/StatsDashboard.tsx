import { StatCard } from "./StatCard";

export default function StatsDashboard() {
  // This could come from an API or database
  const stats = [
    { title: "Products Ordered", value: 10 },
    { title: "Services Booked", value: 4 },
    { title: "Volunteer Events", value: 2 },
  ];

  return (
    <div className="mx-auto w-full rounded-[16px] bg-[#F8F5F2] p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            onMenuClick={() => console.log(`${stat.title} menu clicked`)}
          />
        ))}
      </div>
    </div>
  );
}
