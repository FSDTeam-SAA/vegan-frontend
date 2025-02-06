import VolunteerCard from "@/components/shared/cards/volunteer-card";

const VolunteerContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
      <VolunteerCard />
      <VolunteerCard />
      <VolunteerCard />
      <VolunteerCard />
      <VolunteerCard />
      <VolunteerCard />
    </div>
  );
};

export default VolunteerContainer;
