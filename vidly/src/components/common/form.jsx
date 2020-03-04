import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
class Form extends Component {
  state = {
    data: {},
    error: {}
  };

  validateForm = () => {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    console.log('Form Errors', error);
    if (!error) return null;
    return error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});

    // console.log('Errorssss s', errors);
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    console.log('scehammmm', schema)
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const error = this.validateForm();
    console.log("Errorssss", error)
    this.setState({ error: error || {} });
    if (error) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = {
      ...this.state.data,
      [input.name]: input.value
    };
    this.setState({ data, error });
  };

  renderButton = label => {
    return (
      <button className="btn btn-primary" disabled={this.validateForm()}>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, error } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
      />
    );
  };
}

export default Form;
