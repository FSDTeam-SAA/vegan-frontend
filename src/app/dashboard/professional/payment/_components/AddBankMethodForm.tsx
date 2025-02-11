"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { X } from "lucide-react";

const formSchema = z.object({
    accountHolderName: z.string().min(6, "Account Holder Name must be at least 6 characters"),
    accountName: z.string().min(6, "Account Name must be at least 6 characters"),
    bankName: z.string().min(6, "Bank Name must be at least 6 characters"),
});

type FormValues = z.infer<typeof formSchema>;


interface ContactSupportProps {
  setIsOpen: (open: boolean) => void
}

export default function AddBankMethodForm({ setIsOpen }: ContactSupportProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { accountHolderName: "", accountName: "", bankName: ""},
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-[32px] py-[40px] bg-white shadow-lg rounded-lg max-w-[700px] max-h-[553px]">
          <div className="flex items-center justify-between">
          <h4 className="text-xl font-medium text-[#1F2937] leading-[24px]">Add Bank Details</h4>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          
          {/* accoount holder Field */}
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium leadng-[26px] text-[#1F2937] pb-[16px]">Account Holder Name</FormLabel>
                <FormControl>
                  <Input className="w-full md:w-[636px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6]" placeholder="Enter account holder name" {...field} />
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
                <FormLabel className="text-lg font-medium leadng-[26px] text-[#1F2937] pb-[16px]">Account Number</FormLabel>
                <FormControl>
                  <Input className="w-full md:w-[636px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6]" placeholder="Enter account number" {...field} />
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
                <FormLabel className="text-lg font-medium leadng-[26px] text-[#1F2937] pb-[16px]">Bank Name</FormLabel>
                <FormControl>
                  <Input className="w-full md:w-[636px] h-[48px] bg-[#F9FAFB] border border-[#F3F4F6]" placeholder="Enter bank name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex items-center justify-end pt-[32px]">
            <Button size="xl" type="submit" className="text-base font-semibold text-white leading-[19px] py-[14px] px-[16px] md:px-[29px]">
            Save Bank Details
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}





