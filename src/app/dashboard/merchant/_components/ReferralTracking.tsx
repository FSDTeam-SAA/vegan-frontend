"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ReferResponse } from "@/types/refferel";
import { useMutation, useQuery } from "@tanstack/react-query";
import { EllipsisVertical, Loader2, Share2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "sonner";

const QRCodeShareModal = dynamic(
  () => import("@/components/shared/modals/qr-code-share-modal"),
  { ssr: false },
);

interface Props {
  userId: string;
}

const ReferralTracking = ({ userId }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const { isLoading, data, isError, error } = useQuery<ReferResponse>({
    queryKey: ["my-refer-stats"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/reffer/${userId}`,
      ).then((res) => res.json()),
  });

  const { isPending, mutate: createSlug } = useMutation<ReferResponse>({
    mutationKey: ["refer-slug-generate"],
    mutationFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/reffer`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          creator: userId,
        }),
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
      setUrl(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/onboarding?ref=${data.data.slug}`,
      );
      setOpen(true);
    },
  });

  let content;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 gap-[16px] pb-[56px] md:grid-cols-3">
        <SkeletonWrapper isLoading={isLoading}>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Total Referrals <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              68
            </p>
          </div>
        </SkeletonWrapper>
        <SkeletonWrapper isLoading={isLoading}>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Amount Deducted For Charity{" "}
              <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $100.00
            </p>
          </div>
        </SkeletonWrapper>
        <SkeletonWrapper isLoading={isLoading}>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Commission Paid <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $524.00
            </p>
          </div>
        </SkeletonWrapper>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer
        message={error?.message ?? "Failed to load reffer data"}
      />
    );
  } else if (data) {
    content = (
      <div className="grid grid-cols-1 gap-[16px] pb-[56px] md:grid-cols-3">
        <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
          <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Total Referrals <EllipsisVertical className="h-[24px] w-[24px]" />
          </p>
          <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            {data.data.participants?.length ?? 0}
          </p>
        </div>
        <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
          <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Commision Remain <EllipsisVertical className="h-[24px] w-[24px]" />
          </p>
          <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            ${data?.data?.remain ?? 0}
          </p>
        </div>
        <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
          <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
            Commission Paid <EllipsisVertical className="h-[24px] w-[24px]" />
          </p>
          <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
            ${data.data.paid ?? 0}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[32px] text-lg font-medium leading-[21px] text-[#1F2937] md:pb-[40px] md:text-xl md:leading-[24px]">
          Referral Tracking
        </h4>

        {content}

        <div>
          <h6 className="text-lg font-semibold leading-[21px] text-[#1F2937]">
            Refer People To Vegan Collective
          </h6>
          <p className="pt-[8px] text-[10px] text-base font-normal leading-[19px] text-[#4B5563]">
            Share your unique QR code to invite others to Vegan Collective.
            You’ll earn a share of profits from every transaction they make!
          </p>
          <div className="pb-[78px] pt-[32px] md:pb-0">
            <Button
              size="xl"
              className="flex items-center gap-[8px] px-[16px] py-[14px] text-base font-semibold leading-[19px] text-white"
              onClick={() => createSlug()}
              disabled={isPending}
            >
              <Share2 className="block h-[18px] w-[18px] text-white md:hidden" />{" "}
              Share QR Code {isPending && <Loader2 className="animate-spin" />}
            </Button>
          </div>
        </div>
      </div>

      {url && (
        <QRCodeShareModal
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          qrCodeValue={url}
        />
      )}
    </div>
  );
};

export default ReferralTracking;
