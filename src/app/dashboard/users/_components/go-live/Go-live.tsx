"use client";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import EventCardForUser from "./event-card";

interface Props {
  userId: string;
}

export type GoLiveEvent = {
  meetings: any[]; // Assuming `meetings` is an array of objects, but the structure isn't provided.
  _id: string; // MongoDB ObjectId, typically represented as a string.
  merchantID: string; // Merchant ID, also likely a MongoDB ObjectId as a string.
  eventTitle: string; // Title of the event.
  description: string; // Description of the event.
  date: string; // Date in ISO format (e.g., "YYYY-MM-DD").
  time: string; // Time in 24-hour format (e.g., "HH:mm").
  eventType: string; // Type of event (e.g., "free event").
  eventId: string; // Event ID, possibly another MongoDB ObjectId as a string.
  createdAt: string; // Timestamp in ISO format (e.g., "YYYY-MM-DDTHH:mm:ss.sssZ").
  updatedAt: string; // Timestamp in ISO format (e.g., "YYYY-MM-DDTHH:mm:ss.sssZ").
  __v: number; // Version key, typically a number.
  price: number; // Price of the event, likely in USD or another currency.
};

export type GoLiveEventTypeRes = {
  events: GoLiveEvent[]; // Array of GoLiveEvent objects.
  message: string; // Message string, possibly indicating success or error.
  success: boolean; // Boolean indicating success or failure of the operation.
};

export default function GoLive({ userId }: Props) {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const { data, isLoading, isError, error } = useQuery<GoLiveEventTypeRes>({
    queryKey: ["go-live-for-user", activeTab],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/usermerchantGoLive?type=${activeTab}&userID=${userId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="flex min-h-[600px] w-full items-center justify-center">
        <Loader2 className="animate-spin" />
        <span>Please wait...</span>
      </div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error?.message} />;
  } else if (data?.events?.length === 0) {
    content = <EmptyContainer message="No Live Found" />;
  } else if ((data?.events ?? []).length > 0) {
    content = (
      <div className="space-y-4 rounded-[16px] bg-[#f5efea] p-[10px] lg:p-[40px]">
        {data?.events.map((event) => (
          <EventCardForUser key={event._id} data={event} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full">
        <div className="mb-[80px] space-y-1">
          <h1 className="text-[ #1F2937] text-[24px] font-semibold">Go Live</h1>
          <p className="text-sm text-muted-foreground">
            Keep track of your earnings, breakdowns, and payout preferences.
          </p>
        </div>

        {/* Tab   */}
        <div className="space-y-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`relative pb-2 text-sm font-medium ${
                  activeTab === "upcoming"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`relative pb-2 text-sm font-medium ${
                  activeTab === "past"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
