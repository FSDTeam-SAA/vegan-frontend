"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage 
} from "@/components/ui/form";
import VeganModal from "@/components/ui/vegan-modal";
import { OrganizationEvent } from "@/types/organization";

const formSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  skillExperience: z.string().min(10, "Please describe your skills/experience"),
  motivationStatement: z.string().min(10, "Please provide a motivation statement"),
});

interface GardenApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: OrganizationEvent;
}

export default function GardenApplicationModal({ isOpen, onClose, data }: GardenApplicationModalProps) {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      skillExperience: "",
      motivationStatement: "",
    },
  });

  const handleCloseThankYou = useCallback(() => {
    setShowThankYouModal(false);
    onClose();
    form.reset();
  }, [onClose, form]);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showThankYouModal) {
          handleCloseThankYou();
        } else if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen,onClose, showThankYouModal, handleCloseThankYou]);

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Data:", values);
    setShowThankYouModal(true);
    onClose();
  };

  if (!isOpen && !showThankYouModal) return null;

  return (
    <>
      <VeganModal open={isOpen} onOpenChange={onClose} className="w-auto">
        <div ref={modalRef} className="relative bg-white rounded-lg max-w-md sm:max-w-lg mx-4 p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Apply for: {data?.eventTitle} Community Garden Helper
          </h2>
          <p className="text-gray-600 mt-2">
            Help us maintain and grow our community garden. Fill out the form below to get started.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-4">
              <FormField name="fullName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Sharon Stone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="johndoe@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="phoneNumber" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) xxx-xxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="skillExperience" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill/Experience</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe any relevant skills or experience (e.g., gardening, teaching)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="motivationStatement" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivation Statement</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Why do you want to volunteer for this role?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                <Button type="submit" className="bg-[#1e3a5f] hover:bg-[#152a45]">Submit Application</Button>
              </div>
            </form>
          </Form>
        </div>
      </VeganModal>

      <VeganModal open={showThankYouModal} onOpenChange={setShowThankYouModal} className="w-auto">
        <div ref={modalRef} className="relative bg-white rounded-lg max-w-md mx-4  text-center">
          <h2 className="text-xl font-semibold mb-4 text-left">Thank You For Applying</h2>
          <p className="text-left text-gray-700">
            Your application for {data?.eventTitle} Community Garden Helper has been successfully submitted. Our team will review your application and contact you shortly.
          </p>
          <Button className="mt-6 w-full bg-[#1e3a5f] hover:bg-[#152a45]" onClick={handleCloseThankYou}>
            Go Back
          </Button>
        </div>
      </VeganModal>
    </>
  );
}
