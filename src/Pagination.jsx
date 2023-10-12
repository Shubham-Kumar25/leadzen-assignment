import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Determine whether previous and next buttons should be disabled
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <nav className="mt-4 flex justify-center">
      <ul className="flex gap-4">
        <li className={`page-item ${isPreviousDisabled ? "disabled" : ""}`}>
          <button
            className={`page-link ${
              isPreviousDisabled ? "cursor-not-allowed" : ""
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={isPreviousDisabled}
          >
            <FaAngleLeft />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button
              className={`page-link ${
                number === currentPage ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li className={`page-item ${isNextDisabled ? "disabled" : ""}`}>
          <button
            className={`page-link ${
              isNextDisabled ? "cursor-not-allowed" : ""
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={isNextDisabled}
          >
            <FaAngleRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
