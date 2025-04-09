"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Calendar, Plus } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DashboardHeading from "../dashboard-heading";
const EventDialog = dynamic(() => import("./merchant-event-dialog"), {
  ssr: false,
});

interface Props {
  userId: string;
  email: string;
}

interface Response {
  success: boolean;
  message: string;
}

export function Header({ userId, email }: Props) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const { data, isLoading, isError, error } = useQuery<Response>({
    queryKey: ["check-calendar-connect"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/checkCalendar?userId=${userId}`,
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (isError) {
      toast.error(error.message ?? "Something went wrong!", {
        position: "top-right",
        richColors: true,
      });
    }
  }, [isError, error]);

  const isDisabled = data?.success || isLoading;
  const isConnected = data?.success && !isLoading;
  return (
    <header className="">
      <div className="items-center justify-between md:mb-10 md:flex">
        <DashboardHeading
          title="Go Live"
          subTitle="Keep track of your earnings, breakdowns, and payout preferences."
        />
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="gap-2"
            asChild
            disabled={isLoading || data?.success}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/nylas/auth?email=${email}&redirectTo=${pathName}`}
              className={cn(
                isDisabled && "cursor-not-allowed",
                isConnected && "cursor-not-allowed opacity-80",
              )}
            >
              <Calendar className="h-4 w-4" />
              {isConnected ? "Calendar Connected" : "Connect Calendar"}
            </Link>
          </Button>
          <Button
            className="gap-2 bg-[#1f3a5f] hover:bg-[#162942]"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-4 w-4" />
            Create New Event
          </Button>
        </div>
      </div>
      <EventDialog open={open} onOpenChange={setOpen} userId={userId} />
    </header>
  );
}
