"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";

const formSchema = z.object({
  accountHolderName: z
    .string()
    .min(6, "Account Holder Name must be at least 6 characters"),
  accountName: z.string().min(6, "Account Name must be at least 6 characters"),
  bankName: z.string().min(6, "Bank Name must be at least 6 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactSupportProps {
  setIsOpen: (open: boolean) => void;
}

export default function AddBankMethodForm({ setIsOpen }: ContactSupportProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { accountHolderName: "", accountName: "", bankName: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-h-[553px] max-w-[700px] space-y-4 rounded-lg bg-white px-[32px] py-[40px] shadow-lg"
        >
          <div className="flex items-center justify-between pb-[18px]">
            <h4 className="text-xl font-medium leading-[24px] text-[#1F2937]">
              Add Bank Details
            </h4>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* accoount holder Field */}
          <FormField
          
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leadng-[26px] pb-[16px] text-lg font-medium text-[#1F2937]">
                  Account Holder Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] w-full border border-[#F3F4F6] bg-[#F9FAFB] md:w-[636px]"
                    placeholder="Enter account holder name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* account name Field */}
          <FormField
            control={form.control}
            name="accountName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leadng-[26px] pb-[16px] text-lg font-medium text-[#1F2937]">
                  Account Number
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] w-full border border-[#F3F4F6] bg-[#F9FAFB] md:w-[636px]"
                    placeholder="Enter account number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* bank name Field */}
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leadng-[26px] pb-[16px] text-lg font-medium text-[#1F2937]">
                  Bank Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-[48px] w-full border border-[#F3F4F6] bg-[#F9FAFB] md:w-[636px]"
                    placeholder="Enter bank name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-[32px]">
            <Button
              size="xl"
              type="submit"
              className="px-[16px] py-[14px] text-base font-semibold leading-[19px] text-white md:px-[29px]"
            >
              Save Bank Details
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
