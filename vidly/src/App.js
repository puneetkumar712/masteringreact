import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import MoviesDetails from "./components/moviesDetails";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MoviesDetails}></Route>
          <Route path="/movies" exact component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="" to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
