"use client";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganModal from "@/components/ui/vegan-modal";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import CampaignForm from "./campaign-form";

export type Campaign = {
  id: string;
  campaignTitle: string;
  description: string;
  fundraisingGoal: number;
  achieved: number;
  deadline: string;
  percentage: string;
  __v: number;
};

export type ApiResponse = {
  success: boolean;
  message: string;
  data: Campaign[];
};

function CampaignCard({ campaign }: { campaign?: Campaign }) {
  const percentage = Number(campaign?.percentage.replace("%", ""));
  return (
    <div className="space-y-4 py-4">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h3 className="text-lg font-medium">{campaign?.campaignTitle}</h3>
          <p className="text-sm text-muted-foreground">
            Deadline: {campaign?.deadline}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium">${campaign?.achieved} raised</p>
          <p className="text-sm text-muted-foreground">
            of ${campaign?.fundraisingGoal} goal
          </p>
        </div>
      </div>
      <p className="text-sm">{campaign?.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{campaign?.percentage} Complete</span>
          {campaign && (
            <span>${campaign.fundraisingGoal - campaign.achieved!} to go</span>
          )}
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#1a365d]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

interface Props {
  organizationId: string;
}

export default function FundraisingManagement({ organizationId }: Props) {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError, error } = useQuery<ApiResponse>({
    queryKey: ["fundraising"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/campaigns/${organizationId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="divide-y">
        <SkeletonWrapper isLoading>
          <CampaignCard />
        </SkeletonWrapper>
      </div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error?.message} />;
  } else if (data && data.data.length === 0) {
    content = <EmptyContainer message="No Data Found" />;
  } else if (data && data.data.length > 0) {
    content = (
      <div className="divide-y">
        {data.data.map((campaign, index) => (
          <CampaignCard key={index} campaign={campaign} />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f0eb] p-6">
      <div className="space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Fundraising Management
            </h1>
            <p className="text-muted-foreground">
              Efficiently manage and track all your fundraising campaigns in one
              place.
            </p>
          </div>
          <Button
            className="bg-[#1a365d] hover:bg-[#1a365d]/90"
            onClick={() => setOpen((e) => !e)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Campaign
          </Button>
          <VeganModal open={open} onOpenChange={setOpen} className="">
            <CampaignForm
              organizationId={organizationId}
              onClose={() => setOpen(false)}
            />
          </VeganModal>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Fundraising Campaigns</h2>
          </CardHeader>
          <CardContent>{content}</CardContent>
        </Card>
      </div>
    </div>
  );
}
