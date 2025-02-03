import { truncateText } from "@/lib/helper";
import Image from "next/image";

const ServiceCard = () => {
  let text =
    " Join Sarah Green, a certified yoga instructor offering personalized yoga classes for all levels Enhance your flexibility, strength, and mindfulness in a supportive and relaxing environment.";

  text = truncateText(text, 190);
  return (
    <div className="bg-white rounded-[20px] p-[16px] md:p-[24px] w-full md:w-[390px] h-auto md:h-[508px] space-y-[24px]">
      <div className="relative w-full h-[184px] md:h-[160px] rounded-[12px]">
        <Image
          src="https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png"
          alt="serviceImage"
          fill
          className="rounded-[12px]"
        />
      </div>
      <div className="h-[276px] flex flex-col justify-between">
        <div>
          <div className="w-full flex justify-between items-center">
            <h6 className="text-[#1D3557] text-[18px] font-normal font-lexend">
              Yoga Class
            </h6>
            <p className="text-[#374151] text-[14px] font-normal font-inter leading-[16.94px] border-[1px] bg-[#F9FAFB] border-[#F3F4F6] py-[6px] px-[10px] rounded-[100px]">
              One-Time Payment
            </p>
          </div>
          <p className="text-[#374151] text-[16px] font-inter leading-[24px] mt-[12px] ">
            {text}
          </p>
        </div>

        <div>
          <h4 className="text-[#1D3557] font-medium text-[22px] leading-[26.63px]">
            $19.99
          </h4>
          <button className="mt-[24px] w-full bg-[#1D3557] hover:bg-[#1D3557]/90 transition-colors duration-300 h-[48px] rounded-[8px] flex justify-center items-center text-white leading-[19.36px] text-[16px] font-medium">
            Book Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
