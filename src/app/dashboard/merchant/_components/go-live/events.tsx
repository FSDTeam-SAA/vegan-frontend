"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PastEvents } from "./past-events";
import { UpComingEvents } from "./upcoming-events";
import { EventsData } from "../data";

export default function EventsManagement() {
  const [activeTab, setActiveTab] = useState("upcoming-events");
  // interface EventItem {
  //   type: "Paid" | "Free";
  //   title: string;
  //   description: string;
  //   date: string;
  //   timeRange: string;
  //   price: number;
  //   metrics?: {
  //     registeredParticipants: number;
  //     totalAmountPaid: number;
  //   };
  //   defaultExpanded?: boolean;
  // }

  return (
    <div className="mx-auto w-full">
      <div className="mb-6 overflow-x-auto">
        <nav className="flex space-x-1 border-b-2 border-white">
          {EventsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-[18px] font-medium",
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-4 bg-[#F8F5F2] p-[20px] lg:p-[40px]">
        {EventsData.find((tab) => tab.id === activeTab)?.items.map(
          (event, index) =>
            activeTab === "upcoming-events" ? (
              <UpComingEvents
                key={index}
                {...event}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            ) : (
              <PastEvents key={index} {...event} />
            ),
        )}
      </div>
    </div>
  );
}
