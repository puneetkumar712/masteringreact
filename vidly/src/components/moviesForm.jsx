import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MoviesForm extends Form {
  schema = {
    title: Joi.string()
      .required()
      .label("Title"),

    genre: Joi.string()
      .required()
      .label("Genre"),

    stock: Joi.number()
      .integer()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),

    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily rental rate")
  };
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
              name="genre"
              value={data.genre}
            >
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
          {this.renderInput("stock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }

  doSubmit = () => {
    console.log("Movies Form submitted");
    const { onMovieSave } = this.props;

    const { title, genre, stock:numberInStock, rate:dailyRentalRate } = this.state.data;
    const movie = {
      _id: Date.now(),
      title,
      genre: { _id: Date.now(), name: genre },
      numberInStock,
      dailyRentalRate,
      publishDate: new Date().toISOString()
    };
    // onMovieSave(movie);
    this.props.history.push("/movies");
  };

  // handleSave = () => {
  //   this.props.history.push("/movies");
  // };
}

export default MoviesForm;
