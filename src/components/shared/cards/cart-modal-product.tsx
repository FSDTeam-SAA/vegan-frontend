import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { truncateText } from "@/lib/helper";
import {
  CartProduct,
  useCartDataState,
} from "@/zustand/features/cart/useCartState";
import { Barcode, Clock } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  product: CartProduct;
}

const CartModalProduct = ({ product }: Props) => {
  const { removeProductFromCart } = useCartDataState();
  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      const endTime = new Date(product.endTime);
      const diffMs = endTime.getTime() - now.getTime(); // Difference in milliseconds

      if (diffMs > 0) {
        const minutes = Math.floor(diffMs / 60000); // Convert to minutes
        const seconds = Math.floor((diffMs % 60000) / 1000); // Remaining seconds
        setRemainingTime(`${minutes}:${seconds.toString().padStart(2, "0")}`);
      } else {
        setRemainingTime("Expired"); // If time is up
        removeProductFromCart(product._id); // Automatically remove product when time ends
      }
    };

    updateRemainingTime(); // Initial call
    const interval = setInterval(updateRemainingTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [product.endTime, product._id, removeProductFromCart]);

  return (
    <div className="my-10 px-4">
      <div className="gap-8 space-y-4 md:flex">
        {/* Larger Screens */}
        <div className="relative hidden h-[180px] w-[180px] md:block">
          <Image
            src={
              product?.productName !== ""
                ? product?.productImage
                : "https://res.cloudinary.com/dw5wizivl/image/upload/v1739273667/cfaqgurhwippuqjzy3w8.png"
            }
            alt={product?.productName}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Smaller Screens */}
        <div
          className="relative h-[180px] w-full md:hidden"
          style={{ aspectRatio: "16/6" }}
        >
          <Image
            src={
              product?.productName !== ""
                ? product?.productImage
                : "https://res.cloudinary.com/dw5wizivl/image/upload/v1739273667/cfaqgurhwippuqjzy3w8.png"
            }
            alt={product?.productName}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Cart Details */}
        <div className="flex-1">
          <div className="mb-2 flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-lexend text-base font-normal leading-[20px] text-[#1D3557] md:text-lg md:leading-[22.5px]">
                {product?.productName}
              </h3>
            </div>
            <span className="font-inter text-xl font-medium leading-[24px] text-[#1D3557] md:text-[22px] md:leading-[26.63px]">
              ${product?.price}
            </span>
          </div>

          <p className="mb-3 font-inter text-sm font-normal leading-[24px] text-[#374151] md:text-base">
            {truncateText(product?.description, 115)}
          </p>

          <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 text-sm font-normal text-[#1D3557] md:text-base md:leading-[19.36px]">
              <Barcode className="h-4 w-4" />
              {product?.stockQuantity} Product available
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div
              className="flex items-center gap-1"
              style={{
                color: "#FF8904",
              }}
            >
              <Clock className="h-4 w-4" />
              <span className="*:text-sm">Reserved for: {remainingTime}</span>
            </div>
            <Button
              variant="link"
              className="h-auto p-0 font-inter text-lg font-normal leading-[26px] text-[#1D3557] underline"
              onClick={() => removeProductFromCart(product?._id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      <Separator className="block" style={{ marginTop: "10px" }} />
    </div>
  );
};

export default CartModalProduct;
