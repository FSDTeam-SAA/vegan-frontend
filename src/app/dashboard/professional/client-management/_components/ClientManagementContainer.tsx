"use client";
import { useState } from "react";
import BookingsContainer from "./BookingsContainer";
import Faqs from "./Faqs";
import Policies from "./Policies";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";

const tabs = [
  { id: "bookings", label: "Bookings" },
  { id: "policies", label: "Policies" },
  { id: "faqs", label: "FAQS" }
] as VeganTab[];


interface Props {
  userId: string;
}

export default function ClientManagementContainer({userId}: Props) {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="">
      {/* <div className="flex space-x-10 border-b-[2px] border-[#F4F0EB]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 text-lg font-normal text-[#717680] leading-[21px] ${
                activeTab === tab.id
                  && "border-b-[2px] border-[#1F2937] font-medium text-[#1F2937]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div> */}
      <VeganTabs
        tabs={tabs}
        defaultActiveTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      <div className="">
        {activeTab === "bookings" && <BookingsContainer />}
        {activeTab === "policies" && <Policies />}
        {activeTab === "faqs" && <Faqs userId={userId} />}
      </div>
    </div>
  );
}
