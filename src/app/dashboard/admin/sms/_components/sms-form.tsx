"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Define the form schema with Zod
const formSchema = z.object({
  to: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\+?[0-9]+$/, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(160, { message: "Message must be less than 160 characters" }),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function SMSForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      to: "",
      message: "",
    },
  });

  // Define the mutation
  const mutation = useMutation({
    mutationFn: (values: FormValues) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sms/send`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        setStatus("error");
        return;
      }

      // handle success
      setStatus("success");
      toast({
        title: "SMS Sent",
        description: "Your message has been sent successfully.",
      });
      form.reset();
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 6000);
    },
    onError: () => {
      setStatus("error");
      toast({
        title: "Error",
        description: "Failed to send SMS. Please try again.",
        variant: "destructive",
      });
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    },
  });

  // Define the submit handler
  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Send SMS</CardTitle>
        <CardDescription>
          Send a text message to any phone number
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1234567890" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter the phone number with country code (e.g.,
                    +8801623398837)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your message (max 160 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {status === "success" && (
              <Alert
                variant="default"
                className="border-green-200 bg-green-50 text-green-800"
              >
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription>
                  Your SMS has been sent successfully.
                </AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to send SMS. Please try again.
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send SMS"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
