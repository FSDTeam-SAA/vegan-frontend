"use client";

import { useState } from "react";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommunicationCard } from "./communication-card";
import { SetupModal } from "./setup-modal";
import type {
  CommunicationOption,
  CommunicationFormData,
} from "./communication";

export default function CustomerCommunication() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [communications, setCommunications] = useState<CommunicationOption[]>(
    [],
  );
  const [editingType, setEditingType] = useState<
    CommunicationOption["type"] | null
  >(null);

  const handleSave = (data: CommunicationFormData) => {
    const newOptions: CommunicationOption[] = [];
    if (data.email) newOptions.push({ type: "email", value: data.email });
    if (data.whatsapp)
      newOptions.push({ type: "whatsapp", value: data.whatsapp });
    if (data.messenger)
      newOptions.push({ type: "messenger", value: data.messenger });
    setCommunications(newOptions);
    setIsModalOpen(false);
    setEditingType(null);
  };

  const handleEdit = (type: CommunicationOption["type"]) => {
    setEditingType(type);
    setIsModalOpen(true);
  };

  const handleDelete = (type: CommunicationOption["type"]) => {
    setCommunications(communications.filter((comm) => comm.type !== type));
  };

  const getInitialData = () => {
    if (!editingType) return undefined;
    const option = communications.find((comm) => comm.type === editingType);
    if (!option) return undefined;
    return {
      [option.type]: option.value,
    };
  };

  return (
    <div className="flex-col items-center justify-center md:mt-20">
      <div className="mx-auto max-w-2xl">
        {communications.length === 0 ? (
          <div className="rounded-lg p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-950">
                <MessageCircleQuestion className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="mb-2 font-inter text-lg font-medium leading-[21.78px] md:text-xl md:leading-[29px]">
              No Communication Options Set Up Yet
            </h2>
            <p className="mb-6 font-inter text-base font-normal leading-[26px] text-[#4B5563]">
              Make it easy for your customers to reach you by adding email,
              WhatsApp, or Messenger links.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1D3557] px-[16px] py-[14.5px] font-inter text-base leading-[19.36px] text-white hover:bg-blue-900 md:mt-10"
            >
              <Plus className="h-4 w-4" />
              Set Up Communication
            </Button>
          </div>
        ) : (
          <div className="rounded-lg bg-white p-6">
            <div className="mb-4">
              <h2 className="font-inter text-lg font-medium leading-[21.78px]">
                Communication Options
              </h2>
            </div>
            <div className="space-y-4">
              {communications.map((option) => (
                <CommunicationCard
                  key={option.type}
                  option={option}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}

        <SetupModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingType(null);
          }}
          onSave={handleSave}
          initialData={getInitialData()}
        />
      </div>
    </div>
  );
}
