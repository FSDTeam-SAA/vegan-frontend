import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";

interface Props {
  userId: string;
  setApproveModalOpen: (open: boolean) => void;
  onComplete: () => void;
}

type Body = {
  userId: string;
  status: string;
  message: string;
};

const ApproveApplication = ({
  setApproveModalOpen,
  userId,
  onComplete,
}: Props) => {
  const queryClient = useQueryClient();
  const { mutate: approveApplication, isPending } = useMutation({
    mutationKey: ["approveApplication"],
    mutationFn: (body: Body) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/update-verification-status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
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
      queryClient.invalidateQueries({
        queryKey: ["vendorSingleProfile", "vendorManagement"],
      });
      setApproveModalOpen(false);
      toast.success("Application approved successfully", {
        position: "top-right",
        richColors: true,
      });
      onComplete();
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleApprove = () => {
    approveApplication({
      userId,
      status: "approved",
      message: "Application approved",
    });
  };
  return (
    <div className="h-[221px] w-[327px] rounded-[16px] bg-white px-6 py-8 md:h-[239px] md:w-[490px]">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[24px] lg:text-xl">
          Approve Application
        </h4>
        <X
          className="h-6 w-6 cursor-pointer text-[#1F2937]"
          onClick={() => setApproveModalOpen(false)}
        />
      </div>
      <p className="pt-2 text-sm font-normal leading-[21px] text-[#4B5563] md:pt-3 md:text-base md:leading-[23px] lg:pt-4">
        Are you sure you want to approve this vendor application?
      </p>
      <div className="flex items-center justify-end gap-4 pt-10 md:pt-[52px] lg:pt-[64px]">
        <Button
          onClick={() => setApproveModalOpen(false)}
          size="xl"
          variant="outline"
          className="px-[23px] py-[14px] text-base font-medium leading-[19px] text-[#6B7280] shadow-none md:px-[35px] lg:px-[48px]"
          disabled={isPending}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          size="xl"
          className="px-[44px] py-[14px] text-base font-medium leading-[19px] text-white shadow-none"
          disabled={isPending || !userId}
          onClick={handleApprove}
        >
          Confirm {isPending && <Loader2 className="animate-spin" />}
        </Button>
      </div>
    </div>
  );
};

export default ApproveApplication;
