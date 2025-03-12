"use client";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
});

interface Props {
  userId: string;
  setDeclineModalOpen: (open: boolean) => void;
  onComplete: () => void;
}

type Body = {
  userId: string;
  status: string;
  message: string;
};

const DeclineApplication = ({
  setDeclineModalOpen,
  userId,
  onComplete,
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  const queryClient = useQueryClient();
  const { mutate: declinedApplication, isPending } = useMutation({
    mutationKey: ["approveApplication"],
    mutationFn: (body: Body) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/update-verification-status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });

        return;
      }

      // handle success
      queryClient.invalidateQueries({
        queryKey: ["vendorSingleProfile", "vendorManagement"],
      });
      setDeclineModalOpen(false);
      toast.success("Application declined successfully", {
        position: "top-right",
        richColors: true,
      });
      onComplete();
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    declinedApplication({
      userId,
      status: "declined",
      message: values?.description,
    });
  }

  return (
    <div className="h-[361px] w-[327px] rounded-2xl bg-white px-6 py-8 md:h-[409px] md:w-[700px] md:px-7 md:py-9 lg:px-8 lg:py-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between md:mb-9 lg:mb-10">
        <h4 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
          Decline Application
        </h4>
        <X
          className="-mr-2 -mt-4 h-6 w-6 cursor-pointer text-[#1F2937]"
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
                <FormLabel className="text-sm font-medium leading-[20px] text-[#1F2937] md:text-base md:leading-[26px] lg:text-lg">
                  Description
                </FormLabel>
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
          <div className="mt-10 flex items-center justify-end gap-4 md:mt-12">
            <Button
              className="rounded-[10px] px-[24px] py-[14px] text-base font-medium leading-[19px] text-[#6B7280] shadow-none md:px-[36px] lg:px-[48px]"
              type="button"
              onClick={() => setDeclineModalOpen(false)}
              size="xl"
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className="rounded-[10px] px-[44px] py-[14px] text-base font-semibold leading-[19px] text-white shadow-none"
              variant="destructive"
              type="submit"
              size="xl"
              disabled={isPending}
            >
              Confirm {isPending && <Loader2 className="animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DeclineApplication;
