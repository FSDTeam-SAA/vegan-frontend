"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

const DeclineApplication = ({
    setDeclineModalOpen,
}: {
    setDeclineModalOpen: (open: boolean) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-[361px] md:h-[409px] w-[327px] md:w-[700px] rounded-2xl bg-white px-6 md:px-7 lg:px-8 py-8 md:py-9 lg:py-10">
      {/* Header */}
      <div className="mb-8 md:mb-9 lg:mb-10 flex items-center justify-between">
        <h4 className="text-lg md:text-xl font-medium text-[#1F2937] leading-[21px] md:leading-[24px]">
        Decline Application
        </h4>
        <X
          className="h-6 w-6 cursor-pointer text-[#1F2937] -mt-4 -mr-2"
          onClick={() => setDeclineModalOpen(false)}
          aria-label="Close"
        />
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm md:text-base lg:text-lg font-medium text-[#1F2937] leading-[20px] md:leading-[26px]">Description</FormLabel>
                <FormControl className="mt-4">
                  <textarea
                    className="h-[127px] w-full rounded-[8px] border border-[#F3F4F6] bg-[#F9FAFB] px-[16px] py-[13px] outline-none placeholder:text-base placeholder:font-normal placeholder:leading-[23px] placeholder:text-[#9CA3AF]"
                    placeholder="“Provide reason for declining the application”"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="flex items-center justify-end gap-4 mt-10 md:mt-12">
            <Button
            className="px-[24px] md:px-[36px] lg:px-[48px] py-[14px] shadow-none text-base font-medium leading-[19px] text-[#6B7280] rounded-[10px]"
              type="button"
              onClick={() => setDeclineModalOpen(false)}
              size="xl"
              variant="outline"
            >
              Cancel
            </Button>
            <Button className="px-[44px] py-[14px] shadow-none text-base font-semibold leading-[19px] text-white rounded-[10px]" variant="destructive" type="submit" size="xl">
              Confirm
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DeclineApplication;
