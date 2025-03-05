"use client";
import ProductPaymentCheckout from "@/components/shared/features/product-payment-checkout";
import useCartState from "@/hooks/useCartState";
import CartModal from "@/provider/CartModal";
import { MerchantProfile } from "@/types/merchant";
import { useCartDataState } from "@/zustand/features/cart/useCartState";
import { BiShoppingBag } from "react-icons/bi";

interface Props {
  data?: MerchantProfile;
}

const ProfileCartButton = ({ data: initialData }: Props) => {
  const { toggleCart } = useCartState();
  const { data } = useCartDataState();

  return (
    <>
      <div className="md:pr-8">
        <button
          className="relative flex items-center text-nowrap pr-0 *:text-[#1D3557]"
          onClick={toggleCart}
        >
          View Cart
          <BiShoppingBag className="h-[15.5px] w-[19.1px] text-white" />
          {data.length > 0 && (
            <span className="absolute -right-2 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#1D3557] text-[7.5px] font-light !text-white">
              {data?.length}
            </span>
          )}
        </button>
        <CartModal initialData={initialData} />
      </div>
      <ProductPaymentCheckout initialData={initialData} />
    </>
  );
};

export default ProfileCartButton;
