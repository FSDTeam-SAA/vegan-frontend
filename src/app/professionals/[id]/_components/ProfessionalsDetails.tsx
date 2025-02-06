"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutTab } from "./tabs/about-tab";
import { ProfileCard } from "./profile-details-card";
import { ExperienceTab } from "./tabs/experience-tab";
import { FAQsTab } from "./tabs/faqs-tab";
import { LiveStreamTab } from "./tabs/live-stream-tab";
import { ReviewsTab } from "./tabs/reviews-tab";
import { ServicesTab } from "./tabs/services-tab";

// Mock data for a vendor profile
const vendorProfile = {
  name: "Dr Sarah Green",
  title: "Vegan Nutritionist & Wellness Coach",
  location: "New York, USA",
  rating: 4.8,
  reviews: 127,
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professionial%20detail-vD0HtZP25Z4ygrNjwxW74dhI3OxbpU.png",
  heroTitle: "Dr Sarah Green",
  heroDescription:
    "Empowering you to thrive on a plant-based diet. Expert nutrition guidance for optimal health and wellness.",
  heroImage:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professionial%20detail-vD0HtZP25Z4ygrNjwxW74dhI3OxbpU.png",
};

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
        <ProfileCard
          name={vendorProfile.name}
          title={vendorProfile.title}
          location={vendorProfile.location}
          rating={vendorProfile.rating}
          reviews={vendorProfile.reviews}
          image={vendorProfile.image}
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="no-scrollbar no-scrollbar flex w-full space-x-6 overflow-x-auto border-b">
            {tabsData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-shrink-0 rounded-none bg-transparent px-0 text-base text-[#6B7280] data-[state=active]:border-b-2 data-[state=active]:border-[#1F2937] data-[state=active]:text-[#1F2937] md:text-2xl"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
