"use client";
import ProductPaymentCheckout from "@/components/shared/features/product-payment-checkout";
import useCartState from "@/hooks/useCartState";
import CartModal from "@/provider/CartModal";
import { MerchantProfile } from "@/types/merchant";
import { useCartDataState } from "@/zustand/features/cart/useCartState";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { toast } from "sonner";
import { PaymentAddedResponse } from "./live-stream-tab";

interface Props {
  data?: MerchantProfile;
  loggedInUserId?: string;
}

const ProfileCartButton = ({ data: initialData, loggedInUserId }: Props) => {
  const { toggleCart } = useCartState();
  const { data } = useCartDataState();

  const {
    isLoading: isPaymentInfoLoading,
    data: paymentRes,
    isError: isPaymentInfoError,
    error: paymentError,
  } = useQuery<PaymentAddedResponse>({
    queryKey: ["paymentAdded"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/check-payment-method/${loggedInUserId}`,
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (isPaymentInfoError) {
      toast.error(paymentError.message ?? "Payment info not found.");
    }
  }, [isPaymentInfoError, paymentError]);

  return (
    <>
      <div className="md:pr-8">
        <button
          className="relative flex items-center text-nowrap pr-0 *:text-[#1D3557]"
          onClick={() => {
            if (!loggedInUserId) {
              return redirect("/onboarding");
            } else {
              toggleCart();
            }
          }}
          disabled={isPaymentInfoLoading}
        >
          View Cart
          <BiShoppingBag className="h-[15.5px] w-[19.1px] text-white" />
          {data.length > 0 && (
            <span className="absolute -right-2 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#1D3557] text-[7.5px] font-light !text-white">
              {data?.length}
            </span>
          )}
        </button>
        <CartModal
          initialData={initialData}
          isPaymentAdded={!!paymentRes?.paymentAdded}
        />
      </div>
      <ProductPaymentCheckout
        initialData={initialData}
        loggedinuserId={loggedInUserId as string}
      />
    </>
  );
};

export default ProfileCartButton;
