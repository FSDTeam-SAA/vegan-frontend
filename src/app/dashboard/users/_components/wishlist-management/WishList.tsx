"use client";

import { wishlistData } from "@/app/dashboard/users/_components/wishlist-management/wishlistData";
import VeganTabs, { VeganTab } from "@/components/ui/Vegan-Tab";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const initialFavorites: Record<string, boolean> = {};
    wishlistData.forEach((tab) => {
      tab.items.forEach((item) => {
        initialFavorites[item.id] = item.isFavorited;
      });
    });
    return initialFavorites;
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

      <div className="space-y-4 rounded-[16px] bg-[#F8F5F2] p-[20px] lg:p-[40px]">
        {wishlistData
          .find((tab) => tab.id === activeTab)
          ?.items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-white p-4 transition-all duration-500 hover:scale-[101%]"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 flex-shrink-0 md:h-20 md:w-20">
                  <Image
                    width={100}
                    height={100}
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="rounded-full p-2 transition-colors hover:bg-gray-100"
                      aria-label={
                        favorites[item.id]
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <Heart
                        className={cn(
                          "h-7 w-7 transition-colors",
                          favorites[item.id]
                            ? "fill-red-500 stroke-red-500"
                            : "stroke-gray-400",
                        )}
                      />
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
