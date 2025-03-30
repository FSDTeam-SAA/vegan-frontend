import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Define the Zod schema for form validation
const campaignFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(200),
  fundraisingGoal: z.string().refine((value) => !isNaN(Number(value)), {
    message: "Fundraising goal must be a valid number",
  }),
  deadline: z.date({ required_error: "Deadline is required" }),
});

type CampaignFormValues = z.infer<typeof campaignFormSchema>;

interface Props {
  organizationId: string;
  onClose: () => void;
}

export default function CampaignForm({ organizationId, onClose }: Props) {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<CampaignFormValues>({
    resolver: zodResolver(campaignFormSchema),
    defaultValues: {
      title: "",
      description: "",
      fundraisingGoal: "",
      deadline: undefined,
    },
  });

  const queryClient = useQueryClient();

  // Mutation for sending data to the API using fetch
  const createCampaignMutation = useMutation({
    mutationFn: async (data: CampaignFormValues) => {
      const formattedData = {
        organizationID: organizationId, // Hardcoded organization ID
        campaignTitle: data.title,
        description: data.description,
        fundraisingGoal: Number(data.fundraisingGoal), // Convert to number
        deadline: format(data.deadline, "MMMM d, yyyy"), // Format date as "June 1, 2025"
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/campaigns`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create campaign");
      }

      return response.json();
    },
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
          closeButton: true,
        });
      }
      toast.success("Campaign created successfully!", {
        richColors: true,
        position: "top-right",
        closeButton: true,
      });
      // Optionally, reset the form after successful submission
      form.reset();
      onClose();
      setDate(undefined);
      queryClient.invalidateQueries({ queryKey: ["fundraising"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        richColors: true,
        position: "top-right",
      });
    },
  });

  // Handle form submission
  const onSubmit = (data: CampaignFormValues) => {
    createCampaignMutation.mutate(data);
  };

  return (
    <div className="rounded-lg bg-white">
      <h2 className="mb-4 text-xl font-semibold">
        Create New Fundraising Campaign
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
          {/* Campaign Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Campaign Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="E.g Help Build a Community Library"
                    {...field}
                    maxLength={100}
                    className="border-none bg-[#F9FAFB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide details about your campaign's purpose"
                    {...field}
                    maxLength={200}
                    className="h-[127px] resize-none border-none bg-[#F9FAFB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fundraising Goal */}
          <FormField
            control={form.control}
            name="fundraisingGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fundraising Goal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the fundraising goal (e.g., $10,000)"
                    {...field}
                    className="border-none bg-[#F9FAFB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Deadline */}
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deadline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={`w-full justify-start border-none bg-[#F9FAFB] text-left font-normal ${
                          !date ? "text-muted-foreground" : ""
                        }`}
                      >
                        {date ? format(date, "PPP") : "Select Date"}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(selectedDate) => {
                        setDate(selectedDate);
                        field.onChange(selectedDate); // Update form state
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit and Cancel Buttons */}
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={createCampaignMutation.isPending}>
              {createCampaignMutation.isPending
                ? "Submitting..."
                : "Add Campaign"}{" "}
              {createCampaignMutation.isPending && (
                <Loader2 className="ml-2 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
