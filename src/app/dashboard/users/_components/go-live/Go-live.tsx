"use client";
import React from "react";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { eventsData } from "./goLiveData";

export default function GoLive() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming",
  );

  const events = eventsData[activeTab];

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
                onClick={() => setActiveTab("completed")}
                className={`relative pb-2 text-sm font-medium ${
                  activeTab === "completed"
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          <div className="space-y-4 rounded-[16px] bg-[#f5efea] p-[10px] lg:p-[40px]">
            {events.map((event) => (
              <div key={event.id} className="space-y-4 rounded-lg bg-white p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                      {event.eventType} Event
                    </span>
                    <span className="text-base font-semibold">
                      $ {event.price}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-col lg:flex-row">
                      <h3 className="text-base font-semibold">{event.title}</h3>
                      <h1 className="mx-2 hidden text-[16px] font-normal text-[#6A7282] lg:block">
                        {" "}
                        |
                      </h1>
                      <h4 className="text-[16px] font-normal text-[#6A7282]">
                        {event.hosted} by Sarah Johnson
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Month {event.month}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="rounded bg-[#1a2b3b] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2b3b]/90 disabled:cursor-not-allowed disabled:opacity-50"
                  hidden={event.status === "completed"}
                >
                  {event.status === "completed" ? "Completed " : "Join Event"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
