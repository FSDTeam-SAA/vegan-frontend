import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Define the Zod schema for form validation
const updateRaisingSchema = z.object({
  achieved: z
    .string()
    .refine((value) => !isNaN(Number(value)), {
      message: "Achieved goal must be a valid number",
    })
    .refine((value) => Number(value) > 0, {
      message: "Achieved goal must be greater than 0",
    }),
});

type UpdateRaisingValues = z.infer<typeof updateRaisingSchema>;

interface Props {
  campaignId: string;
  onClose: () => void;
}

export default function UpdateRaising({ campaignId, onClose }: Props) {
  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm<UpdateRaisingValues>({
    resolver: zodResolver(updateRaisingSchema),
    defaultValues: {
      achieved: "",
    },
  });

  const queryClient = useQueryClient();

  // Mutation for sending data to the API using TanStack Query
  const updateAchievedGoalMutation = useMutation({
    mutationFn: async (data: UpdateRaisingValues) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/campaigns/${campaignId}`, // Replace with dynamic campaign ID if needed
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            achieved: Number(data.achieved), // Convert to number for the API
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update achieved goal");
      }

      return response.json();
    },
    onSuccess: (data) => {
      if (!data) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }
      form.reset(); // Reset the form after successful submission

      queryClient.invalidateQueries({ queryKey: ["fundraising"] });
      onClose();
    },
    onError: (error) => {
      console.error("Error updating achieved goal:", error);
    },
  });

  // Handle form submission
  const onSubmit = (data: UpdateRaisingValues) => {
    updateAchievedGoalMutation.mutate(data);
  };

  return (
    <div className="max-w-md rounded-lg bg-white">
      <h2 className="mb-4 text-xl font-semibold">Update Fundraising Goal</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Achieved Goal Field */}
          <FormField
            control={form.control}
            name="achieved"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Achieved Goal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the total achieved goal (e.g., 5000)"
                    {...field}
                    type="text" // Use "text" to allow formatted input like "$5000"
                    className="border-none bg-[#F9FAFB]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={updateAchievedGoalMutation.isPending}
          >
            {updateAchievedGoalMutation.isPending
              ? "Updating..."
              : "Update Goal"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
