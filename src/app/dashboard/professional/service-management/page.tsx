import { auth } from "@/auth";
import dynamic from "next/dynamic";
import ServiceManagementHeader from "./_components/ServiceManagementHeader";
const Service = dynamic(() => import("./_components/Service"), { ssr: false });

const Page = async () => {
  const session = await auth();

  if (!session?.user) return;

  const id = session.user.userId || "";
  return (
    <div className="min-h-[102vh] px-6 pb-[24px] md:px-8 md:pb-[40px] lg:px-10 lg:pb-[56px]">
      <ServiceManagementHeader userId={id} />
      <Service id={id} />
    </div>
  );
};

export default Page;
