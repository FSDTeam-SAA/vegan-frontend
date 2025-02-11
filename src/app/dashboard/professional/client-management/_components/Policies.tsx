"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  beforeAppointment: z.string(),
  afterAppointment: z.string(),
  cancellationWindow: z.string(),
  noShowPolicy: z.string().min(1, "No show policy is required"),
})

type FormValues = z.infer<typeof formSchema>

const bufferTimeOptions = ["15 Minutes", "30 Minutes", "45 Minutes", "1 Hour"]

const cancellationOptions = ["24 Hours Before", "48 Hours Before", "72 Hours Before", "1 Week Before"]

export default function Policies() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      beforeAppointment: "15 Minutes",
      afterAppointment: "15 Minutes",
      cancellationWindow: "24 Hours Before",
      noShowPolicy: "",
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    // Handle form submission
  }

  return (
    <Card className="w-full mt-[48px] bg-[#F8F5F2]">
      <CardHeader>
        <CardTitle className="text-xl font-semibold leading-[29px] text-[#1F2937] pb-[40px]">Appointment Settings</CardTitle>
      </CardHeader>
      <CardContent >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[#1F2937] leading-[26px]">Buffer Times</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="beforeAppointment"
                  render={({ field }) => (
                    <FormItem >
                      <FormLabel className="text-sm font-medium leading-[16px] text-[#1F2937]">Before Appointment</FormLabel>
                      <Select  onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="text-sm font-normal leading-[16px] text-[#1F2937] p-[16px] bg-white">
                          <SelectTrigger>
                            <SelectValue  placeholder="Select buffer time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent >
                          {bufferTimeOptions.map((option) => (
                            <SelectItem  key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="afterAppointment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium leading-[16px] text-[#1F2937]">After Appointment</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="text-sm font-normal leading-[16px] text-[#1F2937] p-[16px] bg-white">
                          <SelectTrigger>
                            <SelectValue placeholder="Select buffer time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {bufferTimeOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-medium">Cancellation Policy</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="cancellationWindow"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium leading-[16px] text-[#1F2937]">Cancellation Window</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className="text-sm font-normal leading-[16px] text-[#1F2937] p-[16px] bg-white">
                          <SelectTrigger>
                            <SelectValue placeholder="Select cancellation window" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {cancellationOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noShowPolicy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium leading-[16px] text-[#1F2937]">No Show Policy</FormLabel>
                      <FormControl className="text-sm font-normal leading-[16px] text-[#1F2937] p-[16px] bg-white">
                        <Textarea placeholder="Enter your no show policy" className="resize-none" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-[#1f2937]">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

