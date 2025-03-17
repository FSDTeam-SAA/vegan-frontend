"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import VeganModal from "@/components/ui/vegan-modal";
import { OrganizationEvent } from "@/types/organization";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  specialRequirement: string;
};

interface EventRegistrationProps {
  isOpen: boolean;
  onClose: () => void;
  data?: OrganizationEvent;
  loggedInUserId: string;
}

export function EventRegistration({
  isOpen,
  onClose,
  data,
  loggedInUserId,
}: EventRegistrationProps) {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    specialRequirement: "",
  });

  const { mutate: createBooking, isPending } = useMutation({
    mutationKey: ["purchase-event"],
    mutationFn: (body: any) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationbookings`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message ?? "Failed to book your event", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success("Booking Confirmed successfully 🎉", {
        position: "top-right",
        richColors: true,
      });

      onClose();
      setIsThankYouModalOpen(true);
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data?._id) {
      toast.warning("Event ID Not Found for booking");
      return;
    }

    createBooking({
      organizationEventID: data._id,
      attendeeDetail: {
        ...formData,
        userID: loggedInUserId,
      },
    });

    // Log form data to console
    // console.log("Registration Form Data:", formData);

    // // Close registration modal and open thank you modal
    // onClose();
    // setIsThankYouModalOpen(true);
  };

  return (
    <>
      <VeganModal
        open={isOpen}
        onOpenChange={() => onClose()}
        className="w-[498px] max-w-md"
      >
        <div className="w-full max-w-md rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Register for {data?.eventTitle}
            </h2>
          </div>

          <p className="mt-2 text-gray-600">
            Join us to make a difference. Fill out the form below to confirm
            your spot
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Sharon Stone"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+1 (555) xxx-xxxx"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="specialRequirement">
                Special Requirements (if applicable)
              </Label>
              <Textarea
                id="specialRequirement"
                name="specialRequirement"
                placeholder="Do you have any dietary restrictions or accessibility needs?"
                value={formData.specialRequirement}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#1e3a5f] hover:bg-[#152a45]"
                disabled={isPending}
              >
                Confirm Registration{" "}
                {isPending && <Loader2 className="ml-2 animate-spin" />}
              </Button>
            </div>
          </form>
        </div>
      </VeganModal>

      {/* Thank You Modal */}
      <VeganModal
        open={isThankYouModalOpen}
        onOpenChange={setIsThankYouModalOpen}
        className="w-[498px] max-w-md"
      >
        <div className="w-full max-w-md rounded-lg bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Thank you for registering</h2>
          </div>

          <p className="mt-4 text-left text-gray-600">
            Your registration for {data?.eventTitle} has been successfully
            submitted. Check your email for event details.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => setIsThankYouModalOpen(false)}
              className="w-full bg-[#1e3a5f] hover:bg-[#152a45]"
            >
              Go Back
            </Button>
          </div>
        </div>
      </VeganModal>
    </>
  );
}
