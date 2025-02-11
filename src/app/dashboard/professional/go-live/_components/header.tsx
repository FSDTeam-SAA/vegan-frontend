import DashboardHeading from "@/app/dashboard/merchant/_components/dashboard-heading";
import { Button } from "@/components/ui/button";
import { Video, Plus } from "lucide-react";

interface HeaderProps {
  onCreateClick: () => void;
}

export function Header({ onCreateClick }: HeaderProps) {
  return (
    <header className="">
      <div className="items-center justify-between md:mb-10 md:flex">
        <DashboardHeading
          title="Go Live"
          subTitle="Keep track of your earnings, breakdowns, and payout preferences."
        />
        <div className="flex flex-col md:flex-row items-center gap-[24px] md:gap-4 mt-[24px] md:mt-0 mb-[56px] md:mb-0">
          <Button size="xl" className="gap-2 w-full">
            <Video className="h-4 w-4" />
            Zoom Connected
          </Button>
          <Button
            size="xl"
            className="w-full gap-2 bg-[#1f3a5f] hover:bg-[#162942]"
            onClick={onCreateClick}
          >
            <Plus className="h-4 w-4" />
            Create New Event
          </Button>
        </div>
      </div>
    </header>
  );
}
