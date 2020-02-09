import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
import Pagniation from "./pagination";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      currentPage: 1,
      pageSize: 4
    };
  }

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;
    const movies = [...allMovies].splice((currentPage-1) * pageSize,pageSize);
    return (
      <React.Fragment>
        <p>{this.getMovieTitleMessage()}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>{this.getMoviesList(movies)}</tbody>
        </table>
        <Pagniation
          itemCount={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }

  handlePageChange = page => {
    const {pageSize, movies: allMovies} = this.state;
    // const startIndex = (page - 1) * pageSize;
    // console.log("Start index", startIndex);
    // const movies = [...allMovies].splice(startIndex, pageSize);
    // console.log("Movie list - ", allMovies);
    this.setState({currentPage: page });
  };
  getMovieTitleMessage() {
    return this.state.movies.length === 0
      ? "No Movies Left in the stock"
      : `Movies remaining in the stock ${this.state.movies.length + 1}`;
  }

  getMoviesList(movies) {
    return movies.map(movie => {
      return (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like like={movie.like} onLike={() => this.handleLike(movie)} />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteMovie(movie._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].like = !movies[index].like;
    this.setState({ movies });
  };

  deleteMovie = id => {
    const { movies: moviesState } = this.state;
    const movies = [...moviesState];
    const index = movies.map(movie => movie._id).indexOf(id);
    movies.splice(index, 1);
    this.setState({ movies });
  };
} // End of component

export default Movies;
