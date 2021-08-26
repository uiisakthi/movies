import React from "react";

const Like = ({ liked, onClick }) => {
  const className = liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      style={{ cursor: "pointer", color: "crimson" }}
      onClick={onClick}
      className={className}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
