import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ProfessionalServiceResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { toast } from "sonner";
import { PaymentAddedResponse } from "./live-stream-tab";

const ServiceCard = dynamic(
  () => import("@/components/shared/cards/service-card"),
  {
    ssr: false,
  },
);

interface Props {
  professionalId: string;
  loggedinUserId?: string;
}

export default function ServicesTab({ professionalId, loggedinUserId }: Props) {
  const {
    isLoading: isPaymentInfoLoading,
    data: paymentRes,
    isError: isPaymentInfoError,
    error: paymentError,
  } = useQuery<PaymentAddedResponse>({
    queryKey: ["paymentAdded"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/check-payment-method/${loggedinUserId}`,
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (isPaymentInfoError) {
      toast.error(paymentError.message ?? "Payment info not found.");
    }
  }, [isPaymentInfoError, paymentError]);

  const { isLoading, data, isError, error } =
    useQuery<ProfessionalServiceResponse>({
      queryKey: ["professionalServices"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/allservices/${professionalId}`,
        ).then((res) => res.json()),
    });

  let content;
  const loading = isPaymentInfoLoading || isLoading;

  if (loading) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <SkeletonWrapper isLoading={loading} key={index}>
            <ServiceCard paymentAdded={!!paymentRes?.paymentAdded} />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer
        message={error?.message ?? "Failed to load professionals data"}
      />
    );
  } else if (data && data.data?.length == 0) {
    content = (
      <EmptyContainer message="NO Service published this professional" />
    );
  } else if (data && data.data?.length > 0) {
    content = (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map((item, index) => (
          <ServiceCard
            data={item}
            key={index}
            loggedinUserId={loggedinUserId}
            paymentAdded={!!paymentRes?.paymentAdded}
          />
        ))}
      </div>
    );
  }

  return content;
}
