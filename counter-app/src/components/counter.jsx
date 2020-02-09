import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getCounterClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={this.props.counter.value < 1}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getCounterClasses() {
    let classes = "badge m-2  badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
