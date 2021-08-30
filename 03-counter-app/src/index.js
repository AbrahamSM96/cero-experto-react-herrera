import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import "./css/index.css";
const saludo = <h1>Hola Mundo</h1>;

const root = document.querySelector("#root");
ReactDOM.render(<PrimeraApp saludos="Hola perros" />, root);
