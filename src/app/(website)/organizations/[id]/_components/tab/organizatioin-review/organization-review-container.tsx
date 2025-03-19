"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, SlidersHorizontal, Star } from "lucide-react";
import Image from "next/image";
import CreateOrganizationReview from "./create-organization-review-modal";

const reviews = [
  {
    id: 1,
    author: "Jane Smith",
    rating: 5,
    content:
      "Dr. Green was incredibly helpful in helping me transition to a vegan diet. Her knowledge and support made the process much easier than I expected.",
    avatar: "https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png",
  },
  {
    id: 2,
    author: "Jane Smith",
    rating: 5,
    content:
      "Dr. Green was incredibly helpful in helping me transition to a vegan diet. Her knowledge and support made the process much easier than I expected.",
    avatar: "https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png",
  },
  {
    id: 3,
    author: "Jane Smith",
    rating: 5,
    content:
      "Dr. Green was incredibly helpful in helping me transition to a vegan diet. Her knowledge and support made the process much easier than I expected.",
    avatar: "https://i.postimg.cc/2yf4KSLx/pexels-yankrukov-8436587-1.png",
  },
];

interface Props {
  userId: string;
  loggedinUserId?: string;
}

export function OrganizationReviewContainer({ userId, loggedinUserId }: Props) {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl">
        {/* Desktop Filters */}
        <div className="hidden justify-between md:flex">
          <div className="mb-6 hidden gap-3 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border border-gray-400 bg-transparent font-inter font-normal leading-[19.36px] text-[#4B5563]"
                >
                  Most Recent
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Most Recent</DropdownMenuItem>
                <DropdownMenuItem>Oldest</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border border-gray-400 bg-transparent font-inter font-normal leading-[19.36px] text-[#4B5563]"
                >
                  Relevant
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Most Relevant</DropdownMenuItem>
                <DropdownMenuItem>Least Relevant</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border border-gray-400 bg-transparent font-inter font-normal leading-[19.36px] text-[#4B5563]"
                >
                  Ratings
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Highest Rating</DropdownMenuItem>
                <DropdownMenuItem>Lowest Rating</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {loggedinUserId && (
            <div>
              <CreateOrganizationReview
                reviewUserId={userId}
                loggedinUserId={loggedinUserId}
              />
            </div>
          )}
        </div>

        {/* Mobile Filter */}
        <div className="mb-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-white">
                <SlidersHorizontal className="mr-2" />
                Filter
                <Badge
                  className="-mt-6 h-4 w-4 rounded-full bg-red-500 p-0 pl-1 text-[10px] text-white"
                  variant="secondary"
                >
                  3
                </Badge>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Reviews</SheetTitle>
              </SheetHeader>
              <div className="grid gap-6 py-4">
                <div className="space-y-4">
                  <Label>Sort By</Label>
                  <RadioGroup defaultValue="recent">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="recent" id="recent" />
                      <Label htmlFor="recent">Most Recent</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="oldest" id="oldest" />
                      <Label htmlFor="oldest">Oldest</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <Label>Relevance</Label>
                  <RadioGroup defaultValue="most-relevant">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="most-relevant"
                        id="most-relevant"
                      />
                      <Label htmlFor="most-relevant">Most Relevant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="least-relevant"
                        id="least-relevant"
                      />
                      <Label htmlFor="least-relevant">Least Relevant</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-4">
                  <Label>Rating</Label>
                  <RadioGroup defaultValue="highest">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="highest" id="highest" />
                      <Label htmlFor="highest">Highest First</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lowest" id="lowest" />
                      <Label htmlFor="lowest">Lowest First</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <h2 className="mb-6 font-lexend text-lg font-medium leading-[22.5px] text-[#1D3557] dark:text-white">
          Client Reviews
        </h2>
        {/* Reviews Grid */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="tracting-[3%] font-inter text-base font-semibold leading-[24px] text-[#1F2937]">
                    {review.author}
                  </h3>
                  <div className="flex pt-[7px]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#FDE047] text-[#FDE047]"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-inter text-base font-normal leading-[28px] text-[#374151]">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
