import { Button } from "@/components/ui/button";
import VeganBadge from "@/components/ui/vegan-badge";
import { OrganizationEvent } from "@/types/organization";
import { CalendarDays, Clock, Users } from "lucide-react";

interface Props {
  data?: OrganizationEvent;
}

const VolunteerCard = ({ data }: Props) => {
  return (
    <div className="flex h-auto w-full max-w-[600px] flex-col justify-between rounded-[16px] bg-white p-[24px]">
      <div className="space-y-[24px]">
        <div>
          <h3 className="font-lexend text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
            {data?.eventTitle}
          </h3>
          <p className="mt-[8px] text-[16px] font-normal leading-[24px] text-[#374151]">
            {data?.description}
          </p>
          <div className="mt-[16px] flex flex-wrap gap-[8px]">
            <VeganBadge title="Basic garden knowledge" />
            <VeganBadge title="Weekend availability" />
          </div>
          <div className="mt-[16px] space-y-[8px]">
            <p className="flex items-center gap-x-1 text-[14px] font-normal text-[#4B5563]">
              <Clock className="h-4 w-4" /> 4 hours/week
            </p>
            <p className="flex items-center gap-x-1 text-[14px] font-normal text-[#4B5563]">
              <CalendarDays className="h-4 w-4" /> 1 Month
            </p>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-x-1 text-[14px] font-normal text-[#4B5563]">
            <Users className="h-4 w-4" /> {data?.capacity} Slots
          </p>
        </div>
      </div>
      <div>
        <Button className="mt-[32px] h-[40px] w-[180px] rounded-[8px] bg-[#1D3557] p-[10px] transition-colors duration-300 hover:bg-[#1D3557]/90 md:h-[48px]">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default VolunteerCard;
