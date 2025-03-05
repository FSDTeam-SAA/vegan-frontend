import { Button } from "@/components/ui/button";
import { CloudDownload, Download, EllipsisVertical } from "lucide-react";

const ProfitSharing = () => {
  return (
    <div>
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-medium leading-[24px] text-[#1F2937]">
            Profit Sharing
          </h5>
          <div className="hidden md:block">
            <div className="flex items-center gap-[24px]">
              <Button
                className="text-base font-medium leading-[19px] text-[#6B7280]"
                size="xl"
                variant="outline"
              >
                <CloudDownload className="h-[20px] w-[20px] text-[#6B7280]" />{" "}
                Export Invoice
              </Button>
              <Button
                className="text-base font-medium leading-[19px] text-white"
                size="xl"
              >
                <Download className="h-[20px] w-[20px] text-white" /> Download
                Tax Summary
              </Button>
            </div>
          </div>
        </div>

        {/* second part  */}
        <div className="grid grid-cols-1 gap-[16px] pt-[56px] md:grid-cols-3">
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Total Earnings <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <p className="pt-[16px] text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
              $5,240.00
            </p>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Your Share <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <div className="flex items-center justify-between pt-[16px]">
              <p className="text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
                $4,716.00
              </p>
              <button className="rounded-[6px] bg-white px-[4px] py-[6px] text-[13px] font-medium leading-[15px] text-[#6B7280]">
                90%
              </button>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#E8DFD6] py-4 pl-4 pr-[6px] md:col-span-1">
            <p className="flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]">
              Platform Fee <EllipsisVertical className="h-[24px] w-[24px]" />
            </p>
            <div className="flex items-center justify-between pt-[16px]">
              <p className="text-2xl font-medium leading-[29px] text-[#1F2937] md:text-3xl md:leading-[36px]">
                $524.00
              </p>
              <button className="rounded-[6px] bg-white px-[4px] py-[6px] text-[13px] font-medium leading-[15px] text-[#6B7280]">
                0%
              </button>
            </div>
          </div>
        </div>

        {/* small device  */}
        <div className="block pt-[32px] md:hidden">
          <Button
            className="mb-[24px] w-full text-base font-medium leading-[19px] text-white"
            size="xl"
          >
            <Download className="h-[20px] w-[20px] text-white" /> Download Tax
            Summary
          </Button>
          <Button
            className="w-full text-base font-medium leading-[19px] text-[#6B7280]"
            size="xl"
            variant="outline"
          >
            <CloudDownload className="h-[20px] w-[20px] text-[#6B7280]" />{" "}
            Export Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfitSharing;
