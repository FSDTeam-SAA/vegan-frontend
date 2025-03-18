"use client";

import { Button } from "@/components/ui/button";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { useState } from "react";
import { CommunicationCard } from "./communication-card";
import { SetupModal } from "./setup-modal";

interface Props {
  userId: string;
}

export default function CustomerCommunication({ userId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { isLoading, data, isError, error } = useQuery({
  //   queryKey: ["merchantCustomerSupport"],
  //   queryFn: () =>
  //     fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantCustomer/${userId}`,
  //     ).then((res) => res.json()),
  // });

  return (
    <div className="flex-col items-center justify-center md:mt-20">
      <div className="mx-auto max-w-2xl">
        {true ? (
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
              <h2 className="font-inter text-lg font-medium leading-[21.78px]">
                Communication Options
              </h2>
            </div>
            <div className="space-y-4">
              <CommunicationCard />
            </div>
          </div>
        )}

        <SetupModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          userId={userId}
        />
      </div>
    </div>
  );
}
