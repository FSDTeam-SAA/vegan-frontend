"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

interface EventMetrics {
  registeredParticipants: number;
  totalAmountPaid: number;
}
export interface EventData {
  type: "Paid" | "Free";
  title: string;
  description: string;
  date: string;
  timeRange: string;
  price: number;
  metrics?: EventMetrics;
  defaultExpanded?: boolean;
}

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  type: string;
  price: string;
}

interface EventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: EventData;
  mode?: "add" | "edit";
  onSubmit: (data: EventFormData) => void;
}

function convertDateFormat(dateStr: string): string {
  if (!dateStr) {
    console.error("Invalid date string:", dateStr);
    return "Invalid Date";
  }

  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    console.error("Could not parse date:", dateStr);
    return "Invalid Date";
  }

  return date.toISOString().split("T")[0];
}

function extractTimeFromRange(timeRange: string) {
  const startTime = timeRange.split(" - ")[0];
  const [time, period] = startTime.split(" ");
  const [hours, minutes] = time.split(":");
  let hour = Number.parseInt(hours);

  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, "0")}:${minutes}`;
}

export function EventDialog({
  open,
  onOpenChange,
  initialData,
  mode = "add",
  onSubmit,
}: EventDialogProps) {
  const [description, setDescription] = useState("");

  const form = useForm<EventFormData>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      type: "free",
      price: "0.00",
    },
  });

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      const formattedDate = convertDateFormat(initialData.date);
      const formattedTime = extractTimeFromRange(initialData.timeRange);

      form.reset({
        title: initialData.title,
        description: initialData.description,
        date: formattedDate,
        time: formattedTime,
        type: initialData.type.toLowerCase(),
        price: initialData.price.toString(),
      });
      setDescription(initialData.description);
    } else {
      form.reset({
        title: "",
        description: "",
        date: "",
        time: "",
        type: "free",
        price: "0.00",
      });
      setDescription("");
    }
  }, [initialData, form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {mode === "add" ? "Add New Event" : "Edit Event"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g Beach Cleanup Drive" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between">
                    Description
                    <span className="text-sm text-muted-foreground">
                      {description.length}/200
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your the event in detail"
                      className="resize-none"
                      maxLength={200}
                      {...field}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="free">Free Event</SelectItem>
                      <SelectItem value="paid">Paid Event</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price (if paid)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" min="0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#1f3a5f] hover:bg-[#162942]">
                {mode === "add" ? "Add Event" : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


