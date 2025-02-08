import ServiceBookModal from "@/app/(website)/professionals/[id]/_components/tabs/services/service-book-modal";
import { truncateText } from "@/lib/helper";
import Image from "next/image";
import { useState } from "react";

const ServiceCard = () => {
  const [open, setOpen] = useState(false);
  let text =
    " Join Sarah Green, a certified yoga instructor offering personalized yoga classes for all levels Enhance your flexibility, strength, and mindfulness in a supportive and relaxing environment.";

  text = truncateText(text, 190);

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="h-auto w-full space-y-[24px] rounded-[20px] bg-white p-[16px] md:h-[508px] md:w-[390px] md:p-[24px]">
        <div className="relative h-[184px] w-full rounded-[12px] md:h-[160px]">
          <Image
            src="https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png"
            alt="serviceImage"
            fill
            className="rounded-[12px]"
          />
        </div>
        <div className="flex h-[276px] flex-col justify-between">
          <div>
            <div className="flex w-full items-center justify-between">
              <h6 className="font-lexend text-[18px] font-normal text-[#1D3557]">
                Yoga Class
              </h6>
              <p className="rounded-[100px] border-[1px] border-[#F3F4F6] bg-[#F9FAFB] px-[10px] py-[6px] font-inter text-[14px] font-normal leading-[16.94px] text-[#374151]">
                One-Time Payment
              </p>
            </div>
            <p className="mt-[12px] font-inter text-[16px] leading-[24px] text-[#374151]">
              {text}
            </p>
          </div>

          <div>
            <h4 className="text-[22px] font-medium leading-[26.63px] text-[#1D3557]">
              $19.99
            </h4>
            <div className="w-full">
              <ServiceBookModal
                open={open}
                onOpenChange={toggleModal}
                trigger={
                  <button className="mt-[24px] flex h-[48px] w-full items-center justify-center rounded-[8px] bg-[#1D3557] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90">
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
