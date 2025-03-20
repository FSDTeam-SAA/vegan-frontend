import { auth } from "@/auth";
import ProfileCard from "./_components/profile-details-card";
import ProfessionalTab from "./_components/tabs/professional-tab";

export default async function page({ params }: { params: { id: string } }) {
  const currentUser = await auth();

  return (
    <div className="mt-[100px]">
      <div>
        <ProfileCard professionalId={params.id} />
      </div>
      <ProfessionalTab
        professionalId={params.id}
        loggedinUserId={currentUser?.user.userId}
        paymentAdded={currentUser?.user.paymentAdded ?? false}
      />
    </div>
  );
}
