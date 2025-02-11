"use client";

import { useState } from "react";
import { Header } from "./header";
import { EventDialog } from "./event-dialog";
import { EventCard, type EventData } from "./EventCard";
import { EventsData } from "../data";
import { cn } from "@/lib/utils";

export default function GoLive() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventData | undefined>();
  const [activeTab, setActiveTab] = useState("upcoming-events");
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
      <div className="container mx-auto space-y-8 p-6">
        {EventsData.filter((items) => items.id === "upcoming-events").map(
          (section) => (
            <div key={section.id}>
              <h2 className="mb-4 text-2xl font-semibold">{section.label}</h2>
              <div className="space-y-4">
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
          ),
        )}
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
