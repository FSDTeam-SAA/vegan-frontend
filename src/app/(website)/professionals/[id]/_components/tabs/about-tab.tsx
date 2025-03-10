import ErrorContainer from "@/components/shared/sections/error-container";
import { Card, CardContent } from "@/components/ui/card";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ProfessionalInfoResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";

interface Props {
  professionalId: string;
}

export default function AboutTab({ professionalId }: Props) {
  const { isLoading, data, isError, error } =
    useQuery<ProfessionalInfoResponse>({
      queryKey: ["professionalInfo", professionalId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo/${professionalId}`,
        ).then((res) => res.json()),
    });

  let content;
  if (isLoading || data) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <div className="max-w-[892px]">
          <Card className="mb-10 mt-[55px] border-none shadow-none">
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium leading-[25px] text-[#1D3557] md:text-xl">
                About Me
              </h3>
              <p className="text-[16px] font-normal leading-[28px] text-[#374151] md:text-[18px] md:leading-[30px]">
                {data?.data?.about}
              </p>
            </CardContent>
          </Card>
        </div>
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error.message || "something went wrong"} />
    );
  }
  return content;
}
