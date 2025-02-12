import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export default function CampaignForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();

  return (
    <div className="bg-white">
      <h2 className="mb-4 text-xl font-semibold">
        Create New Fundraising Campaign
      </h2>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Campaign Title</label>
          <div className="relative">
            <Input
              placeholder="E.g Help Build a Community Library"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
              className="border-none bg-[#F9FAFB] pr-16"
            />
            <span className="absolute right-3 top-2.5 text-sm text-muted-foreground">
              {title.length}/100
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Description</label>
          <div className="relative">
            <Textarea
              placeholder="Provide details about your campaign's purpose"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={200}
              className="h-[127px] resize-none border-none bg-[#F9FAFB]"
            />
            <span className="absolute right-3 top-2.5 text-sm text-muted-foreground">
              {description.length}/200
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Fundraising Goal</label>
          <Input
            placeholder="Enter the fundraising goal (e.g., $10,000)"
            className="border-none bg-[#F9FAFB]"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Deadline</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start border-none bg-[#F9FAFB] text-left font-normal ${
                  !date ? "text-muted-foreground" : ""
                }`}
              >
                {date ? format(date, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Add Campaign</Button>
      </div>
    </div>
  );
}
