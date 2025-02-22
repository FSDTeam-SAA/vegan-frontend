"use client";

import VeganTabs from "@/components/ui/Vegan-Tab";
import { useState } from "react";
import { EventsData } from "../data";
import { EventCard } from "./EventCard";
import { Header } from "./header";

export default function EventsMangement() {
  const [activeTab, setActiveTab] = useState("upcoming-events");

  const tabs = [
    {
      id: "upcoming-events",
      label: "Upcoming Events",
    },
    {
      id: "past-events",
      label: "Past Events",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="overflow-x-auto md:mb-12">
        <VeganTabs
          tabs={tabs}
          defaultActiveTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </div>
      <div className="">
        {EventsData.filter((items) => items.id === activeTab).map((section) => (
          <div key={section.id}>
            <div className="space-y-6 rounded-lg bg-[#F8F5F2] p-10">
              {section.items.map((event, index) => (
                <EventCard
                  key={`${section.id}-${index}`}
                  {...event}
                  onEdit={() => {}}
                  onDelete={() => {}}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
