import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { ProfessionalInfoResponse } from "@/types/professional";
import { useQuery } from "@tanstack/react-query";

interface Props {
  professionalId: string;
}

export default function ExperienceTab({ professionalId }: Props) {
  const { isLoading, data, isError, error } =
    useQuery<ProfessionalInfoResponse>({
      queryKey: ["professionalInfo", professionalId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/ProfessionalInfo/${professionalId}`,
        ).then((res) => res.json()),
    });

  let content;
  if (data || isLoading) {
    content = (
      <div className="max-w-[604px]">
        <h1 className="mb-6 font-lexend text-lg font-medium leading-[22px] text-[#1D3557] md:leading-[25px]">
          Education & Credentials
        </h1>

        <div className="space-y-6">
          <SkeletonWrapper isLoading={isLoading}>
            {data && data.data.experience.length > 0 && (
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 font-inter text-lg font-medium leading-[22px] text-[#374151] md:leading-[30px]">
                  Education
                </h2>
                <ul className="space-y-3 text-base *:my-2 *:ml-6 *:list-disc *:font-inter *:text-lg *:font-normal *:leading-[28px] *:text-[#374151] md:*:text-lg md:*:leading-[30px]">
                  {data.data.experience.map((exp) => (
                    <li key={exp}>{exp}</li>
                  ))}
                </ul>
              </div>
            )}
          </SkeletonWrapper>

          <SkeletonWrapper isLoading={isLoading}>
            {data && data.data.certifications.length > 0 && (
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h2 className="mb-4 font-inter text-lg font-medium leading-[22px] text-[#374151] md:leading-[30px]">
                  Certifications
                </h2>
                <ul className="space-y-3 text-base *:my-2 *:ml-6 *:list-disc *:font-inter *:text-lg *:font-normal *:leading-[28px] *:text-[#374151] md:*:text-lg md:*:leading-[30px]">
                  {data.data.certifications.map((exp) => (
                    <li key={exp}>{exp}</li>
                  ))}
                </ul>
              </div>
            )}
          </SkeletonWrapper>
        </div>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error.message || "Something went wrong"} />
    );
  }
  return content;
}
