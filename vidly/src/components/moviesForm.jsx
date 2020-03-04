import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MoviesForm extends Form {
  schema = {
    _id: Joi.string(),

    title: Joi.string()
      .required()
      .label("Title"),

      genreId: Joi.string()
      .required()
      .label("Genre"),

    numberInStock: Joi.number()
      .integer()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),

    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily rental rate")
  };
  genres;
  constructor() {
    super();
    this.genres = getGenres();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id === "new") return;
    const movie = getMovie(id);
    if(movie){
      console.log("Test dataaaa", movie);
      const {genre, ...dbMovie} = movie;
      const data = {...dbMovie, genreId: genre._id}
      this.setState({ data });
    }else {
      return this.props.history.replace("/not-found");
    }
  }

  render() {
    const { params } = this.props.match;
    const { data } = this.state;

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select
              className="form-control"
              id="genre"
              onChange={this.handleChange}
              name="genreId"
              value={data.genreId}
            >
              {this.genres.map(genre => (
                <option key={genre._id} value={genre._id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }

  doSubmit = () => {
    console.log("Movies Form submitted");
    const { onMovieSave } = this.props;

    // const { title, genre, numberInStock, dailyRentalRate, _id} = this.state.data;
    const movie = {
      ...this.state.data};
    saveMovie(movie);
    this.props.history.push("/movies");
  };
}

export default MoviesForm;
