"use client";
import useCartState from "@/hooks/useCartState";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import PaymentWrapper from "./save-payment-method";

interface Props {
  onSubmit: () => void;
}

export default function PaymentForm({ onSubmit }: Props) {
  const { checkoutModal, onCheckoutClose } = useCartState();

  const queryClient = useQueryClient();

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

  return (
    <div className="mt-5">
      <PaymentWrapper
        onPurchase={() => {
          queryClient.invalidateQueries({ queryKey: ["paymentAdded"] });
          onSubmit();
          onCheckoutClose();
        }}
      />
    </div>
  );
}
