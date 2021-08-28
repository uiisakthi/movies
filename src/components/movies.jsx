import React, { Component } from "react";
import "../services/fakeMovieService";
import "../services/fakeGenreService";
import { pageSlice } from "../utils/list.js";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Table from "./common/table";
import Paginate from "./common/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageNumber: 0,
    selectedGenreId: "__all__",
  };

  sort = (movies, sortOrder) => {
    const order = sortOrder === "asc" ? 1 : -1;
    const sortedMovies = movies.sort(
      (movie1, movie2) => order * movie1.title.localeCompare(movie2.title)
    );
    return sortedMovies;
  };

  componentDidMount() {
    const allGenres = { _id: "__all__", name: "All Genres" };
    const sortOrder = "asc";
    const movies = this.sort(getMovies(), sortOrder);

    this.setState({
      movies,
      sortOrder,
      genres: [allGenres, ...getGenres()],
    });
  }

  handleLike = (id) => {
    const movies = this.state.movies.map((movie) => {
      if (movie._id !== id) return movie;
      const newMovie = { ...movie };
      newMovie.liked = !newMovie.liked;
      return newMovie;
    });

    this.setState({ movies });
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  handlePageClick = (pageNumber) => {
    this.setState({ pageNumber });
  };

  handleGenreSelection = (selectedGenreId) => {
    this.setState({ selectedGenreId });
  };

  handleSort = () => {
    const sortOrder = this.state.sortOrder === "asc" ? "desc" : "asc";
    const movies = this.sort(this.state.movies, sortOrder);
    this.setState({ movies, sortOrder });
  };

  render() {
    const { movies, genres, pageNumber, selectedGenreId, sortOrder } =
      this.state;
    const itemsPerPage = 5;

    const filteredMovies = movies.filter(
      (movie) =>
        selectedGenreId === "__all__" || movie.genre._id === selectedGenreId
    );
    const count = filteredMovies.length;
    const finalMovies = pageSlice(filteredMovies, itemsPerPage, pageNumber);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelection}
            selectedItem={selectedGenreId}
          />
        </div>
        <div className="col">
          <Table
            data={finalMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortOrder={sortOrder}
          />
          <Paginate
            count={count}
            currentPage={pageNumber}
            itemsPerPage={itemsPerPage}
            onClick={this.handlePageClick}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
