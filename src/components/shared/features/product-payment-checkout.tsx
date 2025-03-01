"use client";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import PaymentForm, { PaymentFormValues } from "./payment/payment-form";

const ProductPaymentCheckout = () => {
  const { checkoutModal, onCheckoutClose } = useCartState();

  async function onSubmit(values: PaymentFormValues) {
    console.log(values);
  }

  return (
    <VeganModal
      className="h-auto w-full lg:w-[500px]"
      open={checkoutModal}
      onOpenChange={onCheckoutClose}
    >
      <h3 className="px-2 pt-5 font-inter text-[18px] font-semibold leading-[21.6px] text-[#1F2937]">
        Payment Information
      </h3>

      <PaymentForm onSubmit={onSubmit} />
    </VeganModal>
  );
};

export default ProductPaymentCheckout;
