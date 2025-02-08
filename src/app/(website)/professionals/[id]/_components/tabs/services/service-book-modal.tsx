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
import { ChevronLeft, ChevronRight, ShoppingBasket, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface TimeSlot {
  time: string;
  available: boolean;
}
const timeSlots: TimeSlot[] = [
  { time: "8:00am", available: true },
  { time: "10:00am", available: true },
  { time: "12:00pm", available: true },
  { time: "2:00pm", available: true },
  { time: "3:00pm", available: true },
  { time: "4:00pm", available: true },
];

interface Props {
  open: boolean;
  onOpenChange: VoidFunction;
  trigger: ReactNode;
}

const ServiceBookModal = ({ open, onOpenChange, trigger }: Props) => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const isDisabled = !date || !selectedTime;
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger className="w-full">{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="py-[24px]">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle className="max-w-[350px] font-inter text-[18px] font-medium leading-[21.78px] text-[#1F2937]">
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
            selected={date}
            onSelect={setDate}
            className="mx-auto flex-1"
            components={{
              IconLeft: () => <ChevronLeft className="h-4 w-4" />,
              IconRight: () => <ChevronRight className="h-4 w-4" />,
            }}
          />
          <div className="flex-1">
            <div className="mt-4">
              <h3 className="mb-3 text-sm font-medium">Available Time Slot</h3>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={selectedTime === slot.time ? "outline" : "outline"}
                    className={cn(
                      "w-full",
                      selectedTime === slot.time &&
                        "bg-[#1D3557] text-primary-foreground",
                    )}
                    onClick={() => setSelectedTime(slot.time)}
                  >
                    {slot.time}
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
