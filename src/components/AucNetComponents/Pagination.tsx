import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [inputPage, setInputPage] = useState<string>("");

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPage(value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = parseInt(inputPage);
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    }
  };

  const renderPagination = () => {
    const paginationItems = [];

    // Show the first page
    paginationItems.push(
      <button
        key={1}
        className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
          currentPage === 1 ? "bg-gray-300" : ""
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    // Show ellipsis if needed
    if (totalPages > 5) {
      if (currentPage > 3) {
        paginationItems.push(<span key="ellipsis-start" className="px-3">...</span>);
      }
    }

    // Show previous pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
            i === currentPage ? "bg-gray-300" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Show ellipsis if needed
    if (totalPages > 5) {
      if (currentPage < totalPages - 2) {
        paginationItems.push(<span key="ellipsis-end" className="px-3">...</span>);
      }
    }

    // Show the last page if needed
    if (totalPages > 1) {
      paginationItems.push(
        <button
          key={totalPages}
          className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
            currentPage === totalPages ? "bg-gray-300" : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Add input box at the end
    if (totalPages > 5) {
      paginationItems.push(
        <input
          key="page-input"
          type="number"
          min="1"
          max={totalPages}
          value={inputPage}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          placeholder="Go to page"
          className="border rounded-md p-1 w-20 text-center mx-3"
        />
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex items-center justify-center space-x-2 pb-8">
      {renderPagination()}
    </div>
  );
};

export default Pagination;
