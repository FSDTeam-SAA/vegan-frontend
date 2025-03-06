"use client";

import { MapPin, Star } from "lucide-react";

import ErrorContainer from "@/components/shared/sections/error-container";
import VeganHeader from "@/components/shared/sections/VeganHeader";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ProfessionalInfoResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface Props {
  professionalId: string;
}
export default function ProfileCard({ professionalId }: Props) {
  const { isLoading, data, isError, error } =
    useQuery<ProfessionalInfoResponse>({
      queryKey: ["professionalInfo", professionalId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo/${professionalId}`,
        ).then((res) => res.json()),
    });

  const { fullName, profilePhoto, designation, address, about } =
    data?.data || {};

  let content;

  if (isLoading || data?.success) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <div className="container mx-auto min-h-[248px] rounded-[20px] bg-white px-0 shadow-none">
          <div className="flex w-full flex-col justify-between p-[24px] md:flex-row">
            <div className="w-full items-center gap-6 md:flex">
              <div className="relative h-[200px] w-full rounded-[16px] md:w-[200px]">
                <Image
                  src={
                    profilePhoto ??
                    "https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
                  }
                  alt={fullName!}
                  className="rounded-[16px] object-cover"
                  fill
                />
              </div>
              <div className="pt-[24px] md:pt-0">
                <h2 className="font-lexend text-[16px] font-normal leading-[20px] text-[#1D3557] md:text-[20px] md:leading-[25px]">
                  {fullName}
                </h2>
                <p className="mt-[4px] font-inter text-[14px] font-normal leading-[16.94px] text-[#4B5563] md:text-[16px] md:leading-[19.36px]">
                  {designation}
                </p>

                <div className="*text-[#4B5563] flex flex-col justify-center gap-2 pt-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {address}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {4.8} (127 Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mr-8 mt-5">
              <ProfileCartButton />
            </div> */}
          </div>
        </div>
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error.message || "Something went wrong"} />
    );
  }
  return (
    <>
      <VeganHeader
        img={
          "https://i.ibb.co.com/7JBkM5Mq/pexels-elly-fairytale-3822688-1.png"
        }
        heading={fullName || ""}
        subheading={about || ""}
      />

      <div className="mt-[56px]">{content}</div>
    </>
  );
}
