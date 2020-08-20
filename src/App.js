import React from "react"
import { BrowserRouter as BrowserRouter } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Routes from "./routes/main"
import NavBar from "./components/NavBar"

import "./styles/App.sass";

export default function Button() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </RecoilRoot>
  );
}
