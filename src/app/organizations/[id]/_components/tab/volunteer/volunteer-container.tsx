import VolunteerCard from "@/components/shared/cards/volunteer-card";

const VolunteerContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] pb-[50px] md:grid-cols-2 md:pb-[87px] lg:grid-cols-3">
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
