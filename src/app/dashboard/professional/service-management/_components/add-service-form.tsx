"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Upload, X } from "lucide-react"
import type React from "react" // Import React

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { veganCookingDataType } from "./VeganCookingData"

const formSchema = z.object({
    serviceName: z
        .string()
        .min(2, "Service name must be at least 2 characters")
        .max(100, "Service name must be less than 100 characters"),
    metaDescription: z
        .string()
        .min(10, "Meta description must be at least 10 characters")
        .max(200, "Meta description must be less than 200 characters"),
    serviceDescription: z
        .string()
        .min(20, "Service description must be at least 20 characters")
        .max(200, "Service description must be less than 200 characters"),
    keywords: z.string().max(100, "Keywords must be less than 100 characters"),
    paymentType: z.string({
        required_error: "Please select a payment type",
    }),
    price: z
        .string()
        .optional()
        .transform((val) => (val === "" ? "0.00" : val)),
})



export function AddServiceForm({ data }: { data?: veganCookingDataType }) {
    const [image, setImage] = useState<File | null>(null)
    const [video, setVideo] = useState<File | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            serviceName: data?.serviceName || "",
            metaDescription: data?.metaDescription || "",
            serviceDescription: data?.serviceDescription || "",
            keywords: data?.keywords?.join(", ") || "", // Assuming keywords are passed as a string
            price: "0.00",
            paymentType: "", // Set default payment type if needed
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(values);
            console.log("Image:", image);
            console.log("Video:", video);
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleFileDrop = (e: React.DragEvent, type: "image" | "video") => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (type === "image" && file.type.startsWith("image/")) {
            setImage(file)
        } else if (type === "video" && file.type.startsWith("video/")) {
            setVideo(file)
        }
    }

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "video") => {
        const file = e.target.files?.[0]
        if (file) {
            if (type === "image" && file.type.startsWith("image/")) {
                setImage(file)
            } else if (type === "video" && file.type.startsWith("video/")) {
                setVideo(file)
            }
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-[32px] pb-[24px] bg-white shadow-lg rounded-b-lg">

                    <div className="">
                        <FormField
                            control={form.control}
                            name="serviceName"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center justify-between pt-6 md:mt-0">
                                        <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Service Name</FormLabel>
                                        <span className="text-lg font-normal text-[#6B7280] leading-[26px]">0/100</span>
                                    </div>
                                    <FormControl>
                                        <Input className="w-full md:w-[705px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]" placeholder="“E.g Vegan Cooking Classes”" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="">
                        <FormField
                            control={form.control}
                            name="metaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center justify-between">
                                        <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Meta Description</FormLabel>
                                        <span className="text-lg font-normal text-[#6B7280] leading-[26px]">0/200</span>
                                    </div>
                                    <FormControl>
                                        <Textarea
                                            placeholder="“Write a brief and engaging description that appears in your search results”"
                                            className="w-full md:w-[705px] h-[127px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    <FormField
                        control={form.control}
                        name="serviceDescription"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between">
                                    <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Service Description</FormLabel>
                                    <span className="text-lg font-normal text-[#6B7280] leading-[26px]">0/200</span>
                                </div>
                                <FormControl>
                                    <Textarea
                                        placeholder="“Describe your service in detail. What service do you offer?”"
                                        className="w-full md:w-[705px] h-[127px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="keywords"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center justify-between">
                                    <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Keywords</FormLabel>
                                    <span className="text-lg font-normal text-[#6B7280] leading-[26px]">0/100</span>
                                </div>
                                <FormControl>
                                    <Input className="w-full md:w-[705px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]" placeholder="E.g vegan, cooking, healthy lifestyle" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="paymentType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Payment Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="w-full md:w-[344px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="w-[344px]">
                                            <SelectItem value="free">Free</SelectItem>
                                            <SelectItem value="one-time">One-time Payment</SelectItem>
                                            <SelectItem value="subscription">Subscription</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-medium leading-[26px] text-[#1F2937]">Price ($)</FormLabel>
                                    <FormControl>
                                        <Input className="w-full md:w-[344px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6] outline-none py-[12px] px-[16px]" type="number" step="0.01" min="0" placeholder="0.00" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <Label className="text-base font-medium leading-[26px] text-[#1F2937]">Add Image</Label>
                            <div
                                className={`border-2 border-dashed rounded-lg p-4 text-center hover:bg-accent/50 transition-colors ${image ? "border-primary" : "border-muted-foreground/25"
                                    }`}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleFileDrop(e, "image")}
                                style={{ height: "160px" }}
                            >
                                {image ? (
                                    <div className="relative">
                                        <Image
                                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                                            width={200}
                                            height={200}
                                            alt="Preview"
                                            className="max-h-32 mx-auto rounded"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute -top-2 -right-2"
                                            onClick={() => setImage(null)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground mb-1">Drag and drop an image here or</p>
                                        <label className="cursor-pointer text-sm text-primary hover:underline">
                                            Click to Upload
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => handleFileSelect(e, "image")}
                                            />
                                        </label>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-base font-medium leading-[26px] text-[#1F2937]">Add Video</Label>
                            <div
                                className={`border-2 border-dashed rounded-lg p-4 text-center hover:bg-accent/50 transition-colors ${video ? "border-primary" : "border-muted-foreground/25"
                                    }`}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={(e) => handleFileDrop(e, "video")}
                                style={{ height: "160px" }}
                            >
                                {video ? (
                                    <div className="relative">
                                        <video src={URL.createObjectURL(video)} className="max-h-32 mx-auto rounded" controls />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            className="absolute -top-2 -right-2"
                                            onClick={() => setVideo(null)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground mb-1">Drag and drop a video here or</p>
                                        <label className="cursor-pointer text-sm text-primary hover:underline">
                                            Click to Upload
                                            <input
                                                type="file"
                                                className="hidden "
                                                accept="video/*"
                                                onChange={(e) => handleFileSelect(e, "video")}
                                            />
                                        </label>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-end gap-4 pt-[20px]">
                        <Button className="w-full md:w-auto" size="lg" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Creating..." : "Create Service"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}



