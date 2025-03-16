"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormData = {
  fullName: string
  email: string
  phoneNumber: string
  specialRequirements: string
}

interface EventRegistrationProps {
  isOpen: boolean
  onClose: () => void
}

export function EventRegistration({ isOpen, onClose }: EventRegistrationProps) {
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    specialRequirements: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Log form data to console
    console.log("Registration Form Data:", formData)

    // Close registration modal and open thank you modal
    onClose()
    setIsThankYouModalOpen(true)
  }

  return (
    <>
      {/* Registration Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Register for Beach Cleanup Drive</h2>
              <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-2 text-gray-600">
              Join us to make a difference. Fill out the form below to confirm your spot
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
                <Label htmlFor="specialRequirements">Special Requirements (if applicable)</Label>
                <Textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  placeholder="Do you have any dietary restrictions or accessibility needs?"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  className="min-h-[100px]"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#1e3a5f] hover:bg-[#152a45]">
                  Confirm Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {isThankYouModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Thank you for registering</h2>
              <button onClick={() => setIsThankYouModalOpen(false)} className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-center text-gray-600">
              Your registration for Beach Cleanup Drive has been successfully submitted. Check your email for event
              details.
            </p>

            <div className="mt-6 flex justify-center">
              <Button onClick={() => setIsThankYouModalOpen(false)} className="w-full bg-[#1e3a5f] hover:bg-[#152a45]">
                Go Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

