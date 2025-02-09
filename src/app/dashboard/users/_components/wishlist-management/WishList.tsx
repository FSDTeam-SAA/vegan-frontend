"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { wishlistData } from "@/app/dashboard/users/_components/wishlist-management/wishlistData";
import Image from "next/image";

export default function WishlistManagement() {
  const [activeTab, setActiveTab] = useState("professionals");
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
        <nav className="flex space-x-1 border-b-2 border-white">
          {wishlistData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-[18px] font-medium",
                "",
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-gray-500 hover:text-gray-700",
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "ml-2 rounded-full p-1 px-2 text-xs text-gray-600",
                  activeTab === tab.id
                    ? "h-[32px] w-[32px] rounded-full bg-black text-white"
                    : "bg-gray-100",
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-4 bg-[#F8F5F2] p-[20px] lg:p-[40px]">
        {wishlistData
          .find((tab) => tab.id === activeTab)
          ?.items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-white p-4 transition-all hover:shadow-md"
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
                          "h-5 w-5 transition-colors",
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
