"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import VeganModal from "@/components/ui/vegan-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Booking } from "./delivery-management-table-container";

interface UpdateStatusModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: Booking;
}

const formSchema = z.object({
  status: z.enum(["shipped", "delivered"]),
});

const UpdateStatusModal = ({ open, setOpen, data }: UpdateStatusModalProps) => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["status-update"],
    mutationFn: (body: any) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/order/tracking/${data.orderId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          richColors: true,
          position: "top-right",
        });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["productDelivery"] });
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err.message, {
        richColors: true,
        position: "top-right",
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "delivered",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const reqBody = {
      shippingStatus: values.status,
    };

    mutate(reqBody);
  }

  return (
    <VeganModal
      open={open}
      onOpenChange={(p) => setOpen(p)}
      className="md:max-w-[364px]"
    >
      <h1 className="text-left font-inter text-[20px] font-medium text-[#1F2937]">
        Update Order Status
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mr-auto space-y-5 pt-10"
        >
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    value={field.value}
                    className="flex gap-4"
                  >
                    <div
                      className={`flex h-[56px] w-[128px] items-center justify-center rounded-md p-4 ${field.value === "shipped" ? "border border-[#1F2937]" : "bg-[#F9FAFB]"}`}
                    >
                      <RadioGroupItem
                        value="shipped"
                        id="shipped"
                        className="mr-2 border-[#D1D5DB]"
                      />
                      <label
                        htmlFor="shipped"
                        className={
                          field.value === "shipped"
                            ? "text-[#1F2937]"
                            : "text-[#4B5563]"
                        }
                      >
                        Shipped
                      </label>
                    </div>

                    <div
                      className={`flex h-[56px] w-[128px] items-center justify-center rounded-md p-4 ${field.value === "delivered" ? "border border-[#1F2937]" : "bg-[#F9FAFB]"}`}
                    >
                      <RadioGroupItem
                        value="delivered"
                        id="delivered"
                        className="mr-2 border-[#D1D5DB]"
                      />
                      <label
                        htmlFor="delivered"
                        className={
                          field.value === "delivered"
                            ? "text-[#1F2937]"
                            : "text-[#4B5563]"
                        }
                      >
                        Delivered
                      </label>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-4 pt-5">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-[#D1D5DB] text-[#4B5563]"
              onClick={() => setOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#1F2937] hover:bg-[#111827]"
              disabled={isPending}
              variant={isPending ? "outline" : "default"}
            >
              {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}{" "}
              Update Status
            </Button>
          </div>
        </form>
      </Form>
    </VeganModal>
  );
};

export default UpdateStatusModal;
