"use client";

import EmptyContainer from "@/components/shared/sections/empty-container";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { useWishlistState } from "@/zustand/features/wishlist/useWishlistState";
import { useState } from "react";
import MerchantWishlistCard from "./marchant-wishlist-card";
import OrganizationWishlistCard from "./organization-wishlist-card";
import ProfessionalWishlistCard from "./professional-wishlist-card";

const tabs = [
  {
    id: "professional",
    label: "Professionals",
  },
  {
    id: "merchants",
    label: "Merchants",
  },
  {
    id: "organizations",
    label: "Organizations",
  },
] as VeganTab[];

export default function WishlistManagement() {
  const [activeTab, setActiveTab] = useState("professional");

  const { organizations, professionals, merchants } = useWishlistState();

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-semibold text-[#1F2937]">
          Wishlist Management
        </h1>
        <p className="text-[16px] text-gray-600">
          Effortlessly manage and organize your saved favorites.
        </p>
      </div>

      <div className="mb-6 overflow-x-auto">
        <VeganTabs
          tabs={tabs}
          defaultActiveTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </div>

      {activeTab === "organizations" && (
        <>
          {organizations.length === 0 ? (
            <EmptyContainer message="Your wishlist cart is empty" />
          ) : (
            <div className="flex flex-col gap-y-4 rounded-[16px] bg-[#F8F5F2] p-[20px] lg:p-[40px]">
              {organizations.map((item) => (
                <OrganizationWishlistCard key={item._id} data={item} />
              ))}
            </div>
          )}
        </>
      )}
      {activeTab === "professional" && (
        <>
          {professionals.length === 0 ? (
            <EmptyContainer message="Your wishlist cart is empty" />
          ) : (
            <div className="flex flex-col gap-y-4 rounded-[16px] bg-[#F8F5F2] p-[20px] lg:p-[40px]">
              {professionals.map((item) => (
                <ProfessionalWishlistCard key={item._id} data={item} />
              ))}
            </div>
          )}
        </>
      )}
      {activeTab === "merchants" && (
        <>
          {merchants.length === 0 ? (
            <EmptyContainer message="Your wishlist cart is empty" />
          ) : (
            <div className="flex flex-col gap-y-4 rounded-[16px] bg-[#F8F5F2] p-[20px] lg:p-[40px]">
              {merchants.map((item) => (
                <MerchantWishlistCard key={item._id} data={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
