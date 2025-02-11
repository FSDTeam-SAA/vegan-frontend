"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import { Calendar, Clock, Info } from "lucide-react";
import Image from "next/image";

const CartsModal = () => {
  const { isOpen, toggleCart } = useCartState();

  // get all the carts items from api or local storage / session storage

  return (
    <VeganModal
      className="w-full lg:w-[700px]"
      open={isOpen}
      onOpenChange={toggleCart}
    >
      <div className="">
        <div className="flex w-full items-center justify-between">
          <p className="font-inter text-[24px] font-semibold leading-[29.05px] text-[#262C40]">
            Your Cart (2)
          </p>
        </div>

        {/* render the children props data here  */}
        <div className="mx-auto mt-10 w-full border-none shadow-none">
          <div
            className="mb-8 mt-4 items-center gap-4 rounded-lg bg-[#FFF7ED] py-[15.5px] font-inter text-[#FF8904]"
            style={{
              background: "#FFF7ED",
              padding: "12px",
              color: "#FF8904",
              display: "flex",
            }}
          >
            <Info className="ml-[14px] h-5 w-5 flex-auto" />
            <p className="text-sm font-normal leading-[16.94px]">
              Services are reserved for 10 minutes. Please complete checkout
              before they expire.
            </p>
          </div>

          {[1, 2].map((item) => (
            <div key={item} className="mt-10">
              <div className="flex gap-4">
                <div className="relative hidden h-32 w-32 flex-shrink-0 lg:block">
                  <Image
                    src="https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
                    alt="Yoga class in session"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {item === 1 ? "One-Time Payment" : "Subscription"}
                      </span>
                      <h3 className="text-lg font-semibold">Yoga Class</h3>
                    </div>
                    <span className="text-lg font-semibold">$19.99</span>
                  </div>

                  <p className="mb-3 text-muted-foreground">
                    Join Sarah Green, a certified yoga instructor offering
                  </p>

                  <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      29th January, 2025 at 10:00am
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-orange-600">
                      <Clock className="h-4 w-4" />
                      Reserved for: 8:42
                    </div>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-normal"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Separator style={{ marginTop: "50px" }} />

          <div className="mb-6 flex items-center justify-between py-4">
            <span className="text-lg font-medium">Total Amount</span>
            <span className="text-lg font-semibold">$40.00</span>
          </div>

          <Button className="h-[50px] w-full" size="lg">
            Proceed To Checkout
          </Button>
        </div>
      </div>
    </VeganModal>
  );
};

export default CartsModal;
