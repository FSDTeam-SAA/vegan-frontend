"use client";

import { useState } from "react";
import { Clock, MapPin, Users, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { eventsData } from "./volunteeringData";

export interface VolunteerEvent {
  id: string;
  title: string;
  description: string;
  hoursPerWeek: number;
  duration: string;
  location: string;
  month: number;
  spotsAvailable: number;
  status: "upcoming" | "completed";
}

export default function VolunteerEvents() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming",
  );

  const currentEvents = eventsData[activeTab];

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold text-gray-900 md:text-3xl">
          Volunteer Event Management
        </h1>
        <p className="text-gray-600">
          Efficiently manage and track all your volunteer events in one place.
        </p>
      </div>

      {/* tab header  */}
      <div className="mb-6 border-b-2 border-white">
        <nav className="-mb-px flex flex-wrap">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={cn(
              "inline-flex items-center border-b-2 px-4 py-2 text-sm font-medium",
              activeTab === "upcoming"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
          >
            Upcoming Events
            <span
              className={cn(
                "ml-2 rounded-full p-1 px-2 text-xs text-gray-600",
                activeTab === "upcoming"
                  ? "h-[25px] w-[25px] rounded-full bg-black text-white"
                  : "bg-gray-100",
              )}
            >
              {eventsData.upcoming.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={cn(
              "inline-flex items-center border-b-2 px-4 py-2 text-sm font-medium",
              activeTab === "completed"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
          >
            Completed
            <span
              className={cn(
                "ml-2 rounded-full p-1 px-2 text-xs text-gray-600",
                activeTab === "completed"
                  ? "h-[25px] w-[25px] rounded-full bg-black text-white"
                  : "bg-gray-100",
              )}
            >
              {eventsData.completed.length}
            </span>
          </button>
        </nav>
      </div>

      <div className="space-y-4">
        {currentEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

// body content
function EventCard({ event }: { event: VolunteerEvent }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
            <p className="mt-1 text-gray-600">{event.description}</p>
          </div>
          <div
            className={cn(
              "rounded-full px-3 py-1 text-sm",
              event.status === "upcoming"
                ? "bg-blue-50 text-blue-700"
                : "bg-green-50 text-green-700",
            )}
          >
            {event.status === "upcoming" ? "Upcoming" : "Completed"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{event.hoursPerWeek} hours/week</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{event.month} spots available</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{event.spotsAvailable} spots available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
