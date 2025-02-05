"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import useCartState from "@/hooks/useCartState";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  trigger: ReactNode;
}

const CartModal = ({ trigger }: Props) => {
  const { isOpen, toggleCart } = useCartState();
  return (
    <AlertDialog open={isOpen} onOpenChange={toggleCart}>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex w-full items-center justify-between">
          <p className="font-inter text-[24px] font-semibold leading-[29.05px] text-[#262C40]">
            Your Cart (2)
          </p>
          <Button variant="link" size="icon" onClick={toggleCart}>
            <X />
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CartModal;
