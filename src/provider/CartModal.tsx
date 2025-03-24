"use client";

import CartModalProduct from "@/components/shared/cards/cart-modal-product";
import { BodyProps } from "@/components/shared/features/product-payment-checkout";
import EmptyContainer from "@/components/shared/sections/empty-container";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import { MerchantProfile } from "@/types/merchant";
import { useCartDataState } from "@/zustand/features/cart/useCartState";
import { useMutation } from "@tanstack/react-query";
import { Info, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

interface Props {
  initialData?: MerchantProfile;
  isPaymentAdded: boolean;
}

const CartsModal = ({ initialData, isPaymentAdded }: Props) => {
  const { isOpen, toggleCart, onCheckout, setLoading, loading } =
    useCartState();
  const session = useSession();

  const { data, resetCartState } = useCartDataState();

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
      setLoading(false);
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
      resetCartState();
      toggleCart();
    },
    onError: (err) => {
      setLoading(false);
      toast.error(err.message || "Failed to purchase", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  if (!initialData) return <p>Loading...</p>;

  const totalAmount = data?.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  let content;

  if (data.length === 0) {
    content = <EmptyContainer message="Your cart is empty" />;
  } else if (data.length > 0) {
    content = data.map((product) => (
      <CartModalProduct key={product._id} product={product} />
    ));
  }

  const handleCheckout = () => {
    if (!isPaymentAdded || !session.data) {
      onCheckout();
      return;
    } else {
      setLoading(true);
      createPurchase({
        userID: session.data.user.userId,
        amount: amount,
        merchantID: initialData._id,
        productId: data.map((product) => product._id),
      });
    }
  };

  return (
    <VeganModal
      className="h-[868px] w-full lg:w-[700px]"
      open={isOpen}
      onOpenChange={toggleCart}
    >
      <div>
        <div className="flex w-full items-center justify-between">
          <p className="font-inter text-lg font-semibold leading-[29.05px] text-[#262C40] md:text-[24px]">
            Your Cart ({data?.length})
          </p>
        </div>

        {/* Info Alert */}
        <div
          className="mb-8 mt-4 items-center gap-4 rounded-lg bg-[#FFF7ED] py-[15.5px] font-inter text-[#FF8904]"
          style={{
            background: "#FFF7ED",
            padding: "12px",
            color: "#FF8904",
            display: "flex",
          }}
        >
          <Info className="ml-[12px] min-h-6 min-w-6 flex-auto md:ml-[14px]" />
          <p className="font-inter text-sm font-normal leading-[21px] md:leading-[16.94px]">
            Services are reserved for 10 minutes. Please complete checkout
            before they expire.
          </p>
        </div>

        <hr />

        <ScrollArea className="h-[500px]">{content}</ScrollArea>

        <div className="mb-10 flex items-center justify-between pt-6">
          <span className="font-inter text-lg font-normal leading-[26px] text-[#262C40]">
            Total Amount
          </span>
          <span className="leadin-[24px] font-inter text-xl font-semibold">
            ${totalAmount}
          </span>
        </div>

        <Button
          className="relative h-[50px] w-full text-center font-inter !text-lg !font-medium leading-[21.78px]"
          size="lg"
          onClick={handleCheckout}
          disabled={loading}
        >
          Proceed To Checkout{" "}
          {loading && <Loader2 className="absolute right-5 animate-spin" />}
        </Button>
      </div>
    </VeganModal>
  );
};

export default CartsModal;
