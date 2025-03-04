"use client";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import { MerchantProfile } from "@/types/merchant";
import { useCartDataState } from "@/zustand/features/cart/useCartState";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import PaymentForm from "./payment/payment-form";

interface BodyProps {
  userID: string;
  amount: number;
  merchantID: string;
  productId: string[];
}

interface Props {
  initialData?: MerchantProfile;
}

const ProductPaymentCheckout = ({ initialData }: Props) => {
  const { checkoutModal, onCheckoutClose, setLoading } = useCartState();
  const { data } = useCartDataState();
  const amount = data.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
  const { mutate: createPurchase } = useMutation({
    mutationKey: ["purchase"],
    mutationFn: (body: BodyProps) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message || "Failed to purchase", {
          position: "top-right",
          richColors: true,
        });

        return;
      }

      // handle success
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      onCheckoutClose();
      setLoading(false);
    },
  });
  const session = useSession();

  if (session.status === "loading") return null;

  if (!initialData) return null;

  async function onSubmit() {
    setLoading(true);
    if (!initialData?._id) return;
    // do purchase
    if (session.data) {
      createPurchase({
        userID: session.data.user.userId,
        amount: amount,
        merchantID: initialData._id,
        productId: data.map((product) => product._id),
      });
    }
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
