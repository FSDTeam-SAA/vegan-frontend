"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { X } from "lucide-react";

const formSchema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;


interface ContactSupportProps {
  setIsOpen: (open: boolean) => void
}

export default function ContactSupportForm({ setIsOpen }: ContactSupportProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-[20px] md:px-[26px] lg:px-[32px] py-[40px] bg-white shadow-lg rounded-lg min-w-[327px] max-w-[700px] max-h-[553px]">
          <div className="flex items-center justify-between">
          <h4 className="text-xl font-medium text-[#1F2937] leading-[24px]">Contact Support</h4>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          
          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium leadng-[26px] text-[#1F2937] pb-[16px]">Subject</FormLabel>
                <FormControl>
                  <Input className="w-full md:w-[636px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6]" placeholder="Enter subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium leadng-[26px] text-[#1F2937] pb-[16px]">Message</FormLabel>
                <FormControl>
                  <Textarea className="w-full md:w-[636px] h-[165px] bg-[#F9FAFB] border border-[#F3F4F6]" placeholder="Enter your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-[32px]">
            <Button size="xl" type="submit" className="text-base font-semibold text-white leading-[19px] py-[14px] px-[23px] md:px-[47px]">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
