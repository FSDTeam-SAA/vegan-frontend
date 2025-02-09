"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface UpdateStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateStatus: (status: string) => void;
  currentStatus: string;
  isLoading: boolean;
}

export function UpdateStatusDialog({
  open,
  onOpenChange,
  onUpdateStatus,
  currentStatus,
  isLoading,
}: UpdateStatusDialogProps) {
  const [status, setStatus] = useState(currentStatus);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStatus(status);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Update Order Status</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <RadioGroup
              defaultValue={currentStatus}
              onValueChange={setStatus}
              className="grid grid-cols-2 gap-4"
              disabled={isLoading}
            >
              <div>
                <RadioGroupItem
                  value="Shipped"
                  id="shipped"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="shipped"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-[#F8F9FA] p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  Shipped
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="Delivered"
                  id="delivered"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="delivered"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-[#F8F9FA] p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  Delivered
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#1E2A3B] hover:bg-[#2A3B4F]"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
