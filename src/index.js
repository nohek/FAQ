import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Categories } from "./components/Categorias/index";
import { Questions } from "./components/Questions/index";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Categories />
    <Questions />
  </React.StrictMode>,

  document.getElementById("root")
);
