"use client";
import useCartState from "@/hooks/useCartState";
import CartModal from "@/provider/CartModal";
import { BiShoppingBag } from "react-icons/bi";

const ProfileCartButton = () => {
  const { toggleCart } = useCartState();
  return (
    <>
      <div className="md:pr-8">
        <button
          className="relative flex items-center text-nowrap pr-0 *:text-[#1D3557]"
          onClick={toggleCart}
        >
          View Cart
          <BiShoppingBag className="h-[15.5px] w-[19.1px] text-white" />
          <span className="absolute -right-2 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#1D3557] text-[7.5px] font-light !text-white">
            2
          </span>
        </button>
        <CartModal />
      </div>
    </>
  );
};

export default ProfileCartButton;
