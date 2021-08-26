import React from "react";

import Like from "./like";
import Delete from "./delete";

const Table = ({ data, onLike, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>In Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie._id)} />
            </td>
            <td>
              <Delete onClick={() => onDelete(movie._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
