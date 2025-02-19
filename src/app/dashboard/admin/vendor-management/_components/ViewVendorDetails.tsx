import React from "react";
import {
  VendorManagementData,
  VendorManagementDataType,
} from "./vendor-management-data";
import Image from "next/image";

const ViewVendorDetails = ({ id }: { id: number }) => {
  const filterData = VendorManagementData.find(
    (data: VendorManagementDataType) => data.id === id,
  );
  return (
    <div>
      <div>
        <h4 className="text-lg font-medium text-[#1F2937] leading-[26px]">Vendor Details</h4>
        <div className="flex items-center gap-[16px] py-[56px]">
          <Image src={filterData?.photo ?? ''} alt="image" width={100} height={100} className="rounded-[8px]"/>
          <div>
            <h5 className="text-lg font-medium text-[#1F2937] leading-[26px]">{filterData?.businessName}</h5>
            <p className="text-base font-normal text-[#4B5563] leading-[24px] pt-2">{filterData?.description}</p>
          </div>
        </div>
        <h5 className="text-base md:text-lg font-medium text-[#1F2937] leading-[23px] md:leading-[26px]">About</h5>
        <p className="text-sm md:text-base font-normal text-[#4B5563] leading-[24px] pt-2">{filterData?.about}</p>
        {/* experience && certificates part  */}
        <div className="flex items-center justify-between pt-[56px]">
          <div>
            <h5 className="text-base md:text-lg font-medium text-[#1F2937] leading-[23px] md:leading-[26px] pb-2">Experience</h5>
            <p className="text-base font-normal text-[#4B5563] leading-[24px]">{filterData?.experiences}</p>
          </div>
          <div>
            <h5 className="text-base md:text-lg font-medium text-[#1F2937] leading-[23px] md:leading-[26px] pb-2">Certifications</h5>
            <ul className="list-disc pl-6">
              <li className="text-base font-normal text-[#4B5563] leading-[20px] md:leading-[24px]">{filterData?.certificates}</li>
            </ul>
          </div>
        </div>

        {/* Submitted Documents part  */}
        <div className="pt-[56px]">
            <h5 className="text-base md:text-lg font-medium text-[#1F2937] leading-[23px] md:leading-[26px] pb-4">Submitted Documents</h5>
            <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#F3F4F6] rounded-[8px] p-2 mb-4">
                <span className="text-sm font-normal text-[#1F2937] leading-[20px]">Government ID</span>
                <span className="text-sm font-medium text-[#1D3557] leading-[20px] cursor-pointer">View Document</span>
            </div>
            <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#F3F4F6] rounded-[8px] p-2">
                <span className="text-sm font-normal text-[#1F2937] leading-[20px]">Food Safety CertifIcate</span>
                <span className="text-sm font-medium text-[#1D3557] leading-[20px] cursor-pointer">View Document</span>
            </div>
        </div>

        {/* Contact Info part  */}
        <div className="mt-[56px]">
            <h5 className="text-base md:text-lg font-medium text-[#1F2937] leadng-[23px] md:leading-[26px] pb-4">Contact Info</h5>
            <p className="text-sm md:text-base font-normal text-[#4B5563] leading-[24px] pb-4">Email : <span className="underline">{filterData?.email}</span></p>
            <p className="text-sm md:text-base font-normal text-[#4B5563] leading-[24px]">Phone : <span className="underline">{filterData?.phone}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ViewVendorDetails;
