import { auth } from "@/auth";
import ClientManagementContainer from "./_components/ClientManagementContainer";
import ClientManagementHeader from "./_components/ClientManagementHeader";

const Page = async () => {
  const currentUser = await auth();
  if (!currentUser?.user.userId) return null;

  return (
    <div className="px-10 pb-[24px] pt-[32px] md:pb-[40px] md:pt-[40px] lg:pb-[56px]">
      <ClientManagementHeader />
      <ClientManagementContainer userId={currentUser.user.userId} />
    </div>
  );
};

export default Page;
