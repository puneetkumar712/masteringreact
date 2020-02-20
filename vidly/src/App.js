import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notfound";
import MoviesForm from "./components/moviesForm";
import LoginForm from './components/loginForm';
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MoviesForm}></Route>
          <Route path="/movies" exact component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/login" exact component={LoginForm}></Route>
          <Route path="/register" exact component={RegisterForm}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="" to="/movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
