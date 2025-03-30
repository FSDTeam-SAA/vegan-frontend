import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import VeganModal from "@/components/ui/vegan-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoreVertical } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Booking } from "./delivery-management-table-container";
import UpdateStatusModal from "./update-status-modal";

interface DeliveryManagementActionProps {
  data: Booking;
}
const DeliveryManagementAction = ({ data }: DeliveryManagementActionProps) => {
  const [tOpen, setTOpen] = useState(false);
  const [uOpen, setUOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open actions menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {data.trackingNumber && (
            <DropdownMenuItem
              onClick={() => setTOpen(true)}
              className="cursor-pointer"
            >
              Add Tracking
            </DropdownMenuItem>
          )}
          <DropdownMenuItem onClick={() => setUOpen(true)}>
            Update Status
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TrackingModal open={tOpen} setOpen={setTOpen} />
      <UpdateStatusModal open={uOpen} setOpen={setUOpen} data={data} />
    </>
  );
};

export default DeliveryManagementAction;

interface TrackingModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const formSchema = z.object({
  trackingNumber: z.string().min(1),
});

const TrackingModal = ({ open, setOpen }: TrackingModalProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <VeganModal
      open={open}
      onOpenChange={(p) => setOpen(p)}
      className="md:max-w-[364px]"
    >
      <h1 className="text-left font-inter text-[20px] font-medium text-[#1F2937]">
        Add Tracking Number
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mr-auto space-y-5 pt-10"
        >
          <FormField
            control={form.control}
            name="trackingNumber"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-start space-y-2">
                <FormLabel className="text-left">Tracking Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter tracking number"
                    className="mt-3"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </VeganModal>
  );
};
