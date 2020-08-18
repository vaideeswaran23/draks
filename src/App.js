import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/main";
import NavBar from "./components/NavBar"

import "./App.sass";

export default function Button() {
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
}
