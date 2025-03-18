import { Card } from "@/components/ui/card";
import { CommunicationOption } from "./communication";

interface CommunicationCardProps {
  type: CommunicationOption["type"];
  value: string;
}

export function CommunicationCard({ value, type }: CommunicationCardProps) {
  const getIcon = (type: CommunicationOption["type"]) => {
    switch (type) {
      case "email":
        return "✉️";
      case "whatsapp":
        return "💬";
      case "messenger":
        return "📱";
    }
  };

  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{getIcon(type)}</div>
        <div className="flex flex-col">
          <div className="font-inter text-base font-medium leading-[19.36px] text-[#1F2937] md:text-lg md:leading-[21.78px]">
            {type}
          </div>
          <div className="font-inter text-sm leading-[24px] text-[#4B5563] md:text-base">
            {value}
          </div>
        </div>
      </div>
    </Card>
  );
}
