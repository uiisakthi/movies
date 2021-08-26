import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  items,
  onItemSelect,
  selectedItem,
  idField,
  nameField,
}) => {
  console.log("IdField:" + idField);
  console.log("nameField:" + nameField);
  const getClass = (itemId) =>
    itemId === selectedItem ? "list-group-item active" : "list-group-item";
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[idField]}
          onClick={() => onItemSelect(item[idField])}
          style={{ cursor: "pointer" }}
          className={getClass(item[idField])}
        >
          {item[nameField]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

ListGroup.defaultProps = {
  idField: "_id",
  nameField: "name",
};

export default ListGroup;
