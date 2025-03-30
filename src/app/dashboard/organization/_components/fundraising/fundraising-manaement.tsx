"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import VeganModal from "@/components/ui/vegan-modal";
import { Plus } from "lucide-react";
import { useState } from "react";
import CampaignForm from "./campaign-form";

interface Campaign {
  title: string;
  deadline: string;
  description: string;
  raised: number;
  goal: number;
  percentComplete: number;
}

const campaigns: Campaign[] = [
  {
    title: "Animal Sanctuary Support",
    deadline: "June 1, 2025",
    description: "Help us maintain and expand our animal sanctuary.",
    raised: 35000.0,
    goal: 50000.0,
    percentComplete: 70,
  },
  {
    title: "Animal Sanctuary Support",
    deadline: "June 1, 2025",
    description: "Help us maintain and expand our animal sanctuary.",
    raised: 35000.0,
    goal: 50000.0,
    percentComplete: 70,
  },
  {
    title: "Animal Sanctuary Support",
    deadline: "June 1, 2025",
    description: "Help us maintain and expand our animal sanctuary.",
    raised: 35000.0,
    goal: 50000.0,
    percentComplete: 70,
  },
];

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <div className="space-y-4 py-4">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <h3 className="text-lg font-medium">{campaign.title}</h3>
          <p className="text-sm text-muted-foreground">
            Deadline: {campaign.deadline}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium">
            ${campaign.raised.toLocaleString()} raised
          </p>
          <p className="text-sm text-muted-foreground">
            of ${campaign.goal.toLocaleString()} goal
          </p>
        </div>
      </div>
      <p className="text-sm">{campaign.description}</p>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{campaign.percentComplete}% Complete</span>
          <span>
            ${(campaign.goal - campaign.raised).toLocaleString()} to go
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-[#1a365d]"
            style={{ width: `${campaign.percentComplete}%` }}
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
          <CardContent>
            <div className="divide-y">
              {campaigns.map((campaign, index) => (
                <CampaignCard key={index} campaign={campaign} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
