"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { ChevronDown } from "lucide-react";
import * as React from "react";

interface PriceRangeSelectorProps {
  minPrice?: number;
  maxPrice?: number;
  step?: number;
  defaultValue?: [number, number];
  onRangeChange?: (values: [number, number]) => void;
  className?: string;
}

export function PriceRangeSelector({
  minPrice = 0,
  maxPrice = 1000,
  step = 10,
  defaultValue = [minPrice, maxPrice],
  onRangeChange,
  className,
}: PriceRangeSelectorProps) {
  const [value, setValue] = React.useState<[number, number]>(defaultValue);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleValueChange = (newValue: number[]) => {
    const range: [number, number] = [newValue[0], newValue[1]];
    setValue(range);
    onRangeChange?.(range);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`h-[40px] w-full justify-between rounded-[8px] border-[1px] border-[#99A1AF] bg-transparent text-[#4B5563] hover:bg-white/10 ${className}`}
        >
          Price Range
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{formatPrice(value[0])}</div>
              <div className="font-medium">{formatPrice(value[1])}</div>
            </div>
            <Slider
              min={minPrice}
              max={maxPrice}
              step={step}
              value={value}
              onValueChange={handleValueChange}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
