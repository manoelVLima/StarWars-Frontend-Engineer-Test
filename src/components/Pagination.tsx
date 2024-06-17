import React from 'react'

interface IPaginationProps {
    handlePageChange: (page:number) => void;
    currentPage: number | string;
}

export default function Pagination({ handlePageChange, currentPage = 1 }: IPaginationProps) {
    return (
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => handlePageChange(+currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(+currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    )
  }