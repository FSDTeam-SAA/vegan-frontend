"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import OrganizationEventContainer from "./tab/events/organization-event-container";
import OrganizationNewsContainer from "./tab/news/organization-news-container";
import VolunteerContainer from "./tab/volunteer/volunteer-container";

const OrganizationTab = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="container mt-[56px]"
      >
        <TabsList className="grid w-full grid-cols-2 border-b-[#6B7280] bg-transparent text-[#6B7280] *:text-[20px] md:grid-cols-6">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="news">Update & News</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="pt-[40px]"></TabsContent>

        <TabsContent value="news" className="pt-[40px]">
          <OrganizationNewsContainer />
        </TabsContent>

        <TabsContent value="events" className="pt-[40px]">
          <OrganizationEventContainer />
        </TabsContent>
        <TabsContent value="volunteer" className="pt-[40px]">
          <VolunteerContainer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrganizationTab;
