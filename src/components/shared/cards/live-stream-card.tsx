import { Button } from "@/components/ui/button";
import { truncateText } from "@/lib/helper";
import { MerchantEvent } from "@/types/merchant";
import { useMutation } from "@tanstack/react-query";
import { CalendarDays, Clock, Loader2 } from "lucide-react";
import moment from "moment";
import { redirect } from "next/navigation";
import { toast } from "sonner";

interface Props {
  data?: MerchantEvent;
  loggedInUserId?: string;
}

const LiveStreamCard = ({ data, loggedInUserId }: Props) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["livestreambuy"],
    mutationFn: (body: any) =>
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

      // handle success
      toast.success(data.message ?? "Booking confirmed", {
        position: "top-right",
        richColors: true,
      });
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleBook = () => {
    if (!loggedInUserId) {
      toast.warning("Unauthorized user");
      redirect("/login");
    }

    if (!data?.userID) {
      toast.warning("professional ID not found", {
        position: "top-right",
        richColors: true,
      });
      return;
    }

    if (!data?._id) {
      toast.warning("Go Live ID Missing", {
        position: "top-right",
        richColors: true,
      });
      return;
    }
    const processData = {
      userID: loggedInUserId,
      amount: data?.price ?? 0,
      professionalID: data?.userID,
      goLiveID: data?._id,
    };

    mutate(processData);
  };
  return (
    <div className="flex h-[360px] w-full flex-col justify-between rounded-[16px] bg-white p-[24px] lg:w-[390px]">
      <div className="h-auto w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
            {data?.eventTitle}
          </h3>
          <div className="rounded-[100px] border-[1px] border-[#F3F4F6] bg-[#F9FAFB] px-[10px] py-[6px] text-[14px] text-[#374151]">
            Webiner
          </div>
        </div>
        <p className="mt-[12px] font-inter text-[16px] font-normal leading-[24px] text-[#374151]">
          {truncateText(data?.description ?? "", 180)}
        </p>
        <div className="mt-[16px] space-y-[16px]">
          <p className="flex items-center gap-x-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px]">
            <CalendarDays className="h-[16.3px] w-[13.5px] text-[#4B5563] md:h-[20px] md:w-[20px]" />{" "}
            {moment(data?.date).format("Do MMMM, YYYY")}
          </p>
          <p className="flex items-center gap-x-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px]">
            <Clock className="h-[16.3px] w-[13.5px] text-[#4B5563] md:h-[20px] md:w-[20px]" />{" "}
            {data?.time}
          </p>
        </div>
      </div>
      <Button
        className="relative flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90"
        onClick={handleBook}
        disabled={isPending}
      >
        Book Now{" "}
        {isPending && (
          <Loader2 className="absolute right-3 h-4 w-4 animate-spin" />
        )}
      </Button>
    </div>
  );
};

export default LiveStreamCard;
