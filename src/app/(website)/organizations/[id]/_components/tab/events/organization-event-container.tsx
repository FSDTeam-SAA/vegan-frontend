import EventCard from "@/components/shared/cards/event-card";

const OrganizationEventContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[32px] pb-[50px] md:grid-cols-2 md:pb-[87px]">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};

export default OrganizationEventContainer;
