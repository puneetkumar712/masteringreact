import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagniation from "./common/pagination";
import Genre from "./genre";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  allGenres;
  constructor(props) {
    super(props);
    this.allGenres = { _id: 121212, name: "All Genres" };
    this.state = {
      movies: [],
      genres: [],
      selectedGenre: this.allGenres,
      sortColumn: {path: 'title', order: 'asc'},
      currentPage: 1,
      pageSize: 4,
    };
  }

  componentDidMount() {
    const genres = [this.allGenres, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      genres
    } = this.state;

    let filterMovies =
      selectedGenre && selectedGenre._id !== this.allGenres._id
        ? [...allMovies].filter(movie => movie.genre._id === selectedGenre._id)
        : [...allMovies];

    const sorted = this.sort(filterMovies, sortColumn);

    const pagedMovies = [...sorted].splice(
      (currentPage - 1) * pageSize,
      pageSize
    );

    return (
      <React.Fragment>
        <p>{this.getMovieTitleMessage(filterMovies)}</p>
        <div className="row">
          <div className="col-3">
            <Genre
              items={genres}
              selectedItem={selectedGenre}
              onSelectItem={this.handleGenreSelect}
            />
          </div>
          <div className="col-9">
            <MoviesTable
              movies={pagedMovies}
              sortColumn={sortColumn}
              onHandleLike={this.handleLike}
              onDeleteMovies={this.deleteMovie}
              onSort={this.sortMovie}
            />
          </div>
        </div>
        <Pagniation
          itemCount={filterMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handlePageChange = page => {
    // const { pageSize, movies: allMovies } = this.state;
    this.setState({ currentPage: page });
  };

  sort(filterMovies, sortColumn) {
    return [...filterMovies].sort((m1, m2) => {
      const data1 = this.getData(m1, sortColumn.path)
      const data2 = this.getData(m2, sortColumn.path)
      return sortColumn.order === 'asc' ?
               data1 > data2 ? 1 : -1
                  : data1 < data2 ? 1 : -1;
    });
  }

  getData = (item, column) => {
    const columns = column.split(".");
    return columns.reduce((acc, curr) => {
      return acc[curr];
    }, item);
  };

  getMovieTitleMessage(movies) {
    return movies.length === 0
      ? "No Movies Left in the stock"
      : `Movies remaining in the stock ${movies.length + 1}`;
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

  sortMovie = sortColumn => {
    this.setState({sortColumn})
  }
} // End of component

export default Movies;
