"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 10 characters.",
  }),
  subject: z.string().min(2, {
    message: "Username must be at least 10 characters.",
  }),
  description: z.string().min(2, {
    message: "descriptioin must be at least 20 characters.",
  }),
});

const SupportForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="my-[56px] rounded-[16px] bg-[#F8F5F2] p-6 md:p-8 lg:p-10">
      <div>
        <h5 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
          Support
        </h5>
        <p className="pt-10 text-base font-medium leading-[19px] text-[#1F2937] md:pt-8 md:text-lg md:leading-[21px]">
          Need Help?
        </p>
        <p className="pb-10 pt-2 text-sm font-normal leading-[24px] text-[#4B5563] md:pb-12 md:text-base">
          Our professional support team is here to assist you with any issues
          you may have.
        </p>
        <div className="block md:hidden pb-12 md:pb-0">
          <Separator />
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-[16px] text-sm m:text-base lg:text-lg font-medium leading-[20px] md:leading-[26px] text-[#1F2937]">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] border-none bg-white px-[16px] py-[12px] text-base font-normal leading-[23px] outline-none placeholder:text-[#9CA3AF] placeholder:text-sm"
                    placeholder="“Enter your full name”"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-[16px] text-sm m:text-base lg:text-lg font-medium leading-[20px] md:leading-[26px] text-[#1F2937]">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="palceholder:text-[#9CA3AF] h-[48px] border-none bg-white px-[16px] py-[12px] text-base font-normal leading-[23px] outline-none placeholder:text-sm"
                    placeholder="“Enter your email address”"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-[16px] text-sm m:text-base lg:text-lg font-medium leading-[20px] md:leading-[26px] text-[#1F2937]">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] border-none bg-white px-[16px] py-[12px] text-base font-normal leading-[23px] outline-none placeholder:text-[#9CA3AF] placeholder:text-sm"
                    placeholder="“Briefly describe your issue”"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pb-[16px] text-sm m:text-base lg:text-lg font-medium leading-[20px] md:leading-[26px] text-[#1F2937]">
                  Description
                </FormLabel>
                <FormControl>
                  <textarea
                    className="h-[165px] w-full rounded-lg border-none bg-white px-[16px] py-[12px] text-base font-normal leading-[23px] outline-none placeholder:text-[#9CA3AF] placeholder:text-sm"
                    placeholder="Explain the issue or request in detail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end pt-[24px] md:pt-[8px] lg:pt-[32px]">
            <Button
              size="xl"
              className="rounded-[10px] px-[47px] py-[14px] text-base font-semibold leading-[19px] text-white"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SupportForm;
