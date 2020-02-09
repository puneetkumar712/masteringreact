import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 7 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.reset}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
    console.log("Handle delete called");
  };

  handleOperation = (counter,operation) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const value = operation.call(this, counters[index].value);
    counters[index].value = value;
    // ++counters[index].value;
    this.setState({ counters });
  }

  handleIncrement = counter => {
    this.handleOperation(counter,value => ++value)
  };
  
  handleDecrement = counter => {
    this.handleOperation(counter, value => --value)
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // --counters[index].value;
    // this.setState({ counters });
  };
  

  reset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
}

export default App;
