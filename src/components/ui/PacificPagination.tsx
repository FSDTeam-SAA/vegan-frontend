import { cn } from "@/lib/utils"
import { MoveLeft, MoveRight } from "lucide-react"
import type React from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const PacificPagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, "...", totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages)
      }
    }
    return pages
  }

  const handlePageClick = (page: number | "...") => {
    if (page === "..." || page === currentPage) return
    onPageChange(page as number)
  }

  return (
    <div className="flex w-full items-center justify-between bg-[#F8F5F2] p-4">
      <div className="block md:hidden">
        <Button
          variant="outline"
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1)
            }
          }}
          disabled={currentPage === 1}
          className="gap-2"
        >
          <MoveLeft className="h-4 w-4" />
          <span className="hidden md:block">Previous</span>
        </Button>
      </div>
      <p className="font-normal text-[16px] leading-[19.2px] text-[#444444]">
        Page {currentPage} of {totalPages}
      </p>

      <div className="hidden md:block">
        <div className="flex items-center gap-2">
          <Pagination>
            <PaginationContent>
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => handlePageClick(page)}
                    className={cn(
                      "h-8 min-w-8 cursor-pointer rounded-[6px] border border-gray-200 py-[2px] px-[7.5px] text-sm font-normal leading-[20px]",
                      page === currentPage
                        ? "border border-[#1D3557] bg-white text-[#1D3557]"
                        : "bg-white text-[#98A2B3]",
                    )}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Button
            variant="outline"
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1)
              }
            }}
            disabled={currentPage === 1}
            className="gap-2"
          >
            <MoveLeft className="h-4 w-4" />
            Previous
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange(currentPage + 1)
            }
          }}
          disabled={currentPage === totalPages}
          className="gap-2"
        >
          <span className="hidden md:block">Next</span>
          <MoveRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default PacificPagination


