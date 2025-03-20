"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import VeganHeader from "@/components/shared/sections/VeganHeader";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { SingleMerchantProfileResponse } from "@/types/merchant";
import { useQuery } from "@tanstack/react-query";
import MerchantHeader from "./merchant-header";
import MerchantsTabs from "./merchant-tabs";

interface Props {
  merchatId: string;
  loggedinUserId?: string;
}

const MerchantProfileContainer = ({ merchatId, loggedinUserId }: Props) => {
  const { isLoading, data, isError, error } =
    useQuery<SingleMerchantProfileResponse>({
      queryKey: ["single-merchant-profile", merchatId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchant/${merchatId}`,
        ).then((res) => res.json()),
    });

  let content;
  if (isLoading || data) {
    content = (
      <div>
        <VeganHeader
          img="https://res.cloudinary.com/dgnustmny/image/upload/v1738732034/pexels-tima-miroshnichenko-6169033_1_huaatq.png"
          heading={data?.data?.businessName ?? ""}
          subheading={data?.data?.shortDescriptionOfStore ?? ""}
        />
        <div className="container">
          <SkeletonWrapper isLoading={isLoading}>
            <MerchantHeader data={data?.data} />
          </SkeletonWrapper>
        </div>
        <MerchantsTabs merchantId={merchatId} loggedinUserId={loggedinUserId} />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="mt-[100px]">
        <ErrorContainer message={error?.message ?? "Something went wrong"} />
      </div>
    );
  }
  return <>{content}</>;
};

export default MerchantProfileContainer;
