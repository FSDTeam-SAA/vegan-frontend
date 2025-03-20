"use client";
import PaymentForm from "@/components/shared/features/payment/payment-form";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import VeganModal from "@/components/ui/vegan-modal";
import { cn } from "@/lib/utils";
import { ProfessionalService } from "@/types/professional";
import { useMutation } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: VoidFunction;
  data?: ProfessionalService;
  loggedinuserId: string;
  paymentAdded: boolean;
}

interface PurchaseBody {
  userID: string;
  amount: number;
  professionalID: string;
  serviceBookingTime: string;
  professionalServicesId: string;
}

const ServiceBookModal = ({
  open,
  onOpenChange,
  data,
  loggedinuserId,
  paymentAdded,
}: Props) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // confirm booking
  const { mutate: confirmBooking, isPending: isConfirming } = useMutation({
    mutationKey: ["confirm-booking"],
    mutationFn: (body: { userID: string; serviceID: string }) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/confirm-booking`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      toast.success("Booking confirmed successfully 🎉", {
        position: "top-right",
        richColors: true,
      });
      setSelectedTime("");
      onOpenChange();
    },
  });

  const { mutate: purchase, isPending } = useMutation({
    mutationKey: ["service_purchase"],
    mutationFn: (body: PurchaseBody) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/purchase`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      if (loggedinuserId) {
        toast.warning("user is not found for confirm your booking.", {
          richColors: true,
        });
        return;
      }

      const confirmBookingBody = {
        serviceID: data.bookedService,
        userID: loggedinuserId,
      };

      // handle success confirming booking
      confirmBooking(confirmBookingBody);
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const isPaymentAdded = paymentAdded;

  const isDisabled = !selectedTime || isPending || isConfirming;

  const afterDate = data?.date
    ? new Date(data?.date)
    : new Date(new Date().setFullYear(new Date().getFullYear() + 1));

  const bookServiceBeforePaymentMethodAdd = () => {
    if (
      loggedinuserId ||
      !data?.price ||
      !data?.userID ||
      !selectedTime ||
      !data._id
    ) {
      toast.warning("All field are required", {
        position: "top-right",
        richColors: true,
      });
      return;
    }
    // make purchase
    const prceedData = {
      userID: loggedinuserId,
      amount: data.price,
      professionalID: data.userID,
      serviceBookingTime: selectedTime,
      professionalServicesId: data._id,
    };
    purchase(prceedData);
  };

  const handleProceedToCheckout = () => {
    if (!isPaymentAdded) {
      setIsPaymentModalOpen(true);
      onOpenChange();
      return;
    }

    if (
      loggedinuserId ||
      !data?.price ||
      !data?.userID ||
      !selectedTime ||
      !data._id
    ) {
      toast.warning("All field are required", {
        position: "top-right",
        richColors: true,
      });
      return;
    }

    // make purchase
    const prceedData = {
      userID: loggedinuserId,
      amount: data.price,
      professionalID: data.userID,
      serviceBookingTime: selectedTime,
      professionalServicesId: data._id,
    };
    purchase(prceedData);
  };
  return (
    <>
      <VeganModal
        open={open}
        onOpenChange={onOpenChange}
        className="w-full max-w-[380px] py-[24px] md:min-w-[600px]"
      >
        <p className="max-w-[350px] text-left font-inter text-[18px] font-medium leading-[21.78px] text-[#1F2937]">
          Check & Select Available Date & Time
        </p>

        <div className="flex w-full flex-col gap-x-5 md:flex-row">
          <Calendar
            mode="single"
            selected={data?.date ? new Date(data.date) : undefined}
            className=""
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
            disabled={{
              before: afterDate,
              after: afterDate,
            }}
          />
          <div className="flex-1">
            <div className="mt-4">
              <h3 className="mb-3 text-sm font-medium">Available Time Slot</h3>
              <div className="grid gap-2">
                {data?.timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={"outline"}
                    className={cn(
                      "w-full",
                      selectedTime === slot &&
                        "bg-[#1D3557] text-primary-foreground hover:bg-[#1D3557] hover:text-white",
                    )}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            className="h-[40px]"
            disabled={isDisabled}
            onClick={handleProceedToCheckout}
          >
            {isPending
              ? "Payment Processing..."
              : isConfirming
                ? "Wait a second"
                : "Proceed to checkout"}
          </Button>
        </div>
      </VeganModal>

      <VeganModal
        open={isPaymentModalOpen}
        onOpenChange={setIsPaymentModalOpen}
        className=""
      >
        <PaymentForm onSubmit={bookServiceBeforePaymentMethodAdd} />
      </VeganModal>
    </>
  );
};

export default ServiceBookModal;
