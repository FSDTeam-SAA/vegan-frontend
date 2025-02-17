"use client";

import { useState } from "react";
import { Header } from "./header";
import { EventDialog } from "./event-dialog";
import { EventCard, type EventData } from "./EventCard";
import { EventsData } from "../data";
import VeganTabs from "@/components/ui/Vegan-Tab";

export default function EventsMangement() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventData | undefined>();
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
  const handleSubmit = (data: unknown) => {
    if (editingEvent) {
      console.log("Editing event:", data);
    } else {
      console.log("Creating new event:", data);
    }
    setDialogOpen(false);
    setEditingEvent(undefined);
  };

  const handleEdit = (eventData: EventData) => {
    setEditingEvent(eventData);
    setDialogOpen(true);
  };

  const handleDelete = (sectionId: string, eventIndex: number) => {
    console.log("Deleting event:", sectionId, eventIndex);
  };

  return (
    <div className="min-h-screen">
      <Header
        onCreateClick={() => {
          setEditingEvent(undefined);
          setDialogOpen(true);
        }}
      />
      <div className="overflow-x-auto md:mb-12">
        <VeganTabs tabs={tabs} defaultActiveTab={activeTab} onTabChange={(tab)=>setActiveTab(tab)}/>
      </div>
      <div className="">
        {EventsData.filter((items) => items.id === activeTab).map((section) => (
          <div key={section.id}>
            <div className="space-y-6 rounded-lg bg-[#F8F5F2] p-10">
              {section.items.map((event, index) => (
                <EventCard
                  key={`${section.id}-${index}`}
                  {...event}
                  onEdit={() => handleEdit(event)}
                  onDelete={() => handleDelete(section.id, index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <EventDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={handleSubmit}
        mode={editingEvent ? "edit" : "add"}
        initialData={editingEvent}
      />
    </div>
  );
}
