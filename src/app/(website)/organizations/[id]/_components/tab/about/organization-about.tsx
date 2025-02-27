import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { SingleOrganizationProfileResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";

interface Props {
  organizationId: string;
}
const OrganizationAbout = ({ organizationId }: Props) => {
  const { isLoading, data, isError, error } =
    useQuery<SingleOrganizationProfileResponse>({
      queryKey: ["single-organization-profile", organizationId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organization/${organizationId}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.data) {
    content = (
      <SkeletonWrapper isLoading={isLoading}>
        <div className="space-y-[61px] rounded-[10px] bg-white p-[24px]">
          <div className="space-y-[16px]">
            <h3 className="font-inter text-[20px] font-semibold text-[#1F2937]">
              {data?.data?.organizationName}
            </h3>
            <p className="max-w-[834px] font-inter text-[16px] leading-[24px] text-[#374151]">
              {data?.data?.shortDescriptionOfOrganization}
            </p>
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

export default OrganizationAbout;
