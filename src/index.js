import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.sass";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  rootElement
);
