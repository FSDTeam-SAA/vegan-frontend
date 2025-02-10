"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { eventColumns } from "./event-column";
import { DataTable } from "@/components/ui/data-table";

const tabs: { id: "paid" | "free" | "volunteer"; label: string }[] = [
  { id: "paid", label: "Paid Events" },
  { id: "free", label: "Free Events" },
  { id: "volunteer", label: "Volunteer Events" },
];

export default function EventManaging() {
  const [selectedTab, setSelectedTab] = useState<"paid" | "free" | "volunteer">(
    "paid",
  );

  const eventsData = {
    paid: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: "Vegan Cooking Workshop",
      type: i % 2 === 0 ? "Live" : "On-Site",
      revenue: i % 2 === 0 ? 150.0 : 200.0,
      attendees: 25,
      date: "Jan 6, 2025",
      time: "10:00 AM",
    })),
    free: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: "Free Event Workshop",
      type: i % 2 === 0 ? "Live" : "On-Site",
      revenue: i % 2 === 0 ? 150.0 : 200.0,
      attendees: 25,
      date: "Jan 6, 2025",
      time: "10:00 AM",
    })),
    volunteer: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: "Volunteer Event Workshop",
      type: i % 2 === 0 ? "Live" : "On-Site",
      revenue: i % 2 === 0 ? 150.0 : 200.0,
      attendees: 25,
      date: "Jan 6, 2025",
      time: "10:00 AM",
    })),
  };

  return (
    <div className="min-h-screen bg-[#f5f0eb] p-6">
      <div className="flex items-start justify-between">
        <div className="mb-8">
          <h1 className="mb-1 text-2xl font-semibold">Event Management</h1>
          <p className="text-muted-foreground">
            Efficiently manage and track all your events in one place.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-[48px] gap-2">
            <Upload className="h-4 w-4" />
            Bulk Upload
          </Button>
          <Button className="h-[48px] w-[170px] gap-2 bg-[#1a2b4b] hover:bg-[#243a64]">
            <Plus className="h-4 w-4" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="mb-8 flex justify-between">
        <div className="flex w-full gap-8 border-b border-[#F8F5F2]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={cn(
                "relative -mb-[1px] pb-2 text-sm transition-colors",
                selectedTab === tab.id
                  ? "border-b-2 border-[#1a2b4b] font-medium text-[#1a2b4b]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-around mb-5 flex gap-4">
        <Input
          type="search"
          placeholder="Search by name, ord no..."
          className="max-w-md border-[#F8F5F2]"
        />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] border-[#F8F5F2]">
            <SelectValue placeholder="Event type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="live">Live</SelectItem>
            <SelectItem value="onsite">On-Site</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="scale-[100.5%] overflow-hidden rounded-lg bg-white">
        <DataTable columns={eventColumns} data={eventsData[selectedTab]} />
      </div>
    </div>
  );
}
