"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactSupportForm from "./ContactSupportForm";
import { SubmittedTicketData } from "./SubmittedTicketData";

interface Props {
  userId: string;
}

const SubmittedTicket = ({ userId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleContactSupport = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pb-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
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
        <div className="border-b border-[#E8DFD6] pt-[40px] md:pt-[48px] lg:pt-[56px]" />

        {/* cart part  */}
        <div>
          <h4 className="pb-[24px] pt-[56px] text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
            Submitted Ticket
          </h4>
          <div>
            {SubmittedTicketData?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="mb-[27px] flex flex-col items-start justify-start gap-[16px] rounded-[10px] bg-white p-[16px] md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p>
                      <span className="text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
                        {data?.name}
                      </span>
                      <span className="fotn-medium text-sm leading-[16px] text-[#6B7280] md:text-base md:leading-[19px]">
                        {data?.date}
                      </span>
                    </p>
                    <p className="pt-[8px] text-sm font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
                      {data?.message}
                    </p>
                  </div>
                  <div>
                    <button
                      className={`rounded-[20px] px-[20px] py-[12px] text-sm font-medium leading-[16px] ${
                        data?.status === "Resolved"
                          ? "bg-[#F0FDF4] text-[#16A34A]"
                          : data?.status === "In Progress"
                            ? "bg-[#FEFCE8] text-[#EAB308]"
                            : "bg-[#F9FAFB] text-[#1F2937]"
                      }`}
                    >
                      {data?.status}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
