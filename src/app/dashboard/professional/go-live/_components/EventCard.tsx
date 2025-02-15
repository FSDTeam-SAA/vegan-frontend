"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar1Icon,
  Clock,
  ChevronDown,
  ChevronUp,
  Trash2,
  PenLine,
} from "lucide-react";
import { useState } from "react";

interface EventMetrics {
  registeredParticipants: number;
  totalAmountPaid: number;
}

export interface EventData {
  type: "Paid" | "Free";
  title: string;
  description: string;
  date: string;
  timeRange: string;
  price: number;
  metrics?: EventMetrics;
  defaultExpanded?: boolean;
}

interface EventCardProps extends EventData {
  onEdit: (data: EventData) => void;
  onDelete: () => void;
}

export function EventCard({
  type,
  title,
  description,
  date,
  timeRange,
  price,
  metrics,
  defaultExpanded = false,
  onEdit,
  onDelete,
}: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="bg-tran mb-4 border-[#E5E7EB] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-white pb-0">
        <div>
          <Badge
            variant={type === "Paid" ? "secondary" : "outline"}
            className="h-6 font-inter text-sm font-normal leading-[16.94px] text-[#1E2939]"
          >
            {type} Event
          </Badge>
        </div>
        <div className="flex w-auto items-center justify-between gap-2 md:w-[215px]">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:block"
            onClick={() =>
              onEdit({
                type,
                title,
                description,
                date,
                timeRange,
                price,
                metrics,
              })
            }
          >
            <p className="flex items-center gap-2">
              <PenLine className="h-5 w-5" />
              <span className="text-base font-normal leading-[23px] text-[#1F2937]">
                Edit
              </span>
            </p>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="hidden text-red-500 md:block"
          >
            <p className="flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              <span className="text-base font-normal leading-[23px] text-[#DC2626]">
                Delete
              </span>
            </p>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
            <span className="sr-only">
              {isExpanded ? "Collapse" : "Expand"}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="bg-[#F9FAFB] p-0">
        <div className="space-y-4">
          <div className="space-y-6 bg-white p-6">
            <div className="">
              <h2 className="pb-2 font-inter text-lg font-medium leading-[26px] text-[#1F2937]">
                {title}
              </h2>
              <p className="font-inter text-base leading-[23px] text-[#364153]">
                {description}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 *:text-lg *:leading-[26px] *:text-[#6A7282] md:flex-row md:items-center md:gap-6 md:space-x-4">
              <div className="flex items-center gap-2">
                <Calendar1Icon className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{timeRange}</span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[24px] md:flex-row md:items-center md:justify-between md:gap-0">
              <span className="font-inter text-xl font-medium leading-[29px] text-[#1F2937]">
                ${price.toFixed(2)}
              </span>
              <Button
                size="xl"
                className="w-full bg-[#1D3557] px-[30px] py-[15px] text-center font-inter text-base !font-medium leading-[19.36px] text-white md:w-auto"
              >
                Join Event
              </Button>
            </div>

            {/* button  */}
            <div className="block md:hidden">
              <div className="flex items-center justify-center gap-10">
                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      onEdit({
                        type,
                        title,
                        description,
                        date,
                        timeRange,
                        price,
                        metrics,
                      })
                    }
                  >
                    <p className="flex items-center gap-2">
                      <PenLine className="h-5 w-5" />
                      <span className="text-base font-normal leading-[23px] text-[#1F2937]">
                        Edit
                      </span>
                    </p>
                  </Button>
                </div>

                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onDelete}
                    className="text-red-500"
                  >
                    <p className="flex items-center gap-2">
                      <Trash2 className="h-5 w-5" />
                      <span className="text-base font-normal leading-[23px] text-[#DC2626]">
                        Delete
                      </span>
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Event Metrics Section */}
          {isExpanded && metrics && (
            <div className="m-6 space-y-4 pb-6">
              <h3 className="mb-2 bg-transparent text-lg font-semibold">
                Event Metrics
              </h3>

              <div className="space-y-3 bg-white p-4">
                <div>
                  <div className="text-sm text-gray-500">
                    Number Of Registered Participants
                  </div>
                  <div className="text-lg font-medium">
                    {metrics.registeredParticipants}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">
                    Total Amount Paid by Participants
                  </div>
                  <div className="text-lg font-medium">
                    ${metrics.totalAmountPaid.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
