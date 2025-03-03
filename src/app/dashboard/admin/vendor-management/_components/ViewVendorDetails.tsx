import ErrorContainer from "@/components/shared/sections/error-container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VendorProfile, VendorSingleProfileResponse } from "@/types/admin";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import {
  VendorManagementData,
  VendorManagementDataType,
} from "./vendor-management-data";

interface Props {
  initialData: VendorProfile;
}

const ViewVendorDetails = ({ initialData }: Props) => {
  const { isLoading, data, isError, error } =
    useQuery<VendorSingleProfileResponse>({
      queryKey: ["vendorSingleProfile"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user-details?id=${initialData?._id}&userID=${initialData?.userID}`,
        ).then((res) => res.json()),
    });

  const filterData = VendorManagementData.find(
    (data: VendorManagementDataType) => data.id === 1,
  );
  let content;
  if (isLoading) {
    content = (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-y-2">
        <Loader2 className="animate-spin" />
        <p className="opacity-80">Retrieving vendor data...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  } else if (data) {
    content = (
      <>
        <h4 className="text-lg font-medium leading-[26px] text-[#1F2937]">
          Vendor Details
        </h4>
        <ScrollArea className="h-[90vh] w-full pr-2">
          <div className="flex items-center gap-[16px] py-[56px]">
            <Image
              src={filterData?.photo ?? ""}
              alt="image"
              width={100}
              height={100}
              className="rounded-[8px]"
            />
            <div>
              <h5 className="text-lg font-medium leading-[26px] text-[#1F2937]">
                {data.data.businessName || data.data.organizationName}
              </h5>
              <p className="pt-2 text-base font-normal leading-[24px] text-[#4B5563]">
                Short description
              </p>
            </div>
          </div>
          <h5 className="text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
            About
          </h5>
          <p className="pt-2 text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
            {data.data.about}
          </p>
          {/* experience && certificates part  */}
          {(data.data.experience || data.data.certifications) && (
            <div className="flex flex-col items-start justify-between gap-y-[50px] pt-[56px]">
              {data.data.experience && (
                <div>
                  <h5 className="pb-2 text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
                    Experience
                  </h5>
                  <ul className="list-disc pl-6">
                    {data.data.experience?.map((exp, i) => (
                      <li
                        className="text-[12px] text-base font-normal leading-[20px] text-[#4B5563] md:leading-[24px]"
                        key={i}
                      >
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.data.certifications && (
                <div>
                  <h5 className="pb-2 text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
                    Certifications
                  </h5>
                  <ul className="list-disc pl-6">
                    {data.data.certifications?.map((cert, i) => (
                      <li
                        className="text-[12px] text-base font-normal leading-[20px] text-[#4B5563] md:leading-[24px]"
                        key={i}
                      >
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Submitted Documents part  */}
          <div className="pt-[56px]">
            <h5 className="pb-4 text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
              Submitted Documents
            </h5>
            {data.data.submittedDocuments.governmentIssuedID && (
              <div className="mb-4 flex items-center justify-between rounded-[8px] border border-[#F3F4F6] bg-[#F9FAFB] p-2">
                <span className="text-sm font-normal leading-[20px] text-[#1F2937]">
                  Government ID
                </span>
                <a
                  href={data?.data?.submittedDocuments?.governmentIssuedID}
                  target="_blank"
                  className="cursor-pointer text-sm font-medium leading-[20px] text-[#1D3557] hover:underline"
                >
                  View Document
                </a>
              </div>
            )}
            {data?.data?.submittedDocuments?.professionalCertification && (
              <div className="flex items-center justify-between rounded-[8px] border border-[#F3F4F6] bg-[#F9FAFB] p-2">
                <span className="text-sm font-normal leading-[20px] text-[#1F2937]">
                  Professional CertifIcate
                </span>
                <a
                  href={
                    data?.data?.submittedDocuments?.professionalCertification
                  }
                  target="_blank"
                  className="cursor-pointer text-sm font-medium leading-[20px] text-[#1D3557] hover:underline"
                >
                  View Document
                </a>
              </div>
            )}
          </div>

          {/* Contact Info part  */}
          <div className="mt-[56px]">
            <h5 className="leadng-[23px] pb-4 text-base font-medium text-[#1F2937] md:text-lg md:leading-[26px]">
              Contact Info
            </h5>
            {data?.data?.contactInfo?.email && (
              <p className="pb-4 text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                Email :{" "}
                <span className="underline">
                  {data?.data?.contactInfo?.email}
                </span>
              </p>
            )}
            {data?.data?.contactInfo?.phoneNumber && (
              <p className="text-sm font-normal leading-[24px] text-[#4B5563] md:text-base">
                Phone :{" "}
                <span className="underline">
                  {data?.data?.contactInfo?.phoneNumber}
                </span>
              </p>
            )}
          </div>
        </ScrollArea>
      </>
    );
  }

  return content;
};

export default ViewVendorDetails;
