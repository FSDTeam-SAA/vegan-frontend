import { SupportTicket } from "@/types/professional";
import moment from "moment";

interface Props {
  data?: SupportTicket;
}
const TicketCard = ({ data }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[16px] rounded-[10px] bg-white p-[16px] md:flex-row md:items-center md:justify-between">
      <div>
        <p className="space-x-5">
          <span className="text-base font-medium leading-[23px] text-[#1F2937] md:text-lg md:leading-[26px]">
            {data?.status}
          </span>
          <span className="fotn-medium text-sm leading-[16px] text-[#6B7280] md:text-base md:leading-[19px]">
            {moment(data?.createdAt).format("MMM D, YYYY")}
          </span>
        </p>
        <p className="pt-[8px] text-sm font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
          {data?.message}
        </p>
      </div>
      <div>
        <button
          className={`rounded-[20px] px-[20px] py-[12px] text-sm font-medium leading-[16px] ${
            data?.status === "resolved"
              ? "bg-[#F0FDF4] text-[#16A34A]"
              : data?.status === "pending"
                ? "bg-[#FEFCE8] text-[#EAB308]"
                : "bg-[#F9FAFB] text-[#1F2937]"
          }`}
        >
          {data?.status}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
