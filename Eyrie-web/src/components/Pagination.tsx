import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Generate page numbers for desktop view
  const getPageNumbers = () => {
    const pages: number[] = [];
    if (totalPages <= 5) {
      // Show all pages if totalPages <= 5
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first, last, and range around currentPage
      if (currentPage > 2) pages.push(1);
      if (currentPage > 3) pages.push(-1);

      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push(-1);
      if (currentPage < totalPages - 1) pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="bg-[#F2F2F2] mb-12">
      {/* Pagination */}
      <div className="flex items-center justify-center mt-7 text-sm">
        <div className="flex items-center space-x-2 bg-white shadow-md rounded-full px-2 py-2 overflow-x-auto md:overflow-visible">
          {/* Previous Button */}
          <button
            className="px-4 py-2 text-[#161616] rounded-full hover:bg-gray-100 whitespace-nowrap"
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Desktop View */}
          <div className="hidden md:flex items-center space-x-2">
            {pageNumbers.map((page, index) =>
              page === -1 ? (
                <span key={index} className="px-2 text-[#161616]">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  className={`px-4 py-2 ${
                    currentPage === page
                      ? "bg-[#FF4500] text-white rounded-xl"
                      : "text-[#161616] rounded-full hover:bg-gray-100"
                  }`}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* Mobile/Tablet View */}
          <div className="flex md:hidden items-center space-x-1">
            {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => {
              const page = currentPage + index - 1;
              if (page > 0 && page <= totalPages) {
                return (
                  <button
                    key={index}
                    className={`px-3 py-1 ${
                      currentPage === page
                        ? "bg-[#FF4500] text-white rounded-xl text-sm"
                        : "text-[#161616] rounded-full hover:bg-gray-100 text-sm"
                    }`}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </button>
                );
              }
              return null;
            })}
            {totalPages > 3 && (
              <span className="px-1 text-[#161616] text-sm">...</span>
            )}
          </div>

          {/* Next Button */}
          <button
            className="px-4 py-2 text-[#161616] rounded-full hover:bg-gray-100 whitespace-nowrap"
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}