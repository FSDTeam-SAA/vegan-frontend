"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Local imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  role: z.enum(["customer", "vendor"], {
    required_error: "Please select a role",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function OnBoardingForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: undefined,
    },
  });

  const { watch } = form;

  const isDisabled = !watch("role");

  const role = watch("role");

  function onSubmit() {
    // nothing have to do
  }

  return (
    <div className="mt-[40px] h-full w-full space-y-[56px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[56px]">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-[56px]">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 gap-[36px] md:grid-cols-2"
                  >
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <RadioGroupItem
                            value="customer"
                            id="customer"
                            className="peer sr-only"
                          />
                          <FormLabel
                            htmlFor="customer"
                            className="hover:bg-gray-10 flex h-[104px] cursor-pointer flex-col items-start justify-center rounded-md border-[1px] border-muted bg-white p-4 peer-data-[state=checked]:border-[#1D3557] peer-data-[state=checked]:bg-[#F9FAFB] md:h-[174px] [&:has([data-state=checked])]:border-[#1D3557]"
                          >
                            <div className="absolute right-4 top-4 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1px] border-black">
                              {role === "customer" && (
                                <div className="h-[8px] w-[8px] rounded-full bg-[#1D3557] transition-all" />
                              )}
                            </div>
                            <span className="mb-[16px] text-left font-inter text-[16px] font-medium leading-[24px] text-[#1D3557]">
                              Join as a Customer
                            </span>
                            <span className="hidden text-left font-inter text-[12px] text-xs font-normal italic leading-[18px] text-[#9CA3AF] md:block">
                              to offer services, products or non-profit
                              initiatives
                            </span>
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <RadioGroupItem
                            value="vendor"
                            id="vendor"
                            className="peer sr-only"
                          />
                          <FormLabel
                            htmlFor="vendor"
                            className="hover:bg-gray-10 flex h-[104px] cursor-pointer flex-col items-start justify-center rounded-md border-[1px] border-muted bg-white p-4 peer-data-[state=checked]:border-[#1D3557] md:h-[174px] [&:has([data-state=checked])]:border-[#1D3557] [&:has([data-state=checked])]:bg-[#F9FAFB]"
                          >
                            <div className="absolute right-4 top-4 flex h-[20px] w-[20px] items-center justify-center rounded-full border-[1px] border-black">
                              {role === "vendor" && (
                                <div className="h-[8px] w-[8px] rounded-full bg-[#1D3557] transition-all" />
                              )}
                            </div>
                            <span className="mb-[16px] text-left font-inter text-[16px] font-medium leading-[24px] text-[#1D3557]">
                              Join as a Vendor
                            </span>
                            <span className="hidden text-left font-inter text-[12px] text-xs font-normal italic leading-[18px] text-[#9CA3AF] md:block">
                              to discover vegan services, products and support
                              ethical initiatives
                            </span>
                          </FormLabel>
                        </div>
                      </FormControl>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-[48px] w-full rounded-[10px] bg-[#1D3557] font-inter text-[16px] font-medium leading-[19.36px] text-white shadow-[0px_1px_40px_0px_rgba(12,_12,_13,_0.05)] transition-colors duration-300 hover:bg-[#1D3557]/80"
            disabled={isDisabled}
          >
            <Link
              href={`/onboarding/signup?role=${role}`}
              className={cn(isDisabled && "pointer-events-none")}
            >
              Join as a Customer
            </Link>
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link
          href={`/onboarding/login?role=${role}`}
          className={cn(
            "text-primary hover:underline",
            isDisabled && "pointer-events-none",
          )}
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
