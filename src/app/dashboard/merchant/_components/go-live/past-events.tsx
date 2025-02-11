"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface EventMetrics {
  registeredParticipants: number;
  totalAmountPaid: number;
}

interface EventCardProps {
  type: "Paid" | "Free";
  title: string;
  description: string;
  date: string;
  timeRange: string;
  price: number;
  metrics?: EventMetrics;
  defaultExpanded?: boolean;
}

export function PastEvents({
  type,
  title,
  description,
  date,
  timeRange,
  price,
  metrics,
  defaultExpanded = false,
}: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Badge
          variant={type === "Paid" ? "secondary" : "outline"}
          className="h-6"
        >
          {type} Event
        </Badge>
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
          <span className="sr-only">{isExpanded ? "Collapse" : "Expand"}</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-gray-500">{description}</p>
          </div>
          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{timeRange}</span>
            </div>
          </div>
          <div>
            <span className="text-xl font-semibold">${price.toFixed(2)}</span>
          </div>
          {isExpanded && metrics && (
            <div className="mt-6 space-y-4 border-t pt-6">
              <h3 className="text-lg font-semibold">Event Metrics</h3>
              <div className="space-y-3">
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
