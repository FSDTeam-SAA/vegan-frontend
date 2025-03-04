// Packages
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// Local imports

import { truncateText } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { MerchantProduct } from "@/types/merchant";
import MerchantVisibilityChecker from "./MerchantVisibilityChecker";
import MerchantProductActions from "./merchant-product-action";

export const MerchantProductColumn: ColumnDef<MerchantProduct>[] = [
  {
    accessorKey: "productName",
    header: "Product",
    cell: ({ row }) => {
      const productImage = row?.original?.productImage;
      const productName = row.original.productName;
      const description = row.original.description;

      return (
        <div className="flex w-fit items-center justify-start gap-4">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={productImage || "/placeholder.svg"}
              alt={productName}
              className="rounded-[8px] object-cover"
              fill
            />
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-start text-[16px] font-medium leading-[23.2px] text-[#1F2937]">
              {productName}
            </h3>
            <p className="max-w-[500px] text-start font-inter text-[14px] text-sm font-normal text-[#4B5563]">
              {truncateText(description, 400)}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="mx-auto flex w-full items-center justify-start">
        <div className="text-center text-[14px] font-normal leading-[16.94px] text-[#1F2937]">
          ${row.original.price}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "stockStatus",
    header: "Stock",
    cell: ({ row }) => {
      const stock = row.original.stockStatus;

      return (
        <div className="mx-auto flex items-center justify-start">
          <div
            className={cn(
              "rounded-[100px] px-[8px] py-[4px] text-center text-[12px] font-normal leading-[14.52px]",
              stock === "in stock"
                ? "bg-[#DCFCE7] text-[#16A34A]"
                : stock === "out of stock"
                  ? "bg-[#FFE2E2] text-[#EF4444]"
                  : "bg-[#FEF9C2] text-[#EAB308]",
            )}
          >
            {stock}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ row }) => <MerchantVisibilityChecker data={row.original} />,
  },
  {
    header: "Actions",
    cell: ({ row }) => <MerchantProductActions data={row.original} />,
  },
];
