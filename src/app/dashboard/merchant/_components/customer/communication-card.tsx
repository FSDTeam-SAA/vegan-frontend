import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

// interface CommunicationCardProps {}

export function CommunicationCard() {
  // const getIcon = (type: CommunicationOption["type"]) => {
  //   switch (type) {
  //     case "email":
  //       return "✉️";
  //     case "whatsapp":
  //       return "💬";
  //     case "messenger":
  //       return "📱";
  //   }
  // };

  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="text-2xl">💬</div>
        <div className="flex flex-col">
          <div className="font-inter text-base font-medium leading-[19.36px] text-[#1F2937] md:text-lg md:leading-[21.78px]">
            Email
          </div>
          <div className="font-inter text-sm leading-[24px] text-[#4B5563] md:text-base">
            email valuye
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          // onClick={() => onEdit(option.type)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Pencil className="h-4 w-4" />
          <span className="sr-only font-inter text-base font-medium leading-[23.2px] text-[#1F2937]">
            Edit
          </span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          // onClick={() => onDelete(option.type)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </Card>
  );
}
