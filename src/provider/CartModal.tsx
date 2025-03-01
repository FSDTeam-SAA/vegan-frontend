"use client";

import CartModalProduct from "@/components/shared/cards/cart-modal-product";
import EmptyContainer from "@/components/shared/sections/empty-container";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import { useCartDataState } from "@/zustand/features/cart/useCartState";
import { Info } from "lucide-react";

const CartsModal = () => {
  const { isOpen, toggleCart, onCheckout } = useCartState();
  const { data } = useCartDataState();

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
          className="h-[50px] w-full text-center font-inter !text-lg !font-medium leading-[21.78px]"
          size="lg"
          onClick={onCheckout}
        >
          Proceed To Checkout
        </Button>
      </div>
    </VeganModal>
  );
};

export default CartsModal;
