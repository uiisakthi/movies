import React from "react";
import { range } from "../../utils/list.js";

const Paginate = ({ count, currentPage, itemsPerPage, onClick }) => {
  const pages = Math.ceil(count / itemsPerPage);
  const pageNumbers = range(pages);

  const getClass = (pageNumber) =>
    currentPage === pageNumber ? "page-item active" : "page-item";

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={getClass(pageNumber)}>
            <a
              className="page-link"
              href="#"
              onClick={() => onClick(pageNumber)}
            >
              {pageNumber + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
