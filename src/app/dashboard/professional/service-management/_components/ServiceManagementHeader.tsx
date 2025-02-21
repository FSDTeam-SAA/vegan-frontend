"use client";
import { Button } from "@/components/ui/button";
import { FileUp, Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BulkUploadDialog } from "./bulk-upload-dialog";
import { AddServiceForm } from "./add-service-form";
import { ScrollArea } from "@/components/ui/scroll-area";

const ServiceManagementHeader = () => {
  const [open, setOpen] = useState(false);
  const [isOenService, setIsOpenService] = useState(false);

  useEffect(() => {
    if (isOenService) {
      setTimeout(() => {
        document.documentElement.style.overflow = "hidden";
      }, 100);
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isOenService]);

  return (
    <div className="pb-[24px] pt-[32px] md:pb-[40px] md:pt-[40px] lg:pb-[56px]">
      <div className="flex flex-col items-start justify-between gap-[8px] md:flex-row md:items-center md:gap-[16px] lg:gap-[24px]">
        <div>
          <h4 className="text-xl font-semibold leading-[29px] text-[#1F2937] md:text-2xl md:leading-[34px]">
            Manage Your Services
          </h4>
          <p className="pt-[4px] text-sm font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
            Easily add, manage, and optimize your services for greater
            visibility
          </p>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto md:gap-[16px]">
          <Button
            onClick={() => setOpen(!open)}
            variant="outline"
            size="lg"
            className="flex items-center gap-[8px] rounded-[10px] px-[12px] py-[14px] text-xs font-medium leading-[16px] text-[#6B7280] sm:text-sm md:px-[15px] md:text-base md:leading-[19px] lg:px-[18px]"
          >
            <FileUp className="h-[16px] w-[14px] text-[#6B7280]" /> Upload Bulk
            Services
          </Button>
          <Button
            onClick={() => setIsOpenService(!isOenService)}
            size="lg"
            className="flex items-center gap-[4px] rounded-[10px] bg-[#1D3557] px-[12px] py-[14px] text-xs font-medium leading-[16px] text-white sm:text-sm md:gap-[6px] md:px-[16px] md:text-base md:leading-[19px] lg:gap-[8px] lg:px-[20px]"
          >
            <Plus className="h-[20px] w-[20px] text-white" />
            Add Service
          </Button>
        </div>
      </div>

      {/* Bulk modal  */}
      {open && (
        <div>
          <BulkUploadDialog open={open} onClose={() => setOpen(false)} />
        </div>
      )}

      {/* add new service modal  */}
      {isOenService && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg">
          {/* Modal content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between rounded-t-lg bg-white px-[32px] py-[30px] shadow-lg">
              <h4 className="text-xl font-medium leading-[24px] text-[#1F2937]">
                Add A New Service
              </h4>
              <X
                className="cursor-pointer"
                onClick={() => setIsOpenService(false)}
              />
            </div>
            <ScrollArea className="h-[700px] w-[327px] rounded-b-[16px] md:w-[500px] lg:w-[769px]">
              <AddServiceForm />
            </ScrollArea>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServiceManagementHeader;
