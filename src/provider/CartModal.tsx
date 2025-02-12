"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VeganModal from "@/components/ui/vegan-modal";
import useCartState from "@/hooks/useCartState";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, Info } from "lucide-react";
import Image from "next/image";

const CartsModal = () => {
  const { isOpen, toggleCart } = useCartState();

  return (
    <VeganModal
      className="h-[868px] w-full lg:w-[700px]"
      open={isOpen}
      onOpenChange={toggleCart}
    >
      <div>
        <div className="flex w-full items-center justify-between">
          <p className="font-inter text-lg font-semibold leading-[29.05px] text-[#262C40] md:text-[24px]">
            Your Cart (5)
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

        <ScrollArea className="h-[500px]">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="my-10">
              <div className="gap-8 space-y-4 md:flex">
                {/* Larger Screens */}
                <div className="relative hidden h-[180px] w-[180px] md:block">
                  <Image
                    src="https://res.cloudinary.com/dw5wizivl/image/upload/v1739273667/cfaqgurhwippuqjzy3w8.png"
                    alt="Yoga class in session"
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
                    src="https://res.cloudinary.com/dw5wizivl/image/upload/v1739273667/cfaqgurhwippuqjzy3w8.png"
                    alt="Yoga class in session"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                {/* Cart Details */}
                <div className="flex-1">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="space-y-2">
                      <span className="rounded-xl bg-[#F9FAFB] px-[10px] py-[5px] text-sm text-gray-500">
                        {index === 1 ? "One-Time Payment" : "Subscription"}
                      </span>
                      <h3 className="font-lexend text-base font-normal leading-[20px] text-[#1D3557] md:text-lg md:leading-[22.5px]">
                        Yoga Class
                      </h3>
                    </div>
                    <span className="font-inter text-xl font-medium leading-[24px] text-[#1D3557] md:text-[22px] md:leading-[26.63px]">
                      $19.99
                    </span>
                  </div>

                  <p className="mb-3 font-inter text-sm font-normal leading-[24px] text-[#374151] md:text-base">
                    Join Sarah Green, a certified yoga instructor offering
                    personalized yoga classes for all levels.
                  </p>

                  <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 text-sm font-normal text-[#1D3557] md:text-base md:leading-[19.36px]">
                      <Calendar className="h-4 w-4" />
                      29th January, 2025 at 10:00am
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
                      <span className="*:text-sm">Reserved for: 8:42</span>
                    </div>
                    <Button
                      variant="link"
                      className="h-auto p-0 font-inter text-lg font-normal leading-[26px] text-[#1D3557] underline"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="block" style={{ marginTop: "10px" }} />
            </div>
          ))}
        </ScrollArea>

        <div className="mb-10 flex items-center justify-between pt-6">
          <span className="font-inter text-lg font-normal leading-[26px] text-[#262C40]">
            Total Amount
          </span>
          <span className="leadin-[24px] font-inter text-xl font-semibold">
            $40.00
          </span>
        </div>

        <Button
          className="h-[50px] w-full text-center font-inter !text-lg !font-medium leading-[21.78px]"
          size="lg"
        >
          Proceed To Checkout
        </Button>
      </div>
    </VeganModal>
  );
};

export default CartsModal;
