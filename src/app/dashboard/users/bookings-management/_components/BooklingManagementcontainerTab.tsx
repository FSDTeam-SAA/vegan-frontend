"use client";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { useState } from "react";
import BookingManagementContainer from "./BookingManagementContainer";
import SearchBar from "./SearchBar";

const tabs = [
  {
    id: "UpcomingBookings",
    label: "Upcoming Bookings",
  },
  {
    id: "all",
    label: "All Booked Services",
  },
] as VeganTab[];

interface Props {
  userId: string;
}

const BooklingManagementcontainerTab = ({ userId }: Props) => {
  const [activeTab, setActiveTab] = useState("UpcomingBookings");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="pt-[56px]">
      <VeganTabs
        tabs={tabs}
        defaultActiveTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      <div className="mt-5">
        <SearchBar value={searchQuery} setValue={(v) => setSearchQuery(v)} />
        <BookingManagementContainer
          tab={activeTab}
          searchQuery={searchQuery}
          userId={userId}
        />
      </div>
    </div>
  );
};

export default BooklingManagementcontainerTab;
