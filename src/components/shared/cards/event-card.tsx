import { Button } from "@/components/ui/button";
import VeganBadge from "@/components/ui/vegan-badge";
import { OrganizationEvent } from "@/types/organization";
import { CalendarDays, Users } from "lucide-react";
import moment from "moment";

interface Props {
  data?: OrganizationEvent;
}

const EventCard = ({ data }: Props) => {
  return (
    <div className="max-w-[552px] space-y-[30px] rounded-[16px] bg-white p-[24px]">
      {/* <div className="relative h-[185px] w-full rounded-[12px]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738815951/pexels-ron-lach-9034660_1_1_kgtnea.png"
          alt="New Community Garden Project Launches"
          fill
          className="rounded-[12px]"
        />
      </div> */}
      <div>
        <div>
          <div className="flex flex-col-reverse items-start justify-between gap-y-[8px] md:flex-row">
            <h3 className="font-lexend text-[18px] font-normal leading-[22.5px] text-[#1D3557]">
              {data?.eventTitle}
            </h3>
            <VeganBadge title={data?.eventType ?? ""} />
          </div>
          <p className="mt-[8px] max-w-[410px] font-inter text-[16px] font-normal leading-[24px] text-[#374151]">
            {data?.description}
          </p>
          <p className="mt-[16px] flex items-center gap-x-[4px] font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
            <CalendarDays className="h-4 w-4 text-[18px] text-[#4B5563]" /> Sat,
            {moment(data?.date).format("MMM D .")} {data?.time}
          </p>
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-start">
            <p className="mt-[16px] flex items-center gap-x-[4px] font-inter text-[16px] font-normal leading-[19.36px] text-[#4B5563]">
              <Users className="h-4 w-4 text-[18px] text-[#4B5563]" />{" "}
              {data?.capacity} slots
            </p>
            <Button className="mt-[32px] flex h-[48px] w-full items-center justify-center bg-[#1D3557] font-inter font-medium hover:bg-[#1D3557]/90 lg:mt-0 lg:w-[142px]">
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
