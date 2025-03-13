"use client";
// Packages
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// Local imports
import PaymentForm from "@/components/shared/features/payment/payment-form";
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import VeganModal from "@/components/ui/vegan-modal";
import { cn } from "@/lib/utils";

interface Props {
  isPaymentAdded: boolean;
  userId: string;
}

const PaymentMethod = ({ isPaymentAdded, userId }: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handlePaymentMethodForm = () => {
    setIsOpen(!isOpen);
  };

  const { mutate: removeCard, isPending } = useMutation({
    mutationKey: ["removeCard"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/remove-payment-method`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userID: userId,
          }),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.status) {
        toast.error(data.message ?? "Failed to remove payment method", {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      router.refresh();

      setIsDeleteModalOpen(false);
      toast.success(data.message, {
        richColors: true,
      });

      window.location.reload();
    },
  });

  return (
    <div className="py-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <div className="flex flex-col items-start justify-start gap-[24px] md:flex-row md:items-center md:justify-between">
          <h5 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
            Payment Methods
          </h5>
          {/* <Button
            onClick={handlePaymentMethodForm}
            className="text-base font-medium leading-[19px] text-[#1F2937]"
            size="xl"
            variant="outline"
          >
            Add A Method
          </Button> */}
        </div>
        {/* second part  */}
        <div className="pt-[40px]">
          <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-[16px]">
            <div className="flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]">
              <Image src="/assets/wise.png" alt="icon" width={26} height={18} />
              <div>
                <p className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                  Stripe
                </p>
                <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:text-base md:leading-[19px]">
                  {isPaymentAdded ? "Connected" : "Add Your stripe card"}
                </p>
              </div>
            </div>
            <div>
              {isPaymentAdded ? (
                <Button
                  className={cn(
                    "text-base font-medium leading-[19px] text-[#EF4444] hover:bg-rose-50 hover:text-[#EF4444]",
                  )}
                  variant="ghost"
                  onClick={() => setIsDeleteModalOpen(true)}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  className={cn(
                    "text-base font-medium leading-[19px] text-black",
                  )}
                  variant="ghost"
                  onClick={handlePaymentMethodForm}
                >
                  Connect
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <VeganModal open={isOpen} onOpenChange={setIsOpen} className="">
        <PaymentForm
          onSubmit={() => {
            router.refresh();
            handlePaymentMethodForm();
          }}
        />
      </VeganModal>

      <AlertModal
        loading={isPending}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => removeCard()}
        message="want to disconnect your Stripe account?"
      />
    </div>
  );
};

export default PaymentMethod;

// <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
//   {/* Modal content */}
//   <div className="relative z-10">
//     <AddBankMethodForm setIsOpen={setIsOpen} />
//   </div>
// </section>
