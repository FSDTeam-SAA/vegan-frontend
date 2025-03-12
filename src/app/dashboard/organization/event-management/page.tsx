import { auth } from "@/auth";
import { redirect } from "next/navigation";
import EventManaging from "../_components/event/event-managing";

const page = async () => {
  const currentUser = await auth();

  if (!currentUser) redirect("/onboarding");
  return (
    <div>
      <EventManaging />
    </div>
  );
};

export default page;
