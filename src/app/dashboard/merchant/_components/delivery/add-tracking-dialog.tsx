"use client";

import { useState, useCallback, useMemo } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface AddTrackingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTracking: (trackingNumber: string) => void;
  isLoading: boolean;
}

export function AddTrackingDialog({
  open,
  onOpenChange,
  onAddTracking,
  isLoading,
}: AddTrackingDialogProps) {
  const [trackingNumber, setTrackingNumber] = useState("");

  const isDisabled = useMemo(
    () => !trackingNumber.trim() || isLoading,
    [trackingNumber, isLoading],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!isDisabled) {
        onAddTracking(trackingNumber);
        setTrackingNumber("");
      }
    },
    [trackingNumber, onAddTracking, isDisabled],
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Add Tracking Number</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={() => onOpenChange(false)} // Ensure modal closes properly
              disabled={isLoading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TrackingInput
            value={trackingNumber}
            onChange={setTrackingNumber}
            isLoading={isLoading}
          />
          <DialogActions
            onClose={() => onOpenChange(false)}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface TrackingInputProps {
  value: string;
  onChange: (value: string) => void;
  isLoading: boolean;
}

const TrackingInput = ({ value, onChange, isLoading }: TrackingInputProps) => (
  <Input
    placeholder="Enter tracking number"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="bg-[#F8F9FA]"
    disabled={isLoading}
  />
);

interface DialogActionsProps {
  onClose: () => void;
  isLoading: boolean;
  isDisabled: boolean;
}

const DialogActions = ({
  onClose,
  isLoading,
  isDisabled,
}: DialogActionsProps) => (
  <div className="flex justify-end gap-4">
    <Button
      type="button"
      variant="outline"
      onClick={onClose}
      disabled={isLoading}
    >
      Cancel
    </Button>
    <Button
      type="submit"
      className="bg-[#1E2A3B] hover:bg-[#2A3B4F]"
      disabled={isDisabled}
    >
      {isLoading ? "Adding..." : "Add Tracking"}
    </Button>
  </div>
);
