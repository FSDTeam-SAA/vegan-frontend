import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EventManaging from "../_components/event/event-managing";

const page = async () => {
  const currentUser = await auth();

  if (!currentUser?.user) redirect("/onboarding");
  return (
    <div>
      <EventManaging userId={currentUser.user.userId} />
    </div>
  );
};

export default page;
