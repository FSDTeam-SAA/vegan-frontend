"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Local imports
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { OrganizationEvent } from "@/types/organization";

const eventFormSchema = z.object({
  eventTitle: z
    .string()
    .min(1, "Event title is required")
    .max(100, "Event title must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(200, "Description must be less than 200 characters"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  eventType: z.enum(["paid event", "free event"]),
  price: z.string().refine((val) => {
    if (val === "0.00") return true; // Allow "0.00" for free events
    const num = parseFloat(val);
    return !isNaN(num) && num >= 0;
  }, "Price must be a valid number and greater than or equal to 0"),
});

// Infer the type from the schema
type EventFormData = z.infer<typeof eventFormSchema>;

interface EventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: OrganizationEvent;
}

export default function OrganizationEventDiolog({
  open,
  onOpenChange,
  initialData,
}: EventDialogProps) {
  const form = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      eventTitle: initialData?.eventTitle || "",
      description: initialData?.description || "",
      date: initialData?.date || "",
      time: initialData?.time || "",
      eventType:
        (initialData?.eventType as "paid event" | "free event") || "paid event",
      price: initialData?.price?.toString() || "0",
    },
  });

  const session = useSession();
  const organizationID = session.data?.user.userId;

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["organization-event-create"],
    mutationFn: (body: EventFormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationGoLive`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            ...body,
            organizationID,
          }),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // Handle success
      form.reset();
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["eventsByOrganization"] });
    },
  });
  const { mutate: editMutate, isPending: editPending } = useMutation({
    mutationKey: ["organization-event-edit"],
    mutationFn: (body: EventFormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationGoLive/${initialData?._id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // Handle success
      form.reset();
      onOpenChange(false);
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["eventsByOrganization"] });
    },
  });

  const onSubmit = (data: EventFormData) => {
    if (initialData) {
      editMutate(data);
    } else {
      mutate(data);
    }
  };

  const isLoading = isPending || editPending;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="border-0 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {initialData ? "Edit" : "Add"} New Event
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                name="eventTitle"
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
                        {field.value.length}/200
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your the event in detail"
                        className="resize-none"
                        maxLength={200}
                        {...field}
                        onChange={(e) => {
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
                name="eventType"
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
                        <SelectItem value="free event">Free Event</SelectItem>
                        <SelectItem value="paid event">Paid Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              {form.watch("eventType") === "paid event" && (
                <FormField
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (if paid)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#1f3a5f] hover:bg-[#162942]"
                  disabled={isLoading}
                >
                  {initialData ? "Save " : "Add Event"}{" "}
                  {isLoading && <Loader2 className="animate-spin" />}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
