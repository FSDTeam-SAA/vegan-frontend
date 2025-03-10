import ProfileCard from "./_components/profile-details-card";
import ProfessionalTab from "./_components/tabs/professional-tab";

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className="mt-[100px]">
      <div>
        <ProfileCard professionalId={params.id} />
      </div>
      <ProfessionalTab professionalId={params.id} />
    </div>
  );
}
