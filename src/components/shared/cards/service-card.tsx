import ServiceBookModal from "@/app/(website)/professionals/[id]/_components/tabs/services/service-book-modal";
import { truncateText } from "@/lib/helper";
import { ProfessionalService } from "@/types/professional";
import Image from "next/image";
import { useState } from "react";

interface Props {
  data?: ProfessionalService;
}

const ServiceCard = ({ data }: Props) => {
  const [open, setOpen] = useState(true);
  let text = data?.serviceDescription ?? "";

  text = truncateText(text, 190);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="h-auto w-full space-y-[24px] rounded-[20px] bg-white p-[16px] md:h-[508px] md:p-[24px] lg:w-[390px]">
        <div className="relative h-[184px] w-full rounded-[12px] md:h-[160px]">
          <Image
            src={
              data?.serviceImage ??
              "https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png"
            }
            alt="serviceImage"
            fill
            className="rounded-[12px]"
          />
        </div>
        <div className="flex h-[276px] flex-col justify-between">
          <div>
            <div className="flex w-full items-center justify-between">
              <h6 className="font-lexend text-[18px] font-normal text-[#1D3557]">
                {data?.serviceName}
              </h6>
              <p className="rounded-[100px] border-[1px] border-[#F3F4F6] bg-[#F9FAFB] px-[10px] py-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#374151]">
                {data?.paymentType}
              </p>
            </div>
            <p className="mt-[12px] font-inter text-[16px] leading-[24px] text-[#374151]">
              {text}
            </p>
          </div>

          <div>
            <h4 className="mt-2 text-[22px] font-medium leading-[26.63px] text-[#1D3557]">
              ${data?.price}
            </h4>
            <div className="w-full">
              <ServiceBookModal
                open={open}
                onOpenChange={toggleModal}
                trigger={
                  <button className="mt-[12px] flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90">
                    Book Service
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
