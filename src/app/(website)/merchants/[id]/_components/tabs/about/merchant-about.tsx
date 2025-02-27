import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { SingleMerchantProfileResponse } from "@/types/merchant";
import { useQuery } from "@tanstack/react-query";

interface Props {
  merchatId: string;
}
const MerchantAbout = ({ merchatId }: Props) => {
  const { isLoading, data, isError, error } =
    useQuery<SingleMerchantProfileResponse>({
      queryKey: ["single-merchant-profile", merchatId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchant/${merchatId}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.data) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <div className="space-y-[61px] rounded-[10px] bg-white p-[24px]">
          <div className="space-y-[16px]">
            <h3 className="font-inter text-[20px] font-semibold text-[#1F2937]">
              {data?.data?.businessName}
            </h3>
            <p className="max-w-[834px] font-inter text-[16px] leading-[24px] text-[#374151]">
              {data?.data?.shortDescriptionOfStore}
            </p>
          </div>

          <div>
            <h5 className="font-inter text-[18px] font-semibold leading-[21.78px] text-[#1F2937]">
              Business Hours
            </h5>

            <div className="mt-[24px] space-y-[36px]">
              {data?.data?.businessHours.map((item) => (
                <div
                  key={item._id}
                  className="flex w-full items-center justify-between font-inter font-medium leading-[19.36px] text-[#334155] md:w-[456px]"
                >
                  <p>{item.Day}</p>
                  <p>{item.Time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SkeletonWrapper>
    );
  } else if (isError) {
    content = (
      <div>
        <ErrorContainer message={error?.message ?? "Something went wrong"} />
      </div>
    );
  }
  return content;
};

export default MerchantAbout;
