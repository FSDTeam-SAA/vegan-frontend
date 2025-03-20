"use client";
import ErrorContainer from "@/components/shared/sections/error-container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CalendarGrid, { Event } from "./calender-grid";

const months = [
  { id: 1, label: "January", value: "1" },
  { id: 2, label: "February", value: "2" },
  { id: 3, label: "March", value: "3" },
  { id: 4, label: "April", value: "4" },
  { id: 5, label: "May", value: "5" },
  { id: 6, label: "June", value: "6" },
  { id: 7, label: "July", value: "7" },
  { id: 8, label: "August", value: "8" },
  { id: 9, label: "September", value: "9" },
  { id: 10, label: "October", value: "10" },
  { id: 11, label: "November", value: "11" },
  { id: 12, label: "December", value: "12" },
];

const years = [
  { id: 2020, label: "2020", value: "2020" },
  { id: 2021, label: "2021", value: "2021" },
  { id: 2022, label: "2022", value: "2022" },
  { id: 2023, label: "2023", value: "2023" },
  { id: 2024, label: "2024", value: "2024" },
  { id: 2025, label: "2025", value: "2025" },
  { id: 2026, label: "2026", value: "2026" },
  { id: 2027, label: "2027", value: "2027" },
  { id: 2028, label: "2028", value: "2028" },
  { id: 2029, label: "2029", value: "2029" },
  { id: 2030, label: "2030", value: "2030" },
];

interface Props {
  loggedInUser: string;
}

interface Response {
  success: boolean;
  message: string;
  calendarData: Event[];
}

const Calender = ({ loggedInUser }: Props) => {
  const [currentDate] = useState(new Date());
  const [month, setMonth] = useState(() => {
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so we add 1
    return currentMonth.toString(); // Return as a string for consistency with your code
  });

  const [year, setYear] = useState(() => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString(); // Return as a string
  });

  const { data, isLoading, isError, error } = useQuery<Response>({
    queryKey: ["calenderData", month, year],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/calendar/professional/${loggedInUser}?month=${month}&year=${year}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading || data) {
    content = (
      <div>
        <div className="my-5 flex items-center justify-end gap-x-5">
          <Select defaultValue={month} onValueChange={(val) => setMonth(val)}>
            <SelectTrigger className="w-[180px] border-primary/50">
              <SelectValue placeholder="Select Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                {months.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue={year} onValueChange={(val) => setYear(val)}>
            <SelectTrigger className="w-[180px] border-primary/50">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                {years.map((item) => (
                  <SelectItem key={item.id} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <SkeletonWrapper isLoading={isLoading}>
          <CalendarGrid
            currentDate={currentDate}
            events={data?.calendarData ?? []}
          />
        </SkeletonWrapper>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to load data"} />
    );
  }
  return <div className="pt-5">{content}</div>;
};

export default Calender;
