"use client";

import AlertModal from "@/components/ui/alert-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MerchantEvent } from "@/types/merchant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Calendar1Icon,
  ChevronDown,
  ChevronUp,
  Clock,
  Pencil,
  Trash2,
} from "lucide-react";
import moment from "moment";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import EventDialog from "./merchant-event-dialog";

interface Props {
  data?: MerchantEvent;
}

export function EventCard({ data }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const session = useSession();

  const queryClient = useQueryClient();

  const isAuthenticationLoading = session.status === "loading";

  if (session.status === "unauthenticated") redirect("/");

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationKey: ["merchant-event-delete"],
    mutationFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantGoLive/${data?._id}`,
        {
          method: "DELETE",
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

      // Handle success
      setDeleteModalOpen(false);
      toast.success(data.message, {
        position: "top-right",
        richColors: true,
      });
      queryClient.invalidateQueries({ queryKey: ["eventsbyMerchant"] });
    },
  });

  return (
    <>
      <Card className="bg-tran mb-4 border-[#E5E7EB] shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-white pb-0">
          <Badge
            variant="secondary"
            className="h-6 font-inter text-sm font-normal leading-[16.94px] text-[#1E2939]"
          >
            {data?.eventType}
          </Badge>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              disabled={isAuthenticationLoading}
              onClick={() => setIsEditOpen(true)}
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:bg-rose-100 hover:text-red-500"
              onClick={() => setDeleteModalOpen(true)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              <span className="sr-only">
                {isExpanded ? "Collapse" : "Expand"}
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="bg-[#F9FAFB] p-0">
          <div className="space-y-4">
            <div className="space-y-6 bg-white p-6">
              <div className="">
                <h2 className="pb-2 font-inter text-lg font-medium leading-[26px] text-[#1F2937]">
                  {data?.eventTitle}
                </h2>
                <p className="font-inter text-base leading-[23px] text-[#364153]">
                  {data?.description}
                </p>
              </div>
              <div className="flex items-center gap-6 space-x-4 *:text-lg *:leading-[26px] *:text-[#6A7282]">
                <div className="flex items-center gap-2">
                  <Calendar1Icon className="h-4 w-4" />
                  <span>{moment(data?.date).format("Do MMMM, YYYY")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{data?.time}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                {Number(data?.price) !== 0 && (
                  <span className="font-inter text-xl font-medium leading-[29px] text-[#1F2937]">
                    ${data?.price}
                  </span>
                )}
                <Button className="ml-4 bg-[#1D3557] px-[30px] py-[15px] text-center font-inter text-base !font-medium leading-[19.36px] text-white">
                  Join Event
                </Button>
              </div>
            </div>

            {/* Event Metrics Section */}
            {isExpanded && (
              <div className="m-6 space-y-4 pb-6">
                <h3 className="mb-2 bg-transparent text-lg font-semibold">
                  Event Metrics
                </h3>

                <div className="space-y-3 bg-white p-4">
                  <div>
                    <div className="text-sm text-gray-500">
                      Number Of Registered Participants
                    </div>
                    <div className="text-lg font-medium">125</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      Total Amount Paid by Participants
                    </div>
                    <div className="text-lg font-medium">$5</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {isEditOpen && (
        <EventDialog
          open={isEditOpen}
          onOpenChange={setIsEditOpen}
          initialData={data}
          userId={session.data?.user?.userId ?? ""}
        />
      )}

      <AlertModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={deleteMutate}
        loading={deletePending}
      />
    </>
  );
}
