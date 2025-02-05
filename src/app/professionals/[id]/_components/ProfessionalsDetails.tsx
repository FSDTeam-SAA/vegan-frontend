"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ProfileCard } from "./profile-details-card";
import { AboutTab } from "./tabs/about-tab";
import { ExperienceTab } from "./tabs/experience-tab";
import { FAQsTab } from "./tabs/faqs-tab";
import { LiveStreamTab } from "./tabs/live-stream-tab";
import { ReviewsTab } from "./tabs/reviews-tab";
import { ServicesTab } from "./tabs/services-tab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  return (
<<<<<<< HEAD:src/app/professionals/details/_components/ProfessionalsDetails.tsx
    <div className="min-h-screen bg-[#f5f0eb]">
      <main className="mx-auto px-4 py-14">
=======
    <div className="min-h-screen bg-[#f5f0eb] pt-[56px]">
      <main className="mx-auto px-4 py-8">
>>>>>>> d2a81bbc8138c84883956a06f6acd3c69397e0db:src/app/professionals/[id]/_components/ProfessionalsDetails.tsx
        <ProfileCard
          name="Dr Sarah Green"
          title="Vegan Nutritionist & Wellness Coach"
          location="New York, USA"
          rating={4.8}
          reviews={127}
          image="https://res.cloudinary.com/dgnustmny/image/upload/v1738670389/pexels-elly-fairytale-3822688_1_pn1lrl.png"
        />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="container mt-9 px-0"
        >
<<<<<<< HEAD:src/app/professionals/details/_components/ProfessionalsDetails.tsx
          <TabsList className="mb-[55px] grid w-full max-w-[892px] grid-cols-2 border-b-[#6B7280] bg-transparent text-[20px] text-[#6B7280] md:grid-cols-6">
=======
          <TabsList className="grid w-full grid-cols-2 border-b-[#6B7280] bg-transparent text-[#6B7280] *:text-[20px] md:grid-cols-6">
>>>>>>> d2a81bbc8138c84883956a06f6acd3c69397e0db:src/app/professionals/[id]/_components/ProfessionalsDetails.tsx
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="live-stream">Live Stream</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <AboutTab />
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <ExperienceTab />
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <ServicesTab />
          </TabsContent>

          <TabsContent value="live-stream" className="mt-6">
            <LiveStreamTab />
          </TabsContent>

          <TabsContent value="faqs" className="mt-6">
            <FAQsTab />
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
