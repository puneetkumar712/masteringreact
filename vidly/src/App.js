import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import { Switch, Router, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
       <Movies></Movies>
      </main>
    </React.Fragment>
  );
}

export default App;
