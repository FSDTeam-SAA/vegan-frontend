"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCartState from "@/hooks/useCartState";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const paymentFormSchema = z.object({
  paymentType: z.string(),
  name: z.string().min(1),
  cardNumber: z.string(),
  expDate: z.string(),
  cvc: z.string(),
});

export type PaymentFormValues = z.infer<typeof paymentFormSchema>;

interface Props {
  onSubmit: (data: PaymentFormValues) => void;
}

export default function PaymentForm({ onSubmit }: Props) {
  const { checkoutModal, onCheckoutClose } = useCartState();

  useEffect(() => {
    if (checkoutModal) {
      setTimeout(() => {
        document.documentElement.style.overflow = "hidden";
      }, 100);
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [checkoutModal]);

  const form = useForm<z.infer<typeof paymentFormSchema>>({
    resolver: zodResolver(paymentFormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto overflow-hidden px-2 pt-5"
      >
        <div className="grid grid-cols-2 items-center gap-x-[20px] space-y-6">
          <FormField
            control={form.control}
            name="paymentType"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Pay with</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Debit or Credit Card" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="card">Debit or Credit Card</SelectItem>
                    <SelectItem value="paypal">Paypal</SelectItem>
                    <SelectItem value="bkash">Bkash</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Cardholder Name</FormLabel>
                <FormControl>
                  <Input placeholder="Sarah James" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Card Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 1234 1234 1234"
                    type="number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expDate"
            render={({ field }) => (
              <FormItem className="col-span-2 lg:col-span-1">
                <FormLabel>Expiry Date</FormLabel>
                <FormControl>
                  <Input placeholder="06/24" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem className="col-span-2 lg:col-span-1">
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input placeholder="123" type="number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-10 flex items-center justify-end gap-x-5">
          <Button variant="outline" onClick={onCheckoutClose}>
            Go Back
          </Button>
          <Button type="submit" className="h-[40px]">
            Proceed
          </Button>
        </div>
      </form>
    </Form>
  );
}
