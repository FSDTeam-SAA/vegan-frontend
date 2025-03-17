import { auth } from "@/auth";
import VeganHeader from "@/components/shared/sections/VeganHeader";
import { redirect } from "next/navigation";
import OrganizationTab from "./_components/organization-tab";

const Page = async ({ params }: { params: { id: string } }) => {
  const currentUser = await auth();

  if (!currentUser?.user) redirect("/");
  return (
    <div>
      <VeganHeader
        heading="Green Earth Initiatives"
        subheading="A leading environmental organization dedicated to protecting and preserving our natural environment through community action, education, and sustainable practices."
        img="https://res.cloudinary.com/dgnustmny/image/upload/v1738814782/pexels-shvetsa-5029861_1_1_ygagu7.png"
      />
      <div>
        <OrganizationTab
          organizationId={params.id}
          loggedInUserId={currentUser.user.userId}
        />
      </div>
    </div>
  );
};

export default Page;
