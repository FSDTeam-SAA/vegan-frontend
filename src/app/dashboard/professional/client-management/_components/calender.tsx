"use client";
import { useState } from "react";
import CalendarGrid, { Event } from "./calender-grid";

const Calender = () => {
  const [currentDate] = useState(new Date());

  const events: Event[] = [
    {
      id: "1",
      email: "user@example.com",
      title: "Team Meeting",
      datetime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1,
        10,
        0,
      ).toISOString(),
      type: "meeting",
    },
    {
      id: "2",
      email: "user@example.com",
      title: "Project Deadline",
      datetime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 3,
        14,
        0,
      ).toISOString(),
      type: "task",
    },
    {
      id: "3",
      email: "user@example.com",
      title: "Doctor Appointment",
      datetime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 5,
        9,
        30,
      ).toISOString(),
      type: "reminder",
    },
  ];
  return (
    <div className="pt-5">
      <CalendarGrid currentDate={currentDate} events={events} />
    </div>
  );
};

export default Calender;
