"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface VeganPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // Optional: Number of sibling pages to show
}

export default function VeganPagination({
  totalPages,
  currentPage,
  onPageChange,
  siblingCount = 1,
}: VeganPaginationProps) {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const totalDisplayedPages = siblingCount * 2 + 3;
    const pages: (number | "...")[] = [];

    if (totalPages <= totalDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBoundary = Math.max(2, page - siblingCount);
      const rightBoundary = Math.min(totalPages - 1, page + siblingCount);

      pages.push(1);

      if (leftBoundary > 2) pages.push("...");

      for (let i = leftBoundary; i <= rightBoundary; i++) {
        pages.push(i);
      }

      if (rightBoundary < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((item, index) => (
      <Button
        key={index}
        onClick={() => typeof item === "number" && handlePageChange(item)}
        variant={item === page ? "default" : "outline"}
        size="icon"
        className={`mx-1 h-[24px] w-[24px] ${item === page ? "bg-[#1D3557] text-[12px] text-white" : ""}`}
        disabled={typeof item !== "number"}
      >
        {item}
      </Button>
    ));
  };

  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <Button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        variant="outline"
        className="h-[24px] w-[24px] p-2"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <Button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
        variant="outline"
        className="h-[24px] w-[24px] p-2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
