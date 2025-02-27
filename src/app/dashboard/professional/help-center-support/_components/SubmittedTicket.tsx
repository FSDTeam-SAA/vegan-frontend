"use client";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useState } from "react";
const ContactSupportForm = dynamic(() => import("./ContactSupportForm"));

interface Props {
  userId: string;
}

const SubmittedTicket = ({ userId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleContactSupport = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <h4 className="pb-[40px] text-lg font-medium leading-[21px] text-[#1F2937] md:pb-[48px] md:text-xl md:leading-[24px] lg:pb-[56px]">
          Support
        </h4>

        <h6 className="text-base font-medium leading-[19px] text-[#4B5563] md:text-lg md:leading-[21px]">
          Need Help?
        </h6>
        <p className="pb-[32px] pt-[8px] text-sm font-normal leading-[24px] text-[#4B5563] md:pb-[40px] md:text-base">
          Our professional support team is here to assist you with any issues
          you may have.
        </p>
        <Button
          onClick={handleContactSupport}
          size="xl"
          className="text-base font-medium leading-[19px] text-white"
        >
          Contact Support
        </Button>

        {/* modal part  */}
        {isOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            {/* Modal content */}
            <div className="relative z-10">
              <ContactSupportForm setIsOpen={setIsOpen} userId={userId} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SubmittedTicket;
