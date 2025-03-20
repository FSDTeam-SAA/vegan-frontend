"use client";
import Calender from "@/app/dashboard/professional/client-management/_components/calender";
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
  {
    id: "calender",
    label: "Calender",
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
        {activeTab !== "calender" && (
          <SearchBar value={searchQuery} setValue={(v) => setSearchQuery(v)} />
        )}
        {activeTab === "UpcomingBookings" && (
          <BookingManagementContainer
            tab={activeTab}
            searchQuery={searchQuery}
            userId={userId}
          />
        )}
        {activeTab === "all" && (
          <BookingManagementContainer
            tab={activeTab}
            searchQuery={searchQuery}
            userId={userId}
          />
        )}

        {activeTab === "calender" && (
          <Calender loggedInUser={userId} role="customer" />
        )}
      </div>
    </div>
  );
};

export default BooklingManagementcontainerTab;
