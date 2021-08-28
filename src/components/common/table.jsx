import React, { Component } from "react";

import Like from "./like";
import Delete from "./delete";
import SortIcon from "./sortIcon";

class Table extends Component {
  render() {
    const { data, onLike, onDelete, onSort, sortOrder } = this.props;
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>
              Title&nbsp;
              <SortIcon sortOrder={sortOrder} onClick={onSort} />
            </th>
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
  }
}

export default Table;
