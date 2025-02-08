"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutTab } from "./tabs/about-tab";
import { ExperienceTab } from "./tabs/experience-tab";
import { FAQsTab } from "./tabs/faqs-tab";
import { LiveStreamTab } from "./tabs/live-stream-tab";
import { ReviewsTab } from "./tabs/reviews-tab";
import { ServicesTab } from "./tabs/services-tab";

const tabsData = [
  { id: "about", label: "About", component: AboutTab },
  { id: "experience", label: "Experience", component: ExperienceTab },
  { id: "services", label: "Services", component: ServicesTab },
  { id: "live-stream", label: "Live Stream", component: LiveStreamTab },
  { id: "faqs", label: "FAQs", component: FAQsTab },
  { id: "reviews", label: "Reviews", component: ReviewsTab },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-9">
          <TabsList className="">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-shrink-0 rounded-none bg-transparent text-base md:text-2xl"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className="mt-10 md:mt-[50px]"
            >
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
