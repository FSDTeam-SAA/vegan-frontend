import { auth } from "@/auth";
import Service from "./_components/Service";
import ServiceManagementHeader from "./_components/ServiceManagementHeader";

const Page = async () => {
  const session = await auth();

  const id = session?.user?.userId || "";
  return (
    <div className="min-h-[102vh] px-6 pb-[24px] md:px-8 md:pb-[40px] lg:px-10 lg:pb-[56px]">
      <ServiceManagementHeader />
      <Service id={id} />
    </div>
  );
};

export default Page;
