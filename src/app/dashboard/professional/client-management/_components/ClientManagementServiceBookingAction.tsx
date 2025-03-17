import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { ServiceBooking } from "@/types/professional";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { EllipsisVertical } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  data: ServiceBooking;
}

const ClientManagementServiceBookingAction = ({ data }: Props) => {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: ["status-change"],
    mutationFn: (userId: string) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/update-status`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userID: userId,
            professionalServicesId: data._id,
          }),
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const session = useSession();
  if (!session.data) return;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <EllipsisVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="h-auto w-[110px] rounded-lg bg-white shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
        >
          <DropdownMenuItem
            className="cursor-default p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setOpen(true)}
          >
            Cancle
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={isPending}
        onConfirm={() => mutate(session.data.user.userId)}
        message="This action cannot be undone, and you may lose your reservation. If applicable, cancellation fees may apply."
        title="Are you sure you want to cancel your event booking?"
      />
    </div>
  );
};

export default ClientManagementServiceBookingAction;
