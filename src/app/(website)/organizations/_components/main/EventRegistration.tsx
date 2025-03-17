"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import VeganModal from "@/components/ui/vegan-modal";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { OrganizationEvent } from "@/types/organization";

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is too short"),
  specialRequirements: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface EventRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  data?: OrganizationEvent;
}

export function EventRegistration({ isOpen, onClose, data }: EventRegistrationProps) {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      specialRequirements: "",
    },
  });

  const onSubmit = (values: FormData) => {
    console.log("Registration Form Data:", values);
    onClose();
    setIsThankYouModalOpen(true);
  };

  return (
    <>
      <VeganModal open={isOpen} onOpenChange={() => onClose()} className="w-[498px] max-w-md">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold">Register for {data?.eventTitle}</h2>
          <p className="mt-2 text-gray-600">Join us to make a difference. Fill out the form below to confirm your spot.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="fullName">Full Name</Label>
                  <FormControl>
                    <Input id="fullName" placeholder="Sharon Stone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input id="email" type="email" placeholder="johndoe@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              
              <FormField control={form.control} name="phoneNumber" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <FormControl>
                    <Input id="phoneNumber" placeholder="+1 (555) xxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              
              <FormField control={form.control} name="specialRequirements" render={({ field }) => (
                <FormItem>
                  <Label htmlFor="specialRequirements">Special Requirements (if applicable)</Label>
                  <FormControl>
                    <Textarea id="specialRequirements" placeholder="Do you have any dietary restrictions or accessibility needs?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="mt-6 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit" className="bg-[#1e3a5f] hover:bg-[#152a45]">Confirm Registration</Button>
              </div>
            </form>
          </Form>
        </div>
      </VeganModal>
      
      {/* Thank You Modal */}
      <VeganModal open={isThankYouModalOpen} onOpenChange={setIsThankYouModalOpen} className="w-[498px] max-w-md">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h2 className="text-xl font-semibold">Thank you for registering</h2>
          <p className="mt-4 text-gray-600">Your registration for {data?.eventTitle} has been successfully submitted. Check your email for event details.</p>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => setIsThankYouModalOpen(false)} className="w-full bg-[#1e3a5f] hover:bg-[#152a45]">Go Back</Button>
          </div>
        </div>
      </VeganModal>
    </>
  );
}
