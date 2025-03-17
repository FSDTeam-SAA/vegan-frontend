import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import { ServiceBooking } from "@/types/professional";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

interface Props {
  data: ServiceBooking;
}

const ClientManagementServiceBookingAction = ({}: Props) => {
  const [open, setOpen] = useState(false);
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
        loading={false}
        onConfirm={() => {}}
        message="This action cannot be undone, and you may lose your reservation. If applicable, cancellation fees may apply."
        title="Are you sure you want to cancel your event booking?"
      />
    </div>
  );
};

export default ClientManagementServiceBookingAction;
