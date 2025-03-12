"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { ProfessionalService } from "@/types/professional";
import { ChevronLeft, ChevronRight, ShoppingBasket, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  open: boolean;
  onOpenChange: VoidFunction;
  trigger: ReactNode;
  data?: ProfessionalService;
}

const ServiceBookModal = ({ open, onOpenChange, trigger, data }: Props) => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const isDisabled = !date || !selectedTime;

  const afterDate = data?.date
    ? new Date(data?.date)
    : new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger className="w-full">{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="w-full max-w-[380px] py-[24px] md:min-w-[600px]">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="max-w-[350px] text-left font-inter text-[18px] font-medium leading-[21.78px] text-[#1F2937]">
              Check & Select Available Date & Time
            </AlertDialogTitle>
            <button onClick={onOpenChange}>
              <X />
            </button>
          </div>
        </AlertDialogHeader>

        <div className="flex w-full flex-col gap-x-5 md:flex-row">
          <Calendar
            mode="single"
            selected={data?.date ? new Date(data.date) : undefined}
            onSelect={setDate}
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
                    variant={selectedTime === slot ? "outline" : "outline"}
                    className={cn(
                      "w-full",
                      selectedTime === slot &&
                        "bg-[#1D3557] text-primary-foreground",
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
        <AlertDialogFooter>
          <Button variant="outline" className="mt-4 h-[48px] md:mt-0">
            <ShoppingBasket /> Add To Cart
          </Button>
          <AlertDialogAction className="h-[48px]" disabled={isDisabled}>
            Proceed To Checkout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ServiceBookModal;
