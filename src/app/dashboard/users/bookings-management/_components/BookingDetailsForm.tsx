"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useEffect } from "react";
import { BookingManagementData } from "./BookingManagementData";

const formSchema = z.object({
    professionalName: z.string().min(2, {
      message: "Professional Name must be at least 2 characters.",
    }),
    serviceTitle: z.string().min(4, {
      message: "Service Title must be at least 4 characters.",
    }),
    dateAndTime: z.string().min(1, { message: "Date & Time is required." }),
    duration: z.string().min(4, {
      message: "Duration must be at least 4 characters.",
    }),
    price: z.string().min(1, { message: "Price is required." }),
    location: z.string().min(1, { message: "Location is required." }),
  });
  
const BookingDetailsForm = ({bookingId, setIsOpen}: {
    bookingId : number ;
    setIsOpen : (open : boolean) => void
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      professionalName: "",
      serviceTitle : "",
      dateAndTime : "",
      duration : "",
      price : "",
      location : ""
    },
  });


  useEffect(()=>{
    const booking = BookingManagementData?.find((data) => data?.id === bookingId)
    if(booking) {
        form.reset({
            professionalName : booking.name,
            serviceTitle : booking.serviceTitle,
            dateAndTime : booking.date + " " + booking.time,
            duration : "1 hour",
            price : booking.amout,
            location : "Video Call"
        })
    }
  },[bookingId, form])

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[327px] max-w-[535px] space-y-[32px] md:space-y-[44px]  lg:space-y-[56px] rounded-[16px] bg-white px-[16px] mx-5 md:mx-0 md:px-[24px] lg:px-[32px] py-[24px]"
        >
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium leading-[24px] text-[#1F2937] pt-4">
              Booking Details
            </p>
            <X className="h-[24px] w-[24px] cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* input field  */}
          {/* first  */}
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="professionalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Professional Name
                    </FormLabel>
                    <FormControl>
                      <Input
                      type="text"
                        className="w-full"
                        placeholder="Dr Sarah Smith"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="serviceTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Service Title
                    </FormLabel>
                    <FormControl>
                      <Input
                      type="text"
                        className="w-full"
                        placeholder="Nutrition Consultation"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* second  */}
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="dateAndTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Date & Time
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        className="w-full"
                        placeholder="Feb 20, 2025, 2:30 PM"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Duration
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="1 hour"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {/* third  */}
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$120.00"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="itesm-center flex w-full justify-start text-lg font-medium leading-[26px] text-[#1F2937]">
                      Location
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="w-full"
                        placeholder="Video Call"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-[16px]">
            <Button size="xl" variant="outline" className="text-base font-medium text-[#EF4444] hover:text-[#d62f2f] leading-[19px] py-[14px] px-[16px] rounded-[10px] shadow-none" onClick={() => setIsOpen(false)} >Cancel Booking</Button>
            <Button size="xl" type="submit" className="py-[14px] px-[39px] rounded-[10px] shadow-none">Reschedule</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BookingDetailsForm;
