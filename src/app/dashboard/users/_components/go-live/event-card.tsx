import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import moment from "moment";
import { GoLiveEvent } from "./Go-live";

interface Props {
  data: GoLiveEvent;
}

const EventCardForUser = ({ data }: Props) => {
  const eventDate = data.date;

  const isPast = moment(eventDate).isBefore(moment(), "day");

  return (
    <div className="space-y-4 rounded-lg bg-white p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
            {data.eventType}
          </span>
          {data.price ? (
            <span className="text-base font-semibold">$ {data.price}</span>
          ) : (
            <Badge variant="secondary">Free</Badge>
          )}
        </div>
        <div className="space-y-1">
          <div className="flex flex-col lg:flex-row">
            <h3 className="text-base font-semibold">{data.eventTitle}</h3>
            <h1 className="mx-2 hidden text-[16px] font-normal text-[#6A7282] lg:block"></h1>
          </div>
        </div>
        <p className="text-sm text-gray-600">{data?.description}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{moment(data.date).format("D MMMM, YYYY")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{data.time}</span>
          </div>
        </div>
      </div>
      {data.meetingLink && (
        <Button
          className="rounded bg-[#1a2b3b] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2b3b]/90 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isPast}
          asChild
        >
          <a
            href={data.meetingLink}
            target="_blank"
            className={cn(isPast ? "cursor-not-allowed" : "cursor-pointer")}
          >
            {isPast ? "Completed" : "Join Event"}
          </a>
        </Button>
      )}
    </div>
  );
};

export default EventCardForUser;
