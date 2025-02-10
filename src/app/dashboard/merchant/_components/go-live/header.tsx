import { Button } from "@/components/ui/button";
import { Video, Plus } from "lucide-react";
import DashboardHeading from "../dashboard-heading";

interface HeaderProps {
  onCreateClick: () => void;
}

export function Header({ onCreateClick }: HeaderProps) {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <DashboardHeading
          title="Go Live"
          subTitle="Keep track of your earnings, breakdowns, and payout preferences.Keep track of your earnings, breakdowns, and payout preferences."
        />
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Video className="h-4 w-4" />
            Zoom Connected
          </Button>
          <Button
            className="gap-2 bg-[#1f3a5f] hover:bg-[#162942]"
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
