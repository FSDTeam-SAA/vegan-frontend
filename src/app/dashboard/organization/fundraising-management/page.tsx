import { auth } from "@/auth";
import { redirect } from "next/navigation";
import FundraisingManagement from "../_components/fundraising/fundraising-manaement";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div>
      <FundraisingManagement organizationId={session?.user.userId as string} />
    </div>
  );
};

export default page;
