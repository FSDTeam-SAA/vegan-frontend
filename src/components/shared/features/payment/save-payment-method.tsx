"use client";
import { Button } from "@/components/ui/button";
import useCartState from "@/hooks/useCartState";
import getStripe from "@/lib/stripe";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

const SavePaymentMethod = ({ onPurchase }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const { loading, setLoading } = useCartState();

  const session = useSession();

  if (session.status === "loading") return;

  const userId = session.data?.user.userId;

  //   const fetchOrCreateCustomer = async (email: string) => {
  //     const res = await fetch(
  //       'http://localhost:8001/api/v1/payment/create-customer',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email }),
  //       }
  //     )
  //     const data = await res.json()
  //     return data.customerId // Expecting backend to return { customerId: 'cus_123' }
  //   }

  const handleSavePaymentMethod = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!stripe || !elements) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(true);

    // Create a payment method
    // @ts-ignore
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error("Error creating payment method:", error);
      setLoading(false);
      return;
    }

    // Send the payment method ID and customer ID to the backend
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/save-payment-method`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          userID: userId,
        }),
      },
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Payment method saved successfully");
      onPurchase();
    } else {
      toast.error("Failed to save payment method");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSavePaymentMethod} className="rounded-lg border p-4">
      <CardElement className="border p-2" />

      <Button
        variant="default"
        className="mt-4 w-full"
        type="submit"
        disabled={!stripe || loading}
      >
        {loading ? "Saving..." : "Save Payment Method"}
      </Button>
    </form>
  );
};

interface Props {
  onPurchase: () => void;
}
const PaymentWrapper = ({ onPurchase }: Props) => (
  <Elements stripe={getStripe()}>
    <SavePaymentMethod onPurchase={onPurchase} />
  </Elements>
);

export default PaymentWrapper;
