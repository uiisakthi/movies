import React from "react";

const SortIcon = ({ sortOrder, onClick }) => {
  const className = sortOrder === "asc" ? "fa fa-sort-down" : "fa fa-sort-up";
  return (
    <i
      style={{ cursor: "pointer", color: "white" }}
      onClick={onClick}
      className={className}
    ></i>
  );
};

export default SortIcon;
