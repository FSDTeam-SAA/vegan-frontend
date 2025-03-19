"use client";

import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2, MessageCircleQuestion, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { CommunicationCard } from "./communication-card";
import { SetupModal } from "./setup-modal";

interface Props {
  userId: string;
}

export type Communication = {
  _id: string;
  merchantID: string;
  email: string;
  whatsApp: string;
  messenger: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type CustomerResponse = {
  success: boolean;
  message: string;
  data: Communication;
};

export default function CustomerCommunication({ userId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoading, data, isError, error } = useQuery<CustomerResponse>({
    queryKey: ["merchantCustomerCommunication"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantCustomer/${userId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="mx-auto flex h-[400ox] w-full max-w-2xl flex-col items-center justify-center gap-y-3 md:mt-20">
        <Loader2 className="animate-spin" />
        <p>Please wait...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer
        message={error?.message ?? "Failed to load communication data"}
      />
    );
  } else if (data) {
    content = (
      <div className="flex-col items-center justify-center md:mt-20">
        <div className="mx-auto max-w-2xl">
          {!data.success ? (
            <div className="rounded-lg p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-950">
                  <MessageCircleQuestion className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="mb-2 font-inter text-lg font-medium leading-[21.78px] md:text-xl md:leading-[29px]">
                No Communication Options Set Up Yet
              </h2>
              <p className="mb-6 font-inter text-base font-normal leading-[26px] text-[#4B5563]">
                Make it easy for your customers to reach you by adding email,
                WhatsApp, or Messenger links.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1D3557] px-[16px] py-[14.5px] font-inter text-base leading-[19.36px] text-white md:mt-10"
              >
                <Plus className="h-4 w-4" />
                Set Up Communication
              </Button>
            </div>
          ) : (
            <div className="rounded-lg bg-white p-6">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h2 className="font-inter text-lg font-medium leading-[21.78px]">
                    Communication Options
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsModalOpen(true)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only font-inter text-base font-medium leading-[23.2px] text-[#1F2937]">
                      Edit
                    </span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <CommunicationCard type="email" value={data.data.email} />
                <CommunicationCard type="whatsapp" value={data.data.whatsApp} />
                <CommunicationCard
                  type="messenger"
                  value={data.data.messenger}
                />
              </div>
            </div>
          )}

          <SetupModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
            }}
            userId={userId}
            initialData={data.data}
          />
        </div>
      </div>
    );
  }

  return content;
}
