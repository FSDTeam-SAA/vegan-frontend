import DashboardHeading from "@/app/dashboard/merchant/_components/dashboard-heading";
import NewsForm from "../_components/news-form";

const page = () => {
  return (
    <div>
      <DashboardHeading
        title="Create a new news"
        subTitle="Get an overview of your performance, earnings, and latest updates & news."
      />
      <NewsForm />
    </div>
  );
};

export default page;
