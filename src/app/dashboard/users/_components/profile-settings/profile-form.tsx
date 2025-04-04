"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import { ImagePlus } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const profileFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  businessName: z.string().optional(),
  address: z.string().optional(),
  mission: z.string().optional(),
  website: z.string().url().optional().or(z.literal("")),
  bio: z.string().optional(),
  experience: z.string().optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>
export type ProfileUser = {
  _id: string
  bio: string
  userId: string
  fullName: string
  email: string
  accountType: string | null
  token: string
  paymentAdded: boolean
  isgratings: boolean
  isVerified: string
  createdAt: string
  updatedAt: string
  __v: number
  phone: string
}

export function ProfileForm() {
  const [image, setImage] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const session = useSession()
  const id = session.data?.user?.userId
  const email = session.data?.user?.email
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  type ApiResponse = {
    success: boolean
    message: string
    data: ProfileUser
  }

  const { data } = useQuery<ApiResponse>({
    queryKey: ["profile"],
    queryFn: () => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/profile/${id}`).then((res) => res.json()),
    enabled: !!id,
  })

  const fullName = data?.data?.fullName
 

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: fullName || "",
      email: email || "",
      phone: "",
      bio: data?.data?.bio || "",
    },
  })

  useEffect(() => {
    // Clean up object URLs when component unmounts
    return () => {
      if (image && image.startsWith("blob:")) {
        URL.revokeObjectURL(image)
      }
    }
  }, [image])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)

    if (file) {
      // Store the file object for form submission
      setImageFile(file)

      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(file)
      setImage(previewUrl)

      // Clean up the form value to prevent React Hook Form from trying to process the file
      event.target.value = ""
    }
  }

  const onSubmit = (data: ProfileFormValues) => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append("fullName", data.fullName)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("bio", data.bio ?? "")

    // Append the image file to FormData if it exists
    if (imageFile) {
      formData.append("profilePhoto", imageFile)
    }

    // API call to submit the form data
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/profile/${id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        toast({
          title: "Success",
          description: "Your profile has been updated successfully.",
          variant: "default",
        })
      })
      .catch((error) => {
        console.error("Error:", error)
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  useEffect(() => {
    if (data?.data) {
      form.reset({
        fullName: data.data.fullName || "",
        email: data.data.email || email || "",
        phone: data.data.phone || "",
        bio: data.data.bio || "",
        // Add other fields as needed
      })
    }
  }, [data, email, form])

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-24 w-24">
                {image ? (
                  <Image src={image || "/placeholder.svg"} alt="Profile" className="rounded-full object-cover" fill />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                    <ImagePlus className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="mb-1 font-medium">Profile photo</h3>
                <p className="mb-2 text-sm text-muted-foreground">This image will be displayed on your profile</p>
                <Input type="file" accept="image/*" onChange={handleImageUpload} className="max-w-[200px]" />
              </div>
            </div>

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about yourself" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

