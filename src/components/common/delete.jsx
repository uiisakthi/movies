import React from "react";

const Delete = ({ onClick }) => {
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className="fa fa-trash"
      aria-hidden="true"
    ></i>
  );
};

export default Delete;
