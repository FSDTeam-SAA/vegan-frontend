"use client";

import { useMemo } from "react";

export interface Event {
  id: string;
  email: string;
  title: string;
  datetime: string;
  type: "meeting" | "reminder" | "task" | "booking";
  serviceBookingTime: string;
}

interface CalendarGridProps {
  currentDate: Date;
  events: Event[];
}

export default function CalendarGrid({
  currentDate,
  events,
}: CalendarGridProps) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: 0, date: null, isToday: false });
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      days.push({
        day,
        date,
        isToday,
      });
    }

    return days;
  }, [currentDate]);

  const getEventsForDay = (date: Date | null) => {
    if (!date) return [];

    return events.filter((event) => {
      const eventDate = new Date(event.datetime);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  return (
    <div className="grid flex-1 grid-cols-7 gap-px overflow-hidden rounded-md bg-[#dadce0]">
      {/* Day headers */}
      {DAYS.map((day) => (
        <div
          key={day}
          className="bg-[#f1f3f4] p-2.5 text-center text-xs font-medium text-[#5f6368]"
        >
          {day}
        </div>
      ))}

      {/* Calendar days */}
      {calendarDays.map((day, index) => (
        <div
          key={index}
          className={`relative min-h-[100px] bg-white p-1.5 ${day.day === 0 ? "bg-gray-50" : ""}`}
        >
          {day.day > 0 && (
            <>
              <div
                className={`absolute right-1.5 top-1.5 h-5 w-5 rounded-full text-center text-xs leading-5 ${day.isToday ? "bg-[#1a73e8] text-white" : "text-[#5f6368]"}`}
              >
                {day.day}
              </div>

              <div className="mt-6">
                {getEventsForDay(day.date).map((event) => (
                  <div
                    key={event.id}
                    className={`my-0.5 cursor-pointer rounded p-1 px-2 text-xs text-[#202124] ${event.type === "booking" ? "border-l-2 border-[#1a73e8] bg-[#e8f0fe]" : ""} ${event.type === "reminder" ? "border-l-2 border-[#fbbc04] bg-[#fef7e0]" : ""} ${event.type === "task" ? "border-l-2 border-[#34a853] bg-[#e7f4e9]" : ""} `}
                  >
                    <div className="truncate font-medium">{event.title}</div>
                    <div className="text-[10px] opacity-80">
                      {event.serviceBookingTime}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
