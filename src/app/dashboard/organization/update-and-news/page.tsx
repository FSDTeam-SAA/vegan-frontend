import { Button } from "@/components/ui/button";
import Link from "next/link";
import DashboardHeading from "../../merchant/_components/dashboard-heading";

const Page = () => {
  return (
    <div>
      <div className="flex h-full w-full items-start justify-between">
        <div>
          <DashboardHeading
            title="Update & News"
            subTitle="Get an overview of your performance, earnings, and latest updates & news."
          />
        </div>

        <div>
          <Button asChild>
            <Link
              href="/dashboard/organization/update-and-news/create"
              className="w-full"
            >
              Create News
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
