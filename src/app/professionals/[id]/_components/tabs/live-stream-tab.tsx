import LiveStreamCard from "@/components/shared/cards/live-stream-card";

export function LiveStreamTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div key={item}>
          <LiveStreamCard />
        </div>
      ))}
    </div>
  );
}
