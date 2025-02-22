import DashboardHeading from "@/app/dashboard/merchant/_components/dashboard-heading";
import { Button } from "@/components/ui/button";
import { Plus, Video } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
const ProfessionalEventDialog = dynamic(
  () => import("./professional-event-dialog"),
  { ssr: false },
);

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="">
      <div className="items-center justify-between md:mb-10 md:flex">
        <DashboardHeading
          title="Go Live"
          subTitle="Keep track of your earnings, breakdowns, and payout preferences."
        />
        <div className="mb-[56px] mt-[24px] flex flex-col items-center gap-[24px] md:mb-0 md:mt-0 md:flex-row md:gap-4">
          <Button size="xl" className="w-full gap-2">
            <Video className="h-4 w-4" />
            Zoom Connected
          </Button>
          <Button
            size="xl"
            className="w-full gap-2 bg-[#1f3a5f] hover:bg-[#162942]"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Create New Event
          </Button>
        </div>
      </div>
      <ProfessionalEventDialog open={open} onOpenChange={setOpen} />
    </header>
  );
}
