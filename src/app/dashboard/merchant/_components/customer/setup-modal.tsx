"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import type { CommunicationFormData } from "./communication";

interface SetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<CommunicationFormData>;
  userId: string;
}

export function SetupModal({
  isOpen,
  onClose,
  initialData,
  userId,
}: SetupModalProps) {
  const [formData, setFormData] = useState<CommunicationFormData>({
    email: initialData?.email || "",
    whatsapp: initialData?.whatsapp || "",
    messenger: initialData?.messenger || "",
  });

  const { mutate, isPending } = useMutation<any, unknown, any>({
    mutationKey: ["customerSupport"],
    mutationFn: (body) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantCustomer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      onClose();
      toast.success("Communication options saved successfully", {
        position: "top-right",
        richColors: true,
      });
      // queryClient.invalidateQueries({ queryKey: ["merchantsProduct"] });
    },
    onError: () => {
      toast.error("Failed to add product. Please try again later", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      email: formData.email ?? "",
      whatsApp: formData.whatsapp ?? "",
      messenger: formData.messenger ?? "",
      merchantID: userId,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-inter text-lg font-medium leading-[21.78px] text-[#1F2937] md:text-xl md:leading-[24px]">
            Set Up Communication
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-3">
            <Label htmlFor="email font-inter !text-[16px] font-medium leading-[23px]">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g., support@store.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-3">
            <Label
              htmlFor="whatsapp"
              className="WhatsApp font-inter text-base font-medium leading-[23px]"
            >
              WhatsApp Link
            </Label>
            <Input
              id="whatsapp"
              placeholder="e.g., https://wa.me/1234567890"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
            />
          </div>
          <div className="space-y-3">
            <Label
              htmlFor="messenger"
              className="font-inter text-base font-medium leading-[23px]"
            >
              Messenger Link
            </Label>
            <Input
              id="messenger"
              placeholder="e.g., https://m.me/username"
              value={formData.messenger}
              onChange={(e) =>
                setFormData({ ...formData, messenger: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              Save Communication Options
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
