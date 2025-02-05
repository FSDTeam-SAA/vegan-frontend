"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useCartState from "@/hooks/useCartState";
import { Calendar, Clock, Info, X } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  trigger: ReactNode;
}

const CartModal = ({ trigger }: Props) => {
  const { isOpen, toggleCart } = useCartState();

  // get all the carts items from api or local storage / session storage

  return (
    <AlertDialog open={isOpen} onOpenChange={toggleCart}>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className="min-h-[868px] min-w-[700px]">
          <div className="flex w-full items-center justify-between">
            <p className="font-inter text-[24px] font-semibold leading-[29.05px] text-[#262C40]">
              Your Cart (2)
            </p>
            <Button variant="link" size="icon" onClick={toggleCart}>
              <X />
            </Button>
          </div>

          {/* render the children props data here  */}
          <Card className="mx-auto mt-10 w-full border-none shadow-none">
            <div className="mb-8 mt-4 flex items-center gap-4 rounded-lg bg-[#FFF7ED] py-[15.5px] font-inter text-[#FF8904]">
              <Info className="ml-[14px] h-5 w-5" />
              <p className="text-sm font-normal leading-[16.94px]">
                Services are reserved for 10 minutes. Please complete checkout
                before they expire.
              </p>
            </div>

            {[1, 2].map((item) => (
              <div key={item} className="mt-10">
                <div className="flex gap-4">
                  <div className="relative h-32 w-32 flex-shrink-0">
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
                      personalized yoga classes for all levels.
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

            <div className="mb-6 flex items-center justify-between py-4">
              <span className="text-lg font-medium">Total Amount</span>
              <span className="text-lg font-semibold">$40.00</span>
            </div>

            <Button
              className="w-full bg-[#1a365d] hover:bg-[#1a365d]/90"
              size="lg"
            >
              Proceed To Checkout
            </Button>
          </Card>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CartModal;
