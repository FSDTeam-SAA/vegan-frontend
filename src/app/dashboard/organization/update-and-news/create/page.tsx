import DashboardHeading from "@/app/dashboard/merchant/_components/dashboard-heading";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import NewsForm from "../_components/news-form";

const page = async () => {
  const session = await auth();

  if (!session) {
    toast.warning("Unauthorized access", {
      position: "bottom-right",
      richColors: true,
    });

    redirect("/");
  }
  return (
    <div>
      <DashboardHeading
        title="Create a new news"
        subTitle="Get an overview of your performance, earnings, and latest updates & news."
      />
      <NewsForm organizationID={session.user.userId} />
    </div>
  );
};

export default page;
