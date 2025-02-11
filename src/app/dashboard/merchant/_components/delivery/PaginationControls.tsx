import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  getPaginationRange: () => (number | string)[];
}

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  getPaginationRange,
}: PaginationControlsProps) => (
  <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
    <span className="text-sm text-muted-foreground">
      Page {currentPage} of {totalPages}
    </span>

    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>

      {getPaginationRange().map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "ghost"}
            size="icon"
            className="h-8 w-8"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={`ellipsis-${index}`} className="px-2">
            ...
          </span>
        ),
      )}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  </div>
);

export default PaginationControls;
